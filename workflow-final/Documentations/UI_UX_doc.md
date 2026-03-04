# Documentation UI/UX — Portfolio Velesky

**Dernière mise à jour :** Mars 2026

---

## Vue d'ensemble du Design System

Philosophie : **dark minimaliste radical immersif**.  
Chaque pixel sert l’atmosphère avant le contenu. L’objectif est que le visiteur **ressente** une vibe unique avant même de lire : mystère, précision, créativité brute.  
Inspiration principale : portfolios de codeurs créatifs (Won J. You, studios motion design), avec une touche ivoirienne subtile et un accent vert acidulé signature.

Le site doit être :
- Visuellement marquant en < 5 secondes
- Performant (Lighthouse 92+)
- Accessible (WCAG AA minimum)
- Respectueux de `prefers-reduced-motion`

---

## Guide de Style Visuel

### Palette de Couleurs (Tailwind + custom)

Définies dans `tailwind.config.ts` et utilisables via `bg-accent`, `text-offwhite`, etc.

| Nom Tailwind     | Valeur hex         | Usage principal                              |
|------------------|--------------------|----------------------------------------------|
| background       | #080808            | Fond global (quasi-noir)                     |
| surface          | #0f0f0f            | Cartes, nav scrollée                         |
| border-subtle    | #1a1a1a            | Séparateurs, bordures fines                  |
| text-primary     | #e8e4dc            | Texte principal (blanc cassé chaud)          |
| text-muted       | #555555            | Descriptions, nav inactif, labels            |
| accent           | #c8f04a            | Signature — vert acidulé neon (CTAs, hovers) |
| accent-hover     | #d4f55a            | Hover accent                                 |
| glow-subtle      | rgba(200,240,74,0.07) | Lueur verte légère sur hover projet       |

Exemple dans `tailwind.config.ts` :

```ts
theme: {
  extend: {
    colors: {
      background: '#080808',
      surface: '#0f0f0f',
      'border-subtle': '#1a1a1a',
      'text-primary': '#e8e4dc',
      'text-muted': '#555555',
      accent: '#c8f04a',
      'accent-hover': '#d4f55a',
      'glow-subtle': 'rgba(200, 240, 74, 0.07)',
    },
  },
}
```

---

### Typographie (Google Fonts)

Importées dans `layout.tsx` via `next/font/google`.

| Rôle               | Police                  | Tailwind classes                     | Usage                              |
|--------------------|-------------------------|--------------------------------------|------------------------------------|
| Titres / Display   | Bebas Neue              | font-bebas text-6xl md:text-8xl     | Hero, titres sections, projets     |
| Corps / Textes     | DM Mono                 | font-dm-mono text-base              | Paragraphes, descriptions, tags    |
| Accent italique    | Playfair Display Italic | font-playfair-italic                | Mots clés isolés dans gros titres  |

**Échelle typographique (clamp pour fluidité)**

- Hero accroche/titre : `text-6xl sm:text-7xl md:text-8xl lg:text-9xl` (clamp interne via CSS)
- Titre section       : `text-5xl md:text-6xl lg:text-7xl`
- Titre projet        : `text-3xl md:text-4xl lg:text-5xl`
- Corps texte         : `text-base md:text-lg`
- Tags / labels       : `text-xs md:text-sm uppercase tracking-wider`

**Règles** :
- Line-height titres Bebas Neue : 0.9–0.95
- Letter-spacing titres : 0.05–0.15em
- Playfair Italic → uniquement mots isolés (ex: *vibe coder*)

---

### Système d'Espacement (Tailwind + custom)

Utiliser les spacing natifs Tailwind + extensions si besoin.

```ts
// tailwind.config.ts
spacing: {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2.5rem',
  xl: '3rem',
  '2xl': '6rem',
  '3xl': '8rem',
  hero: '10rem',
}
```

Padding sections typique : `py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20`

---

## Spécifications des Composants Clés

### Navigation (Navigation.tsx)

- Position : fixed top-0 w-full z-50
- État initial : transparent
- État scroll (> 100px) : bg-background/90 backdrop-blur-md border-b border-border-subtle
- Logo : Bebas Neue + accent
- Liens : uppercase tracking-wide text-muted hover:text-primary transition-colors
- Mobile : hamburger → menu overlay (à implémenter V2 si besoin)

### Section Hero (HeroSection.tsx)

- min-h-screen flex flex-col justify-end pb-24 md:pb-32
- Titre massif Bebas Neue avec reveal séquentiel (Framer Motion variants)
- Parallax léger sur texte de fond ou éléments décoratifs (motion.div with scrollY transform)
- Double CTA : "Voir les projets" + "Me contacter"

### Carte Projet (CarteProjet.tsx)

- Hover : scale-105 transition-transform, bg-surface/50, glow-subtle shadow-lg
- Titre → color accent au hover
- Badge stack : petites pastilles avec bg-accent/10 text-accent border-accent/30
- Fleche → translate + color accent au hover

### Section À propos (AProposSection.tsx)

- Grille responsive : lg:grid-cols-[280px_1fr_1fr] md:grid-cols-[200px_1fr] grid-cols-1 gap-12
- Photo : rounded-full overflow-hidden border-2 border-accent/20 grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all
- Stats : compteurs animés (useInView + Framer Motion animate from 0 to value)

### Compétences (CompetencesSection.tsx)

- Grille 3/2/1 colonnes
- Barre progression : div bg-border-subtle + inner div bg-accent w-0 → animate width on view
- Hover carte : bg-surface/80 scale-102

### Curseur Personnalisé (CurseurPersonnalise.tsx)

- Composant global dans layout.tsx
- Point central : bg-accent size-2.5 rounded-full mix-blend-difference pointer-events-none
- Anneau trailing : border border-accent/40 size-9 rounded-full (lerp position ~12–15% par frame)
- États : agrandi sur hover (scale-150), glow sur éléments interactifs
- Mobile : désactivé (cursor: default)

---

## Système d'Animation (Framer Motion)

- **Reveal au scroll** : whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.4,0,0.2,1] }}
- Délais : variants avec staggerChildren
- Hover : whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
- Parallaxe hero : useScroll + useTransform (y → translateY léger)
- Barres progression : animate={{ width: inView ? `${niveau}%` : 0 }} transition={{ duration: 1.2, ease: "easeOut" }}
- Respect `prefers-reduced-motion` : via `useReducedMotion()` hook ou media query

---

## Responsive Design (Tailwind breakpoints)

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

Mobile-first : padding réduit, stack vertical, textes ajustés via clamp()

---

## Accessibilité & Performances

- Contraste : tous textes AAA ou AA validés
- Focus : focus-visible:ring-2 ring-accent/50 outline-none
- Images : alt descriptif + loading="lazy"
- Aria-labels sur liens icon-only
- Reduced motion : désactiver animations non essentielles
- Lighthouse cible : Perf 95+, SEO 100, Accessibilité 95+
