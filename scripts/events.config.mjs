import os from 'node:os';

const DL = `${os.homedir()}/Downloads`;

/**
 * Per-event build inputs for scripts/optimize-event-photos.mjs and
 * scripts/build-event-slides.mjs.
 *
 * photos:  [slug, importFrom] in gallery order. Sources are only read the
 *          first time; afterwards the archived copy in photos-source/ wins,
 *          so these paths can go stale without breaking a rebuild.
 * deckPdf: the presentation to render into slides.
 */
export const events = {
  'introduction-to-agentic-ai': {
    deckPdf: `${DL}/part 2.pdf`,
    photos: [
      ['group-photo', `${DL}/photo_2026-09-15 00.54.12.jpeg`],
      ['setup', `${DL}/photo_2026-09-15 00.54.45.jpeg`],
      ['whats-the-difference', ''],
      ['explaining-agents', `${DL}/photo_2026-09-15 00.53.38.jpeg`],
      ['full-room', `${DL}/photo_2026-09-15 00.53.24.jpeg`],
      ['live-presentation', ''],
      ['walkthrough', `${DL}/photo_2026-09-15 00.53.57.jpeg`],
      ['hermes-architecture', ''],
      ['attendees', `${DL}/photo_2026-09-15 00.53.31.jpeg`],
      ['audience-engagement', ''],
      ['open-floor', `${DL}/photo_2026-09-15 00.53.41.jpeg`],
      ['interactive-session', ''],
      ['qa-session', `${DL}/photo_2026-09-15 00.54.17.jpeg`],
      ['discussion', `${DL}/photo_2026-09-15 00.54.04.jpeg`],
      ['llm-vs-agents', ''],
      ['from-the-back', ''],
      ['after-session', `${DL}/photo_2026-09-15 00.54.00.jpeg`],
      ['quick-recap', ''],
      ['venue', ''],
    ],
  },

  'beneath-the-skull-of-ai': {
    deckPdf: `${DL}/part 1.pdf`,
    photos: [
      ['opening-the-room', `${DL}/photo_2026-09-15 12.07.38.jpeg`],
      ['medium-models', `${DL}/photo_2026-09-15 12.07.35.jpeg`],
      ['mixture-of-experts', `${DL}/photo_2026-09-15 12.07.22.jpeg`],
      ['the-shrink-ray', `${DL}/photo_2026-09-15 12.07.29.jpeg`],
      ['precision-scaling', `${DL}/photo_2026-09-15 12.07.46.jpeg`],
      ['the-destruction-zone', `${DL}/photo_2026-09-15 12.07.32.jpeg`],
      ['quantized-versions', `${DL}/photo_2026-09-15 12.07.41.jpeg`],
      ['kv-cache', `${DL}/photo_2026-09-15 12.07.44.jpeg`],
      ['open-discussion', `${DL}/photo_2026-09-15 12.07.26.jpeg`],
    ],
  },
};

export function eventConfig(slug) {
  const config = events[slug];
  if (!config) {
    throw new Error(`Unknown event "${slug}". Known: ${Object.keys(events).join(', ')}`);
  }
  return config;
}
