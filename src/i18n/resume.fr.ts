import type { resumeEn } from './resume.en';

/** French resume page. The downloadable PDF exists in English only. */
export const resumeFr: typeof resumeEn = {
  metaTitle: 'CV | Oussama Bougnouch, Principal UX Designer',
  metaDescription:
    "CV d'Oussama Bougnouch, Principal UX Designer et architecte produit IA : plus de 15 ans en SaaS B2B, marketplaces et produits d'entreprise pour CHANEL, AT&T et la Fnac.",
  eyebrow: 'CV',
  heading: 'Principal UX Designer & architecte produit IA',
  summary:
    "Principal UX Designer et architecte produit avec plus de 15 ans d'expérience en SaaS B2B, marketplaces et produits d'entreprise, pour des clients comme CHANEL, AT&T et la Fnac. Je repère les fuites dans les parcours utilisateurs et je repense les flux pour un ROI mesurable : commandes de la marketplace multipliées par 9 chez Sobrus, abandon des candidats ramené de 40 % à 12 % chez Gentis. Je conçois des fonctionnalités d'IA conversationnelle et agentique qui transforment des workflows en plusieurs étapes en un seul prompt ou une commande vocale, et je construis une infrastructure de design prête pour les agents : design systems connectés via MCP et workflows d'agents à validation humaine qui transforment les données analytiques en décisions de design fondées sur des preuves.",
  download: 'Télécharger le PDF',
  downloadMeta: '3 pages, en anglais',
  location: 'Rabat, Maroc',
  present: "Aujourd'hui",
  ongoing: 'En cours',

  experienceHead: 'Expérience',
  experience: [
    {
      role: 'Principal UX Designer',
      org: 'Sobrus',
      place: 'Rabat',
      start: '2025-06',
      end: null,
      points: [
        { lead: 'Croissance de la marketplace', text: "Commandes multipliées par 9 d'une année sur l'autre en simplifiant le parcours d'achat et en priorisant les fonctionnalités qui font monter le panier moyen (AOV)." },
        { lead: 'Chatbot IA Sobrus (IA conversationnelle)', text: "Conception d'un assistant IA intégré qui accompagne les pharmaciens sur la plateforme, répond à leurs questions pratiques et génère à la demande, directement dans le chat, les rapports quotidiens de ventes, d'achats et de stock." },
        { lead: 'Parcours de commande', text: "Moins d'étapes pour passer commande, plus des rappels « Offres enregistrées » et « Panier abandonné » pour que les pharmaciens terminent leurs tâches plus vite." },
        { lead: "Assistant d'inventaire", text: 'Un goulot manuel et complexe transformé en processus numérique guidé, étape par étape.' },
        { lead: 'Découverte terrain', text: 'Visites hebdomadaires en pharmacie pour des enquêtes contextuelles, afin de repérer les vrais points de friction et de valider les sujets de la roadmap directement avec les titulaires.' },
        { lead: 'Design system « Sun »', text: 'Construit de zéro sur une architecture de tokens à 3 niveaux (Primitive, Alias, Component) ; tokens implémentés avec les développeurs sur shadcn/ui et React Native Reusables, pour une vitesse de développement doublée.' },
        { lead: 'Leadership design et priorisation', text: 'Revues design hebdomadaires pour valider le travail de chaque sprint, et priorités de roadmap et de sprint fixées à partir des données de comportement Microsoft Clarity et Mixpanel.' },
      ],
    },
    {
      role: 'Sr. Product Designer',
      org: 'Gentis',
      place: 'Casablanca',
      start: '2024-01',
      end: '2025-06',
      caseStudies: ['wiggli-calendar-ux-case-study', 'wiggli-candidate-matching-case-study'],
      points: [
        { lead: 'Assistant de recrutement conversationnel', text: "Conception d'un assistant piloté par prompt et par la voix qui permet aux recruteurs de gérer leur pipeline en conversant : créer des offres, les pourvoir avec les candidats les mieux notés et déplacer les candidats entre les étapes du kanban." },
        { lead: 'Sourcing automatisé par IA', text: "Conception d'un agent piloté par prompt qui classe les candidats selon leur score de correspondance et automatise le passage de la sélection à l'entretien, jusqu'à 11 heures gagnées par semaine pour les managers." },
        { lead: "Générateur d'offres IA", text: "La création manuelle d'offres remplacée par une génération à partir d'un prompt : le temps de publication passe d'une heure à environ 12 minutes." },
        { lead: 'Optimisation du funnel', text: "Abandon des candidats ramené de 40 % à 12 % en repensant le parcours de prise de rendez-vous, avec un cycle de réservation passé de 3 jours à environ 15 minutes." },
        { lead: 'Crédits et tokens Wiggli', text: 'Conception du système de crédits qui gère la facturation de la plateforme et encourage les actions récurrentes.' },
        { lead: 'Communication unifiée', text: 'Les échanges entre recruteurs et candidats centralisés dans un seul outil, plus simple.' },
        { lead: 'Onboarding et validation', text: "Score d'adoption de 7,6/10 chez les nouveaux utilisateurs grâce à des guides d'onboarding contextuels et des questionnaires après tâche." },
      ],
    },
    {
      role: 'Lead Product Designer',
      org: 'Freelance, Web3',
      place: 'À distance',
      start: '2022-09',
      end: '2024-12',
      points: [
        { lead: 'Architecture de liquidité Hadeswap', text: "Conception de l'UX du premier teneur de marché automatisé (AMM) pour NFT sur Solana, pionnier des pools de liquidité NFT." },
        { lead: 'Simplification de la DeFi', text: 'Des mécanismes DeFi rendus accessibles au grand public, avec à la clé une hausse du volume d’échanges et de la part de marché NFT.' },
        { lead: 'Parcours de mint et de wallet', text: "Étude des protocoles Solana et Metaplex Candy Machine pour concevoir des parcours de mint sûrs et rapides, et optimisation de la signature des transactions pour Phantom et les autres wallets Solana." },
      ],
    },
    {
      role: 'Lead UX/UI Designer',
      org: '4D',
      place: 'Rabat',
      start: '2019-12',
      end: '2022-07',
      points: [
        { lead: 'Comparateur de produits Fnac', text: "Conception du comparateur avancé à partir d'un audit des données historiques, pour lever les freins à la décision." },
        { lead: 'Probiocal (SaaS médical et e-commerce)', text: "Conception de l'application web et optimisation de l'e-commerce du laboratoire, avec un abandon au paiement réduit de 9,7 %." },
        { lead: "Architecture de l'information", text: "Refonte de l'affichage des résultats d'analyses sanguines pour que les professionnels les interprètent plus facilement." },
        { lead: 'Career Card', text: 'Une expérience mobile ludique pour la reconnaissance instantanée des collaborateurs par scan de QR code.' },
      ],
    },
    {
      role: 'UX/UI Designer',
      org: 'IPPON Technology',
      place: 'Marrakech',
      start: '2018-02',
      end: '2019-10',
      points: [
        { lead: 'CHANEL', text: "Conception d'une application de formation interne qui prépare les équipes aux prochaines sorties, à partir d'une recherche révélant les lacunes de connaissance côté clients." },
        { lead: 'European Judo Union', text: 'Pilotage de la refonte du site et des « Live Competitions », avec le système multi-flux « Tatamis ».' },
        { lead: 'Fondation du sport français', text: "Conception d'une application sociale privée pour les athlètes, avec 70 % d'utilisateurs actifs au lancement." },
      ],
    },
    {
      role: 'UX/UI Designer',
      org: '4D',
      place: 'Rabat',
      start: '2014-02',
      end: '2018-01',
      points: [
        { lead: 'AT&T (SBC TARS)', text: "Une interface web moderne pour une application de gestion des conflits utilisée par des milliers de techniciens terrain aux États-Unis." },
        { lead: 'Italia Rails', text: 'Une application de billetterie qui modernise la réservation pour les voyageurs fréquents.' },
        { lead: 'Wakanda', text: "Amélioration de l'UX des outils internes pour développeurs de 4D, pour plus de productivité." },
      ],
    },
    {
      role: 'Cofondateur & designer full-stack',
      org: 'Themevan',
      place: 'À distance / Chine',
      start: '2010-03',
      end: '2014-06',
      points: [
        { lead: 'Auteur Elite sur ThemeForest', text: "Cofondation d'une agence WordPress indépendante, portée à des milliers de clients dans le monde grâce à des thèmes premium, en gérant tout le cycle de design et de développement." },
      ],
    },
  ],

  labHead: 'Systèmes IA · R&D indépendante',
  lab: [
    {
      name: 'Design Experiment Harness',
      kind: 'Workflow de design agentique',
      points: [
        "Un workflow en 15 étapes jalonné de validations (Discover → Frame → Make → Validate → Learn) qui intègre des agents IA au processus de design produit, avec validations humaines, piste d'audit, parcours utilisateurs et journal d'apprentissage.",
        "Architecture orchestrateur/workers : Claude Agent SDK / Claude Code comme orchestrateur, un LLM local (Hermes) pour les tâches à fort volume, PostHog MCP pour l'analytique et les expériences, Storybook MCP pour la découverte des composants.",
        "Une couche de profil projet vivante, avec des règles explicites qui séparent les mises à jour autonomes des agents des changements soumis à validation humaine.",
      ],
    },
    {
      name: 'Vitamin-Z Design System',
      kind: 'Design system pensé pour les agents',
      points: [
        "Architecture de tokens à trois niveaux (primitive → sémantique → composant) avec primitives privées et un contrôle « primitive-escape » au build qui bloque les fuites de tokens.",
        "24 contrôles d'accessibilité automatisés sur quatre combinaisons de thèmes (clair/sombre × deux marques).",
        "Serveur MCP avec fichiers d'instructions CLAUDE.md et CONTEXT.md pour que les agents de code IA utilisent correctement le système ; construit sur Tailwind et CVA, avec un script Node.js de synchronisation des tokens via l'API REST Figma Variables.",
      ],
    },
  ],

  skillsHead: 'Compétences clés',
  skills: [
    { area: 'IA agentique et systèmes LLM', items: "Orchestration de workflows d'agents, validations humaines dans la boucle, serveurs et intégrations MCP (Model Context Protocol), context engineering, prompt engineering, Claude Agent SDK / Claude Code, workers LLM locaux" },
    { area: 'Design d’IA conversationnelle', items: 'Assistants par chat et par la voix, workflows prompt-to-action, assistants IA de support et de reporting, matching de candidats par LLM' },
    { area: 'Architecture de design systems', items: "Tokens multi-niveaux (Primitive, Semantic/Alias, Component), design systems lisibles par les agents, audits d'accessibilité automatisés, gouvernance design, Tailwind + CVA, shadcn/ui" },
    { area: 'Recherche et analytique', items: 'Enquête contextuelle, analyse quantitative et qualitative, parcours utilisateurs, service blueprint, tests A/B et conception d’expériences' },
    { area: 'Stratégie produit et croissance', items: 'Optimisation de la conversion, analyse de funnel, growth UX, systèmes de monétisation et de crédits, alignement des parties prenantes' },
    { area: "Architecture de l'information", items: 'Cartographie de données complexes, taxonomie, logique de navigation pour le SaaS B2B, stratégie de contenu' },
    { area: 'Leadership produit', items: 'Revues design hebdomadaires, audits de faisabilité technique, leadership transverse, mentorat, définition des sprints, roadmap' },
    { area: 'Outils', items: 'Figma, Tokens Studio, Storybook, Claude Code, Mixpanel, Microsoft Clarity, PostHog, GA4, Hotjar, Node.js' },
  ],

  learningHead: 'Formation et certifications',
  education: [
    { school: 'IMBT', field: "Ingénierie de l'architecture et du développement d'applications (master)", start: '2020', end: '2022' },
    { school: 'Miage Group', field: 'Développement logiciel (licence)', start: '2015', end: '2016' },
    { school: 'Moulik Group', field: "Technologies de l'information", start: '2011', end: '2013' },
    { school: 'Université FSJES', field: 'Économie et finance (BAC+2)', start: '2010', end: '2012' },
    { school: 'Lycée Mohamed VI', field: 'Comptabilité et gestion (baccalauréat)', start: '2008', end: '2009' },
  ],
  certifications: [
    { issuer: 'Google', name: 'UX Design Specialization', note: "7 cours, de la recherche UX au prototypage haute fidélité dans Figma" },
    { issuer: 'IBM', name: 'Enterprise Design Thinking Practitioner ; Product Management: An Introduction' },
    { issuer: 'SkillUp Online (par IBM)', name: 'Product Management: Foundations & Stakeholder Collaboration ; Initial Product Strategy and Plan' },
  ],
};
