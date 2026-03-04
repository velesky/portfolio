# Structure du Projet — Portfolio Velesky

**Dernière mise à jour :** Mars 2026 · **Stack :** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## Architecture Modulaire & Scalable (MVP 2026)

```
portfolio-velesky/
│
├── app/                              # Routes & layout principal (App Router)
│   ├── layout.tsx                    # Layout racine : polices, metadata, providers (NextThemes, FramerMotion), curseur global
│   ├── page.tsx                      # Page d'accueil → composition des sections (Hero + Projets + À propos + Compétences + Contact)
│   ├── globals.css                   # Tailwind + variables CSS custom + resets
│   ├── favicon.ico                   # Favicon
│   └── not-found.tsx                 # Page 404 stylisée (optionnel mais recommandé)
│
├── components/                       # Tous les composants React réutilisables
│   ├── layout/                       # Éléments persistants sur toutes les pages
│   │   ├── Navigation.tsx            # Barre fixe responsive, shrink au scroll
│   │   └── PiedDePage.tsx            # Footer minimal avec copyright + liens
│   │
│   ├── sections/                     # Blocs principaux de la page d'accueil
│   │   ├── HeroSection.tsx           # Titre reveal + parallax léger + baseline + CTAs
│   │   ├── ProjetsSection.tsx        # Grid de cartes projets avec hover reveal
│   │   ├── AProposSection.tsx        # Photo + bio + stats animées (compteurs)
│   │   ├── CompetencesSection.tsx    # Cartes + barres de progression au viewport
│   │   └── ContactSection.tsx        # Email mailto + icônes réseaux (GitHub pour MVP)
│   │
│   ├── ui/                           # Atomes & molécules réutilisables
│   │   ├── CurseurPersonnalise.tsx   # Curseur custom trailing + glow #c8f04a
│   │   ├── CarteProjet.tsx           # Carte individuelle projet (image, titre, stack, lien)
│   │   ├── BadgeStack.tsx            # Badges par techno (Flutter, Next.js, etc.)
│   │   ├── BarreProgression.tsx      # Barre animée pour compétences (%)
│   │   ├── RevealAuScroll.tsx        # Wrapper Framer Motion pour reveal au viewport
│   │   └── ButtonMagnetic.tsx        # Bouton CTA avec effet hover magnétique subtil
│   │
│   └── shared/                       # Très petits helpers (optionnel)
│       └── SectionLabel.tsx          # Label "À propos", "Compétences", etc.
│
├── data/                             # Données statiques (source de vérité)
│   ├── projets.ts                    # Array typé des 4 projets (titre, description, stack, lien, badge)
│   └── competences.ts                # Array des compétences (nom, description, niveau %)
│
├── lib/                              # Utilitaires purs
│   ├── animations.ts                 # Variants Framer Motion réutilisables
│   ├── cn.ts                         # class-variance-authority / clsx helper
│   └── constants.ts                  # Couleurs, polices, breakpoints custom
│
├── public/                           # Assets statiques
│   ├── assets/
│   │   └── images/
│   │       └── moi/
│   │           └── moi2.webp         # Photo principale À propos
│   ├── images/
│   │   └── projets/                  # Screenshots (optionnel MVP, à ajouter pour V2)
│   │       ├── casier-chap.webp
│   │       ├── iwakill.webp
│   │       ├── logiflow.webp
│   │       └── maths-ci.webp
│   └── og-image.jpg                  # Image Open Graph 1200×630
│
├── types/                            # Définitions TypeScript
│   ├── projet.ts                     # Interface Projet
│   └── competence.ts                 # Interface Competence
│
├── next.config.mjs                   # Config Next.js (images, etc.)
├── tailwind.config.ts                # Tailwind + couleurs custom (#c8f04a, etc.)
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md                         # Présentation publique + stack + setup
```

---

## Règles de Nommage (convention française + Next.js)

| Type                     | Convention          | Exemple                          |
|--------------------------|---------------------|----------------------------------|
| Composants React         | PascalCase          | `HeroSection.tsx`, `CarteProjet.tsx` |
| Dossiers                 | kebab-case          | `components/sections/`, `public/assets/` |
| Fichiers de données      | kebab-case ou camel | `projets.ts`, `competences.ts`   |
| Fichiers de types        | kebab-case          | `projet.ts`, `competence.ts`     |
| Variables / constantes   | camelCase           | `COULEUR_ACCENT`, `revealVariants` |
| Classes Tailwind custom  | kebab-case français | `bg-accent-green`, `text-off-white` |
| Images & assets          | kebab-case          | `moi2.webp`, `casier-chap.webp`  |

---

## Pourquoi cette structure ?

- **App Router** → Meilleure perf, streaming, Suspense, SEO natif
- **Composants séparés par rôle** → layout / sections / ui → facile à maintenir
- **Données statiques dans /data** → mise à jour simple (pas de CMS MVP)
- **Curseur global** → géré dans layout.tsx pour persistance
- **Scalable** → facile d’ajouter `/projets/[slug]/page.tsx` en V2
- **Performances** → next/image, lazy loading, Framer Motion optimisé

---

## Développement Local

```bash
# 1. Création du projet (exécuter une seule fois)
npx create-next-app@latest portfolio-velesky --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Dépendances clés à installer
npm install framer-motion lucide-react next-themes clsx tailwind-merge class-variance-authority

# 3. Lancement
npm run dev
# → http://localhost:3000
```

---

## Déploiement (Vercel – recommandé)

1. Pousser le repo sur GitHub (https://github.com/velesky/portfolio-velesky)
2. Aller sur https://vercel.com → New Project → Import Git Repository
3. Configurer (framework : Next.js, pas de build custom nécessaire)
4. Déploiement automatique à chaque push

Alternative rapide (drag & drop) :
- Zip le dossier → vercel.com → New Project → Upload