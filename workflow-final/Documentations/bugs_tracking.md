# Suivi des Bugs — Portfolio Velesky

**Dernière mise à jour :** Mars 2026

---

## Modèle de Rapport de Bug

### Bug ID: [AAAA-MM-JJ-###]

- **Date signalée :** [Date]
- **Signalé par :** Velesky
- **Sévérité :** [Critique / Haute / Moyenne / Faible]
- **Statut :** [Ouvert / En cours / Résolu / Fermé]
- **Environnement :** [Local / Vercel Preview / Production]
- **Navigateur/Appareil :** [Chrome 134 / Safari 18 / Firefox / iPhone 15 / etc.]
- **Branche Git :** [main / feat/hero / etc.]

#### Description

[Description précise et concise]

#### Étapes pour Reproduire

1. [Étape 1]
2. [Étape 2]
3. [Étape 3]

#### Comportement Attendu

[Ce qui devrait arriver]

#### Comportement Observé

[Ce qui arrive réellement]

#### Messages d'Erreur / Logs

```
[Console error, hydration warning, build error, etc.]
```

#### Résolution Proposée / Appliquée

- Fichier(s) modifié(s) : 
- Solution : [explication + code snippet si pertinent]
- Commit : [hash ou message]

#### Date de Résolution / Fermeture

[Date]

---

## Bugs Actifs

*(Aucun bug actif pour le moment — à remplir dès le premier développement)*

---

## Bugs Résolus

*(À compléter au fil du développement — exemple fictif pour démarrer)*

### Bug ID: 2026-03-04-001

- **Date signalée :** 2026-03-04
- **Signalé par :** Velesky
- **Sévérité :** Haute
- **Statut :** Résolu
- **Environnement :** Local + Vercel Preview
- **Navigateur/Appareil :** Chrome 134 / Desktop

#### Description
Hydration mismatch sur le curseur personnalisé (erreur "Text content did not match" ou warning hydration)

#### Étapes pour Reproduire
1. Lancer `npm run dev`
2. Ouvrir la page d'accueil
3. Voir warning en console : "Text content did not match. Server: ... Client: ..."

#### Comportement Attendu
Pas de warning hydration, curseur rendu côté client sans conflit

#### Comportement Observé
Warning + possible flicker du curseur au premier rendu

#### Messages d'Erreur
```
Warning: Text content did not match. Server: "" Client: "<div id="curseur" ...>"
```

#### Résolution
- Fichier modifié : `CurseurPersonnalise.tsx`
- Solution : Ajouter `suppressHydrationWarning` sur le conteneur du curseur + rendre le composant uniquement côté client avec `useEffect` + dynamic import si besoin
```tsx
<motion.div suppressHydrationWarning className="fixed pointer-events-none">
  {/* curseur */}
</motion.div>
```
- Date de résolution : 2026-03-04

---

## Problèmes Connus & Solutions Rapides

> Consulter cette section **avant** de chercher longtemps.  
> Chaque entrée pointe vers le fichier concerné et la solution la plus courante.

### Curseur Personnalisé (CurseurPersonnalise.tsx)

**Problème :** Curseur visible sur mobile (double curseur système + custom)  
**Solution :**
```tsx
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (isTouch) return null; // ou display: none via CSS
```

**Problème :** Curseur lag / saute sur scroll rapide  
**Solution :** Utiliser Framer Motion `useMotionValue` + `useSpring` pour trailing fluide au lieu de lerp manuel.  
Exemple :
```tsx
const x = useMotionValue(0);
const y = useMotionValue(0);
const springX = useSpring(x, { damping: 20, stiffness: 300 });
```

**Problème :** Hover `.agrandi` ne fonctionne pas sur liens dynamiques  
**Solution :** Utiliser `onMouseEnter` / `onMouseLeave` avec `useState` global ou context pour état agrandi.

### Animations Framer Motion

**Problème :** Reveal au scroll ne se déclenche pas ou plusieurs fois  
**Solution :** Ajouter `viewport={{ once: true, margin: "-100px" }}` sur motion.div  
Vérifier `whileInView` et non `animate` seul.

**Problème :** Barres de progression n'animent pas (width reste 0%)  
**Solution :**
```tsx
const [inView, setInView] = useState(false);
useInView(ref, { once: true }) → setInView(true);
<motion.div animate={{ width: inView ? `${niveau}%` : 0 }} />
```

**Problème :** Animations saccadées / low FPS  
**Solution :**
- Limiter à `transform` + `opacity`
- Ajouter `willChange: "transform"` sur éléments animés (avec modération)
- Tester avec `prefers-reduced-motion` désactivé

### Navigation & Scroll

**Problème :** Navigation ne devient pas floue (backdrop-blur) au scroll  
**Solution :**
```tsx
const scrolled = useScrollY() > 40;
<motion.nav className={cn(scrolled && "bg-background/90 backdrop-blur-md border-b")}>
```

**Problème :** Smooth scroll ne fonctionne pas sur Safari iOS  
**Solution :** Utiliser `lenis` ou polyfill smooth-scroll, ou fallback JS `scrollIntoView({ behavior: 'smooth' })`

### Images & Assets (next/image)

**Problème :** Images ne chargent pas en production (404)  
**Solution :** Placer dans `public/assets/images/...` et utiliser chemin absolu `/assets/images/moi/moi2.webp`

**Problème :** Images trop lourdes → mauvais Lighthouse Perf  
**Solution :** Toujours utiliser `<Image src="..." width={...} height={...} alt="..." priority ou loading="lazy" />`

### Hydration & SSR

**Problème :** Warning "Prop `className` did not match" ou hydration mismatch  
**Solution :** Éviter `useState` / `useEffect` qui change le rendu initial → `useEffect` seul pour client-side only features (ex: curseur)

**Problème :** Composant client-side (useState, useEffect) dans Server Component  
**Solution :** Ajouter `'use client';` en haut du fichier composant

---

## Niveaux de Sévérité

- **Critique** : Site blanc / inaccessible / build qui échoue
- **Haute** : Section entière cassée / animations majeures absentes / mauvais responsive général
- **Moyenne** : Bug visuel notable / animation décalée / warning console persistant
- **Faible** : Décalage cosmétique / couleur légèrement hors spec / perf mineure

---

## Checklist Avant Fermeture d'un Bug

- [ ] Bug non reproductible après fix
- [ ] Testé sur Chrome, Firefox, Safari (desktop + mobile)
- [ ] Console propre (0 erreur/warning non géré)
- [ ] Pas de régression sur autres sections
- [ ] Lighthouse maintenu > 92 (Perf + Accessibilité)
- [ ] Commit clair + lien vers ce bug ID dans le message

---

_Document Version : 2.0 — Adapté Next.js 15 + Framer Motion_
_Portfolio Velesky — Yao Dapré Georges Emmanuel (Velesky)_