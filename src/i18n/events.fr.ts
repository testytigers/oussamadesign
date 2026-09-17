export const eventsFr = {
  'beneath-the-skull-of-ai': {
    metaTitle: "Dans le crâne de l'IA | Oussama Bougnouch",
    metaDescription:
      "Atelier sur le fonctionnement réel de l'IA : choisir un modèle, le moteur qui l'exécute, les limites matérielles, la quantification et le contexte.",
    eyebrow: 'Atelier · Partie 1',
    title: "Dans le crâne de l'IA",
    lede:
      "Comment un LLM fonctionne vraiment : choisir son modèle, le moteur qui l'exécute, le matériel qui le limite, et les techniques de quantification et de contexte qui font tenir un gros modèle sur un portable.",
    cardDescription:
      "Comment un LLM fonctionne vraiment : choisir son modèle, le moteur qui l'exécute, le matériel qui le limite, et les techniques de quantification et de contexte qui font tenir un gros modèle sur un portable.",
    /* Home-page teaser, kept under 120 characters so the two cards stay
       the same height in the grid. */
    shortDescription:
      "Le fonctionnement réel d'un LLM — choisir un modèle, le moteur qui l'exécute, la quantification et le contexte.",
    deckLabel: "Dans le crâne de l'IA — slides de l'atelier",
    photos: {
      'opening-the-room': {
        caption: 'Ouverture de la session',
        alt: "Oussama debout, en train de s'adresser aux participants, un portable installé sur la table derrière lui",
      },
      'medium-models': {
        caption: 'Quels modèles tiennent sur un portable',
        alt: "Oussama à côté de l'écran affichant le tableau comparatif des modèles moyens, entre versions Gemma et Qwen",
      },
      'mixture-of-experts': {
        caption: 'Mixture of Experts',
        alt: "Oussama devant la slide Mixture of Experts, expliquant comment un routeur choisit les spécialistes qui répondent",
      },
      'the-shrink-ray': {
        caption: 'Le rayon rétrécissant',
        alt: 'Oussama en pleine explication devant la slide introduisant la quantification',
      },
      'precision-scaling': {
        caption: 'Trouver le bon compromis',
        alt: "Oussama pointant la slide sur la mise à l'échelle de la précision, au niveau du compromis Q5 / Q4",
      },
      'the-destruction-zone': {
        caption: 'Jusqu’à la zone de destruction',
        alt: "Oussama bras tendu vers l'illustration montrant les niveaux q8 à q1 qui rétrécissent",
      },
      'quantized-versions': {
        caption: '53 Go de vRAM économisés',
        alt: 'Oussama pointant le tableau des versions quantifiées de Qwen3.6-35B-A3B, comparant la version 16 bits à une version 3 bits',
      },
      'kv-cache': {
        caption: 'Le cache KV',
        alt: "Oussama pointant la slide sur le coût d'une conversation, expliquant comment le cache KV grossit au fil des échanges",
      },
      'open-discussion': {
        caption: 'Questions de la salle',
        alt: "Un participant assis dans l'espace de coworking, en train d'argumenter pendant la discussion",
      },
    },
  },

  'introduction-to-agentic-ai': {
    metaTitle: "Introduction à l'IA agentique | Oussama Bougnouch",
    metaDescription: "Galerie de l'atelier sur les agents IA et les LLM",
    eyebrow: 'Atelier · Partie 2',
    title: "Introduction à l'IA agentique",
    lede:
      "Un atelier pratique sur ce qui sépare un LLM classique d'un agent IA, avec des applications concrètes et des implémentations réelles.",
    cardDescription:
      "Un atelier pratique sur ce qui sépare un LLM classique d'un agent IA, avec des applications concrètes et des implémentations réelles.",
    /* Home-page teaser, kept under 120 characters so the two cards stay
       the same height in the grid. */
    shortDescription:
      "Du LLM à l'agent — la boucle de raisonnement, les outils qui lui donnent des mains, et pourquoi ils échouent.",
    deckLabel: "Introduction à l'IA agentique — slides de l'atelier",
    photos: {
      'group-photo': { caption: 'Toute la salle', alt: "Photo de groupe des participants devant la slide Hermes Agent, à la fin de la session" },
      setup: { caption: 'Installation avant l’arrivée', alt: "Oussama prépare l'atelier à un bureau, portable, clavier et souris, avant l'arrivée des participants" },
      'whats-the-difference': { caption: 'Quelle différence ?', alt: "Oussama présente devant un écran comparant point par point les LLM et les agents IA" },
      'explaining-agents': { caption: "Ce qui fait d'un agent un agent", alt: "Oussama en pleine explication devant les participants assis, un portable ouvert au premier plan" },
      'full-room': { caption: 'Slides lancées, salle pleine', alt: "Vue large de la salle depuis le fond, participants assis autour des tables face à l'écran" },
      'live-presentation': { caption: 'Présentation en direct', alt: 'Oussama présente à la salle pendant la démonstration en direct' },
      walkthrough: { caption: 'On déroule le flux', alt: "Oussama debout entre les tables, déroulant un workflow d'agent avec les participants" },
      'hermes-architecture': { caption: 'Architecture de Hermes', alt: "Slide montrant le fonctionnement de l'agent Hermes, présentée à la salle" },
      attendees: { caption: 'Les participants', alt: 'Vue de côté des participants assis à de longues tables en bois, une fresque au fond' },
      'audience-engagement': { caption: 'La salle embarquée', alt: "Les participants suivent l'atelier" },
      'open-floor': { caption: 'La parole à la salle', alt: "Oussama debout, bras croisés, écoutant la salle pendant une discussion ouverte" },
      'interactive-session': { caption: 'Session interactive', alt: "Les participants prennent part à la partie interactive de l'atelier" },
      'qa-session': { caption: 'Place aux questions', alt: "Oussama se tourne vers un participant en répondant à une question" },
      discussion: { caption: 'Discussion collective', alt: 'Oussama face à la salle pendant une discussion de groupe, participants assis autour de lui' },
      'llm-vs-agents': { caption: 'LLM contre agents', alt: "Slide opposant ce que fait un LLM classique à ce que fait un agent" },
      'from-the-back': { caption: 'Depuis le fond de la salle', alt: "Vue par-dessus l'épaule des participants vers l'intervenant et l'écran" },
      'after-session': { caption: 'Les échanges d’après-session', alt: "Petit groupe de participants discutant avec Oussama autour d'une table après l'atelier" },
      'quick-recap': { caption: 'Récapitulatif', alt: "Slide résumant les points clés de l'atelier" },
      venue: { caption: 'Le lieu', alt: "L'espace de coworking qui accueillait l'atelier" },
    },
  },
} as const;
