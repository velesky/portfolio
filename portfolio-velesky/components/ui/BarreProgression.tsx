'use client';

// Barre de progression animée — Portfolio Velesky

import { motion, useReducedMotion } from "framer-motion";
import { VIEWPORT_CONFIG } from "@/lib/constants";

interface BarreProgressionProps {
    nom: string;
    description: string;
    niveau: number; // 0 à 100
    delay?: number;
}

export function BarreProgression({
    nom,
    description,
    niveau,
    delay = 0,
}: BarreProgressionProps) {
    const prefersReduced = useReducedMotion();

    return (
        <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.5, delay }}
        >
            {/* En-tête : nom + % */}
            <div className="flex items-center justify-between mb-2">
                <span className="font-bebas text-xl tracking-wider text-foreground group-hover:text-accent transition-colors duration-300">
                    {nom}
                </span>
                <span className="font-dm-mono text-sm text-text-muted">
                    {niveau}%
                </span>
            </div>

            {/* Description */}
            <p className="font-dm-mono text-xs text-text-muted mb-3 leading-relaxed italic">
                {description}
            </p>

            {/* Piste de la barre */}
            <div
                className="w-full h-[2px] rounded-full overflow-hidden"
                style={{ backgroundColor: "#1a1a1a" }}
            >
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, #c8f04a, #d4f55a)`,
                        boxShadow: "0 0 8px rgba(200, 240, 74, 0.4)",
                    }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: prefersReduced ? `${niveau}%` : `${niveau}%` }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{
                        duration: prefersReduced ? 0.1 : 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: delay + 0.2,
                    }}
                />
            </div>
        </motion.div>
    );
}
