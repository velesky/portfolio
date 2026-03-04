import { Projet } from "@/types/projet";

export const projets: Projet[] = [
    {
        id: "01",
        titre: "CASIER CHAP",
        description: "App mobile 100% hors-ligne de gestion de stocks et ventes pour commerces de proximité en Côte d'Ivoire. Mode sombre premium, glassmorphisme, usage à une main optimisé.",
        stack: ["Flutter", "Riverpod", "Hive", "GoRouter"],
        github: "https://github.com/velesky/Casier-shap",
        badge: "badge-flutter",
    },
    {
        id: "02",
        titre: "iWAKILL",
        description: "E-commerce complet de vente d'iPhones neufs & quasi-neufs — catalogue, panier, checkout, espace compte client et authentification. Export statique optimisé.",
        stack: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
        badge: "badge-next",
    },
    {
        id: "03",
        titre: "LOGIFLOW",
        description: "Tableau de bord logistique avec visualisation 3D de flotte (Three.js), 150 livraisons simulées en temps réel, KPIs métiers et animations Framer Motion.",
        stack: ["Vite", "React", "Three.js", "Framer Motion"],
        badge: "badge-vite",
    },
    {
        id: "04",
        titre: "MATHS CI",
        description: "Site vitrine pédagogique pour valoriser les mathématiques en Côte d'Ivoire. Animations GSAP + ScrollTrigger, sections narratives, direction artistique soignée.",
        stack: ["Next.js 15", "GSAP", "ScrollTrigger", "Tailwind CSS"],
        badge: "badge-next",
    },
];
