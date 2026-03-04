# PRD — Portfolio Velesky

**Dernière mise à jour :** Mars 2026 · **Propriétaire :** Yao Dapré Georges Emmanuel (Velesky)

---

## Description du Projet

**Quoi :** Portfolio personnel interactif de **Yao Dapré Georges Emmanuel (Velesky)**, développeur junior spécialisé backend avec une forte vibe créative — une expérience immersive qui met en avant le craft technique et l'univers personnel.

**Problème :** La plupart des portfolios de développeurs sont plats, génériques et rapidement oubliés. Celui-ci doit marquer les esprits en quelques secondes : raconter une histoire, montrer du caractère, et donner envie immédiate de contacter.

**Public cible :** Recruteurs tech (startups, agences, freelances), studios créatifs, développeurs curieux, et toute personne intéressée par un "vibe coder" basé en Côte d'Ivoire.

---

## Objectif Principal

Livrer un portfolio **dark minimaliste ultra-mémorable**, performant (Lighthouse > 92–95), qui se vit comme une **expérience immersive** plutôt qu'une simple CV en ligne. Le visiteur doit repartir avec :  
- une impression forte et unique  
- l’envie claire de contacter  
- le sentiment d’avoir rencontré une personne authentique et créative

---

## Propriétaire — Données Personnelles (Source de vérité)

> ⚠️ **Toujours vérifier cette section avant toute modification de contenu ou de code.**

### Identité

| Champ          | Valeur                                      |
|----------------|---------------------------------------------|
| Nom complet    | Yao Dapré Georges Emmanuel                  |
| Pseudo / Handle| Velesky                                     |
| Titre          | Développeur Junior · BTS IDA · ASTC Abidjan |
| Localisation   | Abidjan, Côte d'Ivoire 🇨🇮                  |
| Disponibilité  | Remote                                      |

### Contact & Réseaux

| Réseau   | Lien                              |
|----------|-----------------------------------|
| Email    | emmanueldapre1@gmail.com          |
| GitHub   | https://github.com/velesky        |
| LinkedIn | _(à ajouter dès que créé)_        |
| Twitter/X| _(à ajouter dès que créé)_        |

### Photos

| Fichier     | Usage                              | Emplacement public                  |
|-------------|------------------------------------|-------------------------------------|
| `moi2.webp` | Photo principale — Section À propos| `/assets/images/moi/moi2.webp`      |
| `bg3.webp`  | Usage LinkedIn / réseaux (non portfolio) | —                               |
| `moi1.webp` | Réserve                            | —                                   |

### Bio (texte exact pour section À propos)

> Étudiant en 2ème année de BTS IDA (Informatique Développeur d'Application) à l'Académie des Sciences Technologiques et Comptables (ASTC) d'Abidjan. Spécialisé en développement backend, j’explore le frontend en totale autonomie. Je me définis comme **vibe coder** : j’expérimente, je construis avec intention, et je donne une identité unique à chaque projet. J’utilise l’intelligence artificielle comme véritable partenaire de code — pour accélérer le frontend et booster ma créativité. Je sais où je vais, et je bâtis mes compétences avec méthode et audace.

### Stats (section À propos — animées au scroll)

| Valeur | Label                      |
|--------|----------------------------|
| 4      | Projets construits         |
| 2A     | BTS IDA · ASTC             |
| 5+     | Stacks maîtrisées          |
| 🇨🇮     | Abidjan, CI                |

### Projets (source de vérité — 4 projets pour MVP)

#### 01 — CASIER CHAP
- **Statut**     : Public (GitHub)
- **Lien**       : https://github.com/velesky/Casier-shap
- **Description** : App mobile 100% hors-ligne de gestion de stocks et ventes pour commerces de proximité en Côte d'Ivoire. Mode sombre premium, glassmorphisme, usage à une main optimisé.
- **Stack**      : Flutter · Riverpod · Hive · GoRouter · CI/CD GitHub Actions
- **Badge**      : `badge-flutter`

#### 02 — iWAKILL
- **Statut**     : Privé
- **Description** : E-commerce complet de vente d'iPhones neufs & quasi-neufs — catalogue, panier, checkout, espace compte client et authentification. Export statique optimisé.
- **Stack**      : Next.js (App Router) · TypeScript · Zustand · React Hook Form · Zod · Tailwind CSS · Sonner
- **Badge**      : `badge-next`

#### 03 — LOGIFLOW
- **Statut**     : Privé
- **Description** : Tableau de bord logistique avec visualisation 3D de flotte (Three.js), 150 livraisons simulées en temps réel, KPIs métiers et animations Framer Motion.
- **Stack**      : Vite · React 18 · TypeScript · Three.js (@react-three/fiber) · Framer Motion · Zustand · React Query · Tailwind CSS
- **Badge**      : `badge-vite`

#### 04 — MATHS CI
- **Statut**     : Privé
- **Description** : Site vitrine pédagogique pour valoriser les mathématiques en Côte d'Ivoire. Animations GSAP + ScrollTrigger, sections narratives, direction artistique soignée.
- **Stack**      : Next.js 15 (App Router) · TypeScript · GSAP · ScrollTrigger · Tailwind CSS · lucide-react
- **Badge**      : `badge-next`

### Compétences (affichées avec barres de progression animées)

| Nom         | Description                                                                 | Niveau |
|-------------|-----------------------------------------------------------------------------|--------|
| BACKEND     | Ma spécialité. APIs REST, logique serveur, bases de données, architecture propre. | 80%    |
| FRONTEND    | React, Next.js 15, Tailwind CSS — appris en autonomie, affiné avec l'IA.    | 72%    |
| MOBILE      | Flutter & Dart, Riverpod, Hive — apps hors-ligne pour le marché ivoirien.   | 68%    |
| VIBE & UI   | GSAP, Framer Motion, Three.js, dark UX — créer des interfaces qui résonnent.| 75%    |
| IA-DRIVEN   | Prompting avancé, intégration LLM dans le workflow, l'IA comme partenaire.  | 85%    |
| OUTILLAGE   | TypeScript, Git, Zustand, React Query, Zod, Prisma, Supabase, Vite, Vercel. | 78%    |

---

## Fonctionnalités

### MVP (Indispensables)

1. Hero animé (titre reveal + parallax léger + baseline + double CTA)
2. Section Projets (grid interactif, hover reveal vert acidulé, tags/badges, lien GitHub)
3. Section À propos (photo + bio + stats counters animés au scroll)
4. Section Compétences (cartes + barres de progression déclenchées au viewport)
5. Section Contact (mailto: email + icônes réseaux sociaux)
6. Navigation fixe (responsive, évolue au scroll — shrink + bg subtle)
7. Animations & micro-interactions (curseur custom trailing/glow #c8f04a, reveal scroll, hover magnétiques/subtils)
8. Responsive 100% (mobile-first, tablette, desktop)

### Souhaitables (optimisations MVP)

9. Performance (Lighthouse > 92, images optimisées, lazy loading, pas de JS lourd)
10. SEO de base (Metadata dynamique, Open Graph, Twitter Cards, sitemap)

### V2 (post-MVP)

11. Pages dédiées par projet (avec screenshots, explications détaillées)
12. Toggle dark/light mode
13. Section Blog / Notes (réflexions vibe coding + IA)
14. Easter egg discret (ex: combo clavier ou hover caché)

---

## Exigences Techniques

**Stack retenue (MVP 2026)**  
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · lucide-react · Google Fonts

**Hébergement** : Vercel (déploiement auto depuis GitHub)

**Contraintes & objectifs**
- Architecture modulaire et claire (composants réutilisables, data séparée)
- Performance : Lighthouse 92+ (perf, SEO, accessibilité, best practices)
- Accessibilité : WCAG AA minimum (contrastes, navigation clavier, aria-labels)
- Animations : 60 fps min, uniquement `transform` + `opacity`, respect de `prefers-reduced-motion`
- Compatibilité : Chrome, Firefox, Safari, Edge (versions récentes)

---

## Design & Expérience Utilisateur

**Style visuel** : Dark minimaliste immersif — fond quasi-noir, typographie massive & bold, accent vert acidulé `#c8f04a` pour les points d'attention.

**Polices Google Fonts**
- Titres / Display : **Bebas Neue** (uppercase, bold, tracking large)
- Corps / Textes : **DM Mono** (monospace, 400–500)
- Accents / Italiques : **Playfair Display Italic**

**Palette principale**
- Fond principal     : `#080808`
- Accent / CTAs      : `#c8f04a` (vert acidulé neon)
- Texte principal    : `#e8e4dc` (off-white chaud)
- Texte muted / subtle : `#555555`
- Borders / dividers : `#1a1a1a`

**Règles d’animation strictes**
- 60 fps minimum
- Utiliser uniquement `transform` et `opacity` pour les mouvements (jamais left/top/width/height)
- Respect total de `@media (prefers-reduced-motion: reduce)`
- Curseur custom : cercle trailing + glow vert sur éléments interactifs
- Hovers : scale léger, glow accent, magnétique subtil sur CTA
- Reveal au scroll : fade + slide-up via Framer Motion (viewport once)
