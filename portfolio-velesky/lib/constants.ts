// Constantes globales du portfolio Velesky

// Couleurs du design system
export const COULEURS = {
    background: "#080808",
    foreground: "#e8e4dc",
    surface: "#0f0f0f",
    borderSubtle: "#1a1a1a",
    textMuted: "#555555",
    accent: "#c8f04a",
    accentHover: "#d4f55a",
    glowSubtle: "rgba(200, 240, 74, 0.07)",
    glowMedium: "rgba(200, 240, 74, 0.15)",
} as const;

// Informations propriétaire
export const VELESKY = {
    nom: "Yao Dapré Georges Emmanuel",
    pseudo: "Velesky",
    email: "emmanueldapre1@gmail.com",
    github: "https://github.com/velesky",
    localisation: "Abidjan, Côte d\'Ivoire 🇨🇮",
    baseline: "\"Vibe coder\" basé à Abidjan. Je construis des expériences modulaires et scalables.",
    photo: "/assets/images/moi/moi1.webp",
} as const;

// Breakpoints (px)
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;

// Config viewport pour animations whileInView
export const VIEWPORT_CONFIG = {
    once: true,
    margin: "-100px",
} as const;

// Durées d'animation (ms)
export const DUREES = {
    courte: 0.3,
    normale: 0.5,
    longue: 0.8,
    tresFort: 1.2,
} as const;

// Navigation liens
export const NAV_LIENS = [
    { label: "Projets", href: "#projets" },
    { label: "À propos", href: "#a-propos" },
    { label: "Compétences", href: "#competences" },
    { label: "Contact", href: "#contact" },
] as const;
