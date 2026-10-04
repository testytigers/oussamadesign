/**
 * Structured data for the whole site.
 *
 * Every page emits ONE JSON-LD `@graph` whose nodes share stable `@id`s, so a
 * search or answer engine resolves a single Person entity across all 10 pages
 * instead of a fresh anonymous one per page. That shared identity is what lets
 * an engine attribute the case study, the workshops and the profile to the
 * same human — which is the difference between being indexed and being cited.
 *
 * Every claim in here is already stated publicly on the site. Nothing is
 * asserted that a reader could not verify on the page itself.
 */
import { localizePath, type Lang } from '../i18n';
import type { resumeEn } from '../i18n/resume.en';
import type { StudyDigest } from './ai-profile';

type Resume = typeof resumeEn;

export const SITE_URL = 'https://oussamadesign.github.io';
export const abs = (path: string) => new URL(path, SITE_URL).href;

/**
 * The canonical form of a page URL.
 *
 * Every route builds to `<path>/index.html`, so the URL actually served ends in
 * a slash — and that is the form @astrojs/sitemap emits. Canonical, hreflang,
 * the sitemap and every schema `@id` have to agree on it, or `/events` and
 * `/events/` get crawled as two competing URLs.
 */
export const canonicalUrl = (lang: Lang, path: string) => {
  const p = localizePath(lang, path);
  return new URL(p.endsWith('/') ? p : `${p}/`, SITE_URL).href;
};

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const pageId = (lang: Lang, path: string) => `${canonicalUrl(lang, path)}#webpage`;

const LINKEDIN = 'https://www.linkedin.com/in/oussamabougnouch/';
const MEDIUM = 'https://medium.com/@oussama_bougnouch';

/* Lifted from the copy that already ships on the page, so the schema and the
   visible text never drift apart — engines penalise the mismatch. */
const profile = {
  en: {
    jobTitle: 'Principal UX Designer & Product Architect',
    description:
      'Principal UX Designer and Product Architect based in Rabat, Morocco, with 15+ years across B2B SaaS, marketplaces and enterprise products. Scaled marketplace orders 9x at Sobrus and cut candidate dropout from 40% to 12% at Gentis (Wiggli); has worked with CHANEL, AT&T, Fnac and Carrefour.',
    occupation: 'UX Designer',
    country: 'Morocco',
  },
  fr: {
    jobTitle: 'Principal UX Designer & architecte produit',
    description:
      "Principal UX Designer et architecte produit basé à Rabat, au Maroc, avec plus de 15 ans en SaaS B2B, marketplaces et produits d'entreprise. A multiplié par 9 les commandes de la marketplace chez Sobrus et ramené l'abandon des candidats de 40 % à 12 % chez Gentis (Wiggli) ; a travaillé avec CHANEL, AT&T, Fnac et Carrefour.",
    occupation: 'UX Designer',
    country: 'Maroc',
  },
} as const;

/* Topics the site actually demonstrates — the workshops cover the AI half,
   the case study the UX half. Keep this honest: `knowsAbout` is a claim. */
const KNOWS_ABOUT = [
  'User Experience Design',
  'Product Design',
  'UX Research',
  'Design Systems',
  'Enterprise UX',
  'B2B Marketplaces',
  'SaaS Product Strategy',
  'Information Architecture',
  'Journey Mapping',
  'A/B Testing',
  'Agentic AI',
  'AI Agents',
  'Large Language Models',
  'Local LLM Deployment',
  'Model Quantization',
  'Conversational AI Design',
  'Model Context Protocol (MCP)',
  'Design Systems Architecture',
  'Product Strategy',
  'Conversion Rate Optimization',
];

/* Named on the home page logo strip. Declaring them as real Organization
   nodes gives an answer engine an unambiguous "worked with" entity list. */
const CLIENTS = [
  { name: 'CHANEL', sameAs: 'https://www.chanel.com' },
  { name: 'AT&T', sameAs: 'https://www.att.com' },
  { name: 'Carrefour', sameAs: 'https://www.carrefour.com' },
  { name: 'Fnac', sameAs: 'https://www.fnac.com' },
  { name: 'Wiggli', sameAs: 'https://www.wiggli.io' },
  { name: 'Gentis', sameAs: 'https://www.gentis.com' },
  { name: 'ItaliaRail', sameAs: 'https://www.italiarail.com' },
  { name: 'European Judo Union', sameAs: 'https://www.eju.net' },
  { name: 'France Judo', sameAs: 'https://www.francejudo.fr' },
  { name: 'Fédération Française de Football', sameAs: 'https://www.fff.fr' },
  { name: "Fédération Française d'Athlétisme", sameAs: 'https://www.athle.fr' },
];

const clientNodes = () =>
  CLIENTS.map((c) => ({
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
    name: c.name,
    sameAs: c.sameAs,
  }));

const clientRefs = () => clientNodes().map((n) => ({ '@id': n['@id'] }));

export function personNode(lang: Lang) {
  const p = profile[lang];
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Oussama Bougnouch',
    givenName: 'Oussama',
    familyName: 'Bougnouch',
    url: canonicalUrl(lang, '/'),
    mainEntityOfPage: canonicalUrl(lang, '/'),
    /* Best headshot in the repo at 256x256. Google prefers a Person image of
       at least 1200px on its longest side for knowledge-panel use — swap this
       for a high-res portrait when one exists. */
    image: {
      '@type': 'ImageObject',
      url: abs('/images/logo-photo.jpg'),
      width: 256,
      height: 256,
      caption: 'Oussama Bougnouch',
    },
    jobTitle: p.jobTitle,
    description: p.description,
    disambiguatingDescription: p.jobTitle,
    email: 'mailto:musamathemes@gmail.com',
    telephone: '+212698996201',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rabat',
      addressCountry: 'MA',
    },
    /* Explicit coordinates + areaServed are the local-SEO half: they let
       "UX designer in Rabat / Morocco" resolve to this entity. */
    homeLocation: {
      '@type': 'Place',
      name: `Rabat, ${p.country}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Rabat', addressCountry: 'MA' },
      geo: { '@type': 'GeoCoordinates', latitude: 34.0209, longitude: -6.8416 },
    },
    knowsLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'French', alternateName: 'fr' },
    ],
    knowsAbout: KNOWS_ABOUT,
    hasOccupation: {
      '@type': 'Occupation',
      name: p.occupation,
      occupationLocation: { '@type': 'City', name: 'Rabat' },
      skills: KNOWS_ABOUT.join(', '),
    },
    sameAs: [LINKEDIN, MEDIUM],
  };
}

export function websiteNode(lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: 'Oussama Bougnouch',
    description: profile[lang].description,
    inLanguage: lang === 'fr' ? 'fr-FR' : 'en',
    publisher: { '@id': PERSON_ID },
    author: { '@id': PERSON_ID },
    copyrightHolder: { '@id': PERSON_ID },
  };
}

function breadcrumb(lang: Lang, trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl(lang, trail[trail.length - 1].path)}#breadcrumb`,
    itemListElement: trail.map((step, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: step.name,
      item: canonicalUrl(lang, step.path),
    })),
  };
}

interface PageBase {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  image?: string;
}

/** Nodes every page carries, whatever its type. */
function common(lang: Lang) {
  return [personNode(lang), websiteNode(lang)];
}

function webPage(base: PageBase, type: string, extra: Record<string, unknown> = {}) {
  return {
    '@type': type,
    '@id': pageId(base.lang, base.path),
    url: canonicalUrl(base.lang, base.path),
    name: base.title,
    description: base.description,
    inLanguage: base.lang === 'fr' ? 'fr-FR' : 'en',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    primaryImageOfPage: base.image ? { '@type': 'ImageObject', url: abs(base.image) } : undefined,
    ...extra,
  };
}

/**
 * The whole resume as Person properties, so an engine reading any page that
 * carries it gets the career, not just the headline. Schema.org's Role
 * pattern: each employer sits inside an EmployeeRole that holds the title,
 * the dates and what was done there. Everything here is on /resume verbatim.
 */
function careerFields(r: Resume) {
  const did = (job: Resume['experience'][number]) => job.points.map((p) => `${p.lead}: ${p.text}`).join(' ');
  const [current, ...past] = r.experience;
  return {
    description: r.summary,
    worksFor: {
      '@type': 'EmployeeRole',
      roleName: current.role,
      startDate: current.start,
      description: did(current),
      worksFor: { '@type': 'Organization', name: current.org, location: current.place },
    },
    alumniOf: [
      ...past.map((job) => ({
        '@type': 'EmployeeRole',
        roleName: job.role,
        startDate: job.start,
        endDate: job.end ?? undefined,
        description: did(job),
        alumniOf: { '@type': 'Organization', name: job.org, location: job.place },
      })),
      ...r.education.map((e) => ({
        '@type': 'OrganizationRole',
        roleName: e.field,
        startDate: e.start,
        endDate: e.end,
        alumniOf: { '@type': 'EducationalOrganization', name: e.school },
      })),
    ],
    hasCredential: r.certifications.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      description: 'note' in c ? c.note : undefined,
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: c.issuer },
    })),
    skills: r.skills.map((sk) => `${sk.area}: ${sk.items}`),
  };
}

/** The independent AI projects from the resume, as works by the Person. */
const labNodes = (r: Resume) =>
  r.lab.map((item) => ({
    '@type': 'CreativeWork',
    '@id': `${SITE_URL}/#lab-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: item.name,
    genre: item.kind,
    description: item.points.join(' '),
    creativeWorkStatus: r.ongoing,
    creator: { '@id': PERSON_ID },
  }));

/** The resume PDF, so engines can pair the pages with the download. */
const resumePdf = () => ({
  '@type': 'DigitalDocument',
  '@id': `${SITE_URL}/resume.pdf#document`,
  name: 'Oussama Bougnouch, resume (PDF)',
  url: abs('/resume.pdf'),
  encodingFormat: 'application/pdf',
  inLanguage: 'en',
  author: { '@id': PERSON_ID },
});

/** Home — a ProfilePage, the type answer engines use for "who is X". */
export function homeGraph(
  base: PageBase,
  opts: {
    book?: { title: string; url: string; cover: { src: string }; pages: number; inLanguage: string };
    /** The resume, folded into the Person node. */
    resume?: Resume;
    /** Case study digests (src/seo/ai-profile.ts), one Article each. */
    studies?: StudyDigest[];
  } = {}
) {
  const { book, resume, studies = [] } = opts;
  /* The book as a free e-book by the same Person — authorship an answer engine
     can attribute, pointing at the page where it is actually distributed. */
  const bookNode = book
    ? {
        '@type': 'Book',
        '@id': `${book.url}#book`,
        name: book.title,
        url: book.url,
        image: abs(book.cover.src),
        author: { '@id': PERSON_ID },
        bookFormat: 'https://schema.org/EBook',
        numberOfPages: book.pages,
        inLanguage: book.inLanguage,
        isAccessibleForFree: true,
      }
    : null;

  /* Each case study under the same @id its own page gives its Article, so the
     digest here and the full study resolve to one entity. The abstract and
     key results are lifted from the study's own text. */
  const studyNodes = studies.map((st) => ({
    '@type': 'Article',
    '@id': `${canonicalUrl(base.lang, st.path)}#article`,
    headline: st.title,
    url: canonicalUrl(base.lang, st.path),
    description: st.description,
    abstract: `${st.abstract} ${st.resultsLabel}: ${st.keyResults.join('; ')}.`,
    inLanguage: base.lang === 'fr' ? 'fr-FR' : 'en',
    author: { '@id': PERSON_ID },
    creditText: st.role,
    about: st.topics,
    keywords: st.topics.join(', '),
    mentions: [
      { '@type': 'Organization', name: st.client },
      ...(st.product ? [{ '@type': 'SoftwareApplication', name: st.product.name, url: st.product.url }] : []),
    ],
    ...(st.product ? { citation: st.product.url } : {}),
  }));

  const labs = resume ? labNodes(resume) : [];
  const person = resume ? { ...personNode(base.lang), ...careerFields(resume) } : personNode(base.lang);

  return graph([
    person,
    websiteNode(base.lang),
    ...clientNodes(),
    ...(bookNode ? [bookNode] : []),
    ...studyNodes,
    ...labs,
    ...(resume ? [resumePdf()] : []),
    webPage(base, 'ProfilePage', {
      mainEntity: { '@id': PERSON_ID },
      hasPart: studyNodes.map((n) => ({ '@id': n['@id'] })),
      mentions: [
        ...clientRefs(),
        ...(bookNode ? [{ '@id': bookNode['@id'] }] : []),
        ...labs.map((n) => ({ '@id': n['@id'] })),
      ],
      ...(resume ? { associatedMedia: { '@id': `${SITE_URL}/resume.pdf#document` } } : {}),
    }),
  ]);
}

/** Events index — a list of the talks, so the set is crawlable as one thing. */
export function eventsGraph(base: PageBase, items: { name: string; path: string }[], homeName: string) {
  return graph([
    ...common(base.lang),
    breadcrumb(base.lang, [{ name: homeName, path: '/' }, { name: base.title, path: base.path }]),
    webPage(base, 'CollectionPage', {
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: canonicalUrl(base.lang, item.path),
          name: item.name,
        })),
      },
    }),
  ]);
}

/**
 * The resume page. The same Person, with the full career from the page folded
 * in (see careerFields), the AI projects, and the PDF as a DigitalDocument.
 */
export function resumeGraph(base: PageBase, homeName: string, r: Resume) {
  return graph([
    { ...personNode(base.lang), ...careerFields(r) },
    websiteNode(base.lang),
    ...labNodes(r),
    resumePdf(),
    breadcrumb(base.lang, [{ name: homeName, path: '/' }, { name: base.title, path: base.path }]),
    webPage(base, 'AboutPage', {
      mainEntity: { '@id': PERSON_ID },
      associatedMedia: { '@id': `${SITE_URL}/resume.pdf#document` },
    }),
  ]);
}

/**
 * A single workshop.
 *
 * Emitted as an `Event` only when a real date exists — schema.org requires
 * `startDate`, and an Event without one is dropped by validators anyway.
 * Until dates are filled into src/data/events.ts the page still ships a full
 * `CreativeWork` describing the talk, which carries no date requirement.
 */
export function eventGraph(
  base: PageBase,
  opts: {
    startDate?: string;
    locationName: string;
    slideCount: number;
    topics: string[];
    homeName: string;
    eventsName: string;
    eventsPath: string;
  }
) {
  const shared = {
    name: base.title,
    description: base.description,
    inLanguage: base.lang === 'fr' ? 'fr-FR' : 'en',
    image: base.image ? abs(base.image) : undefined,
    url: canonicalUrl(base.lang, base.path),
    about: opts.topics,
    keywords: opts.topics.join(', '),
  };

  const talk = opts.startDate
    ? {
        '@type': 'EducationalEvent',
        '@id': `${canonicalUrl(base.lang, base.path)}#event`,
        ...shared,
        startDate: opts.startDate,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: opts.locationName,
          address: { '@type': 'PostalAddress', addressLocality: 'Rabat', addressCountry: 'MA' },
        },
        performer: { '@id': PERSON_ID },
        organizer: { '@id': PERSON_ID },
      }
    : {
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl(base.lang, base.path)}#talk`,
        ...shared,
        learningResourceType: 'Workshop',
        creator: { '@id': PERSON_ID },
        author: { '@id': PERSON_ID },
        hasPart: {
          '@type': 'PresentationDigitalDocument',
          name: `${base.title}: slides`,
          numberOfPages: opts.slideCount,
        },
      };

  return graph([
    ...common(base.lang),
    breadcrumb(base.lang, [
      { name: opts.homeName, path: '/' },
      { name: opts.eventsName, path: opts.eventsPath },
      { name: base.title, path: base.path },
    ]),
    webPage(base, 'WebPage', { mainEntity: { '@id': talk['@id'] } }),
    talk,
  ]);
}

/** The case study — an Article, the type most likely to be quoted back. */
export function caseStudyGraph(
  base: PageBase,
  opts: {
    topics: string[];
    client: string;
    homeName: string;
    product?: { name: string; url: string };
    datePublished?: string;
  }
) {
  const articleId = `${canonicalUrl(base.lang, base.path)}#article`;
  /* The client as the same Organization node the home page declares (shared
     @id), and the product as a SoftwareApplication it makes, with its live URL:
     the page's evidence that this work shipped in a real, public product. */
  const org = clientNodes().find((n) => n.name === opts.client);
  const orgRef = org ? { '@id': org['@id'] } : { '@type': 'Organization', name: opts.client };
  const productNode = opts.product
    ? {
        '@type': 'SoftwareApplication',
        '@id': `${opts.product.url}#software`,
        name: opts.product.name,
        url: opts.product.url,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        author: orgRef,
      }
    : null;
  return graph([
    ...common(base.lang),
    ...(org ? [org] : []),
    ...(productNode ? [productNode] : []),
    breadcrumb(base.lang, [{ name: opts.homeName, path: '/' }, { name: base.title, path: base.path }]),
    webPage(base, 'WebPage', { mainEntity: { '@id': articleId } }),
    {
      '@type': 'Article',
      '@id': articleId,
      headline: base.title,
      description: base.description,
      inLanguage: base.lang === 'fr' ? 'fr-FR' : 'en',
      image: base.image ? abs(base.image) : undefined,
      author: { '@id': PERSON_ID },
      creator: { '@id': PERSON_ID },
      publisher: { '@id': PERSON_ID },
      mainEntityOfPage: { '@id': pageId(base.lang, base.path) },
      isPartOf: { '@id': WEBSITE_ID },
      about: opts.topics,
      keywords: opts.topics.join(', '),
      mentions: productNode ? [orgRef, { '@id': productNode['@id'] }] : orgRef,
      ...(opts.product ? { citation: opts.product.url } : {}),
      ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    },
  ]);
}

/** Drops undefined values so we never emit `"image": null` into the graph. */
function graph(nodes: unknown[]) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }, (_k, v) =>
    v === undefined ? undefined : v
  );
}
