/**
 * Machine-readable digests of the case studies, for answer engines.
 *
 * Built from the same dictionaries the pages render, never written separately,
 * so the home page's JSON-LD and /llms-full.txt can only ever repeat what a
 * reader can verify on the case study itself.
 */
import { t, type Lang } from '../i18n';
import { caseStudies } from '../data/case-studies';

const ENTITIES: Record<string, string> = {
  '&amp;': '&', '&rsquo;': '’', '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”', '&nbsp;': ' ', '&quot;': '"',
};

/** Copy strings carry light inline HTML; digests are plain text. */
export const plain = (html: string) =>
  html.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, (e) => ENTITIES[e] ?? e).replace(/\s+/g, ' ').trim();

const LABELS = {
  en: { results: 'Key results', weights: 'Scoring model weights' },
  fr: { results: 'Résultats clés', weights: 'Pondération du modèle de scoring' },
} as const;

export interface StudyDigest {
  slug: string;
  path: string;
  title: string;
  description: string;
  role: string;
  abstract: string;
  keyResults: string[];
  /** "Key results" in the page's language. */
  resultsLabel: string;
  topics: string[];
  client: string;
  product?: { name: string; url: string };
}

type Block = { t: string; html?: string; head?: string[]; rows?: string[][] };
type Section = { label: string; blocks: Block[] };

export function studyDigests(lang: Lang): StudyDigest[] {
  const d = t(lang);
  const L = LABELS[lang];

  return caseStudies.map((study) => {
    const base = { resultsLabel: L.results, slug: study.slug, path: `/${study.slug}`, topics: study.topics, client: study.client, product: study.product };

    if (study.slug === 'wiggli-calendar-ux-case-study') {
      const c = d.caseStudy;
      return {
        ...base,
        title: plain(c.title),
        description: plain(c.metaDescription),
        role: plain(c.lede),
        abstract: [c.discovery.p1, c.results.p1, c.conclusion.p1].map(plain).join(' '),
        keyResults: c.results.rows.map((r) => plain(`${r.metric}: ${r.before} → ${r.after} (${r.impact})`)),
      };
    }

    // Block-based studies: the summary section is the abstract; the research
    // table gives the model, the results section's table gives the outcomes.
    const m = d.caseStudyContent[study.slug as keyof typeof d.caseStudyContent];
    const sections = m.sections as unknown as Section[];
    const at = (n: string) => sections.find((s) => s.label.startsWith(n));
    const firstTable = (s?: Section) => s?.blocks.find((b) => b.t === 'table');

    const summary = sections[0].blocks.filter((b) => b.t === 'p' || b.t === 'note').map((b) => plain(b.html ?? ''));
    const model = firstTable(at('02'));
    const outcome = firstTable(at('06'));

    return {
      ...base,
      title: plain(m.title),
      description: plain(m.metaDescription),
      role: plain(m.meta[0].value),
      abstract: summary.join(' '),
      keyResults: [
        ...(outcome?.rows ?? []).map((r) => `${plain(outcome!.head![1])}, ${plain(r[0])}: ${plain(r[1])}`),
        ...(model ? [`${L.weights}: ${model.rows!.map((r) => `${plain(r[0])} ${plain(r[1])}`).join(', ')}`] : []),
      ],
    };
  });
}
