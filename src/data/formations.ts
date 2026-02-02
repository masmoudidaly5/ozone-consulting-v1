export interface Formation {
    id: string;
    reference: string;
    icon: string; // emoji
    image: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    objectives: string[];
    program: {
        title: string;
        items: string[];
    }[];
    prerequisites?: string;
    certification?: string;
    targetAudience: string[];
}

export const formations: Formation[] = [
    // 1. Les Premiers secours Niv 1
    {
        id: "premiers-secours",
        reference: "#0001",
        icon: "🚑",
        image: "/src/assets/PLS.png",
        title: "Les Premiers secours Niv 1",
        description: "Formation aux gestes qui sauvent pour intervenir efficacement en cas d'accident.",
        duration: "2 jours",
        level: "Tous niveaux",
        objectives: [
            "Maîtriser les gestes de premiers secours",
            "Savoir alerter les secours de manière efficace",
            "Gérer une situation d'urgence en attendant les secours",
            "Prévenir les risques d'aggravation",
        ],
        program: [
            {
                title: "Jour 1 - Les bases du secourisme",
                items: [
                    "Protection, prévention et alerte",
                    "La victime s'étouffe",
                    "La victime saigne abondamment",
                    "La victime est inconsciente",
                ],
            },
            {
                title: "Jour 2 - Situations d'urgence",
                items: [
                    "La victime ne respire pas",
                    "La victime se plaint d'un malaise",
                    "La victime se plaint de brûlures",
                    "La victime se plaint d'une plaie",
                    "Mise en situation pratique",
                ],
            },
        ],
        prerequisites: "Aucun prérequis nécessaire",
        certification: "Certificat de Sauveteur Secouriste du Travail (SST)",
        targetAudience: [
            "Tout personnel d'entreprise",
            "Membres du CHSCT",
            "Équipes de sécurité",
        ],
    },
    // 2. Les Premiers secours Niv 2
    {
        id: "premiers-secours-niveau-2",
        reference: "#0002",
        icon: "🚑",
        image: "/src/assets/PS2.jpeg",
        title: "Premiers secours Niv 2 (avancé)",
        description: "Formation avancée aux premiers secours en équipe, incluant le relevage, la fixation et le brancardage.",
        duration: "4 jours",
        level: "Avancé",
        objectives: [
            "Maîtriser les techniques avancées de premiers secours en équipe",
            "Assurer le relevage et la fixation d'une victime",
            "Réaliser un brancardage en toute sécurité",
            "Coordonner les interventions d'équipe",
        ],
        program: [
            {
                title: "Jour 1 - Rappels et techniques avancées",
                items: [
                    "Révision des gestes de base",
                    "Évaluation primaire et secondaire approfondie",
                    "Gestion des détresses vitales",
                    "Communication en équipe d'intervention",
                ],
            },
            {
                title: "Jour 2 - Premiers secours avancés en équipe",
                items: [
                    "Techniques de réanimation en équipe",
                    "Gestion des hémorragies graves",
                    "Immobilisation des fractures complexes",
                    "Prise en charge des traumatismes multiples",
                ],
            },
            {
                title: "Jour 3 - Relevage et fixation",
                items: [
                    "Techniques de relevage sécurisé",
                    "Fixation sur plan dur",
                    "Utilisation du matelas coquille",
                    "Immobilisation rachidienne",
                ],
            },
            {
                title: "Jour 4 - Brancardage et mise en situation",
                items: [
                    "Techniques de brancardage en terrain difficile",
                    "Coordination d'équipe lors du transport",
                    "Passages d'obstacles",
                    "Mises en situation complexes",
                ],
            },
        ],
        prerequisites: "Certificat SST ou PSC1 en cours de validité",
        certification: "Certificat de Premiers Secours en Équipe niveau 2 (PSE2)",
        targetAudience: [
            "Secouristes confirmés",
            "Équipes de secours d'entreprise",
            "Personnel médical et paramédical",
            "Sapeurs-pompiers volontaires",
        ],
    },
    // 3. Utilisation d'un DAE
    {
        id: "utilisation-dae",
        reference: "#0003",
        icon: "⚡",
        image: "/src/assets/AED.jpeg",
        title: "Utilisation d'un Défibrillateur Automatisé Externe (DAE)",
        description: "Formation à l'utilisation du défibrillateur cardiaque automatisé externe pour intervenir en cas d'arrêt cardiaque.",
        duration: "1 jour",
        level: "Tous niveaux",
        objectives: [
            "Reconnaître un arrêt cardiaque",
            "Utiliser un défibrillateur automatisé externe (DAE)",
            "Pratiquer la réanimation cardio-pulmonaire (RCP)",
            "Coordonner l'intervention avec les secours",
        ],
        program: [
            {
                title: "Matin - Théorie et reconnaissance",
                items: [
                    "Anatomie et physiologie du cœur",
                    "Reconnaissance de l'arrêt cardiaque",
                    "La chaîne de survie",
                    "Fonctionnement du DAE",
                    "Réglementation et responsabilités",
                ],
            },
            {
                title: "Après-midi - Pratique",
                items: [
                    "Mise en œuvre du DAE",
                    "Réanimation cardio-pulmonaire (RCP)",
                    "Coordination RCP et DAE",
                    "Mises en situation pratiques",
                    "Cas particuliers et précautions",
                ],
            },
        ],
        prerequisites: "Aucun prérequis nécessaire",
        certification: "Attestation de formation à l'utilisation du DAE",
        targetAudience: [
            "Tout personnel d'entreprise",
            "Secouristes",
            "Personnel d'accueil",
            "Responsables de sites",
        ],
    },
    // 4. Lutte contre les incendies
    {
        id: "lutte-incendies",
        reference: "#0004",
        icon: "🔥",
        image: "/src/assets/INC1.jpg",
        title: "Lutte contre les incendies Niv 1",
        description: "Apprentissage des techniques de prévention et d'extinction des feux.",
        duration: "1 jour",
        level: "Tous niveaux",
        objectives: [
            "Comprendre le phénomène de combustion",
            "Identifier les différents types de feux",
            "Utiliser les extincteurs appropriés",
            "Évacuer en toute sécurité",
        ],
        program: [
            {
                title: "Partie théorique",
                items: [
                    "Le triangle du feu et les classes de feux",
                    "Les agents extincteurs et leur utilisation",
                    "Les équipements de protection incendie",
                    "Les consignes d'évacuation",
                ],
            },
            {
                title: "Partie pratique",
                items: [
                    "Manipulation des extincteurs",
                    "Exercices sur feux réels",
                    "Simulation d'évacuation",
                    "Utilisation des RIA (Robinets d'Incendie Armés)",
                ],
            },
        ],
        prerequisites: "Aucun prérequis nécessaire",
        certification: "Attestation de formation à la lutte contre les incendies",
        targetAudience: [
            "Équipiers de première intervention",
            "Personnel d'entreprise",
            "Responsables sécurité",
        ],
    },
    // 5. Lutte contre les incendies Niv 2
    {
        id: "lutte-incendies-niveau-2",
        reference: "#0005",
        icon: "🔥",
        image: "/src/assets/inc2.jpeg",
        title: "Lutte contre les incendies Niv 2",
        description: "Formation avancée à la lutte contre les incendies : établissement des tuyaux, émulseurs et mousses, feux d'hydrocarbures, fuites de gaz et ARI.",
        duration: "3 jours",
        level: "Avancé",
        objectives: [
            "Maîtriser l'établissement des tuyaux souples",
            "Utiliser les émulseurs et mousses extincteurs",
            "Intervenir sur feux d'hydrocarbures et fuites de gaz",
            "Utiliser l'appareil respiratoire isolant (ARI)",
        ],
        program: [
            {
                title: "Jour 1 - Techniques avancées et établissement",
                items: [
                    "Rappels des fondamentaux de la lutte incendie",
                    "Établissement des tuyaux souples",
                    "Techniques de déploiement rapide",
                    "Manœuvres de lances à incendie",
                ],
            },
            {
                title: "Jour 2 - Feux spéciaux et émulseurs",
                items: [
                    "Feux d'hydrocarbures : spécificités et dangers",
                    "Émulseurs et mousses extincteurs",
                    "Techniques d'extinction par mousse",
                    "Gestion des fuites de gaz",
                    "Procédures d'intervention sur fuite de gaz",
                ],
            },
            {
                title: "Jour 3 - Appareil respiratoire isolant (ARI)",
                items: [
                    "Fonctionnement et vérification de l'ARI",
                    "Équipement et mise en œuvre",
                    "Intervention en atmosphère enfumée",
                    "Gestion de l'autonomie et procédures de secours",
                    "Exercices pratiques en conditions réelles",
                ],
            },
        ],
        prerequisites: "Formation lutte contre les incendies Niv 1 ou équivalent",
        certification: "Attestation de formation à la lutte contre les incendies Niv2 2",
        targetAudience: [
            "Équipiers de seconde intervention",
            "Sapeurs-pompiers d'entreprise",
            "Responsables sécurité incendie",
            "Personnel des sites SEVESO",
        ],
    },
    // 6. Chargés d'évacuation
    {
        id: "charges-evacuation",
        reference: "#0006",
        icon: "🚪",
        image: "/src/assets/evac1.png",
        title: "Chargés d'Évacuation",
        description: "Formation pour les responsables de l'évacuation en cas d'urgence, incluant la gestion des personnes et les procédures d'évacuation.",
        duration: "1 jour",
        level: "Encadrement",
        objectives: [
            "Connaître le rôle et les missions du chargé d'évacuation",
            "Maîtriser les procédures d'évacuation",
            "Gérer le stress et la communication en situation d'urgence",
            "Effectuer le comptage et l'accompagnement des personnes",
        ],
        program: [
            {
                title: "Matin - Cadre réglementaire et rôle",
                items: [
                    "Réglementation relative à l'évacuation",
                    "Rôle et responsabilités du chargé d'évacuation",
                    "Organisation de l'évacuation dans l'entreprise",
                    "Les consignes de sécurité incendie",
                ],
            },
            {
                title: "Après-midi - Procédures et mise en pratique",
                items: [
                    "Procédures d'évacuation et points de rassemblement",
                    "Techniques de communication en situation d'urgence",
                    "Gestion des personnes à mobilité réduite",
                    "Exercice pratique d'évacuation",
                ],
            },
        ],
        prerequisites: "Aucun prérequis nécessaire",
        certification: "Attestation de formation chargé d'évacuation",
        targetAudience: [
            "Chargés d'évacuation désignés",
            "Membres du CSE",
            "Responsables d'équipe",
            "Personnel d'encadrement",
        ],
    },
    // 7. Équipe de première intervention
    {
        id: "equipe-premiere-intervention",
        reference: "#0007",
        icon: "🧯",
        image: "/src/assets/equipe-premiere-intervention.jpg",
        title: "Équipe de Première Intervention (EPI)",
        description: "Formation complète pour les équipiers de première intervention face aux débuts d'incendie.",
        duration: "3 jours",
        level: "Opérateurs",
        objectives: [
            "Intervenir rapidement sur un début d'incendie",
            "Maîtriser l'ensemble des moyens de première intervention",
            "Coordonner les actions avec l'équipe",
            "Assurer la sécurité des personnes",
        ],
        program: [
            {
                title: "Jour 1 - Fondamentaux et théorie",
                items: [
                    "Réglementation et rôle de l'EPI",
                    "Théorie du feu et classes de feux",
                    "Moyens d'extinction et agents extincteurs",
                    "Équipements de protection incendie",
                    "Organisation de l'intervention",
                ],
            },
            {
                title: "Jour 2 - Pratique des moyens d'extinction",
                items: [
                    "Manipulation des extincteurs portatifs",
                    "Utilisation des RIA (Robinets d'Incendie Armés)",
                    "Techniques d'extinction sur feux réels",
                    "Progression en binôme",
                    "Communication et coordination",
                ],
            },
            {
                title: "Jour 3 - Mises en situation",
                items: [
                    "Reconnaissance et évaluation d'un sinistre",
                    "Intervention coordonnée en équipe",
                    "Gestion de situations complexes",
                    "Évacuation et mise en sécurité",
                    "Évaluation pratique",
                ],
            },
        ],
        prerequisites: "Aptitude physique à porter les équipements",
        certification: "Attestation d'Équipier de Première Intervention",
        targetAudience: [
            "Équipiers de première intervention",
            "Personnel de sécurité",
            "Agents de maintenance",
            "Responsables de site",
        ],
    },
    // 8. Équipe de seconde intervention
    {
        id: "equipe-seconde-intervention",
        reference: "#0008",
        icon: "🚒",
        image: "/src/assets/equipe-seconde-intervention.jpg",
        title: "Équipe de Seconde Intervention (ESI)",
        description: "Formation avancée pour les équipiers de seconde intervention capables de gérer des incendies importants.",
        duration: "3 jours",
        level: "Avancé",
        objectives: [
            "Intervenir sur des incendies développés",
            "Utiliser l'appareil respiratoire isolant (ARI)",
            "Maîtriser les techniques avancées d'extinction",
            "Coordonner avec les secours externes",
        ],
        program: [
            {
                title: "Jour 1 - Techniques avancées",
                items: [
                    "Rôle et missions de l'ESI",
                    "Phénomènes thermiques dangereux",
                    "Établissement de lances et tuyaux",
                    "Techniques de ventilation",
                    "Reconnaissance sous ARI",
                ],
            },
            {
                title: "Jour 2 - ARI et intervention",
                items: [
                    "Appareil respiratoire isolant : utilisation",
                    "Progression en atmosphère enfumée",
                    "Sauvetage et évacuation",
                    "Gestion de l'autonomie en air",
                    "Procédures de secours ARI",
                ],
            },
            {
                title: "Jour 3 - Coordination et exercices",
                items: [
                    "Commandement et coordination d'équipe",
                    "Interface avec les sapeurs-pompiers",
                    "Exercices pratiques en conditions réelles",
                    "Gestion de sinistres complexes",
                    "Évaluation finale",
                ],
            },
        ],
        prerequisites: "Formation EPI + Aptitude médicale au port de l'ARI",
        certification: "Attestation d'Équipier de Seconde Intervention",
        targetAudience: [
            "Équipiers de seconde intervention",
            "Sapeurs-pompiers d'entreprise",
            "Responsables sécurité incendie",
            "Personnel des sites à risques",
        ],
    },
    // 9. Plan d'Opérations Interne (POI)
    {
        id: "plan-operations-interne",
        reference: "#0009",
        icon: "📋",
        image: "/src/assets/plan-operations-interne.jpg",
        title: "Plan d'Opérations Interne (POI)",
        description: "Formation à l'élaboration et à la mise en œuvre du Plan d'Opérations Interne pour les établissements à risques.",
        duration: "2 jours",
        level: "Encadrement",
        objectives: [
            "Comprendre les obligations réglementaires du POI",
            "Élaborer un Plan d'Opérations Interne adapté",
            "Organiser la gestion de crise",
            "Tester et améliorer le POI",
        ],
        program: [
            {
                title: "Jour 1 - Cadre réglementaire et élaboration",
                items: [
                    "Réglementation des installations classées (ICPE)",
                    "Obligations légales du POI",
                    "Analyse des risques et scénarios d'accidents",
                    "Structure et contenu du POI",
                    "Organisation de la cellule de crise",
                ],
            },
            {
                title: "Jour 2 - Mise en œuvre et exercices",
                items: [
                    "Procédures d'alerte et de mobilisation",
                    "Coordination avec les secours externes",
                    "Gestion de la communication de crise",
                    "Exercices de simulation POI",
                    "Retour d'expérience et amélioration continue",
                ],
            },
        ],
        prerequisites: "Fonction d'encadrement ou responsabilité HSE",
        certification: "Attestation de formation POI",
        targetAudience: [
            "Directeurs d'établissement",
            "Responsables HSE",
            "Responsables de sites SEVESO",
            "Membres de la cellule de crise",
        ],
    },
    // 10. Prévention des risques liés aux activités physiques
    {
        id: "prevention-levage-manutention",
        reference: "#0010",
        icon: "🏋️‍♂️",
        image: "/src/assets/prap-ibc.jpg",
        title: "Prévention des risques liés aux activités physiques (levage et manutention)",
        description: "Formation sur les bonnes pratiques de levage, manutention et prévention des troubles musculosquelettiques.",
        duration: "1 jour",
        level: "Tous niveaux",
        objectives: [
            "Identifier les risques liés aux gestes de levage",
            "Appliquer les techniques de manutention sécurisée",
            "Utiliser les équipements d'aide au levage",
            "Prévenir les TMS et les accidents",
        ],
        program: [
            {
                title: "Théorie et réglementation",
                items: [
                    "Risques biomécaniques du levage",
                    "Normes et obligations légales",
                    "Évaluation des postes de travail",
                ],
            },
            {
                title: "Atelier pratique",
                items: [
                    "Démonstration d'équipements de levage",
                    "Mise en situation de manutention",
                    "Analyse des gestes et corrections",
                ],
            },
        ],
        prerequisites: "Aucun prérequis nécessaire",
        certification: "Attestation de formation au levage et manutention",
        targetAudience: [
            "Opérateurs de production",
            "Techniciens de maintenance",
            "Personnel de logistique",
        ],
    },
    // 11. Ergonomie et travail sur écran
    {
        id: "ergonomie-ecran",
        reference: "#0011",
        icon: "🖥️",
        image: "/src/assets/ergonomie-ecran.jpg",
        title: "Ergonomie et travail sur écran",
        description: "Optimisation du poste de travail informatique pour prévenir les troubles musculosquelettiques liés aux écrans.",
        duration: "1 jour",
        level: "Tous niveaux",
        objectives: [
            "Comprendre les risques liés au travail sur écran",
            "Adopter les bonnes postures devant l'ordinateur",
            "Aménager le poste de travail ergonomiquement",
            "Intégrer des pauses actives",
        ],
        program: [
            {
                title: "Principes d'ergonomie",
                items: [
                    "Analyse des postes de travail",
                    "Réglage du mobilier et du matériel",
                    "Gestion de l'éclairage et du contraste",
                ],
            },
            {
                title: "Exercices et bonnes pratiques",
                items: [
                    "Exercices d'étirement",
                    "Micro‑pauses actives",
                    "Gestion du temps d'écran",
                ],
            },
        ],
        prerequisites: "Aucun prérequis nécessaire",
        certification: "Attestation de formation à l'ergonomie écran",
        targetAudience: [
            "Personnel de bureau",
            "Opérateurs informatiques",
            "Tous salariés exposés aux écrans",
        ],
    },
    // 12. Stockage et manipulation des produits chimiques
    {
        id: "produits-chimiques",
        reference: "#0012",
        icon: "⚗️",
        image: "/src/assets/produits-chimiques.jpg",
        title: " Manipulation et Stockage des produits chimiques",
        description: "Maîtrise des bonnes pratiques pour manipuler et stocker les substances dangereuses en toute sécurité.",
        duration: "1 jour",
        level: "Opérateurs",
        objectives: [
            "Identifier les dangers des produits chimiques",
            "Comprendre les pictogrammes et étiquetage",
            "Appliquer les règles de stockage",
            "Utiliser les équipements de protection",
        ],
        program: [
            {
                title: "Réglementation et identification",
                items: [
                    "Réglementation sur les produits chimiques",
                    "Lecture des FDS (Fiches de Données de Sécurité)",
                    "Pictogrammes et étiquetage CLP",
                    "Classification des produits dangereux",
                ],
            },
            {
                title: "Manipulation et stockage",
                items: [
                    "Règles de stockage et compatibilité",
                    "Équipements de protection individuelle",
                    "Procédures de manipulation sécurisée",
                    "Gestion des déversements accidentels",
                ],
            },
        ],
        prerequisites: "Être amené à manipuler des produits chimiques",
        certification: "Attestation de formation",
        targetAudience: [
            "Opérateurs de production",
            "Personnel de maintenance",
            "Magasiniers",
        ],
    },
    // 13. Sécurité des Travaux en hauteur
    {
        id: "travaux-hauteur",
        reference: "#0013",
        icon: "🪜",
        image: "/src/assets/WorkATHeight.png",
        title: "Sécurité des Travaux en hauteur",
        description: "Formation aux techniques sécurisées pour les interventions en élévation.",
        duration: "2 jours",
        level: "Opérateurs",
        objectives: [
            "Identifier les risques liés au travail en hauteur",
            "Utiliser les EPI antichute",
            "Mettre en œuvre les techniques de sécurisation",
            "Intervenir en cas d'accident",
        ],
        program: [
            {
                title: "Jour 1 - Théorie et réglementation",
                items: [
                    "Réglementation sur le travail en hauteur",
                    "Les risques de chute et leurs conséquences",
                    "Les EPI antichute (harnais, longes, antichutes)",
                    "Les points d'ancrage et lignes de vie",
                ],
            },
            {
                title: "Jour 2 - Pratique",
                items: [
                    "Vérification et utilisation des EPI",
                    "Techniques de progression en hauteur",
                    "Mise en situation sur site",
                    "Procédures de secours et évacuation",
                ],
            },
        ],
        prerequisites: "Aptitude médicale au travail en hauteur",
        certification: "Attestation de formation au travail en hauteur",
        targetAudience: [
            "Techniciens de maintenance",
            "Couvreurs et charpentiers",
            "Personnel intervenant en hauteur",
        ],
    },
    // 14. Identification et évaluation des dangers
    {
        id: "evaluation-dangers",
        reference: "#0014",
        icon: "⚠️",
        image: "/src/assets/Identification et évaluation des dangers.webp",
        title: "Identification et évaluation des dangers",
        description: "Méthodologie pour détecter, analyser et hiérarchiser les risques professionnels.",
        duration: "2 jours",
        level: "Encadrement",
        objectives: [
            "Maîtriser les méthodes d'identification des dangers",
            "Évaluer et hiérarchiser les risques",
            "Élaborer le document unique",
            "Proposer des mesures de prévention",
        ],
        program: [
            {
                title: "Jour 1 - Méthodologie",
                items: [
                    "Cadre réglementaire de l'évaluation des risques",
                    "Concepts : danger, risque, dommage",
                    "Méthodes d'identification des dangers",
                    "Outils d'évaluation des risques",
                ],
            },
            {
                title: "Jour 2 - Mise en pratique",
                items: [
                    "Analyse de situations de travail",
                    "Cotation et hiérarchisation des risques",
                    "Élaboration du document unique (DUER)",
                    "Plan d'action et mesures de prévention",
                ],
            },
        ],
        prerequisites: "Fonction d'encadrement ou responsabilité HSE",
        certification: "Attestation de formation",
        targetAudience: [
            "Responsables HSE",
            "Managers et chefs d'équipe",
            "Membres du CHSCT/CSE",
            "Préventeurs",
        ],
    },
    // 15. Travail dans les espaces clos (confinés)
    {
        id: "espaces-confines",
        reference: "#0015",
        icon: "🔒",
        image: "/src/assets/espaces-confines.jpg",
        title: "Travail dans les espaces clos (confinés)",
        description: "Formation aux procédures de sécurité pour intervenir dans les espaces confinés.",
        duration: "2 jours",
        level: "Opérateurs",
        objectives: [
            "Identifier les risques liés aux espaces confinés",
            "Appliquer les procédures d'entrée sécurisées",
            "Utiliser les équipements de protection et de détection",
            "Gérer les situations d'urgence en espace confiné",
        ],
        program: [
            {
                title: "Jour 1 - Théorie et réglementation",
                items: [
                    "Définition et identification des espaces confinés",
                    "Réglementation et obligations légales",
                    "Les dangers spécifiques (atmosphère, toxicité, asphyxie)",
                    "Équipements de détection et de protection",
                    "Procédures de permis d'entrée",
                ],
            },
            {
                title: "Jour 2 - Pratique et intervention",
                items: [
                    "Évaluation des risques avant intervention",
                    "Mise en place des mesures de sécurité",
                    "Utilisation des détecteurs de gaz",
                    "Techniques de ventilation",
                    "Procédures de sauvetage et évacuation",
                    "Mise en situation pratique",
                ],
            },
        ],
        prerequisites: "Aptitude médicale au travail en espace confiné",
        certification: "Attestation de formation au travail en espace confiné",
        targetAudience: [
            "Opérateurs de maintenance",
            "Personnel d'intervention",
            "Équipes de sécurité",
            "Surveillants d'espaces confinés",
        ],
    },
    // 16. Sécurité au chantier
    {
        id: "securite-chantier",
        reference: "#0016",
        icon: "🏗️",
        image: "/src/assets/Sécurité chantier.jpeg",
        title: "Sécurité au Chantier",
        description: "Formation aux règles de sécurité sur les chantiers de construction et de travaux publics.",
        duration: "1 jour",
        level: "Tous niveaux",
        objectives: [
            "Identifier les risques spécifiques aux chantiers",
            "Appliquer les règles de sécurité sur chantier",
            "Utiliser les équipements de protection collective et individuelle",
            "Connaître la signalisation de chantier",
        ],
        program: [
            {
                title: "Matin - Risques et réglementation",
                items: [
                    "Réglementation des chantiers de BTP",
                    "Les principaux risques sur chantier",
                    "Chutes de hauteur et de plain-pied",
                    "Risques liés aux engins et véhicules",
                    "Risques électriques et ensevelissement",
                ],
            },
            {
                title: "Après-midi - Prévention et protection",
                items: [
                    "Équipements de protection individuelle (EPI)",
                    "Protections collectives (garde-corps, filets, etc.)",
                    "Signalisation et balisage de chantier",
                    "Plan de prévention et PPSPS",
                    "Conduite à tenir en cas d'accident",
                ],
            },
        ],
        prerequisites: "Aucun prérequis nécessaire",
        certification: "Attestation de formation sécurité chantier",
        targetAudience: [
            "Ouvriers du BTP",
            "Chefs de chantier",
            "Conducteurs de travaux",
            "Coordonnateurs SPS",
        ],
    },
    // 17. Équipements de protection individuelle
    {
        id: "epi",
        reference: "#0017",
        icon: "🦺",
        image: "/src/assets/PPE.jpeg",
        title: "Équipements de protection individuelle (EPI)",
        description: "Formation à l'utilisation, l'entretien et le choix des équipements de protection individuelle.",
        duration: "1 jour",
        level: "Tous niveaux",
        objectives: [
            "Comprendre l'importance des EPI",
            "Choisir les EPI adaptés aux risques",
            "Utiliser et entretenir correctement ses EPI",
            "Connaître la réglementation en vigueur",
        ],
        program: [
            {
                title: "Théorie et réglementation",
                items: [
                    "Les principes généraux de prévention",
                    "Les différentes catégories d'EPI",
                    "Responsabilités employeur / salarié",
                    "Marquage et conformité",
                ],
            },
            {
                title: "Pratique et utilisation",
                items: [
                    "Présentation des EPI spécifiques au métier",
                    "Vérification avant utilisation",
                    "Règles de port et d'ajustement",
                    "Entretien et stockage",
                ],
            },
        ],
        prerequisites: "Aucun prérequis nécessaire",
        certification: "Attestation de formation EPI",
        targetAudience: [
            "Tous les salariés",
            "Chefs d'équipe",
            "Responsables sécurité",
            "Magasiniers",
        ],
    },
    // 18. Cycle Responsable HSE
    {
        id: "cycle-responsable-hse",
        reference: "#0018",
        icon: "👔",
        image: "/src/assets/responsable-HSSE.jpg",
        title: "Cycle Responsable HSE",
        description: "Formation complète pour maîtriser les fondamentaux du métier de Responsable Hygiène, Sécurité et Environnement.",
        duration: "5 jours",
        level: "Expert",
        objectives: [
            "Maîtriser le cadre réglementaire HSE",
            "Savoir évaluer et gérer les risques professionnels",
            "Mettre en place et animer un système de management HSE",
            "Développer une culture sécurité en entreprise",
        ],
        program: [
            {
                title: "Jour 1 - Cadre réglementaire et responsabilités",
                items: [
                    "Veille réglementaire HSE",
                    "Responsabilités civile et pénale",
                    "Les acteurs de la prévention",
                    "Le Document Unique (DUER)",
                ],
            },
            {
                title: "Jour 2 & 3 - Gestion des risques et opérationnel",
                items: [
                    "Analyse des risques (chimiques, incendie, psychosociaux...)",
                    "Permis de feu, plans de prévention",
                    "Gestion des entreprises extérieures",
                    "Analyse des accidents du travail",
                ],
            },
            {
                title: "Jour 4 & 5 - Management et communication",
                items: [
                    "Normes ISO 14001 et ISO 45001",
                    "Audit et revue de direction",
                    "Communication et leadership HSE",
                    "Gestion de crise",
                ],
            },
        ],
        prerequisites: "Expérience en industrie ou poste d'encadrement",
        certification: "Certificat de Responsable HSE",
        targetAudience: [
            "Futurs Responsables HSE",
            "Animateurs Sécurité",
            "Ingénieurs HSE",
            "Chefs d'entreprise",
        ],
    },
];
