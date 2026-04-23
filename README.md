# Portfolio React/Next.js

Une base moderne pour créer votre portfolio en React avec Next.js, remplaçant votre ancienne version Vue.js.

## 🚀 Démarrage rapide

Le serveur de développement est déjà lancé sur [http://localhost:3001](http://localhost:3001).

## 📁 Structure du projet

```
portfolioV2/
├── app/
│   ├── components/
│   │   ├── index.ts           # Export centralisé des composants
│   │   ├── Navigation.tsx     # Barre de navigation
│   │   ├── HeroSection.tsx    # Section d'accueil avec présentation
│   │   ├── AboutSection.tsx   # Section "À propos"
│   │   ├── SkillsSection.tsx  # Section compétences
│   │   ├── ProjectsSection.tsx # Section projets
│   │   ├── ContactSection.tsx # Section contact (Client Component)
│   │   ├── Footer.tsx         # Pied de page
│   │   └── ProfileImage.tsx   # Composant image avec fallback (Client)
│   ├── globals.css            # Styles globaux avec Tailwind CSS
│   ├── layout.tsx             # Layout principal de l'application
│   └── page.tsx               # Page d'accueil assemblant les composants
├── public/                    # Images et assets statiques
├── package.json               # Dépendances du projet
└── README.md                 # Ce fichier
```

## 🎨 Personnalisation

### 1. Informations personnelles
Modifiez les sections suivantes dans `app/page.tsx` :

- **Titre et nom** : Remplacez `[Votre Nom]` par votre nom réel
- **Photo de profil** : Ajoutez votre photo dans `public/` et mettez à jour le chemin
- **Informations de contact** : Email, téléphone, localisation
- **Liens sociaux** : LinkedIn, GitHub, Twitter

### 2. Sections du portfolio

#### À propos
- Modifiez la description de votre parcours
- Ajustez les statistiques (expérience, projets, etc.)
- Personnalisez les technologies affichées

#### Compétences
- Ajustez les pourcentages de compétences
- Ajoutez ou supprimez des technologies
- Modifiez les catégories (Frontend, Backend, Outils)

#### Projets
- Remplacez les projets exemples par vos vrais projets
- Ajoutez des images de projets dans `public/`
- Mettez à jour les descriptions et technologies
- Ajoutez les liens vers les projets en ligne et le code source

#### Contact
- Le formulaire est prêt à être connecté à un service backend
- Ajoutez vos vraies informations de contact

### 3. Stylisation

Le portfolio utilise **Tailwind CSS v4** avec un thème sombre/clair automatique.

- **Couleurs** : Modifiez les classes Tailwind pour changer les couleurs
- **Layout** : Ajustez les grilles et espacements selon vos besoins
- **Responsive** : Le design est déjà responsive, mais vous pouvez l'affiner

## 🏗️ Architecture des composants

Le portfolio est organisé en composants modulaires pour une meilleure maintenabilité :

### Server Components (par défaut)
- `Navigation` - Barre de navigation sticky
- `HeroSection` - Section d'accueil avec présentation
- `AboutSection` - Section "À propos de moi"
- `SkillsSection` - Section des compétences avec barres de progression
- `ProjectsSection` - Section des projets
- `Footer` - Pied de page

### Client Components (avec `'use client'`)
- `ContactSection` - Formulaire de contact (nécessite des event handlers)
- `ProfileImage` - Image de profil avec gestion d'erreur

### Avantages de cette architecture :
- ✅ **Performance** : Server Components pour le contenu statique
- ✅ **Interactivité** : Client Components seulement quand nécessaire
- ✅ **Maintenabilité** : Chaque section dans son propre fichier
- ✅ **Réutilisabilité** : Composants faciles à modifier individuellement
- ✅ **TypeScript** : Typage complet pour tous les composants

## 📱 Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Mode sombre/clair automatique
- ✅ Navigation fluide avec ancres
- ✅ Animations et transitions
- ✅ Formulaire de contact
- ✅ Sections organisées et professionnelles

## 🚀 Déploiement

Pour déployer votre portfolio :

1. **Vercel** (recommandé pour Next.js) :
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify** :
   ```bash
   npm run build
   # Déployez le dossier .next
   ```

3. **GitHub Pages** :
   Configurez les GitHub Actions pour le déploiement automatique

## 🔧 Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Construit l'application pour la production
npm run start    # Démarre le serveur de production
npm run lint     # Vérifie le code avec ESLint
```

## 📝 Prochaines étapes

1. **Remplacez le contenu** par vos informations personnelles
2. **Ajoutez vos projets** avec descriptions détaillées
3. **Personnalisez le design** selon vos préférences
4. **Ajoutez des animations** supplémentaires si souhaité
5. **Connectez le formulaire** à un service (EmailJS, Formspree, etc.)
6. **Optimisez les performances** (images, lazy loading, etc.)

## 💡 Migration depuis Vue.js

Si vous migrez depuis Vue.js, voici les équivalences :

- `v-if` / `v-show` → conditionnels JSX (`{condition && <Component />}`)
- `v-for` → `.map()` en JSX
- `v-bind` → props JSX
- `v-on` → event handlers JSX
- `data()` → `useState()` hooks
- `computed` → `useMemo()` hooks
- `mounted` → `useEffect()` avec tableau vide

Profitez de la puissance de React et Next.js ! 🎉
