'use client';

// Badge stack technologique — Portfolio Velesky

import { motion } from "framer-motion";

interface BadgeStackProps {
    stack: string[];
    className?: string;
}

// Map couleurs par technologie
const COULEURS_TECH: Record<string, string> = {
    Flutter: "rgba(84, 188, 241, 0.15)",
    Dart: "rgba(84, 188, 241, 0.15)",
    "Next.js": "rgba(200, 240, 74, 0.12)",
    "Next.js 15": "rgba(200, 240, 74, 0.12)",
    React: "rgba(97, 218, 251, 0.15)",
    TypeScript: "rgba(49, 120, 198, 0.2)",
    Riverpod: "rgba(84, 188, 241, 0.12)",
    Hive: "rgba(255, 193, 7, 0.15)",
    GoRouter: "rgba(84, 188, 241, 0.1)",
    Vite: "rgba(147, 51, 234, 0.15)",
    "Three.js": "rgba(200, 240, 74, 0.1)",
    "Framer Motion": "rgba(200, 240, 74, 0.12)",
    GSAP: "rgba(134, 239, 172, 0.15)",
    ScrollTrigger: "rgba(134, 239, 172, 0.12)",
    "Tailwind CSS": "rgba(56, 189, 248, 0.15)",
    Zustand: "rgba(255, 153, 0, 0.15)",
};

const BORDURE_TECH: Record<string, string> = {
    Flutter: "rgba(84, 188, 241, 0.3)",
    Dart: "rgba(84, 188, 241, 0.3)",
    "Next.js": "rgba(200, 240, 74, 0.25)",
    "Next.js 15": "rgba(200, 240, 74, 0.25)",
    React: "rgba(97, 218, 251, 0.3)",
    TypeScript: "rgba(49, 120, 198, 0.4)",
    Riverpod: "rgba(84, 188, 241, 0.25)",
    Hive: "rgba(255, 193, 7, 0.3)",
    GoRouter: "rgba(84, 188, 241, 0.2)",
    Vite: "rgba(147, 51, 234, 0.3)",
    "Three.js": "rgba(200, 240, 74, 0.2)",
    "Framer Motion": "rgba(200, 240, 74, 0.25)",
    GSAP: "rgba(134, 239, 172, 0.3)",
    ScrollTrigger: "rgba(134, 239, 172, 0.25)",
    "Tailwind CSS": "rgba(56, 189, 248, 0.3)",
    Zustand: "rgba(255, 153, 0, 0.3)",
};

const DEFAULT_BG = "rgba(255, 255, 255, 0.06)";
const DEFAULT_BORDER = "rgba(255, 255, 255, 0.12)";

export function BadgeStack({ stack, className }: BadgeStackProps) {
    return (
        <div className={`flex flex-wrap gap-2 ${className ?? ""}`}>
            {stack.map((tech, index) => (
                <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="px-3 py-1 rounded-full text-xs font-dm-mono tracking-wider"
                    style={{
                        backgroundColor: COULEURS_TECH[tech] ?? DEFAULT_BG,
                        border: `1px solid ${BORDURE_TECH[tech] ?? DEFAULT_BORDER}`,
                        color: "#e8e4dc",
                    }}
                >
                    {tech}
                </motion.span>
            ))}
        </div>
    );
}
