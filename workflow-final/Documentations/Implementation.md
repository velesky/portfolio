# Plan d'Implémentation — Portfolio Velesky

**Dernière mise à jour :** 4 Mars 2026 · **Stack :** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · lucide-react

---

## Fonctionnalités Ciblées MVP

| # | Fonctionnalité                              | Composant(s) principal(aux)                  | Priorité     |
|---|---------------------------------------------|----------------------------------------------|--------------|
| 1 | Section Hero (reveal + parallax léger)      | `HeroSection.tsx`                            | Indispensable |
| 2 | Curseur custom trailing + glow vert         | `CurseurPersonnalise.tsx`                    | Indispensable |
| 3 | Navigation fixe (shrink + bg au scroll)     | `Navigation.tsx`                             | Indispensable |
| 4 | Section Projets (grid + hover reveal)       | `ProjetsSection.tsx` + `CarteProjet.tsx`     | Indispensable |
| 5 | Section À propos (photo + bio + stats anim) | `AProposSection.tsx`                         | Indispensable |
| 6 | Section Compétences (barres progression)    | `CompetencesSection.tsx` + `BarreProgression.tsx` | Indispensable |
| 7 | Section Contact (mailto + réseaux)          | `ContactSection.tsx`                         | Indispensable |
| 8 | Reveal au scroll + micro-interactions       | `RevealAuScroll.tsx` + Framer Motion         | Indispensable |
| 9 | Responsive 100% + mobile-first              | Tailwind breakpoints                         | Indispensable |
|10 | SEO de base (metadata, OG, Twitter Cards)   | `layout.tsx` + `page.tsx`                    | Souhaitable  |
|11 | Performance Lighthouse > 92                 | next/image, lazy, optimisation               | Souhaitable  |
|12 | Pages projets détaillées                    | `/projets/[slug]/page.tsx` (V2)              | Optionnelle  |
|13 | Toggle dark/light mode                      | next-themes (V2)                             | Optionnelle  |

---

## Stages d'Implémentation (Next.js)

### Stage 1 : Initialisation & Fondation
**Durée estimée :** 1–2 heures

- [x] Créer le projet Next.js :
  ```bash
  npx create-next-app@latest portfolio-velesky --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
  ```
  Choisir : Oui pour Tailwind, App Router, src/, import alias.

- [x] Installer dépendances clés :
  ```bash
  npm install framer-motion lucide-react next-themes clsx tailwind-merge class-variance-authority
  npm install -D @types/node
  ```

- [x] Configurer `tailwind.config.ts` :
  - Ajouter couleurs custom (background, accent #c8f04a, etc.)
  - Ajouter fonts (Bebas Neue, DM Mono, Playfair Display) via extend.fontFamily

- [x] Configurer `globals.css` :
  - @tailwind base / components / utilities
  - Import Google Fonts via @import ou layout.tsx
  - Resets + custom cursor base (pointer-events-none, etc.)

- [x] Mettre à jour `layout.tsx` :
  - Importer polices Google (next/font/google)
  - Ajouter providers : NextThemesProvider (dark/light préparation)
  - Ajouter <CurseurPersonnalise /> global
  - Metadata de base (title, description, OG)

- [x] Créer dossiers : components/layout, components/sections, components/ui, data/, lib/, types/
- [x] Créer data/projets.ts et data/competences.ts (copier depuis PRD)

### Stage 2 : Composants de Base & Layout
**Durée estimée :** 4–6 heures

- [x] Implémenter `Navigation.tsx` :
  - useScroll pour toggle classe scrollée (bg-background/90 backdrop-blur)
  - Liens vers sections (smooth scroll via scrollIntoView ou next/link)

- [x] Implémenter `PiedDePage.tsx` :
  - Simple copyright + icônes GitHub (lucide-react)

- [x] Implémenter `CurseurPersonnalise.tsx` :
  - useMousePosition hook + Framer Motion pour trailing (animate x/y avec spring/lerp)
  - États agrandi sur hover (scale via variants)
  - Désactiver sur touch devices (useMediaQuery ou ontouchstart)

- [x] Implémenter `RevealAuScroll.tsx` (wrapper réutilisable) :
  - motion.div with whileInView, initial, viewport once, staggerChildren

- [x] Créer `layout.tsx` complet :
  - Inclure Nav + main + Footer + Curseur
  - className={cn("...")} avec dark mode si activé

### Stage 3 : Sections Principales
**Durée estimée :** 6–10 heures

- [x] `HeroSection.tsx` :
  - Titre massif Bebas Neue avec variants séquentiels (staggerChildren)
  - Parallax léger sur fond ou accroche (useScroll + useTransform)
  - Double CTA (ButtonMagnetic ou simple motion.button)
  - ~~Scroll indicator Arrow~~ → **supprimé le 2026-03-04** (donnait l'impression de site non terminé)

- [x] `ProjetsSection.tsx` + `CarteProjet.tsx` :
  - Grid responsive (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
  - Hover : whileHover scale/glow, couleur accent sur titre
  - Badges via `BadgeStack.tsx` (lucide icons + text)

- [x] `AProposSection.tsx` :
  - Photo `moi1.webp` (next/image, priority) — **mise à jour le 2026-03-04** (moi2→moi1)
  - Bio texte + stats avec compteurs animés (useInView + animate value)

- [x] `CompetencesSection.tsx` + `BarreProgression.tsx` :
  - Grid cartes
  - Barres : motion.div width from 0 to % on view

- [x] `ContactSection.tsx` :
  - mailto: lien + icônes GitHub (lucide)
  - Titre accentué Playfair Italic

- [x] Intégrer toutes sections dans `page.tsx` :
  - <HeroSection /> <ProjetsSection /> etc.
  - Ajouter RevealAuScroll autour des sections

### Stage 4 : Polish, Tests & Déploiement
**Durée estimée :** 3–5 heures

- [ ] Responsive & tests :
  - Tailwind breakpoints (mobile-first)
  - DevTools device toolbar (320px → 1440px)
  - Vérifier curseur désactivé mobile

- [ ] Animations & perf :
  - Respect prefers-reduced-motion (Framer hook)
  - next/image pour toutes images
  - Vérifier 60fps (DevTools Performance)

- [ ] SEO & metadata :
  - layout.tsx : generateMetadata
  - OG image (og-image.jpg dans public)

- [ ] Accessibilité :
  - aria-label sur icônes
  - focus-visible ring accent
  - alt sur images

- [ ] Déploiement :
  ```bash
  git init && git add . && git commit -m "Initial MVP"
  # Push sur GitHub
  vercel  # ou via dashboard Vercel import repo
  ```

- [ ] Tests finaux :
  - Lighthouse (Perf >92, SEO 100, Access 95+)
  - Cross-browser (Chrome, Firefox, Safari)
  - Mobile real device si possible

---

## Ressources Utiles

- Framer Motion docs : https://www.framer.com/motion
- Tailwind custom colors/fonts : https://tailwindcss.com/docs/theme
- next/font/google : https://nextjs.org/docs/app/api-reference/components/font
- useScroll / useTransform : Framer Motion hooks
- Vercel Next.js : https://vercel.com/docs/frameworks/nextjs
- Inspirations visuelles (dark + green neon + cursor) :

  - https://deothemes.com/wp-content/uploads/2026/02/featured-dark-themes-1024x657.jpg
  - https://www.framer.com/marketplace/components/fluid-trail-cursor/

Ces exemples montrent bien le potentiel : fond sombre immersif, curseur trailing vert, typographie massive, hover glow.