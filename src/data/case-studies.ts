/**
 * Language-neutral case-study registry, plus the block vocabulary the
 * long-form studies are written in.
 *
 * The calendar study predates this model and still renders from its own
 * bespoke component (CaseStudyPage.astro) — its shape is fixed prose and it
 * works. Anything written after it uses blocks, because real case studies
 * carry tables, formulas and diagrams that a fixed shape cannot express.
 * Anything a translator touches lives in src/i18n/case-study*.ts.
 */

export type Align = 'left' | 'right' | 'center';

export type Block =
  /** Paragraph. `html` so <strong>/<em>/<a> survive without a markdown dep. */
  | { t: 'p'; html: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  /** Preformatted. Kept for anything genuinely code-shaped. */
  | { t: 'code'; body: string }
  /**
   * A set of equations, rendered as typeset maths rather than a code block.
   * `expr` stays plain text so translators never touch markup — the renderer
   * tokenises it and styles numbers, operators and identifiers itself.
   * `legend` lines take the form "Label: a 1.0, b 0.8" and become lookup rows.
   */
  | { t: 'formula'; items: { out: string; expr: string; legend?: string[] }[] }
  /**
   * A process diagram. One lane renders as a single chain, two render side by
   * side. `tone` styles the terminal node — the same shape describes both the
   * broken process and the one that replaced it.
   */
  | { t: 'flow'; tone?: 'problem' | 'solution'; lanes: { title?: string; steps: string[] }[] }
  | { t: 'table'; head: string[]; rows: string[][]; align?: Align[] }
  /** Pulls a figure out of the study's `figures` map by key. */
  | { t: 'figure'; key: string }
  /** Set-apart callout for a finding that carries the section. */
  | { t: 'note'; html: string };

export interface CaseStudySection {
  /** e.g. "01 — The problem". Rendered as the section micro-label. */
  label: string;
  heading: string;
  blocks: Block[];
}

export interface CaseStudyFigure {
  /**
   * Absent until the screen exists. A figure with neither `src` nor `video`
   * renders as a broken image carrying its alt text, so the page reads
   * complete and dropping the real asset in later is a one-line change here.
   */
  src?: string;
  /** Silent screen recording, looped in place of a still. */
  video?: { src: string; poster: string; width: number; height: number };
  alt: string;
  caption: string;
}

export interface CaseStudyData {
  slug: string;
  /**
   * Card image for the home-page listing. A `{lang}` token is substituted at
   * render time, for studies whose card art carries copy.
   */
  cardImage: string;
  /** Organisation the work was done for — feeds `mentions` in schema. */
  client: string;
  /** The live product the work shipped in. Linked from the page as evidence. */
  product?: { name: string; url: string };
  /** Subjects, for `about`/`keywords` in structured data. */
  topics: string[];
}

const WIGGLI_ATS = {
  name: 'Wiggli Applicant Tracking System',
  url: 'https://www.wiggli.io/platform/applicant-tracking-system',
};

export const caseStudies: CaseStudyData[] = [
  {
    slug: 'wiggli-candidate-matching-case-study',
    /* The product's own candidate cards, scores included — the one screen that
       still reads at listing size. It replaced a typeset tile that stood in
       while no screen was cleared, and a crop of the sourcing recording, whose
       dense table turned to noise in a 459px slot. Language-neutral, so the
       `{lang}` token goes unused here. */
    cardImage: '/images/work/matching-candidate-card.webp',
    client: 'Wiggli',
    /* The shipped product this study describes — cited in the page and in
       structured data as evidence the work is real. */
    product: WIGGLI_ATS,
    topics: [
      'Candidate Matching',
      'Applicant Tracking Systems',
      'Explainable Scoring',
      'Recruitment Technology',
      'Algorithmic Trust',
      'B2B SaaS',
      'UX Research',
    ],
  },
  {
    slug: 'wiggli-calendar-ux-case-study',
    /* The scheduling panel with "Find best Times" — the study's own subject,
       and a 1.61 ratio that sits in the listing's 16:10 media slot almost
       uncropped. Language-neutral, so the `{lang}` token goes unused. */
    cardImage: '/images/work/calendar-scheduling-card.webp',
    client: 'Wiggli',
    /* The shipped product this study describes — cited in the page and in
       structured data as evidence the work is real. */
    product: WIGGLI_ATS,
    topics: [
      'UX Design',
      'Recruitment Software',
      'Calendar Scheduling',
      'B2B SaaS',
      'Design Systems',
    ],
  },
];

export const caseStudyBySlug = (slug: string): CaseStudyData => {
  const found = caseStudies.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown case study slug: ${slug}`);
  return found;
};
