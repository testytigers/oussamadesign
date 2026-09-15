/**
 * Re-encodes an event's photos to WebP at two sizes:
 *   <slug>.webp        full-size, for the lightbox
 *   <slug>-thumb.webp  downscaled, for the mosaic grid
 *
 * Originals are archived to photos-source/ (not served) before public/ is
 * rebuilt, so this is safe to re-run after changing quality settings.
 * Run: node scripts/optimize-event-photos.mjs <event-slug>
 */
import sharp from 'sharp';
import { mkdir, copyFile, readdir, unlink, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { eventConfig } from './events.config.mjs';

const EVENT = process.argv[2];
if (!EVENT) throw new Error('Usage: node scripts/optimize-event-photos.mjs <event-slug>');
const { photos: PHOTOS } = eventConfig(EVENT);

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public/events', EVENT);
const ARCHIVE_DIR = path.join(ROOT, 'photos-source/events', EVENT);

const FULL_MAX = 1600;
const FULL_QUALITY = 80;
const THUMB_MAX = 900;
const THUMB_QUALITY = 72;

const kb = (n) => `${Math.round(n / 1024)}KB`;
const exists = (p) => stat(p).then(() => true, () => false);

await mkdir(ARCHIVE_DIR, { recursive: true });
await mkdir(PUBLIC_DIR, { recursive: true });

// 1. Archive every original, so public/ can always be rebuilt from scratch.
const archived = await readdir(ARCHIVE_DIR);
const sources = [];
for (const [slug, importFrom] of PHOTOS) {
  const existing = archived.find((f) => path.parse(f).name === slug);
  if (existing) {
    sources.push([slug, path.join(ARCHIVE_DIR, existing)]);
    continue;
  }
  if (!importFrom || !(await exists(importFrom))) {
    throw new Error(`No archived copy of "${slug}" and its import source is missing: ${importFrom || '(none set)'}`);
  }
  const dest = path.join(ARCHIVE_DIR, `${slug}${path.extname(importFrom)}`);
  await copyFile(importFrom, dest);
  sources.push([slug, dest]);
}

// 2. Drop the generated images currently in public/ — all regenerated below.
//    slides/ is a directory owned by build-event-slides.mjs, so leave it alone.
for (const f of await readdir(PUBLIC_DIR)) {
  if (f.endsWith('.webp')) await unlink(path.join(PUBLIC_DIR, f));
}

// 3. Encode.
let before = 0;
let after = 0;
let thumbBytes = 0;
const manifest = [];

for (const [slug, src] of sources) {
  const srcSize = (await stat(src)).size;
  before += srcSize;

  const full = await sharp(src)
    .rotate() // honour EXIF orientation before metadata is stripped
    .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: FULL_QUALITY })
    .toFile(path.join(PUBLIC_DIR, `${slug}.webp`));

  const thumb = await sharp(src)
    .rotate()
    .resize({ width: THUMB_MAX, height: THUMB_MAX, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(path.join(PUBLIC_DIR, `${slug}-thumb.webp`));

  after += full.size + thumb.size;
  thumbBytes += thumb.size;
  manifest.push({ slug, width: full.width, height: full.height });

  console.log(`${slug.padEnd(22)} ${String(full.width).padStart(4)}x${full.height}  ${kb(srcSize).padStart(6)} -> full ${kb(full.size).padStart(6)} + thumb ${kb(thumb.size).padStart(6)}`);
}

await writeFile(path.join(ARCHIVE_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

console.log(
  `\n${EVENT}: ${PHOTOS.length} photos   originals ${kb(before)} -> webp ${kb(after)} on disk (full + thumb)\n` +
    `Page load is thumbnails only: ${kb(thumbBytes)} (${Math.round((1 - thumbBytes / before) * 100)}% less than serving the originals).`,
);
