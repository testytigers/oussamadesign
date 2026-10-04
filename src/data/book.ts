/**
 * The book — language-neutral facts. Copy a translator touches lives in
 * src/i18n/{en,fr}.ts under `book`. Content mirrors the book's own landing
 * page, which is where readers get it (free PDF, by email).
 */
export const book = {
  title: 'Signal vs Noise',
  url: 'https://uxintoax.com/noise-vs-signal-ai-book/',
  /** The signup form on the landing page. */
  getUrl: 'https://uxintoax.com/noise-vs-signal-ai-book/#get',
  cover: { src: '/images/book/signal-vs-noise-cover.webp', width: 433, height: 650 },
  pages: 37,
  inLanguage: 'en',
  /** From the landing page. Used by the JSON-LD and the llms.txt files. */
  description:
    'A free PDF book for UX and product designers: eleven short chapters on what AI is really doing under the hood, where it breaks, and how to put it to work, written by a designer who ships with it. About an hour to read.',
  audience: 'UX and product designers who want to understand how AI works rather than memorise prompts',
  chapters: [
    'It just predicts the next word',
    'Why it lies to your face',
    'What it can actually see',
    'Garbage in, garbage out',
    "Listening is a skill (and AI doesn't have it)",
    "What it's great at, what it's terrible at",
    'Pointing AI at the design itself',
    'The agent that lied to me',
    'Two architects in the desert',
    'Why you would want your own setup',
    'Running local AI: the practical guide',
  ],
};

/** The blog the book comes from, on the same site. */
export const blog = {
  name: 'UXINTOAX',
  url: 'https://uxintoax.com/',
  tagline: 'UX & AI, without the noise.',
  description:
    'A blog by Oussama Bougnouch with one practical idea a week for UX and product designers: what AI is really doing, where it breaks, and the habits that make it useful in real work. Covers how models work, hallucination, context windows, running AI locally and design ethics.',
  inLanguage: 'en',
};
