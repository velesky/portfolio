# Velesky Portfolio 🚀

Ce dépôt contient le code source de mon portfolio professionnel, développé avec une **architecture modulaire stricte Next.js 15 App Router**. Le design est immersif, minimaliste et dark (thème sombre), pensé pour refléter l'identité "Vibe Coder".

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?logo=framer)

## 📸 Aperçu

![Section Projets](/public/assets/images/screenshots/capture1.png)
![Hero Section](/public/assets/images/screenshots/capture2.png)
![Section Contact](/public/assets/images/screenshots/capture3.png)
![Section Compétences](/public/assets/images/screenshots/capture4.png)

## 🌟 Fonctionnalités Principales

- **Architecture Modulaire** : Séparation stricte des responsabilités (UI, Layout, Sections, Data, Lib).
- **Mode Sombre Immersif** : Design ultra-minimaliste (Fond `#080808`, Accent `#c8f04a`).
- **Animations Avancées** : Intégration profonde de Framer Motion (Scroll Reveals, Hover effects, Curseur Trailing dynamique).
- **Responsive 100% Mobile First** : Optimisé pour tous les écrans, du mobile aux écrans ultra-larges.
- **Performance et SEO** : Composants serveurs (Next.js App Router), typographie optimisée, et balises meta intelligentes.

## 🛠️ Stack Technique

- **Framework** : Next.js 15.x (React 19)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Animation** : Framer Motion
- **Déploiement** : Vercel
- **Qualité de code** : ESLint, Prettier, Husky, Lint-Staged

## 📦 Installation et Lancement

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/velesky/portfolio.git
   cd portfolio
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 🏗️ Architecture du Projet

Le projet suit une organisation stricte par domaine :

- `/app` : Pages et layouts globaux (Next.js App Router).
- `/components/layout` : Composants de structure persistants (Navigation, Pied de page).
- `/components/sections` : Sections majeures de la page d'accueil (Hero, Projets, À propos, etc.).
- `/components/ui` : Composants interactifs réutilisables (Boutons, Curseur, Cartes).
- `/data` : Sources de données statiques (Projets, Compétences).
- `/lib` : Utilitaires, constantes et helpers (Framer Motion variants, classes Tailwind).
- `/public` : Ressources publiques, images et polices statiques.

## 🤝 Contribution

Ce projet est mon portfolio personnel, mais les retours et suggestions sont toujours les bienvenus !

---

_Fait avec passion 💚 par [Yao Dapré Georges Emmanuel (Velesky)](https://github.com/velesky)_
