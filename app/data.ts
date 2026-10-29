export type Picture = { src: string; alt: string };

export type Project = {
  name: string;
  title: string;
  kind: string;
  year: string;
  description: string;
  stack: string;
  link?: string;
  picture?: Picture;
};

export const projects: Project[] = [
  {
    name: "Parc",
    title: "Gestion de parc informatique",
    kind: "Application métier",
    year: "2026",
    description:
      "Application web interne développée chez Général Frigorifique France pour suivre les PC : inventaire, affectation, renouvellement.",
    stack: "Développement web · outil interne",
    picture: {
      src: "/images/ibm-card-storage-nara.jpg",
      alt: "Entrepôt de boîtes de cartes perforées IBM en 1959, archives nationales américaines",
    },
  },
  {
    name: "ERP",
    title: "ERP HazielDev",
    kind: "Stage · back-end et infra",
    year: "2023",
    description:
      "API REST d'un ERP en Java avec Spark, front-end maison, et toute la chaîne : Gitea, intégration continue Drone, Docker sur Proxmox.",
    stack: "Java · Spark · MariaDB · Docker · Drone CI",
    picture: {
      src: "/images/ibm-card-punch-51333058324.jpg",
      alt: "Perforatrice de cartes IBM 129 exposée dans un musée",
    },
  },
  {
    name: "Finances",
    title: "Mes Finances",
    kind: "Application de bureau",
    year: "2026",
    description:
      "Gestion de budget : import de relevés bancaires, catégorisation des dépenses, base locale et outil en ligne de commande.",
    stack: "Electron · Node.js · SQLite",
  },
  {
    name: "Cercles",
    title: "Générateur de cercles magiques",
    kind: "Outil web",
    year: "2026",
    description:
      "Textures par couches avec aperçu animé en temps réel. Exporte des PNG, des archives ZIP et un script Luau prêt pour Roblox.",
    stack: "JavaScript · Canvas · SVG · Luau",
    picture: {
      src: "/images/projets/cercles-magiques.jpg",
      alt: "Capture du générateur de cercles magiques : un cercle doré de runes au centre, les couches à gauche, les réglages à droite",
    },
  },
  {
    name: "Brawler",
    title: "Jeu de combat Roblox",
    kind: "Jeu multijoueur",
    year: "2026",
    description:
      "Jeu de combat inspiré de Smash et Brawlhalla, avec héros, armes et arènes. Conception documentée dans un wiki Obsidian.",
    stack: "Luau strict · Rojo · Git",
    picture: {
      src: "/images/men-fencing-engraving-by-j-gelle.jpg",
      alt: "Gravure ancienne de J. Gelle montrant des escrimeurs en garde dans une architecture à colonnes",
    },
  },
  {
    name: "Anti VPN",
    title: "MC Anti VPN",
    kind: "Plugin Minecraft",
    year: "2024",
    description:
      "Bloque les connexions via VPN en vérifiant les adresses IP auprès d'une API externe. Publié sur SpigotMC, Modrinth et GitHub.",
    stack: "Java · API Spigot · API REST",
    link: "https://modrinth.com/plugin/mc-anti-vpn",
  },
  {
    name: "H2Oh",
    title: "H2Oh",
    kind: "Plugin Minecraft",
    year: "2024",
    description:
      "Ajoute une mécanique d'hydratation : les joueurs doivent boire régulièrement pour rester en forme. Publié sur Modrinth et GitHub.",
    stack: "Java · API Spigot",
    link: "https://modrinth.com/plugin/h2oh",
  },
  {
    name: "Rescue",
    title: "Site Rescue Electro Informatique",
    kind: "Site vitrine · stage BTS SIO",
    year: "2025",
    description:
      "Refonte du site de la boutique sous WordPress à partir des besoins du gérant : plugins, SEO, contenu et mise en ligne.",
    stack: "WordPress · PHP · SEO",
    link: "https://rescuenow.fr/",
    picture: {
      src: "/images/projets/rescue.jpg",
      alt: "Page d'accueil du site Rescue Electro Informatique",
    },
  },
  {
    name: "Modrinth",
    title: "Traduction Modrinth",
    kind: "Open source",
    year: "2024",
    description: "Contribution à la traduction française du site et de l'application Modrinth via Crowdin.",
    stack: "Crowdin · traduction",
    link: "https://crowdin.com/project/modrinth-platform",
  },
];

export type CareerRow = { what: string; where: string; detail: string; when: string };

export const experience: CareerRow[] = [
  { what: "Auditeur IT", where: "Codeo", detail: "Diagnostic de 30 PC par jour, effacement RGPD", when: "Août – oct. 2026" },
  { what: "Équipier polyvalent", where: "Burger King", detail: "Restauration rapide", when: "Juin – août 2026" },
  { what: "Gestionnaire de parc", where: "Général Frigorifique France", detail: "Support N1/N2, application interne", when: "Févr. – mars 2026" },
  { what: "Développeur web et technicien", where: "Rescue Electro Informatique", detail: "Stage BTS SIO, site WordPress", when: "Mai – juil. 2025" },
  { what: "Technicien helpdesk", where: "Helpline", detail: "Intérim, client Crédit Agricole", when: "Juin – août 2024" },
  { what: "Développeur et sysadmin", where: "HazielDev", detail: "Stage, ERP Java et infrastructure", when: "Mars – juin 2023" },
];

export const education: CareerRow[] = [
  { what: "BTS SIO, option SLAM", where: "1re année validée", detail: "Développement d'applications", when: "2024 – 2025" },
  { what: "Bac pro SN, option RISC", where: "Lycée Auguste Chevrollier, Angers", detail: "Réseaux et systèmes", when: "2021 – 2024" },
  { what: "Cisco IT Essentials", where: "Cisco Networking Academy", detail: "Certification", when: "Obtenue" },
  { what: "SecNum", where: "ANSSI", detail: "Sécurité numérique", when: "Obtenue" },
  { what: "SST", where: "Sauveteur secouriste du travail", detail: "Certification", when: "Obtenue" },
  { what: "Introduction to Cloud Computing", where: "IBM Developer Skills Network", detail: "Formation en ligne", when: "En cours" },
];

export const skills: { group: string; items: string }[] = [
  { group: "Back-end", items: "Java, Spark, Spring Boot, Node.js, Express, PHP, Go, Python, API REST, MariaDB et SQL" },
  { group: "Front-end", items: "Vue.js, JavaScript, TypeScript, React et Next.js, HTML et CSS, Tailwind, WordPress" },
  { group: "Desktop et outils", items: "Electron, SQLite, scraping, Git" },
  { group: "DevOps et infra", items: "Docker, Gitea, Drone CI, Proxmox, pfSense, Linux Debian" },
  { group: "Terrain", items: "Active Directory, Office 365, support N1/N2, gestion de parc" },
];

export const credits = [
  { title: "Métier à tisser Jacquard 01 (vidéo)", creator: "Bastenbas", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:M%C3%A9tier_%C3%A0_tisser_Jacquard_01.webm" },
  { title: "A Jacquard loom showing information punchcards, National Museum of Scotland", creator: "Stephencdickson", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:A_Jacquard_loom_showing_information_punchcards,_National_Museum_of_Scotland.jpg" },
  { title: "Portrait of Joseph Marie Jacquard, 1839", creator: "d'après Claude Bonnefond, Art Institute of Chicago", license: "Domaine public (CC0)", page: "https://www.artic.edu/artworks/25974" },
  { title: "Longue traboule Lyon 9", creator: "Chabe01", license: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Longue_traboule_Lyon_9.jpg" },
  { title: "Traboule de Lyon 026", creator: "Tusco", license: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Traboule_de_Lyon_026.JPG" },
  { title: "Un bus TCL Grande Rue de la Croix-Rousse", creator: "Benoît Prieur", license: "CC0", page: "https://commons.wikimedia.org/wiki/File:Un_bus_TCL_Grande_Rue_de_la_Croix-Rousse_(Lyon)_en_janvier_2022.jpg" },
  { title: "IBM card storage, 1959", creator: "NARA", license: "Domaine public", page: "https://commons.wikimedia.org/wiki/File:IBM_card_storage.NARA.jpg" },
  { title: "IBM Card punch", creator: "Steve Elliott from UK", license: "CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:IBM_Card_punch_(51333058324).jpg" },
  { title: "Men fencing, engraving by J. Gelle", creator: "Wellcome Collection", license: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:Men_fencing._Engraving_by_J._Gelle._Wellcome_V0041151.jpg" },
];
