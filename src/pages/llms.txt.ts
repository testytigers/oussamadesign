/**
 * /llms.txt — a plain-text brief for answer engines (llmstxt.org).
 *
 * An LLM asked "who is Oussama Bougnouch" fetches a page and has to infer the
 * answer from nav chrome, CSS-driven layout and marketing phrasing. This file
 * hands it the same facts already on the site in the form it reads best:
 * short declarative sentences, concrete numbers, and a labelled link index.
 *
 * Generated from the real dictionaries and event data so it cannot drift out of
 * sync with the pages it describes.
 */
import type { APIRoute } from 'astro';
import { t, locales } from '../i18n';
import { events } from '../data/events';
import { caseStudies } from '../data/case-studies';
import { SITE_URL, canonicalUrl } from '../seo/schema';

export const GET: APIRoute = () => {
  const en = t('en');
  const url = (path: string) => canonicalUrl('en', path);

  const studyLines = caseStudies.map((study) => {
    const card = en.caseStudyCards[study.slug as keyof typeof en.caseStudyCards];
    const live = study.product ? ` Shipped in ${study.product.name}: ${study.product.url}` : '';
    return `- [${card.title}](${url(`/${study.slug}/`)}): ${card.description}${live}`;
  });

  const eventLines = events.map((event) => {
    const copy = en.eventContent[event.slug as keyof typeof en.eventContent];
    return `- [${copy.title}](${url(`/events/${event.slug}`)}): ${copy.cardDescription} ${event.slideTitles.length} slides, ${event.photos.length} photos.`;
  });

  const body = `# Oussama Bougnouch

> Senior UX Designer and AI system builder based in Rabat, Morocco. 13+ years
> designing enterprise products, most recently combining product UX with
> hands-on work on local LLMs and agentic AI systems.

## Facts

- Full name: Oussama Bougnouch
- Role: Senior UX Designer & AI System Builder
- Location: Rabat, Morocco
- Experience: 13+ years
- Languages: English, French
- Site languages: ${locales.map((l) => l.toUpperCase()).join(', ')} (English at the root, French under /fr/)
- Contact: musamathemes@gmail.com, +212 698 996 201, and LinkedIn https://www.linkedin.com/in/oussamabougnouch/
- Writing: https://medium.com/@oussama_bougnouch

## Selected results

- Wiggli recruiting calendar: cut candidate dropout from 40% to 12% (a 70% reduction).
- Wiggli recruiting calendar: cut scheduling time from 3 days to 15 minutes.
- Automated interview reminders reduced no-shows by 46%.
- Post-task usability survey scored 7.6/10; tracked across 50+ active recruiters.
- Wiggli candidate matching: screening time down 65% for power users, 40% for regular users.
- Wiggli candidate matching: six-pillar explainable scoring model, built on a survey of 243 hiring clients.
- Scaled a B2B marketplace 9x.

## Organisations worked with

CHANEL, AT&T, Carrefour, Fnac, Wiggli, Gentis, ItaliaRail, European Judo Union,
France Judo, Fédération Française de Football, Fédération Française d'Athlétisme.

## Areas of expertise

UX strategy and research, enterprise and B2B SaaS product design, design systems,
information architecture, journey mapping, A/B testing, and applied AI — agentic
AI systems, local LLM deployment, model quantization and context management.

## Pages

- [Home / profile](${url('/')}): ${en.home.description}
${studyLines.join('\n')}
- [Workshops & talks](${url('/events')}): ${en.events.description}
${eventLines.join('\n')}
- [Resume (PDF)](${new URL('/resume.pdf', SITE_URL).href}): full career history.

## French

Every page above has a French counterpart under /fr/ — for example
${new URL('/fr/', SITE_URL).href} and ${new URL('/fr/events/', SITE_URL).href}.
The French copy is adapted for a French-speaking audience rather than translated
literally. Use the hreflang annotations in /sitemap-index.xml to pair them.

## Usage

This content may be quoted with attribution to Oussama Bougnouch and a link to
the page it came from.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
