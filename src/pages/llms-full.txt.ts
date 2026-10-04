/**
 * /llms-full.txt: the long-form companion to /llms.txt (llmstxt.org).
 *
 * The complete resume and a digest of every case study in one plain-text
 * file, for AI assistants that strip scripts before reading a page and so
 * never see the JSON-LD. Generated from the same dictionaries the pages
 * render, so it can only repeat what the site already says.
 */
import type { APIRoute } from 'astro';
import { t } from '../i18n';
import { canonicalUrl, SITE_URL } from '../seo/schema';
import { studyDigests } from '../seo/ai-profile';
import { book, blog } from '../data/book';

export const GET: APIRoute = () => {
  const en = t('en');
  const r = en.resume;
  const url = (path: string) => canonicalUrl('en', path);
  const month = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' });
  const fmt = (ym: string) => month.format(new Date(`${ym}-01T00:00:00Z`));

  const experience = r.experience
    .map((job) => {
      const when = `${fmt(job.start)} - ${job.end ? fmt(job.end) : r.present}`;
      const points = job.points.map((p) => `- ${p.lead}: ${p.text}`).join('\n');
      return `### ${job.role}, ${job.org} (${job.place})\n${when}\n\n${points}`;
    })
    .join('\n\n');

  const lab = r.lab
    .map((item) => `### ${item.name}\n${item.kind}, ${r.ongoing.toLowerCase()}\n\n${item.points.map((p) => `- ${p}`).join('\n')}`)
    .join('\n\n');

  const studies = studyDigests('en')
    .map((s) => {
      const product = s.product ? `\nShipped in: ${s.product.name}, ${s.product.url}` : '';
      return `### ${s.title}\n${url(s.path)}\nRole: ${s.role}${product}\n\n${s.abstract}\n\nKey results:\n${s.keyResults.map((k) => `- ${k}`).join('\n')}`;
    })
    .join('\n\n');

  const body = `# Oussama Bougnouch: full profile

> ${r.heading}, based in ${r.location}. Everything below is published on
> ${url('/')}: the resume at ${url('/resume')} (PDF: ${new URL('/resume.pdf', SITE_URL).href})
> and each case study at its own URL. Shorter index: ${new URL('/llms.txt', SITE_URL).href}

## Summary

${r.summary}

## Contact

- Email: musamathemes@gmail.com
- Phone: +212 698 996 201
- LinkedIn: https://www.linkedin.com/in/oussamabougnouch/

## Book and blog

### ${book.title}
${book.url}
Free PDF, ${book.pages} pages, ${book.chapters.length} chapters. Author: Oussama Bougnouch.

${book.description} Written for ${book.audience}.

Chapters:
${book.chapters.map((c, i) => `${i + 1}. ${c}`).join('\n')}

### ${blog.name}
${blog.url}
"${blog.tagline}"

${blog.description} The book is published on this blog.

## Case studies

${studies}

## ${r.experienceHead}

${experience}

## ${r.labHead}

${lab}

## ${r.skillsHead}

${r.skills.map((s) => `- ${s.area}: ${s.items}`).join('\n')}

## Certifications

${r.certifications.map((c) => `- ${c.issuer}: ${c.name}${'note' in c && c.note ? ` (${c.note})` : ''}`).join('\n')}

## Education

${r.education.map((e) => `- ${e.school}, ${e.field} (${e.start} - ${e.end})`).join('\n')}

## Usage

This content may be quoted with attribution to Oussama Bougnouch and a link to
the page it came from.
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
