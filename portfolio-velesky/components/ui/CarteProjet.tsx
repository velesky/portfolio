'use client';

// Carte projet individuelle avec hover reveal — Portfolio Velesky

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Projet } from "@/types/projet";
import { BadgeStack } from "@/components/ui/BadgeStack";
import { scaleVariant } from "@/lib/animations";
import { VIEWPORT_CONFIG } from "@/lib/constants";

interface CarteProjetProps {
    projet: Projet;
    index: number;
}

export function CarteProjet({ projet, index }: CarteProjetProps) {
    return (
        <motion.article
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            transition={{ delay: index * 0.1 }}
            className="relative group rounded-3xl overflow-hidden"
            style={{
                border: "1px solid #1a1a1a",
                backgroundColor: "#0f0f0f",
            }}
        >
            {/* Glow au hover */}
            <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at top left, rgba(200, 240, 74, 0.06) 0%, transparent 60%)",
                }}
            />

            {/* Numéro du projet */}
            <div className="absolute top-5 right-6 font-bebas text-5xl leading-none pointer-events-none select-none"
                style={{ color: "rgba(200, 240, 74, 0.08)" }}>
                {String(index + 1).padStart(2, "0")}
            </div>

            <div className="relative p-7 flex flex-col gap-4">
                {/* Titre */}
                <motion.h3
                    className="font-bebas text-3xl tracking-wider text-foreground group-hover:text-accent transition-colors duration-300"
                >
                    {projet.titre}
                </motion.h3>

                {/* Description */}
                <p className="font-dm-mono text-sm text-text-muted leading-relaxed">
                    {projet.description}
                </p>

                {/* Badges stack */}
                <BadgeStack stack={projet.stack} />

                {/* Liens */}
                <div className="flex items-center gap-4 pt-2">
                    {projet.github && (
                        <motion.a
                            href={projet.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-dm-mono text-xs text-text-muted hover:text-accent transition-colors duration-200"
                            whileHover={{ x: 2 }}
                        >
                            <Github size={14} />
                            GitHub
                        </motion.a>
                    )}
                    {projet.lien && (
                        <motion.a
                            href={projet.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-dm-mono text-xs text-text-muted hover:text-accent transition-colors duration-200"
                            whileHover={{ x: 2 }}
                        >
                            <ExternalLink size={14} />
                            Voir le projet
                        </motion.a>
                    )}
                </div>

                {/* Ligne accent au hover bas de carte */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{ backgroundColor: "rgba(200, 240, 74, 0.4)" }}
                />
            </div>
        </motion.article>
    );
}
