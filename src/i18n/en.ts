export const en = {
  htmlLang: 'en',

  nav: {
    work: 'Work',
    events: 'Events',
    journal: 'Journal',
    resume: 'Resume',
  },

  a11y: {
    toggleNav: 'Toggle navigation',
    linkedin: 'LinkedIn',
    email: 'Email',
    phone: 'Phone',
    language: 'Change language',
    photoViewer: 'Photo viewer',
    chooseSlide: 'Choose a slide',
    prevSlide: 'Previous slide',
    nextSlide: 'Next slide',
    prevPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    close: 'Close',
  },

  common: {
    backToEvents: 'Back to events',
    backToWork: 'Back to work',
    viewGallery: 'View gallery',
    readCaseStudy: 'Read full case study',
    liveProduct: (host: string) => `See the live product on ${host}`,
    caseStudyBadge: 'Case study',
    slides: 'slides',
    photos: 'photos',
    workshop: 'Workshop',
    deckHead: 'The deck',
    deckLede: (n: number) => `All ${n} slides from the session, in order.`,
    photosHead: 'Photos',
    photosLede: 'From the room on the day.',
    slideAlt: 'Slide',
  },

  home: {
    title: 'Oussama Bougnouch | Sr UX Designer, AI System Builder',
    description:
      'Sr UX Designer & AI System Builder with 15+ years. Reduced candidate dropout 70%, scaled marketplace 9x. CHANEL, AT&T, Fnac, Carrefour.',
    heroTitle: 'Principal UX Designer & Product Architect',
    heroLede:
      'I bridge business strategy, cross-functional leadership, and AI-native design to turn complex product roadmaps into high-growth user experiences.',
    heroMetrics: [
      { value: '15+', label: 'Years in B2B SaaS, marketplaces & enterprise products' },
      { value: '9x', label: 'Marketplace growth at Sobrus through procurement optimization' },
      { value: '40% → 12%', label: 'Drop-off cut at Gentis by re-engineering candidate journeys' },
    ],
    workHead: 'Case studies',
    workLede: 'Long-form breakdowns of the problems I was handed and what shipped.',
    journalHead: 'UX journal',
    journalLede: 'Short notes on design, research, and where AI actually helps.',
    wiggli: {
      title: 'Wiggli Recruiting Calendar',
      description:
        'I designed the Wiggli Calendar to eliminate scheduling inefficiencies, reducing candidate dropout from 40% to 12% and cutting scheduling time from 3 days to 15 minutes.',
      chips: ['Dropout 40% → 12%', '3 days → 15 min'],
      imageAlt: 'Wiggli Recruiting Calendar case study',
    },
    journal: [
      { title: 'Why Good UX Can Still Fail', excerpt: "A flawless UX doesn't always mean success. If UX research focuses only on user..." },
      { title: 'Figma is Not Your Best UX Tool. This is', excerpt: 'In the rush to master Figma, many designers skip the most important...' },
      { title: '#1 Legendary Product Design', excerpt: 'Frank Stephenson is one of the most influential car designers of our time....' },
      { title: 'AI is coming for your jobs... but', excerpt: 'Imagine a world where 60% of developers, IT professionals...' },
      { title: 'Why Empathy Maps Are Useless (And What to...)', excerpt: "Empathy maps are everywhere in UX, but let's be honest they don't..." },
      { title: 'Design Failures We Can Learn FROM', excerpt: 'Nintendo tried to revolutionize gaming with portable 3D...' },
    ],
  },

  book: {
    heading: 'My new book',
    eyebrow: 'Free PDF',
    description:
      "Everything designing with AI has taught me, in one short book. Eleven chapters on what AI really does under the hood, where it breaks, and how designers can put it to work, drawn from the products I've shipped with it, not from the hype. About an hour to read.",
    cta: 'Send me the book',
    newTab: '(opens uxintoax.com in a new tab)',
    coverAlt: 'Cover of Signal vs Noise, the free AI book for UX designers by Oussama Bougnouch',
  },
  events: {
    title: 'Events | Oussama Bougnouch',
    description: 'Upcoming and past workshops and events on AI, UX, and technology.',
    eyebrow: 'Events',
    heading: 'Workshops & talks',
    lede: 'Hands-on sessions on AI, UX, and the systems behind them.',
    location: {
      coworking: 'Co-working space',
      workshopSpace: 'Modern Workshop Space',
    },
  },

  footer: {
    /* The door footer. Two lines, split so the break is layout, not markup. */
    doorTitle: ['Wanna say', 'Hello?'],
    doorOpen: "Let's connect!",
    doorClose: 'Close the door',
    doorLabel: 'Contact details',
    brandLine: 'Sr UX Designer & AI System Builder, designing products people actually finish using.',
    navigate: 'Navigate',
    elsewhere: 'Elsewhere',
    basedIn: 'Based in',
    location: 'Rabat, Morocco',
    rights: 'All rights reserved.',
    emailLabel: 'Email',
    resumeLabel: 'Resume',
  },
} as const;
