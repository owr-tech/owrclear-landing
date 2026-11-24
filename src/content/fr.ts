export const fr = {
  productName: 'CLEAR',
  logo: 'CLEAR',
  nav: {
    label: 'Navigation principale',
    menu: 'Ouvrir le menu',
    mobileTitle: 'Menu',
    mobileDescription: 'Accéder aux sections de la page',
    links: [
      { label: 'Fonctionnalités', href: '#fonctionnalites' },
      { label: 'Comment ça marche', href: '#comment-ca-marche' },
      { label: 'Pour qui', href: '#pour-qui' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: 'Demander une démo',
  },
  hero: {
    eyebrow: 'Votre comptabilité et trésorerie simplifiée.',
    title:
      'Fini les pertes, Adoptez la croissance.',
    subtitle:
      "Enregistrez vos ventes, dépenses et stocks directement dans l'application, par vocal WhatsApp ou avec une photo de votre cahier. Vérifiez, validez, puis voyez votre situation en un coup d'œil.",
    primary: 'Demander une démo',
    secondary: 'Voir comment ça marche',
    sample: "Données d'exemple",
    dashboard: 'Aperçu du jour',
    revenue: 'Recettes',
    expenses: 'Dépenses',
    result: 'Résultat',
    amounts: ['285 000 FCFA', '91 500 FCFA', '193 500 FCFA'],
    voice: 'Note vocale',
    voiceDuration: '0:07',
    synced: 'Vente prête à valider',
    queue: 'File de validation',
    queueCount: '3 à vérifier',
    sources: ['Appli', 'Vocal WhatsApp', 'Photo cahier'],
  },
  problem: {
    lines: ['Le cahier se perd.', 'Les calculs prennent du temps.', 'Les erreurs coûtent cher.'],
    answer: 'vous aide à gérer et à faire croître votre activité.',
  },
  inputModes: {
    eyebrow: 'Une seule appli, trois façons de travailler',
    title: "Renseignez vos chiffres de la manière la plus simple pour vous.",
    description:
      'Tout arrive dans la même application. Vous gardez vos habitudes, sans passer votre journée à taper.',
    items: [
      {
        number: '01',
        title: "Directement dans l'appli",
        text: 'Saisissez une vente, une dépense ou un mouvement de stock manuellement, même sans connexion.',
        details: [
          'Produits et quantités',
          'Espèces ou mobile money',
          'Stock mis à jour après validation',
        ],
        tag: 'Saisie classique',
      },
      {
        number: '02',
        title: 'Par vocal sur WhatsApp',
        text: 'Envoyez un vocal après chaque vente ou dictez toutes les ventes de la journée en une seule fois.',
        details: [
          'Vocal unitaire ou groupé',
          'Produit, quantité, montant et date extraits',
          'Récapitulatif avant enregistrement',
        ],
        tag: 'Simple ou en lot',
      },
      {
        number: '03',
        title: 'Par photo du cahier',
        text: "Photographiez vos notes manuscrites. L'IA les lit, les nettoie et prépare un récapitulatif.",
        details: [
          'Ventes, dépenses et quantités reconnues',
          'Écriture manuscrite nettoyée',
          'Validation obligatoire avant mise à jour',
        ],
        tag: 'Photo WhatsApp',
      },
    ],
  },
  features: {
    eyebrow: 'Tout au même endroit',
    title: 'Du comptoir au bilan, sans vous compliquer la vie.',
    subtitle: 'Faites défiler pour voir comment chaque tâche trouve sa place.',
    items: [
      {
        title: 'Ventes',
        promise: 'Encaissez en quelques secondes.',
        bullets: [
          'Produits, quantités, mode de paiement (espèces, mobile money)',
          'Chaque vente met le stock à jour',
          'Fonctionne même sans connexion',
        ],
      },
      {
        title: 'Stock',
        promise: "Sachez toujours ce qu'il vous reste.",
        bullets: [
          'Ajoutez un nouveau produit en un instant',
          'Alertes de stock bas',
          'Valeur de votre stock en temps réel',
        ],
      },
      {
        title: 'Dépenses',
        promise: 'Chaque franc dépensé, à sa place.',
        bullets: [
          'Publicité, loyer, électricité, eau, Internet, salaires',
          'Photo du justificatif',
          'Vue par catégorie et par mois',
        ],
      },
      {
        title: 'Taxes',
        promise: 'Vos taxes calculées pour vous.',
        bullets: [
          'Collectées, déductibles, montant dû par période',
          'Suivi : déclarée, payée',
          'Taux adaptés à votre régime',
        ],
      },
      {
        title: 'WhatsApp : vocal et photo',
        promise: "Envoyez. L'IA prépare.",
        bullets: [
          'Envoyez un vocal seul ou toutes les ventes de la journée',
          'Photographiez les notes manuscrites de votre cahier',
          "Rien n'est enregistré sans votre accord",
        ],
      },
      {
        title: 'Équipe et bilan',
        promise: "Chacun voit ce qu'il doit voir.",
        bullets: [
          'Vendeur, directeur général, comptable',
          'Un aperçu clair de votre situation financière',
          'Export pour votre comptable',
        ],
      },
    ],
    visuals: {
      sales: {
        headers: ['Produit', 'Paiement', 'Total'],
        rows: [
          ['Riz × 3', 'Espèces', '45 000'],
          ['Tissu × 6 m', 'Mobile money', '36 000'],
        ],
      },
      stock: {
        labels: ['Riz (sac)', 'Wax bleu', 'Huile 1 L'],
        values: [72, 24, 48],
        low: 'Stock bas',
      },
      expenses: ['Loyer', 'Électricité', 'Publicité', 'Salaires'],
      taxes: [
        ['Collectées', '72 000'],
        ['Déductibles', '21 000'],
        ['Montant dû', '51 000 FCFA'],
      ],
      chat: [
        ['Vocal WhatsApp', '3 sacs de riz', 'À valider'],
        ['Photo cahier', '6 lignes reconnues', 'À vérifier'],
      ],
      team: [
        ['AM', 'Awa', 'Vendeuse'],
        ['KD', 'Koffi', 'Direction'],
        ['FM', 'Fatou', 'Comptable'],
      ],
    },
  },
  how: {
    eyebrow: 'Comment ça marche',
    title: 'Trois gestes. Une situation toujours claire.',
    steps: [
      {
        number: '01',
        title: 'Envoyez',
        text: "Saisissez dans l'appli, envoyez un vocal ou photographiez votre cahier sur WhatsApp.",
      },
      {
        number: '02',
        title: 'Vérifiez',
        text: "Relisez ce que l'IA a compris. Validez ou corrigez avec un bouton.",
      },
      {
        number: '03',
        title: 'Pilotez',
        text: 'Le stock se met à jour et vous suivez ventes, dépenses, encaissements et taxes.',
      },
    ],
  },
  whatsapp: {
    eyebrow: 'Une saisie qui ressemble à une conversation',
    title: 'Envoyez un vocal. Gardez toujours le dernier mot.',
    contact: 'Assistant financier',
    status: 'en ligne',
    voiceDuration: '0:07',
    transcription: "« J'ai vendu trois sacs de riz à quinze mille, payé en espèces. »",
    assistant: 'Vente à enregistrer : 3 × Riz (sac) à 15 000 = 45 000 FCFA, espèces.',
    actions: ['Valider', 'Corriger', 'Annuler'],
    note: "Rien n'est enregistré sans votre accord.",
    options: [
      ['Vocal rapide', 'Une vente juste après le passage du client.'],
      ['Vocal groupé', 'Toutes les ventes de la journée dans un seul message.'],
      ['Photo du cahier', 'Les lignes manuscrites sont reconnues et préparées pour vous.'],
    ],
  },
  dashboard: {
    eyebrow: 'Votre contrôle avant tout',
    title: "L'IA prépare. Vous décidez ce qui entre.",
    description:
      'Chaque vocal et chaque photo arrive dans une file de validation. Vous voyez ce qui a été compris, vous corrigez si besoin, puis vous validez.',
    queueTitle: 'À valider',
    queueCount: '3 éléments',
    columns: ['Source', 'Détail', 'Total', 'Statut'],
    rows: [
      ['Vocal WhatsApp', '3 × Riz (sac)', '45 000 FCFA', 'Prêt'],
      ['Photo cahier', '6 lignes reconnues', '128 500 FCFA', 'À vérifier'],
      ['Appli', 'Loyer · Juin', '150 000 FCFA', 'Prêt'],
    ],
    actions: ['Valider', 'Corriger'],
    benefits: [
      {
        title: 'Stock mis à jour',
        text: 'Une vente validée diminue automatiquement les quantités disponibles.',
      },
      {
        title: 'Suivi en temps réel',
        text: 'Ventes du jour, total encaissé, dépenses et stock restant restent visibles.',
      },
      {
        title: 'Origine toujours visible',
        text: 'Retrouvez chaque entrée : Appli, Vocal WhatsApp ou Photo cahier.',
      },
    ],
  },
  audiences: {
    eyebrow: 'Pour qui',
    title: 'Pensé pour votre façon de travailler.',
    soon: 'Bientôt',
    items: [
      {
        id: 'commerce',
        label: 'Commerce et boutiques',
        text: 'Suivez les articles, les ventes. Gardez une vue nette du stock au fil de la journée.',
        bullets: [
          'Vendus par unité, par lot ou au poids',
          'Vente au détail ou en gros',
          'Stock mis à jour après chaque vente',
        ],
        available: true,
      },
      {
        id: 'prestataires',
        label: 'Prestataires de services',
        text: 'Suivez les services et les produits vendus. Gardez une vue nette du stock au fil de la journée.',
        bullets: [
          'Services réalisés',
          'Produits utilisés ou vendus',
          
        ],
        available: true,
      },
      
      {
        id: 'salons',
        label: 'Salons de coiffure',
        text: "Réunissez les services et les produits vendus. Suivez simplement l'activité de l'équipe.",
        bullets: ['Services réalisés', 'Produits utilisés ou vendus'],
        available: false,
      },
      {
        id: 'supermarches',
        label: 'Supermarchés',
        text: "Gardez le rythme du comptoir sans perdre la vue d'ensemble. Les mouvements restent faciles à retrouver.",
        bullets: ['Lecture des codes-barres', 'Clôture de caisse', 'Alertes sur les produits bas'],
        available: false,
      },
      {
        id: 'associations',
        label: 'Églises et associations',
        text: 'Classez les entrées et dépenses selon leur usage. Rendez la situation lisible aux personnes autorisées.',
        bullets: ['Dons classés par fonds', 'Dépenses par activité', 'Accès adaptés à chaque rôle'],
        available: true,
      },
    ],
  },
  roles: {
    eyebrow: 'Chacun son accès',
    title: 'Les bonnes informations, aux bonnes personnes.',
    description: "Trois niveaux d'accès. Chaque personne ne voit que ce dont elle a besoin.",
    peopleHeader: 'Action',
    columns: ['Vendeur', 'Directeur général', 'Comptable'],
    yes: 'Autorisé',
    no: 'Non autorisé',
    rows: [
      ['Enregistrer les ventes', true, true, false],
      ['Voir toutes les ventes', false, true, true],
      ['Voir les marges', false, true, true],
      ['Enregistrer les dépenses', false, true, true],
      ['Gérer les taxes', false, true, true],
      ['Voir la situation financière', false, true, true],
    ] as const,
  },
  pricing: {
    eyebrow: 'Abonnement',
    title: 'Choisissez le pack qui vous convient.',
    description:
      'CLEAR est proposé en trois packs. Comparez-les pour choisir celui qui vous correspond.',
    included: 'Ce pack inclut',
    plans: [
      {
        name: 'Power',
        price: 'Gratuit',
        period: 'sans engagement',
        description: "L'essentiel pour démarrer sans frais.",
        features: [
          'Gestion des stocks',
          'Gestion des revenus',
          'Gestion des dépenses',
          'Tenue de la comptabilité',
          'Bilan financier',
          'Suivi fiscal adapté au régime fiscal de votre entreprise',
        ],
        featured: false,
      },
      {
        name: 'Wealth',
        price: '3 000 FCFA',
        period: 'par mois',
        description: 'Power, avec vos comptes suivis à la voix.',
        features: [
          'Tout le pack Power',
          'Relevés de ventes et dépenses par vocal WhatsApp',
          'Bilan Financier dans la langue locale de votre choix: Éwé, Kotokoli, Kabyè, Haoussa, Dioula, Wolof, etc.',
        ],
        featured: true,
      },
      {
        name: 'Glory',
        price: '7 000 FCFA +',
        period: 'par mois',
        description: 'Wealth, avec un accompagnement sur mesure.',
        features: [
          'Tout le pack Wealth',
          'Accompagnement personnalisé par un expert-comptable et fiscaliste',
          'Accompagnement pour accès au crédit',
        ],
        featured: false,
      },
    ],
    cta: 'Demander une démo',
    note: 'Prix indiqués en FCFA par mois. Contactez-nous pour en savoir plus.',
  },
  form: {
    eyebrow: 'Accès anticipé',
    title: 'Parlons de votre organisation.',
    description: 'Laissez vos coordonnées. Nous vous recontacterons pour comprendre vos besoins.',
    fields: {
      name: { label: 'Nom', placeholder: 'Votre nom' },
      contact: {
        label: 'E-mail ou numéro WhatsApp',
        placeholder: 'vous@exemple.com ou +225…',
      },
      organisation: {
        label: "Type d'organisation",
        placeholder: 'Choisir un profil',
      },
      message: {
        label: 'Message (facultatif)',
        placeholder: 'Parlez-nous de votre activité',
      },
    },
    organisations: [
      'Boutique de tissus ou vêtements',
      'Salon de coiffure',
      'Supermarché',
      'Église ou association',
      'PME',
    ],
    submit: 'Demander une démo',
    submitting: 'Envoi en cours…',
    consent:
      "J'accepte que CLEAR utilise ces coordonnées pour me recontacter au sujet de ma demande et de ses services.",
    privacyNotice:
      'Vos données sont utilisées uniquement pour répondre à cette demande. Consultez la politique de confidentialité.',
    successTitle: 'Merci, votre demande est bien partie.',
    successText: 'Nous vous recontacterons avec les prochaines étapes.',
    retry: 'Réessayer',
    errors: {
      name: 'Indiquez votre nom.',
      contact: 'Indiquez un e-mail ou un numéro WhatsApp.',
      organisation: "Choisissez un type d'organisation.",
      consent: 'Votre accord est nécessaire pour vous recontacter.',
      submit: "L'envoi a échoué. Réessayez dans un instant.",
    },
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Des réponses simples, avant de commencer.',
    items: [
      {
        question: 'Ça marche sans internet ?',
        answer:
          'Oui. Les ventes peuvent être enregistrées hors connexion, puis synchronisées quand la connexion revient.',
      },
      {
        question: 'Mes données sont-elles séparées de celles des autres ?',
        answer:
          "Oui. Les données de chaque organisation sont isolées, et chaque modification est enregistrée dans un journal d'audit.",
      },
      {
        question: 'Est-ce que ça remplace mon comptable ?',
        answer:
          'Non. Votre comptable a son propre rôle. Il peut vérifier les informations et les exporter.',
      },
      {
        question: 'Je peux parler en langue locale ?',
        answer:
          "La saisie vocale commence en français. D'autres langues sont prévues, sans date annoncée pour le moment.",
      },
      {
        question: 'Combien ça coûte ?',
        answer:
          'Les packs Power (gratuit), Wealth (3 000 FCFA/mois) et Glory (à partir de 7 000 FCFA/mois) sont présentés dans la section Tarifs.',
      },
    ],
  },
  finalCta: {
    title: 'Parlez ou photographiez. Gardez le contrôle.',
    text: "Gagnez du temps sans changer vos habitudes : l'application prépare le travail, vous vérifiez avant que tout soit enregistré.",
    button: 'Demander une démo',
  },
  footer: {
    text: 'La gestion financière pratique pour les TPE et PME africaines.',
    contactTitle: 'Contact',
    email: '[PLACEHOLDER: e-mail]',
    phone: '[PLACEHOLDER: téléphone]',
    privacy: 'Politique de confidentialité',
    cookieSettings: 'Gérer les cookies',
    legal: 'CLEAR',
  },
  api: {
    invalid: 'Données invalides.',
    ok: 'Demande reçue.',
  },
  seo: {
    title: 'CLEAR — Gérez vos finances à la voix',
    description:
      "Enregistrez ventes, dépenses et stocks dans l'application, par vocal WhatsApp ou avec une photo de votre cahier.",
  },
} as const

export type FeatureItem = (typeof fr.features.items)[number]
