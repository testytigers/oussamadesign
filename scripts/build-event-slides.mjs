/**
 * Renders an event's deck to WebP slides for the on-page slideshow:
 *   slide-01.webp        1600px wide, shown in the frame
 *   slide-01-thumb.webp   320px wide, shown in the filmstrip
 *
 * Needs poppler's pdftoppm (brew install poppler).
 * Run: node scripts/build-event-slides.mjs <event-slug>
 */
import sharp from 'sharp';
import { mkdir, readdir, stat, copyFile, writeFile, rm } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import os from 'node:os';
import { eventConfig } from './events.config.mjs';

const run = promisify(execFile);

const EVENT = process.argv[2];
if (!EVENT) throw new Error('Usage: node scripts/build-event-slides.mjs <event-slug>');
const { deckPdf } = eventConfig(EVENT);

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT_DIR = path.join(ROOT, 'public/events', EVENT, 'slides');
const ARCHIVE_DIR = path.join(ROOT, 'photos-source/events', EVENT);
const ARCHIVED_PDF = path.join(ARCHIVE_DIR, 'deck.pdf');
const TMP = path.join(os.tmpdir(), `slides-${EVENT}`);

const FULL_WIDTH = 1600;
const FULL_QUALITY = 82;
const THUMB_WIDTH = 320;
const THUMB_QUALITY = 70;

const kb = (n) => `${Math.round(n / 1024)}KB`;
const exists = (p) => stat(p).then(() => true, () => false);

await mkdir(ARCHIVE_DIR, { recursive: true });

// Keep the deck alongside the photo originals so this is reproducible.
if (!(await exists(ARCHIVED_PDF))) {
  if (!(await exists(deckPdf))) {
    throw new Error(`No archived deck at ${ARCHIVED_PDF} and nothing to import from ${deckPdf}`);
  }
  await copyFile(deckPdf, ARCHIVED_PDF);
}

await rm(TMP, { recursive: true, force: true });
await mkdir(TMP, { recursive: true });
await rm(OUT_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });

// 1. PDF pages -> PNG at the target width.
await run('pdftoppm', ['-png', '-scale-to-x', String(FULL_WIDTH), '-scale-to-y', '-1', ARCHIVED_PDF, path.join(TMP, 'page')]);

const pages = (await readdir(TMP)).filter((f) => f.endsWith('.png')).sort();
if (!pages.length) throw new Error('pdftoppm produced no pages');

// 2. PNG -> WebP, two sizes.
let pngBytes = 0;
let webpBytes = 0;
let thumbBytes = 0;
const manifest = [];

for (const [i, page] of pages.entries()) {
  const src = path.join(TMP, page);
  const n = String(i + 1).padStart(2, '0');
  pngBytes += (await stat(src)).size;

  const full = await sharp(src)
    .resize({ width: FULL_WIDTH, withoutEnlargement: true })
    .webp({ quality: FULL_QUALITY })
    .toFile(path.join(OUT_DIR, `slide-${n}.webp`));

  const thumb = await sharp(src)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(path.join(OUT_DIR, `slide-${n}-thumb.webp`));

  webpBytes += full.size;
  thumbBytes += thumb.size;
  manifest.push({ n, width: full.width, height: full.height });
}

await rm(TMP, { recursive: true, force: true });
await writeFile(path.join(ARCHIVE_DIR, 'slides-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

console.log(
  `${EVENT}: ${pages.length} slides   rendered PNG ${kb(pngBytes)} -> WebP ${kb(webpBytes)}\n` +
    `Filmstrip (loads up front): ${kb(thumbBytes)}. Full slides load one at a time.`,
);
