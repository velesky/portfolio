# Portfolio Vibe Coder

**Dernière mise à jour :** 2025 · **Propriétaire :** Yao Dapré Georges Emmanuel (Velesky)

---

## Context Workflow — Portfolio Vibe Coder

Un système de workflow structuré qui transforme une vision créative de portfolio en plan d'implémentation actionnable, guidé par l'IA — avec une **architecture modulaire** stricte.

---

## Qu'est-ce que c'est ?

Ce Context Workflow est un framework AI-driven development conçu spécifiquement pour le portfolio de **Velesky**, développeur junior spécialisé en backend et vibe coder.

Il permet de :
- **Transformer la vision** en plan d'implémentation technique détaillé
- **Maintenir la cohérence visuelle** grâce au design system documenté
- **Respecter l'architecture modulaire** — un fichier par responsabilité
- **Accélérer le développement** avec des règles IA prêtes pour Cursor
- **Éviter les pièges classiques** des portfolios (curseur mobile, animations Safari, performance, etc.)

---

## Démarrage Rapide

### Étape 1 — Consulter les données propriétaire

**Ouvrir `PRD.md` → Section "Propriétaire — Données Personnelles"**

Toutes les vraies données de Velesky sont là :
- Nom complet, pseudo, email, GitHub
- Les 4 projets (Casier Chap, iWAKILL, LogiFlow, Maths CI)
- La bio complète
- Les compétences avec leurs niveaux

> Si tu veux modifier une info → édite `PRD.md` en premier.

---

### Étape 2 — Comprendre l'architecture modulaire

**Lire `/Documentations/Project_structure.md`**

L'architecture est **modulaire** — chaque fichier a une responsabilité unique :

```
index.html          → HTML pur UNIQUEMENT (0 style, 0 script inline)
src/styles/         → variables, base, animations
src/composants/     → disposition (nav, footer) | ui (curseur, boutons, étiquettes) | sections
src/scripts/        → curseur, navigation, animations, competences
assets/             → images/moi | images/projets | icons
```

**Règle fondamentale :**
- 1 composant/section = 1 fichier CSS
- 1 fonctionnalité JS = 1 fichier JS
- **JAMAIS** de style ou script inline dans `index.html`

---

### Étape 3 — Suivre le plan d'implémentation

**Ouvrir `/Documentations/Implementation.md`**

Le plan est découpé en 4 stages avec checkboxes :

| Stage | Contenu | Durée estimée |
|---|---|---|
| 1 — Fondation | `index.html` + `variables.css` + `base.css` + `animations.css` | 2–4h |
| 2 — Design Visuel | Un fichier CSS par composant/section | 4–8h |
| 3 — Animations | Un fichier JS par fonctionnalité | 3–5h |
| 4 — Finalisation | Responsive, performance, cross-browser, déploiement | 2–4h |

Cocher `- [x]` au fur et à mesure.

---

### Étape 4 — Utiliser les règles Cursor

**Les fichiers `.cursor/rules/` configurent l'agent IA.**

- `workflow.mdc` → Règles **toujours actives** : guide l'agent à respecter l'architecture modulaire et consulter la bonne doc
- `generate.mdc` → Utilisé pour **regénérer** le plan si le PRD évolue

```
Prompt de régénération :
"Génère le fichier Implementation.md en utilisant les règles de generate.mdc
en prenant en compte les modifications dans PRD.md"
```

---

### Étape 5 — Respecter le design system

**Toujours ouvrir `/Documentations/UI_UX_doc.md` avant tout travail visuel.**

Il contient :
- Les jetons CSS (variables couleurs, polices, espacements, transitions)
- Les specs exactes de chaque composant
- Les timings et easings des animations
- Le comportement du curseur custom
- Les règles responsive (breakpoints, comportements)
- La matrice de compatibilité navigateurs

---

### Étape 6 — Gérer les bugs

**Quand tu rencontres un problème → ouvrir `/Documentations/bugs_tracking.md` en premier.**

Solutions documentées par **fichier concerné** :
- Curseur qui apparaît sur mobile → `ui/curseur.css`
- Barres de compétences qui ne s'animent pas → `scripts/competences.js`
- Animations saccadées → fichiers CSS de sections
- Nav non frostée → `disposition/navigation.css` + `scripts/navigation.js`
- Assets manquants en production → chemins relatifs dans `index.html`
- Variable CSS non définie → `styles/variables.css`

---

## Structure du Projet

```
portfolio-vibe-coder/
│
├── 📄 PRD.md                             ← Vision + données Velesky (source de vérité)
├── 📄 README.md                          ← Ce fichier
│
├── 📁 Documentations/
│   ├── 📄 Implementation.md              ← Plan en 4 stages avec checkboxes
│   ├── 📄 Project_structure.md           ← Architecture modulaire détaillée
│   ├── 📄 UI_UX_doc.md                   ← Design system complet
│   └── 📄 bugs_tracking.md               ← Bugs connus + solutions par fichier
│
└── 📁 .cursor/rules/
    ├── 📄 workflow.mdc                   ← Règles agent (always apply)
    └── 📄 generate.mdc                   ← Règles de génération du plan
```

---

## Pourquoi une Architecture Modulaire ?

### Avantages

- **Maintenabilité** → Modifier la navigation = toucher uniquement `navigation.css`
- **Débogage facile** → Le problème est dans la section ? → ouvrir le fichier de la section
- **Collaboration** → Chaque fichier = une responsabilité claire
- **Scalabilité** → Ajouter une section = créer un nouveau fichier CSS + JS
- **Lisibilité** → `variables.css` concentre tous les jetons de design

### Règle d'Or

> **Chaque fichier a sa place. Chaque place a son fichier.**

---

## Choix Techniques

### Pourquoi HTML/CSS/JS vanilla pour le MVP ?

- **Zéro configuration** — déploiement immédiat sur Vercel
- **Performance maximale** — pas de bundle JavaScript à parser
- **Apprentissage** — maîtriser les bases avant d'abstraire avec Next.js
- **Architecture modulaire** — CSS séparé par fichiers, JS séparé par fonctionnalité

### Pourquoi cette palette de couleurs ?

- `#080808` → Noir profond, pas pur (#000) — moins agressif, plus élégant
- `#c8f04a` → Vert acide chartreuse — mémorable, unique, signature "vibe"
- `#e8e4dc` → Blanc cassé chaud — plus doux que le blanc pur sur fond noir
- `#555555` → Gris moyen — contraste WCAG AA sur fond noir

### Pourquoi ce trio de polices ?

- **Bebas Neue** → Impact maximal, condensé, style "poster" — les titres
- **DM Mono** → Monospace, rappelle les terminaux — cohérent avec le profil dev
- **Playfair Display italic** → Contraste élégant avec la brutalité de Bebas — signature visuelle

---

## Prompts Cursor Recommandés

```
✅ Bon : "Commence le Stage 2, section Hero — stylise hero.css selon UI_UX_doc.md"
✅ Bon : "Corrège le bug des barres de compétences et documente la solution dans bugs_tracking.md"
✅ Bon : "Rends le portfolio responsive en suivant les specs mobile de UI_UX_doc.md"
✅ Bon : "Crée le fichier apropos.css pour la section à propos avec la photo moi2.webp"

❌ Éviter : "Rends-le beau"
❌ Éviter : "Corrige le CSS" (trop vague — quel fichier ?)
❌ Éviter : "Ajoute des animations" (sans préciser le fichier et les specs)
❌ Éviter : "Mets le style directement dans index.html" (interdit par l'architecture)
```

---

## Déploiement Rapide

```bash
# Option 1 — Vercel CLI
npm i -g vercel
vercel deploy

# Option 2 — GitHub + Vercel (recommandé)
# 1. Push sur GitHub
# 2. vercel.com → New Project → Import depuis GitHub
# 3. Déploiement automatique à chaque push sur main

# Option 3 — Drag & Drop
# vercel.com → New Project → Drag & Drop du dossier portfolio
```

---

**Bon vibe coding ! 🖤✨**
**— Velesky, Abidjan 🇨🇮**
