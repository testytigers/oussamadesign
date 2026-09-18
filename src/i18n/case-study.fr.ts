export const caseStudyFr = {
  metaTitle: 'Étude de cas UX : Wiggli Calendar | Oussama Bougnouch',
  metaDescription:
    "Comment la planification collaborative a fait passer l'abandon des candidats de 40 % à 12 % et la prise de rendez-vous de 3 jours à 15 minutes.",
  eyebrow: 'Étude de cas',
  title: 'Centraliser le recrutement grâce à la planification collaborative',
  lede: 'UX Designer chez Wiggli — efficacité de la planification, coordination des équipes et consolidation des outils.',
  chips: ['Abandon 40 % → 12 %', '3 jours → 15 min', '50+ recruteurs actifs'],

  figures: {
    calView:
      "Interface du calendrier collaboratif Wiggli : vue hebdomadaire avec les entretiens, le panneau Groupes collaboratifs et les disponibilités de plusieurs recruteurs",
    journeyMap:
      "Service blueprint du parcours de recrutement en 6 étapes — Initier, Vérifier les disponibilités, Aligner les agendas, Proposer l'entretien, Attendre la réponse, Confirmer — avec actions, ressentis, points de friction et opportunités",
    problem:
      "Schéma de la planification d'entretien à plusieurs : un créneau 12:00-13:00 refusé par le candidat, deux intervieweurs aux disponibilités distinctes, et le hiring manager qui doit chercher le seul créneau commun, 13:00-14:00, avant de le confirmer au candidat avec du retard",
    oldExperience:
      "Capture vidéo de l'ancienne interface de planification Wiggli, montrant qu'on ne pouvait proposer qu'un seul créneau — la cause première des 40 % d'abandon",
    oldExperienceCaption:
      "L'ancienne interface ne permettait de proposer qu'un seul créneau, ce qui créait des frictions et augmentait le taux de replanification.",
    userFlow:
      "Diagramme de flux de bout en bout du nouveau système de planification Wiggli : création d'entretien, configuration d'événement, nouveau groupe collaboratif, rejoindre un groupe et synchronisation des agendas",
    collaborativeGroups:
      "Interface des Groupes collaboratifs Wiggli — la modale d'autorisation « Rejoindre le groupe » et la vue calendrier partagée où les disponibilités de toute l'équipe apparaissent sur une même semaine",
    findBest:
      "Schéma d'intersection des disponibilités multi-fuseaux : le moteur « Find Best Times » identifie 1 h 48 de créneaux communs dans une fenêtre de travail partagée de 4 h entre un intervieweur à New York (GMT-4), un à Londres (GMT+0) et un candidat au Caire (GMT+2)",
    calendarViews:
      "Les trois vues du calendrier Wiggli côte à côte — vue Jour pour la planification heure par heure, vue Semaine pour le moyen terme, vue Mois pour le volume global de recrutement",
    calendarSettings:
      "Écran de paramètres du calendrier Wiggli : configuration de la synchronisation Google et Outlook, gestion des groupes collaboratifs et permissions fines par membre (voir les intitulés, voir seulement libre/occupé)",
    schedule:
      "Fonction « Disponibilités » de Wiggli — le menu Ajout rapide propose Événement, Entretien et Disponibilité, permettant aux recruteurs de pré-marquer leurs créneaux libres en pleine saison",
  },

  discovery: {
    label: '01 — Découverte',
    heading: 'Une communication éclatée à l’origine de 40 % d’abandons candidats',
    p1: "Dans le recrutement, la vitesse est le seul véritable avantage concurrentiel. Chez Gentis/Wiggli, nous avons identifié une défaillance critique : 40 % des candidats abandonnaient au moment de la prise de rendez-vous.",
    p2: "Ce n'était pas une simple « friction UX », mais une fuite financière massive. Chaque candidat perdu représentait des milliers d'euros de sourcing gaspillés (CAC) et du chiffre d'affaires en moins. Le processus était manuel, éclaté et exposé à l'erreur humaine. Un recruteur pouvait passer des semaines à dénicher le candidat rare, puis le perdre dans trois jours de ping-pong par e-mail.",
    researchHeading: 'Recherche interne &amp; enquêtes',
    research: [
      "<strong>Quantitatif :</strong> j'ai analysé le funnel candidat avec Mixpanel. Le constat était net : 40 % des candidats arrivés à l'étape « Inviter à un entretien » ne réservaient jamais de créneau. La rupture se situait exactement au passage entre l'e-mail du recruteur et la vue calendrier.",
      "<strong>Qualitatif :</strong> pour cadrer le périmètre, j'ai mené une enquête auprès de 23 hiring managers chez Gentis, complétée par des entretiens approfondis avec 4 d'entre eux, de niveaux d'expérience différents — dont Sarra, hiring manager senior avec plus de 8 ans d'expérience — afin de cartographier le parcours existant.",
    ],
    problemsHeading: 'Les problèmes identifiés',
    problems: [
      "<strong>Délais de communication :</strong> le ping-pong entre intervieweurs et candidats allongeait les temps de réponse et imposait des relances manuelles constantes.",
      "<strong>Agendas désalignés :</strong> coordonner plusieurs intervieweurs sans vue unifiée générait des conflits permanents et des replanifications.",
      "<strong>Outils éclatés :</strong> les recruteurs jonglaient entre Slack, e-mail, WhatsApp et téléphone, d'où confusion et risque élevé de malentendu.",
      "<strong>Limite de l'ancienne interface :</strong> elle ne permettait de proposer qu'un seul créneau, principale cause du taux de replanification et de la frustration des candidats.",
      "<strong>Paralysie des fuseaux horaires :</strong> pour les équipes internationales, calculer les décalages entre GMT, EST et CET multipliait les erreurs et les heures perdues.",
      "<strong>Charge mentale :</strong> les recruteurs servaient de « routeurs de données » humains, à raison de plus de 5 heures par semaine passées à déplacer des créneaux.",
    ],
  },

  solution: {
    label: '02 — Solution',
    heading: 'Groupes collaboratifs &amp; planification intelligente',
    p1: "À partir de la recherche, j'ai conçu un nouveau flux articulé autour des « groupes collaboratifs » pour fluidifier toute la planification.",
    groupsHeading: 'Les groupes collaboratifs',
    groupsP: "J'ai conçu un système où les équipes de recrutement rejoignent un groupe dédié à un poste. La boucle de feedback est centralisée et toutes les parties prenantes partagent la même vue sur l'avancement du candidat et les disponibilités de l'équipe.",
    engineHeading: 'Le moteur « Find the Best Times »',
    engineP: 'Une couche logique qui automatise le calcul des créneaux à plusieurs :',
    engine: [
      "<strong>Normalisation :</strong> unifie les données Google et Outlook sur une même grille UTC de 15 minutes.",
      "<strong>Respect de la vie privée :</strong> ne lit que les blocs « occupé », en respectant les horaires de travail et les temps tampons obligatoires.",
      "<strong>Intersection multi-utilisateurs :</strong> superpose tous les agendas pour identifier la fenêtre commune idéale.",
      "<strong>Filtrage intelligent :</strong> écarte automatiquement les « fragments » — des trous techniquement libres mais trop courts pour la durée d'entretien requise.",
    ],
    archHeading: 'Une architecture de calendrier flexible',
    archP: 'Trois vues distinctes, pour trois besoins de planification :',
    arch: [
      '<strong>Jour :</strong> pour la planification fine, heure par heure.',
      '<strong>Semaine :</strong> pour le moyen terme.',
      '<strong>Mois :</strong> pour une vue d’ensemble du volume de recrutement.',
    ],
    syncHeading: 'Synchronisation &amp; alignement en temps réel',
    syncP: "La synchronisation propage les mises à jour instantanément sur tous les agendas connectés (Google, Outlook), ce qui garde les équipes alignées et supprime les doubles réservations.",
    notifHeading: "L'écosystème de notifications",
    notifP: "Mise en place de relances automatiques par SMS et e-mail à 24 h et 1 h de l'entretien, avec la possibilité d'ajouter plusieurs rappels : 46 % de no-shows en moins.",
  },

  adoption: {
    label: '03 — Adoption',
    heading: 'Adoption &amp; conduite du changement',
    items: [
      "<strong>Onboarding contextuel :</strong> un guide affiché au bon moment, avec des infobulles contextuelles, pour aplatir la courbe d'apprentissage sans imposer de manuel.",
      "<strong>Validation par enquête post-tâche :</strong> note de 7,6/10. Les retours qualitatifs ont conduit à ajouter une « disponibilité manuelle » pour les recrutements de cadres prioritaires.",
    ],
  },

  results: {
    label: '04 — Résultats',
    heading: 'Résultats &amp; itérations',
    p1: "Le déploiement a été suivi via le tableau de bord Wiggli sur plus de 50 recruteurs actifs, démontrant qu'un changement UX structurel génère un ROI direct.",
    tableHeaders: ['Indicateur', 'Avant', 'Après', 'Impact'],
    rows: [
      { metric: 'Abandon candidat', before: '40 %', after: '12 %', impact: '70 % de friction en moins' },
      { metric: 'Vitesse de planification', before: '3 jours', after: '~15 min', impact: '90 % de cycle en moins' },
      { metric: 'ROI opérationnel', before: '5 h/sem.', after: '< 1 h/sem.', impact: '20 h économisées / mois' },
      { metric: 'Délai de recrutement (TTF)', before: '50 jours', after: '35 jours', impact: '30 % plus rapide' },
      { metric: 'Taux de replanification', before: '23 %', after: '6 %', impact: 'Amélioration UX nette' },
    ],
    measuresHeading: 'Autres mesures',
    measures: [
      "<strong>Moins de replanifications :</strong> les premiers tests ont montré que proposer plusieurs créneaux réduisait nettement les reports, en laissant plus de souplesse aux candidats.",
      "<strong>Retours positifs sur la coordination :</strong> les utilisateurs ont rapporté que les groupes collaboratifs amélioraient fortement l'alignement des équipes.",
    ],
    iterationHeading: 'Itération continue',
    iterationP: "Les retours recueillis pendant les tests ont fait émerger un nouveau besoin : une fonction « Disponibilités ». Elle permet aux recruteurs de pré-marquer leurs créneaux libres en pleine saison, et réduit encore la friction au moment de planifier.",
  },

  conclusion: {
    label: '05 — Conclusion',
    heading: 'Ce que ça a donné',
    p1: "Wiggli m'a permis de construire une boucle de feedback courte avec les utilisateurs finaux chez Gentis. En transformant un parcours chaotique réparti sur cinq plateformes de communication en une expérience centralisée autour des groupes collaboratifs, nous n'avons pas seulement redessiné un calendrier : nous avons conçu une façon plus efficace de faire grandir l'organisation.",
  },
} as const;
