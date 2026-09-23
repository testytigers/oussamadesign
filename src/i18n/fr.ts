/** Adapted for a French-speaking audience rather than translated word for word:
 *  UX terms French practitioners keep in English stay in English, and idioms
 *  are rewritten rather than carried across literally. */
export const fr = {
  htmlLang: 'fr',

  nav: {
    work: 'Projets',
    events: 'Événements',
    journal: 'Journal',
    resume: 'CV',
  },

  a11y: {
    toggleNav: 'Ouvrir la navigation',
    linkedin: 'LinkedIn',
    email: 'E-mail',
    phone: 'Téléphone',
    language: 'Changer de langue',
    photoViewer: 'Visionneuse de photos',
    chooseSlide: 'Choisir une slide',
    prevSlide: 'Slide précédente',
    nextSlide: 'Slide suivante',
    prevPhoto: 'Photo précédente',
    nextPhoto: 'Photo suivante',
    close: 'Fermer',
  },

  common: {
    backToEvents: 'Retour aux événements',
    backToWork: 'Retour aux projets',
    viewGallery: 'Voir la galerie',
    readCaseStudy: "Lire l'étude de cas",
    caseStudyBadge: 'Étude de cas',
    slides: 'slides',
    photos: 'photos',
    workshop: 'Atelier',
    deckHead: 'La présentation',
    deckLede: (n: number) => `Les ${n} slides de la session, dans l'ordre.`,
    photosHead: 'Photos',
    photosLede: 'Prises sur le vif ce jour-là.',
    slideAlt: 'Slide',
  },

  home: {
    title: 'Oussama Bougnouch | UX Designer Senior & Concepteur de systèmes IA',
    description:
      "UX Designer Senior & concepteur de systèmes IA, 13 ans d'expérience. Abandon des candidats réduit de 70 %, marketplace multipliée par 9. CHANEL, AT&T, Fnac, Carrefour.",
    heroTitle: "Bonjour, moi c'est Oussama !",
    heroLede:
      "UX Designer Senior et concepteur de systèmes IA, je conçois des produits centrés utilisateur et pilotés par la donnée : cartographie des parcours, tests A/B et interfaces qui font bouger les <a href=\"#work\">indicateurs business</a>, pas seulement les pixels.",
    workHead: 'Études de cas',
    workLede: "Le détail des problèmes qu'on m'a confiés, et de ce qui a été livré.",
    journalHead: 'Journal UX',
    journalLede: "Notes courtes sur le design, la recherche, et là où l'IA aide vraiment.",
    wiggli: {
      title: 'Wiggli Recruiting Calendar',
      description:
        "J'ai conçu le calendrier Wiggli pour éliminer les frictions de planification : l'abandon des candidats est passé de 40 % à 12 %, et la prise de rendez-vous de 3 jours à 15 minutes.",
      chips: ['Abandon 40 % → 12 %', '3 jours → 15 min'],
      imageAlt: 'Étude de cas Wiggli Recruiting Calendar',
    },
    journal: [
      { title: 'Pourquoi une bonne UX peut quand même échouer', excerpt: "Une UX irréprochable ne garantit pas le succès. Quand la recherche ne regarde que l'utilisateur..." },
      { title: "Figma n'est pas votre meilleur outil UX. Voici lequel", excerpt: 'À vouloir maîtriser Figma, beaucoup de designers sautent le plus important...' },
      { title: '#1 Design produit légendaire', excerpt: "Frank Stephenson est l'un des designers automobiles les plus influents de notre époque...." },
      { title: "L'IA vient chercher vos emplois... mais", excerpt: 'Imaginez un monde où 60 % des développeurs et des professionnels IT...' },
      { title: 'Pourquoi les cartes d’empathie ne servent à rien (et quoi...)', excerpt: "Les cartes d'empathie sont partout en UX, mais soyons honnêtes : elles ne..." },
      { title: 'Des échecs de design dont on peut apprendre', excerpt: 'Nintendo a voulu révolutionner le jeu vidéo avec la 3D portable...' },
    ],
  },

  events: {
    title: 'Événements | Oussama Bougnouch',
    description: 'Ateliers et événements, passés et à venir, sur l’IA, l’UX et la technologie.',
    eyebrow: 'Événements',
    heading: 'Ateliers & conférences',
    lede: "Des sessions pratiques sur l'IA, l'UX et les systèmes qui les font tourner.",
    location: {
      coworking: 'Espace de coworking',
      workshopSpace: 'Espace de travail moderne',
    },
  },

  footer: {
    doorTitle: ['Envie de dire', 'bonjour ?'],
    doorOpen: 'Restons en contact !',
    doorClose: 'Fermer la porte',
    doorLabel: 'Coordonnées',
    brandLine: "UX Designer Senior & concepteur de systèmes IA. Je conçois des produits que les gens utilisent jusqu'au bout.",
    navigate: 'Navigation',
    elsewhere: 'Ailleurs',
    basedIn: 'Basé à',
    location: 'Rabat, Maroc',
    rights: 'Tous droits réservés.',
    emailLabel: 'E-mail',
    resumeLabel: 'CV',
  },
} as const;
