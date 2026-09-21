import type { CaseStudyFigure, CaseStudySection } from '../data/case-studies';

const figures: Record<string, CaseStudyFigure> = {
  problemScale: {
    src: '/images/work/matching-problem.webp',
    alt: "Illustration à l'encre : un recruteur en costume, assis seul sur un tabouret, tient un dossier vert, minuscule face à un mur de CV empilés qui le dépasse largement",
    caption: "Un dossier lu, et le reste de la semaine encore empilé contre le mur.",
  },
  pipelineBoard: {
    src: '/images/work/matching-pipeline.png',
    alt: "Le tableau de pipeline Wiggli pour une offre de Senior Accountant IFRS, avec les colonnes Candidature, Revue interne, Entretien et Contrat. Chaque fiche candidat porte son score de correspondance — 81 %, 52 %, 32 % — et une fiche est en cours de déplacement entre deux étapes",
    caption: "Les scores vivent sur les fiches, dans le pipeline que les recruteurs utilisent déjà. Pas de nouvel écran, pas d'outil à part.",
  },
  candidateCard: {
    src: '/images/work/matching-candidate-card.webp',
    alt: "La colonne Candidature d'un pipeline Wiggli avec deux fiches candidat. Brooklyn Simmons et Andy Agarwal, tous deux data analysts, chacun avec sa photo et son intitulé de poste sur la ligne du haut et, sur la ligne du dessous, la date de candidature à côté d'un petit anneau de score affichant 81 % et 52 %. Pas de badge, pas de libellé, pas de recommandation.",
    caption: "Le score occupe la ligne du bas, sous le nom et la photo plutôt qu'au-dessus.",
  },
  talentPoolBulkAdd: {
    video: {
      src: '/video/matching-sourcing.mp4',
      poster: '/video/matching-sourcing-poster.webp',
      width: 982,
      height: 720,
    },
    alt: "Capture vidéo : sur une offre de développeur Java, le recruteur ouvre Qualified Matches et Wiggli renvoie une liste Search candidates filtrée — Langues : anglais 5/5 et Compétences : Agile Methodologies 3/5, douze résultats — avec une case à cocher sur chaque ligne pour le traitement groupé",
    caption: "Le sourcing depuis l'offre : un clic renvoie le vivier filtré pour l'annonce, chaque ligne sélectionnable pour un traitement groupé.",
  },
};

const sections: CaseStudySection[] = [
  {
    label: 'Résumé',
    heading: "Reprendre une fonctionnalité que les clients avaient déjà rejetée",
    blocks: [
      {
        t: 'p',
        html: "Sur Wiggli, les recruteurs lisaient chaque CV qui arrivait dans la colonne « Candidatures » de leur tableau Kanban. Sur une offre qui marche, cela représente des centaines de profils et presque une semaine de travail.",
      },
      {
        t: 'p',
        html: "Wiggli avait déjà tenté de régler le problème une première fois. Un score de correspondance était sorti, les clients l'ont jugé faux, il a été retiré. La deuxième tentative avait donc deux missions et non une&nbsp;: <strong>classer les candidats avec justesse, et donner aux recruteurs une raison d'y croire</strong>.",
      },
      {
        t: 'p',
        html: "J'ai audité l'algorithme retiré, analysé les tickets de support et mené une enquête client sur la façon dont les recruteurs jugent un profil. Il en est sorti un modèle de scoring à six piliers qui alimente deux parcours&nbsp;: les candidatures entrantes, scorées à l'arrivée et classées dans le Kanban, et le sourcing sortant, qui classe le vivier de talents pour une offre donnée. Dans les deux cas, chaque score s'ouvre sur le détail de son calcul.",
      },
      {
        t: 'p',
        html: "Mesuré dans les analytics super admin de Wiggli, le temps de présélection a baissé de <strong>65&nbsp;% chez les utilisateurs intensifs et de 40&nbsp;% chez les utilisateurs réguliers</strong>.",
      },
      {
        t: 'note',
        html: "C'est l'écart entre les deux qui est le vrai enseignement. Le système ne rend pas un nombre d'heures fixe. Il rapporte à proportion de ce qu'on en utilise vraiment.",
      },
    ],
  },

  {
    label: '01 — Le problème',
    heading: 'Deux cents profils, non triés, et une semaine pour les lire',
    blocks: [
      { t: 'h3', text: 'Ce que faisaient les recruteurs' },
      {
        t: 'p',
        html: "Les filtres de rejet automatique écartaient les évidences&nbsp;: localisation, questions éliminatoires. Tout le reste, souvent 200 profils ou plus, atterrissait en vrac dans une seule colonne.",
      },
      {
        t: 'flow',
        tone: 'problem',
        lanes: [
          {
            steps: [
              'Le candidat postule',
              'Filtres de rejet automatique (localisation, questions éliminatoires)',
              '200+ candidats non triés dans la colonne « Candidatures »',
              '12 à 18 heures de lecture manuelle, chiffre remonté par les clients',
              'Fatigue, et de bons profils passés à côté',
            ],
          },
        ],
      },
      {
        t: 'p',
        html: "Les tickets de support et les notes des account managers revenaient toujours sur la même plainte&nbsp;: les bons profils se perdaient dans la masse. Le coût n'était pas seulement du temps. C'était de ne jamais voir le meilleur candidat de la pile.",
      },

      { t: 'figure', key: 'problemScale' },

      { t: 'h3', text: "Pourquoi la première version a échoué" },
      {
        t: 'p',
        html: "Avec l'équipe technique, nous avons relu ensemble l'algorithme retiré. Deux défauts structurels&nbsp;:",
      },
      {
        t: 'ol',
        items: [
          "<strong>Il comptait des mots-clés.</strong> Un profil contenait un terme ou non. Aucune notion de niveau, aucun regroupement par domaine fonctionnel, aucune lecture des langues ni de la progression de carrière.",
          "<strong>Il mettait toutes les exigences sur le même plan.</strong> Une compétence indispensable et une compétence souhaitable pesaient pareil, si bien que des candidats à qui il manquait l'essentiel remontaient quand même en tête. C'est exactement ce que les clients ont vécu comme « inexact ».",
        ],
      },

      { t: 'h3', text: "La contrainte qui a tout déterminé" },
      {
        t: 'note',
        html: "Un classement auquel les recruteurs ne croient pas vaut moins que pas de classement du tout. Ils s'étaient déjà brûlés une fois&nbsp;: tout score que nous sortirions serait lu avec méfiance, et un seul classement visiblement faux suffirait à confirmer le soupçon. Cela a pesé plus lourd sur la conception que les maths.",
      },
    ],
  },

  {
    label: '02 — Recherche',
    heading: "Demander à 2 000 recruteurs comment ils jugent vraiment un profil",
    blocks: [
      {
        t: 'p',
        html: "<strong>Données support et comptes clients.</strong> J'ai regroupé les plaintes et demandes récurrentes des tickets de support et des notes d'account managers pour repérer où l'évaluation cassait réellement, et comprendre ce que « inexact » avait voulu dire concrètement pour les clients.",
      },
      {
        t: 'p',
        html: "<strong>Enquête client.</strong> Un questionnaire structuré a été envoyé à environ 2 000 clients actifs, pour savoir comment ils pondèrent les attributs d'un candidat quand ils jugent un profil. <strong>243 ont répondu</strong>, soit un taux de réponse d'environ 12&nbsp;%.",
      },
      {
        t: 'p',
        html: "Croisées avec les motifs récurrents du support, les réponses ont donné les six choses que les recruteurs évaluent systématiquement, et un ordre approximatif. Les pondérations finales ont été arrêtées par le directeur produit et moi, en confrontant l'enquête aux analytics de la plateforme.",
      },
      {
        t: 'table',
        head: ['Pilier', 'Poids', 'Ce qu\'il couvre'],
        align: ['left', 'right', 'left'],
        rows: [
          ['Compétences', '40 %', 'Compétences techniques, outils clés, domaine technique'],
          ['Fonctions', '25 %', 'Domaine fonctionnel principal et responsabilités adjacentes'],
          ['Expérience', '15 %', "Années d'ancienneté, ajustées à la proximité sectorielle"],
          ['Formation', '10 %', 'Niveau de diplôme et pertinence de la filière'],
          ['Séniorité', '5 %', 'Adéquation du titre et du niveau'],
          ['Langues', '5 %', 'Maîtrise exigée et complémentaire'],
        ],
      },
    ],
  },

  {
    label: '03 — Partis pris',
    heading: "Quatre décisions ont fait l'essentiel du travail",
    blocks: [
      {
        t: 'p',
        html: "<strong>Les pondérations viennent des recruteurs, pas de nous seuls.</strong> Quand un client conteste un score, la réponse est&nbsp;: voici comment vos pairs disent évaluer les gens, et voici le détail du calcul. Ce n'est pas du tout la même conversation que défendre une boîte noire.",
      },
      {
        t: 'p',
        html: "<strong>L'indispensable est séparé du souhaitable.</strong> À l'intérieur des piliers Compétences et Fonctions, les éléments critiques portent 70&nbsp;% du pilier et le reste 30&nbsp;%. Cela vise exactement la faille qui avait tué la version une.",
      },
      {
        t: 'p',
        html: "<strong>Chaque score s'ouvre.</strong> Aucun chiffre n'apparaît sans chemin vers ses composantes.",
      },
      {
        t: 'p',
        html: "<strong>Le score ordonne, le recruteur décide.</strong> Rien n'est rejeté automatiquement sur la base d'un score, rien n'est masqué. Le classement change l'ordre de lecture, point. Le seul endroit où ce principe fléchit est la sélection groupée par seuil de score dans le sourcing&nbsp;: c'est abordé franchement plus bas plutôt qu'escamoté.",
      },
    ],
  },

  {
    label: '04 — Le modèle de scoring',
    heading: 'Six piliers, pondérations à 100',
    blocks: [
      { t: 'h3', text: "D'où viennent les chiffres d'entrée" },
      {
        t: 'p',
        html: "Chaque formule ci-dessous travaille sur une note de 0 à 1 par élément. Ces notes sont déclarées par des personnes, pas déduites par le système&nbsp;: c'est la plus grande différence avec la version retirée.",
      },
      {
        t: 'p',
        html: "<strong>Les notes de compétences sont auto-déclarées.</strong> Un candidat qui s'inscrit sur Wiggli note lui-même ses compétences sur son profil. Un candidat déjà présent dans le vivier s'est vu poser la même question lors d'un entretien téléphonique&nbsp;: notez votre maîtrise du wireframing de 1 à 5. Le recruteur enregistre la réponse, il ne l'attribue pas, et il ne peut pas modifier la note d'un candidat.",
      },
      {
        t: 'p',
        html: "<strong>La proximité sectorielle et la pertinence de filière</strong> sont renseignées par la personne qui publie l'offre. Le système ne cherche pas à deviner si la fintech est proche de l'assurance. C'est le recruteur qui connaît le secteur qui tranche, offre par offre. La décision subjective reste ainsi chez celui qui a le contexte, et la raison d'un multiplicateur peut toujours être montrée.",
      },
      {
        t: 'p',
        html: "La version une lisait le texte des CV et comptait les occurrences de mots-clés, c'est-à-dire une supposition sur un candidat déguisée en mesure. S'appuyer sur des notes déclarées a fait reposer le score sur quelque chose qu'une personne avait réellement affirmé&nbsp;: plus défendable, et bien plus simple à expliquer quand un recruteur conteste un résultat.",
      },

      { t: 'h3', text: 'Comment un score se construit' },
      {
        t: 'p',
        html: "Compétences et Fonctions partagent la même forme. Noter chaque élément de 0 à 1, faire la moyenne par groupe, pondérer l'indispensable à 70&nbsp;% et le reste à 30&nbsp;%, puis appliquer le poids du pilier.",
      },
      {
        t: 'formula',
        items: [
          { out: 'Score Compétences', expr: '[ (moy. indispensables x 0,70) + (moy. autres x 0,30) ] x 0,40' },
          { out: 'Score Fonctions', expr: '[ (moy. principales x 0,70) + (moy. secondaires x 0,30) ] x 0,25' },
        ],
      },
      { t: 'p', html: "Les quatre autres sont des multiplicateurs appliqués à une table." },
      {
        t: 'formula',
        items: [
          {
            out: 'Expérience',
            expr: 'min(1,0 ; années candidat / années requises) x mult. secteur x 0,15',
            legend: ['Secteur : direct 1,0, adjacent 0,8, sans rapport 0,5'],
          },
          {
            out: 'Formation',
            expr: 'mult. diplôme x mult. filière x 0,10',
            legend: [
              'Diplôme : master ou doctorat 1,0, licence 0,8, BTS ou bootcamp 0,6',
              'Filière : directe 1,0, proche 0,7, sans rapport 0,4',
            ],
          },
          { out: 'Séniorité', expr: "valeur de la matrice d'adéquation x 0,05" },
          {
            out: 'Langues',
            expr: '(somme des multiplicateurs / langues requises) x 0,05',
            legend: ['Niveau : natif 1,0, professionnel 0,8, intermédiaire 0,5, notions 0,2'],
          },
        ],
      },

      { t: 'h3', text: "Matrice d'adéquation de séniorité" },
      {
        t: 'p',
        html: "Construite avec le directeur produit à partir des analytics de la plateforme.",
      },
      {
        t: 'table',
        head: ["Niveau du poste", 'Candidat senior', 'Confirmé', 'Junior', 'Débutant'],
        align: ['left', 'right', 'right', 'right', 'right'],
        rows: [
          ['Senior', '1,00', '0,75', '0,25', '0,25'],
          ['Confirmé', '0,75', '1,00', '0,50', '0,50'],
          ['Junior', '0,50', '0,50', '1,00', '0,75'],
          ['Débutant', '0,25', '0,25', '0,75', '1,00'],
        ],
      },
      {
        t: 'p',
        html: "La matrice est volontairement asymétrique. Un candidat senior qui postule à un poste junior obtient 0,50, tandis qu'un junior sur un poste senior obtient 0,25. Être surqualifié pose moins de problèmes qu'être sous-qualifié, et les chiffres le disent.",
      },

      { t: 'h3', text: 'Comment les manques sont pénalisés' },
      {
        t: 'p',
        html: "Une compétence indispensable absente vaut 0 pour cet élément et tire vers le bas tout le bloc à 70&nbsp;% dans lequel elle se trouve. La pénalité est proportionnelle plutôt qu'éliminatoire, et elle est lourde.",
      },
      {
        t: 'p',
        html: "Dans l'exemple chiffré ci-dessous, il y a quatre compétences indispensables&nbsp;: chacune vaut donc jusqu'à <strong>7 points sur les 100 finaux</strong>. Chacune des cinq autres vaut jusqu'à 2,4. Une seule compétence indispensable manquante coûte environ trois fois plus qu'une compétence souhaitable manquante&nbsp;: c'est tout l'objet de la répartition 70/30, et précisément ce que la version une avait raté.",
      },
      {
        t: 'p',
        html: "Un candidat peut encore se classer honorablement en ratant une compétence indispensable. C'est assumé pour une première version&nbsp;: les offres listent leurs indispensables de façon idéalisée, et un filtre éliminatoire viderait le tableau. La version suivante confie ce choix au recruteur via un réglage de sévérité.",
      },

      { t: 'h3', text: 'Exemple chiffré' },
      { t: 'p', html: "Un candidat, un poste de product designer senior, scoré de bout en bout." },
      {
        t: 'table',
        head: ['Pilier', 'Entrées', 'Résultat'],
        align: ['left', 'left', 'right'],
        rows: [
          [
            'Compétences (40 %)',
            "Indispensables : journey mapping 0,8 — enquêtes quanti 0,6 — enquêtes quali 0,8 — enquête contextuelle 0,0. Autres : persona 0,8 — design system 0,6 — Figma 0,8 — UX writing 1,0 — accessibilité 0,0",
            '23,08 %',
          ],
          ['Fonctions (25 %)', 'Principale : product design 0,90. Secondaire : systèmes front-end 0,60', '20,25 %'],
          ['Expérience (15 %)', '4 ans pour 5 ans requis (0,80), secteur adjacent (0,80)', '9,60 %'],
          ['Formation (10 %)', 'Licence (0,80) dans une filière directe (1,0)', '8,00 %'],
          ['Séniorité (5 %)', 'Candidat confirmé, poste senior (0,75)', '3,75 %'],
          ['Langues (5 %)', 'Anglais natif (1,0), français intermédiaire (0,5)', '3,75 %'],
          ['<strong>Total</strong>', '', '<strong>68,43 %</strong>'],
        ],
      },
      {
        t: 'p',
        html: "Détail des compétences&nbsp;: indispensables (0,8 + 0,6 + 0,8 + 0) / 4 = 0,55, fois 0,70 = 0,385. Autres (0,8 + 0,6 + 0,8 + 1,0 + 0) / 5 = 0,64, fois 0,30 = 0,192. Total 0,577, fois 0,40 = 23,08&nbsp;%.",
      },
    ],
  },

  {
    label: "05 — L'interface",
    heading: "Le score, c'est la moitié du produit. L'autre moitié, c'est d'y croire",
    blocks: [
      {
        t: 'p',
        html: "L'essentiel du moteur est une arithmétique que personne ne voit jamais. Le travail de conception a consisté à décider quoi en faire remonter, et où. Le même modèle alimente deux usages différents, qui appelaient deux interfaces différentes.",
      },

      { t: 'h3', text: 'Parcours 1 : les candidatures entrantes' },
      {
        t: 'p',
        html: "Les candidats qui postulent à une offre sont scorés à l'arrivée. La colonne « Candidatures » revient simplement classée du meilleur au moins bon.",
      },
      {
        t: 'p',
        html: "Pas de nouvel écran, pas d'outil à part, pas d'étape en plus. La colonne dans laquelle les recruteurs vivaient déjà a changé d'ordre, et rien d'autre. C'est ce parcours qui attaque le problème d'origine&nbsp;: des centaines de profils en vrac et une semaine de lecture.",
      },
      { t: 'figure', key: 'pipelineBoard' },

      { t: 'h3', text: 'Parcours 2 : le sourcing dans le vivier' },
      {
        t: 'p',
        html: "Le second usage va dans le sens inverse. Au lieu d'attendre les candidatures, le recruteur part chercher.",
      },
      {
        t: 'p',
        html: "Depuis l'en-tête d'une offre, <em>trouver les meilleurs profils</em> applique les mêmes six piliers à tout le vivier de Wiggli et renvoie les candidats classés pour cette offre précise. Le recruteur ajoute ensuite des personnes à l'offre&nbsp;: une par une, en sélection multiple, ou en filtrant sur un seuil de score et en ajoutant d'un coup tous ceux qui sont au-dessus.",
      },
      {
        t: 'p',
        html: "Ce filtre de seuil est le réglage le plus lourd de conséquences du produit. Mettez-le à 70&nbsp;% et ajoutez le lot&nbsp;: le score a cessé d'ordonner une liste et s'est mis à constituer une présélection.",
      },
      { t: 'figure', key: 'talentPoolBulkAdd' },

      { t: 'h3', text: "L'attente" },
      {
        t: 'p',
        html: "Scorer le vivier pour une offre prend quelques secondes&nbsp;: <em>trouver les meilleurs profils</em> ouvre donc sur un écran de chargement plutôt que sur un résultat immédiat.",
      },
      {
        t: 'p',
        html: "C'est la surface la plus faible du produit et la première chose que je referais. Un simple spinner consomme plusieurs secondes d'attention totalement captive sans rien dire, sur la fonctionnalité qui a le plus besoin de s'expliquer. Ces mêmes secondes pourraient nommer ce qui est en train d'être pesé, ce qui ferait un vrai travail sur la confiance pour presque rien. C'était visible à l'époque, et perdu par manque de temps.",
      },

      { t: 'h3', text: 'Ce que la fiche ne fait pas' },
      {
        t: 'p',
        html: "Pas de pastilles de couleur, pas de badge « recommandé », pas de rejet automatique sur le score. Le chiffre se tient à côté du nom, du titre et de l'ancienneté sans les dominer. Cette retenue est délibérée. Un outil qui a l'air de décider pousse les recruteurs soit à lui faire trop confiance, soit à le rejeter en bloc&nbsp;— et nous avions déjà vu ce que coûte le rejet.",
      },
      { t: 'figure', key: 'candidateCard' },

      { t: 'h3', text: 'Le nouveau parcours' },
      {
        t: 'flow',
        tone: 'solution',
        lanes: [
          {
            title: 'Entrant',
            steps: [
              'Le candidat postule',
              'Filtres de rejet automatique (localisation, questions éliminatoires)',
              "Scoring six piliers à l'arrivée",
              'Colonne « Candidatures » classée, chaque score ouvrable',
              'Le recruteur lit le haut de liste et décide toujours',
            ],
          },
          {
            title: 'Sortant',
            steps: [
              'Le recruteur ouvre une offre',
              'Clique sur « trouver les meilleurs profils »',
              'Scoring six piliers sur tout le vivier, quelques secondes',
              'Résultats classés, chaque score ouvrable',
              'Ajout un par un, en sélection multiple, ou par seuil de score',
              'Les candidats arrivent dans le Kanban',
            ],
          },
        ],
      },
    ],
  },

  {
    label: '06 — Résultats',
    heading: "Le gain croît avec la profondeur d'usage",
    blocks: [
      { t: 'h3', text: 'Temps de présélection, parcours entrant' },
      {
        t: 'p',
        html: "Mesuré dans le tableau de bord super admin de Wiggli, sur le parcours entrant uniquement.",
      },
      {
        t: 'table',
        head: ['Segment', 'Baisse du temps de présélection'],
        align: ['left', 'right'],
        rows: [
          ['Utilisateurs intensifs', '<strong>65 %</strong>'],
          ['Utilisateurs réguliers', '<strong>40 %</strong>'],
        ],
      },
      {
        t: 'p',
        html: "Les utilisateurs intensifs se définissent par le nombre d'offres publiées par semaine et par la part de la plateforme qu'ils utilisent, en particulier le tableau Kanban. Avant le changement, les clients déclaraient passer 12 à 18 heures par offre à lire la colonne « Candidatures ».",
      },
      {
        t: 'p',
        html: "Le parcours de sourcing n'était pas instrumenté&nbsp;: il n'existe donc pas de chiffre équivalent. C'est un manque, pas un résultat.",
      },
      {
        t: 'note',
        html: "L'écart entre les deux segments est le vrai enseignement. Un recruteur qui travaille la colonne classée et ouvre les détails récupère l'essentiel de sa semaine. Celui qui continue de dérouler de haut en bas en récupère moins. Ce n'est pas du bruit de mesure, c'est un signal produit&nbsp;: le gain croît avec la profondeur d'usage. Cela plaide pour un meilleur onboarding et pour rendre le détail plus visible, pas pour changer l'algorithme.",
      },

      { t: 'h3', text: "Ce que les recruteurs ont demandé ensuite" },
      {
        t: 'p',
        html: "Le retour qualitatif a été positif dans l'ensemble, et la forme des demandes comptait plus que leur ton.",
      },
      {
        t: 'p',
        html: "Les recruteurs n'ont pas demandé de <em>corriger</em> le score. Ils ont demandé de le <em>régler</em>. Certains le voulaient plus sévère, pour une liste finale plus courte et plus difficile à atteindre. D'autres le voulaient plus souple, pour que moins de candidats soient rétrogradés à cause d'un seul critère manquant. D'autres encore voulaient déplacer le poids de certains éléments pour coller à leur façon réelle de recruter.",
      },
      {
        t: 'p',
        html: "C'est la preuve la plus nette que l'explicabilité a fonctionné. La version une produisait un seul type de retour&nbsp;: l'algorithme est faux. La version deux a produit des débats sur des paramètres. On ne peut demander un changement de pondération que si l'on a compris le modèle assez bien pour être en désaccord avec une partie précise. Le détail a transformé un chiffre indiscutable en chiffre discutable&nbsp;: c'était tout l'objectif.",
      },
      {
        t: 'p',
        html: "C'est une preuve indirecte et non un test d'utilisabilité, et cela mérite d'être dit. Personne ne s'est assis à côté d'un recruteur pour le regarder lire un détail de score.",
      },
      {
        t: 'note',
        html: "Le désaccord est lui-même un résultat. Les recruteurs se sont divisés sur la sévérité souhaitable, et les deux camps avaient raison pour leur propre recrutement. Aucune pondération unique ne sert à la fois un cabinet qui recrute des soudeurs et un éditeur SaaS qui recrute des ingénieurs. C'est ce qui a fait passer les pondérations configurables et le réglage de sévérité du confort au cœur de la deuxième version.",
      },
    ],
  },

  {
    label: '07 — Limites à nommer',
    heading: 'Ce que ce système ne fait pas',
    blocks: [
      {
        t: 'p',
        html: "<strong>Les compétences sont auto-déclarées, et elles pèsent 40&nbsp;% du score.</strong> Chaque note de compétence du modèle est l'auto-évaluation d'un candidat, qu'elle ait été saisie dans un formulaire d'inscription ou donnée à un recruteur au téléphone. Rien ne la confronte au parcours professionnel, à un test ou à une référence.",
      },
      {
        t: 'p',
        html: "C'était un arbitrage assumé en faveur de la couverture. Des données de compétences vérifiées vaudraient mieux, et elles n'existent quasiment pas à l'échelle d'un vivier. Mais cela signifie qu'à compétence égale, celui qui s'évalue généreusement passe devant celui qui se sous-estime, sans que le modèle puisse les distinguer. Les compétences étant le pilier le plus lourd, c'est la première source d'erreur du système.",
      },
      {
        t: 'p',
        html: "Nous n'avons jamais mesuré si la même question obtient la même réponse au téléphone et dans un formulaire. Cela vaudrait la peine de le savoir. Le correctif n'est pas d'abandonner l'auto-évaluation, c'est de donner au score un second avis&nbsp;: recouper les compétences déclarées avec le parcours, ou signaler une note que rien n'étaye pour que le recruteur la pondère lui-même. C'est le changement à plus forte valeur que j'apporterais à ce système.",
      },
      {
        t: 'p',
        html: "<strong>Le modèle encode des préférences déclarées, pas des résultats de recrutement.</strong> Les pondérations reflètent ce que les recruteurs disent important, ce qui n'est pas la même chose que ce qui prédit une bonne embauche. Nous n'avons jamais vérifié si les hauts scores étaient davantage reçus en entretien, recrutés, ou performants ensuite. Cela demande des données de résultats sur plusieurs cycles. Sortir sur des préférences déclarées était le bon choix pour une première version, l'alternative étant de ne rien sortir en attendant des données qui n'existaient pas. Mais c'est une limite, pas une qualité.",
      },
      {
        t: 'p',
        html: "<strong>L'échantillon de l'enquête s'est auto-sélectionné.</strong> 243 réponses sur environ 2 000 envois. Les clients qui répondent à une enquête sur leur processus de recrutement ne sont pas un échantillon aléatoire&nbsp;: ils penchent vers les plus engagés.",
      },
      {
        t: 'p',
        html: "<strong>La formation et les langues sont des entrées notées dans un classement de personnes.</strong> Le niveau de diplôme avantage les parcours scolaires sur les parcours autodidactes. Les multiplicateurs de langue touchent les non-natifs. Les deux se défendent pour beaucoup de postes, et les deux peuvent produire un impact discriminatoire à grande échelle.",
      },
      {
        t: 'note',
        html: "Sur le parcours entrant, le risque est contenu&nbsp;: le score ordonne une liste qu'un recruteur lit quand même. Sur le sourcing, non. Filtrer le vivier à 70&nbsp;% et ajouter d'un coup tout ce qui est au-dessus signifie que personne sous la ligne n'est jamais vu, et qu'aucun humain n'a regardé la coupe. C'est le score qui prend une décision de présélection à grande échelle&nbsp;: un risque d'une autre nature que celui de suggérer un ordre de lecture.",
      },
      {
        t: 'p',
        html: "Deux choses aideraient, et aucune n'a été construite&nbsp;: afficher combien de candidats un seuil exclut avant que le recruteur ne le valide, et mener une revue d'impact discriminatoire sur les entrées formation, langues et séniorité. L'action groupée est un vrai gain d'efficacité et je ne la retirerais pas. Il lui manque des garde-fous.",
      },
      {
        t: 'p',
        html: "<strong>Les indispensables sont moyennés, pas éliminatoires.</strong> Le réglage de sévérité de la version suivante confie ce choix au recruteur, ce qui vaut mieux que l'un ou l'autre par défaut.",
      },
    ],
  },

  {
    label: '08 — La suite',
    heading: 'Où cela va',
    blocks: [
      {
        t: 'ul',
        items: [
          "<strong>Pondérations et sévérité configurables par le recruteur.</strong> Directement issu des retours ci-dessus. La version suivante laisse les clients régler le poids de chaque élément selon leurs priorités, et fixer la sévérité d'application des règles, un réglage plus strict renvoyant une liste plus courte et plus exigeante. Cela tranche aussi la question des indispensables moyennés, en confiant le choix entre pénalité douce et filtre éliminatoire à celui qui connaît le poste.",
          "<strong>Validation sur les résultats réels.</strong> Tester les pondérations contre les personnes réellement recrutées, plutôt que contre ce que les recruteurs disaient valoriser.",
          "<strong>Revue d'impact discriminatoire</strong> sur les entrées formation, langues et séniorité, et un décompte de ceux qu'un seuil exclut avant l'ajout groupé.",
          "<strong>Recoupement des compétences auto-déclarées,</strong> en confrontant les notes au parcours et en signalant celles que rien n'étaye.",
          "<strong>Un indice de fiabilité sur les profils incomplets,</strong> pour qu'un 70&nbsp;% bâti sur un CV de deux lignes ne se lise pas comme un 70&nbsp;% bâti sur un profil complet.",
          "<strong>Un écran d'attente qui s'explique,</strong> remplaçant le spinner par ce qui montre ce qui est en train d'être pesé pendant le calcul.",
        ],
      },
    ],
  },
];

export const matchingFr = {
  metaTitle: 'Classer 200 candidatures sans perdre la confiance du recruteur | Oussama Bougnouch',
  metaDescription:
    "Un score de correspondance à six piliers, entièrement explicable, pour l'ATS Wiggli. Le temps de présélection a baissé de 65 % chez les utilisateurs intensifs et de 40 % chez les réguliers.",
  eyebrow: 'Étude de cas',
  title: 'Classer 200 candidatures sans perdre la confiance du recruteur',
  lede: "Principal Product Architect et UX Lead chez Wiggli — reprendre un score de correspondance que les clients avaient déjà rejeté, et rendre chaque chiffre qu'il produit inspectable.",
  chips: ['Présélection −65 % (intensifs)', '−40 % (réguliers)', "243 réponses à l'enquête"],
  meta: [
    { label: 'Rôle', value: 'Principal Product Architect et UX Lead' },
    { label: 'Équipe', value: 'Directeur produit, ingénierie back-end, support client, account management' },
    { label: 'Périmètre', value: "Recherche, conception du modèle de scoring, interface et parcours" },
    { label: 'Plateforme', value: 'ATS Wiggli' },
  ],
  card: {
    title: 'Matching candidats Wiggli',
    description:
      "Un score que les clients avaient déjà rejeté, reconstruit pour que chaque chiffre s'ouvre sur ses six piliers. La présélection a baissé de 65 % chez les utilisateurs intensifs.",
    chips: ['Présélection −65 %', 'Modèle à six piliers', 'Explicable par conception'],
    imageAlt: 'Étude de cas matching candidats Wiggli',
  },
  figures,
  sections,
};
