// native : largeur d'affichage en px (capture prise en 2x) pour garder le texte lisible ; offset : décalage vertical
export type Shot = { src: string; alt: string; url: string; position?: string; native?: number; offset?: number };

export type Project = {
  name: string;
  disciplines: string;
  summary: string;
  facts: string;
  link: string;
  linkLabel: string;
  shot: Shot;
};

// Projets mis en avant, avec une capture réelle de chacun
export const featured: Project[] = [
  {
    name: "McAntiVPN",
    disciplines: "Java · Spigot · API REST",
    summary:
      "Mon plugin Minecraft qui bloque les joueurs connectés via un VPN. Il interroge l'API IPHub et garde chaque IP en cache pour rester sous la limite gratuite de 1 000 requêtes par jour.",
    facts: "Code sur GitHub depuis 2023 · 139 téléchargements sur Modrinth",
    link: "https://modrinth.com/plugin/mc-anti-vpn",
    linkLabel: "Voir sur Modrinth",
    shot: { src: "/shots/anti-vpn-code.jpg", alt: "Le fichier PlayerConnectEvent.java de McAntiVPN ouvert sur GitHub", url: "github.com/TwitmundDev/McAntiVPN", position: "0% 34%", native: 1246, offset: 230 },
  },
  {
    name: "H2Oh!",
    disciplines: "Java · Paper · Gameplay",
    summary:
      "Un plugin qui ajoute la soif au jeu : jauge configurable, effets quand elle baisse, eau à boire pour la remonter, messages traduisibles.",
    facts: "Publié sur Modrinth en 2025 · 502 téléchargements",
    link: "https://modrinth.com/plugin/h2oh",
    linkLabel: "Voir sur Modrinth",
    shot: { src: "/shots/h2oh.jpg", alt: "Page Modrinth du plugin H2Oh avec 502 téléchargements", url: "modrinth.com/plugin/h2oh", position: "0% 0%", native: 930, offset: 0 },
  },
  {
    name: "Cercles magiques",
    disciplines: "JavaScript · Canvas · Luau",
    summary:
      "Un générateur de textures par couches avec aperçu animé en temps réel. Il exporte des PNG, des archives ZIP et un script Luau prêt à l'emploi dans Roblox.",
    facts: "Outil web sans build, ouvrable en double-clic",
    link: "https://github.com/TwitmundDev",
    linkLabel: "Mon GitHub",
    shot: { src: "/shots/cercles-magiques.jpg", alt: "Le générateur de cercles magiques : un cercle doré au centre, les couches à gauche, les réglages à droite", url: "MagicCircle Generator · index.html", position: "50% 50%" },
  },
  {
    name: "CVL Flower",
    disciplines: "Vue.js · Spring Boot · MongoDB",
    summary:
      "Le site de vente de fleurs du conseil de la vie lycéenne de mon lycée : front en Vue.js avec Vite et Chart.js, API Spring Boot avec authentification JWT.",
    facts: "Vue 50 % · Java 36 % du code",
    link: "https://github.com/TwitmundDev/CVL-FLOWER",
    linkLabel: "Voir le code",
    shot: { src: "/shots/cvl-flower.jpg", alt: "Le dépôt GitHub CVL-FLOWER avec ses dossiers cvlApi et cvlfront et ses langages", url: "github.com/TwitmundDev/CVL-FLOWER", position: "0% 0%", native: 1228, offset: 0 },
  },
];

export type OtherProject = { name: string; what: string; stack: string; year: string; link?: string };

export const others: OtherProject[] = [
  { name: "Gestion de parc", what: "Application web interne de suivi des PC, Général Frigorifique France", stack: "Développement web", year: "2026" },
  { name: "Mes Finances", what: "Application de bureau de budget : relevés bancaires, catégories, outil en ligne de commande", stack: "Electron · SQLite", year: "2026" },
  { name: "Jeu de combat Roblox", what: "Jeu multijoueur type Smash, avec héros, armes et arènes", stack: "Luau · Rojo", year: "2026" },
  { name: "Rescue Electro Informatique", what: "Refonte du site de la boutique pendant mon stage de BTS", stack: "WordPress", year: "2025", link: "https://rescuenow.fr/" },
  { name: "DTI Codes", what: "Référence des codes du jeu Roblox DTI", stack: "Vue.js", year: "2025", link: "https://github.com/TwitmundDev/dti-codes" },
  { name: "Keaver", what: "Backend de mon chef-d'œuvre de Première et Terminale", stack: "Spring Boot · MongoDB · JWT", year: "2024", link: "https://github.com/TwitmundDev/KeaverAll" },
  { name: "ERP HazielDev", what: "API REST d'un ERP et infrastructure Docker, Gitea, Drone", stack: "Java · Spark", year: "2023" },
  { name: "Redirection vhost Apache", what: "Script qui génère la configuration de redirection d'un site", stack: "Shell", year: "2023", link: "https://github.com/TwitmundDev/redirectVhostApacheScript" },
  { name: "Bot Discord MMR", what: "Bot qui affiche le classement League of Legends des joueurs", stack: "Python", year: "2022", link: "https://github.com/TwitmundDev/bot-discord-mmr-lol" },
  { name: "Discord Webhook UI", what: "Interface pour envoyer des webhooks Discord", stack: "Python", year: "2021", link: "https://github.com/TwitmundDev/DisocrdWebhookUI" },
];

export type CareerRow = { when: string; what: string; note: string; kind: string };

export const career: { tab: string; rows: CareerRow[] }[] = [
  {
    tab: "Expérience",
    rows: [
      { when: "Août – oct. 2026", what: "Auditeur IT · Codeo", note: "Diagnostic de 30 PC par jour, effacement des données conforme au RGPD", kind: "" },
      { when: "Juin – août 2026", what: "Équipier polyvalent · Burger King", note: "Restauration rapide", kind: "" },
      { when: "Févr. – mars 2026", what: "Gestionnaire de parc · GFF", note: "Support N1/N2 et application web interne de gestion du parc", kind: "" },
      { when: "Mai – juil. 2025", what: "Développeur web · Rescue Electro", note: "Refonte du site WordPress, réparation de PC et smartphones", kind: "Stage" },
      { when: "Juin – août 2024", what: "Technicien helpdesk · Helpline", note: "Support à distance pour le Crédit Agricole, tickets METIS", kind: "Intérim" },
      { when: "Mars – juin 2023", what: "Développeur et sysadmin · HazielDev", note: "ERP en Java avec Spark, infrastructure Proxmox, Docker, Drone CI", kind: "Stage" },
    ],
  },
  {
    tab: "Formation",
    rows: [
      { when: "2024 – 2025", what: "BTS SIO, option SLAM", note: "Développement d'applications, 1re année validée", kind: "BTS" },
      { when: "2021 – 2024", what: "Bac pro Systèmes numériques, RISC", note: "Lycée Auguste Chevrollier, Angers", kind: "Bac" },
    ],
  },
  {
    tab: "Certifications",
    rows: [
      { when: "Obtenue", what: "Cisco IT Essentials", note: "Matériel, systèmes et réseaux", kind: "Cisco" },
      { when: "Obtenue", what: "SecNum", note: "Sécurité numérique, ANSSI", kind: "ANSSI" },
      { when: "Obtenue", what: "SST", note: "Sauveteur secouriste du travail", kind: "INRS" },
      { when: "En cours", what: "Introduction to Cloud Computing", note: "IBM Developer Skills Network", kind: "IBM" },
    ],
  },
];

export const skills: { group: string; items: string }[] = [
  { group: "Back-end", items: "Java, Spring Boot, Spark, API Spigot et Paper, Node.js, PHP, Go, Python, MongoDB, MariaDB" },
  { group: "Front-end", items: "Vue.js, Vite, JavaScript, TypeScript, React et Next.js, Tailwind" },
  { group: "Outils", items: "Git, Docker, Gitea, Drone CI, Gradle, Electron, SQLite" },
  { group: "Systèmes", items: "Linux Debian, Proxmox, pfSense, Active Directory, Office 365" },
];

export const links = [
  { label: "GitHub", href: "https://github.com/TwitmundDev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ellwane-romdhame-aa1a88238/" },
  { label: "Modrinth", href: "https://modrinth.com/plugin/h2oh" },
  { label: "LeetCode", href: "https://leetcode.com/u/twitmunddev/" },
];

export const EMAIL = "contact@twitmund.fr";
