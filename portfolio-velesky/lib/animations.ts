// Variants Framer Motion réutilisables — Portfolio Velesky

import { Variants } from "framer-motion";

// Reveal depuis le bas au scroll
export const revealVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

// Reveal avec délai (container stagger)
export const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Item enfant pour stagger
export const itemVariant: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

// Reveal depuis la gauche
export const slideLeftVariant: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

// Reveal depuis la droite
export const slideRightVariant: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

// Scale reveal (cartes, badges)
export const scaleVariant: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

// Barre de progression
export const barreVariant = (niveau: number): Variants => ({
    hidden: { width: "0%" },
    visible: {
        width: `${niveau}%`,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
});

// Titre hero — reveal lettre par lettre (wrapper)
export const heroTitreVariant: Variants = {
    hidden: { opacity: 0, y: 60, skewY: 4 },
    visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

// Fade simple
export const fadeVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
