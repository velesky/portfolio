---
description: portfolio
---

---
alwaysApply: true
---

# Workflow Agent — Portfolio Velesky (Next.js 15 Architecture Modulaire)
# Propriétaire : Velesky — Yao Dapré Georges Emmanuel

---

## Directive Principale

Tu es un agent de développement full-stack créatif spécialisé dans l'implémentation du portfolio dark minimaliste immersif de **Velesky**.  
Le projet suit une **architecture modulaire stricte Next.js 15 App Router** — chaque composant, hook, fichier de données a une responsabilité unique et claire. Tu dois respecter cette séparation à tout moment.

---

## Architecture Modulaire — Carte de Référence Rapide

```
app/
├── layout.tsx                      ← Layout racine : polices, metadata, providers (NextThemes, FramerMotion), curseur global
├── page.tsx                        ← Page d'accueil : composition Hero + Projets + À propos + Compétences + Contact
├── globals.css                     ← Tailwind + variables custom + resets
│
components/layout/
├── Navigation.tsx                  ← Barre fixe responsive, shrink + bg au scroll
└── PiedDePage.tsx                  ← Footer minimal avec © + icônes
│
components/sections/
├── HeroSection.tsx                 ← Titre reveal + parallax léger + baseline + CTAs
├── ProjetsSection.tsx              ← Grid cartes projets + hover reveal
├── AProposSection.tsx              ← Photo + bio + stats animées
├── CompetencesSection.tsx          ← Cartes + barres progression au viewport
└── ContactSection.tsx              ← Email mailto + réseaux (GitHub)
│
components/ui/
├── CurseurPersonnalise.tsx         ← Curseur trailing + glow #c8f04a (client-only)
├── CarteProjet.tsx                 ← Carte individuelle projet
├── BadgeStack.tsx                  ← Badges stacks (Flutter, Next.js...)
├── BarreProgression.tsx            ← Barre animée compétences
├── RevealAuScroll.tsx              ← Wrapper Framer Motion reveal viewport
└── ButtonMagnetic.tsx              ← CTA hover magnétique subtil
│
data/
├── projets.ts                      ← Array typé 4 projets (source vérité)
└── competences.ts                  ← Array compétences + %
│
lib/
├── animations.ts                   ← Variants Framer Motion réutilisables
├── cn.ts                           ← clsx + tailwind-merge helper
└── constants.ts                    ← Couleurs, polices, breakpoints
│
public/
└── assets/images/moi/moi2.webp     ← Photo principale À propos
```

---

## Protocole d'Exécution des Tâches

### Étape 1 — Avant toute chose : vérifier les bugs connus

**Toujours consulter `/Documentation_tracking/bugs_tracking.md` en premier.**  
- Si solution documentée → appliquer directement  
- Si nouveau bug → documenter après résolution

### Étape 2 — Identifier les fichiers concernés

Consulter la **Carte de Référence Rapide** ci-dessus.  
Identifier précisément quel(s) composant(s)/fichier(s) modifier.  
Ne jamais modifier un fichier hors de sa responsabilité.

### Étape 3 — Consulter le plan d'implémentation

Lire `/Documentation_tracking/Implementation.md` pour :
- Connaître le stage actuel
- Identifier la sous-étape concernée
- Vérifier les dépendances (stage précédent terminé ?)

### Étape 4 — Consulter le design system (OBLIGATOIRE pour tout visuel)

**Toujours ouvrir `/Documentation_tracking/UI_UX_doc.md` avant de coder un composant visuel.**  
- Vérifier couleurs (accent #c8f04a, fond #080808, etc.)
- Vérifier polices (Bebas Neue, DM Mono, Playfair Display Italic)
- Vérifier specs animations (reveal scroll, hover glow, trailing curseur, prefers-reduced-motion)

### Étape 5 — Vérifier la structure avant changement

Consulter `/Documentation_tracking/Project_structure.md` avant de :
- Créer un nouveau composant/fichier
- Ajouter une section dans `page.tsx`
- Modifier layout.tsx

### Étape 6 — Implémenter

Coder en respectant l'architecture :
- `'use client';` obligatoire pour tout composant avec hooks (useState, useEffect, Framer Motion interactive)
- Utiliser `next/image` pour toutes les images
- Utiliser `motion.` de Framer Motion pour animations (whileInView, variants, useScroll)
- Typage strict TypeScript partout
- Commentaires en français systématiques
- Tester après chaque modification majeure

### Étape 7 — Documenter les erreurs

Nouveau bug trouvé/résolu → documenter dans `bugs_tracking.md` avec :
- Fichier concerné
- Solution appliquée
- Commit/message associé

### Étape 8 — Valider et cocher

Marquer `- [x]` dans `Implementation.md` uniquement quand :
- Fonctionnalité implémentée dans le **bon fichier/composant**
- Visuellement conforme à `UI_UX_doc.md`
- Animations fluides 60fps (desktop + mobile)
- Console propre (0 erreur/warning non géré)
- Testé responsive (320px → 1440px)
- Hydration OK (pas de mismatch)
- Réduit motion respecté

---

## Priorité de Consultation des Fichiers

```
1. bugs_tracking.md          → EN PREMIER — solutions connues
2. Implementation.md         → Tâches et stages actuels
3. UI_UX_doc.md              → OBLIGATOIRE visuel/animations
4. Project_structure.md      → Structure dossiers/composants
5. PRD.md                    → Données proprio (projets, bio, contact)
```

---

## Règles Absolues — Next.js Modulaire

### Séparation des Responsabilités

- **JAMAIS** inline styles ou scripts dans `page.tsx` / `layout.tsx`
- **JAMAIS** dupliquer valeurs couleurs/polices → utiliser Tailwind custom ou `constants.ts`
- **JAMAIS** animer avec CSS keyframes quand Framer Motion est plus adapté (reveal, trailing, hover)
- **TOUJOURS** `'use client';` pour Curseur, Navigation scroll-aware, etc.
- **TOUJOURS** `viewport: { once: true, margin: "-100px" }` pour reveal scroll
- **TOUJOURS** `next/image` avec width/height/alt/loading="lazy" ou priority

### Couleurs & Variables

- **TOUJOURS** utiliser classes Tailwind custom : `bg-background`, `text-accent`, `border-border-subtle`
- **TOUJOURS** modifier dans `tailwind.config.ts` uniquement

### Animations & Performance

- **TOUJOURS** `transform` + `opacity` via Framer Motion
- **JAMAIS** animer layout props (width/height/top/left) → utiliser variants
- **TOUJOURS** respecter `@media (prefers-reduced-motion: reduce)` via hook Framer
- **TOUJOURS** tester 60fps (DevTools → Performance tab)

### JavaScript / React

- **TOUJOURS** hooks dans composants client (`'use client';`)
- **TOUJOURS** `use client` pour mouse events, scroll listeners
- **TOUJOURS** cleanup useEffect (return removeEventListener)

### Déploiement

- **JAMAIS** déployer avec warnings hydration ou images cassées
- **TOUJOURS** Lighthouse >92 avant push
- **TOUJOURS** chemins absolus pour public/ : `/assets/images/...`

---

## Données Propriétaire (Référence Rapide)

> Source complète dans `PRD.md`

| Champ     | Valeur                                      |
|-----------|---------------------------------------------|
| Nom       | Yao Dapré Georges Emmanuel                  |
| Pseudo    | Velesky                                     |
| Email     | emmanueldapre1@gmail.com                    |
| GitHub    | https://github.com/velesky                  |
| Photo     | `/assets/images/moi/moi2.webp`              |
| Localisation | Abidjan, Côte d'Ivoire 🇨🇮               |

---

## Rappel Final

L'objectif est un portfolio immersif qui incarne le **vibe coder** de Velesky : dark radical, accent vert acidulé, curseur trailing magique, animations fluides.  
La cohérence, la maintenabilité et la fidélité au design system font la différence.  

**Un composant = un rôle. Un rôle = un fichier.**
