'use client';

// Section Contact — Portfolio Velesky

import { motion } from "framer-motion";
import { VELESKY } from "@/lib/constants";
import { RevealAuScroll } from "@/components/ui/RevealAuScroll";
import { ButtonMagnetic } from "@/components/ui/ButtonMagnetic";
import { Github, Mail } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">
                {/* En-tête */}
                <RevealAuScroll className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="block w-8 h-px" style={{ backgroundColor: "#c8f04a" }} />
                        <span
                            className="font-dm-mono text-xs tracking-widest uppercase"
                            style={{ color: "#c8f04a" }}
                        >
                            Contact
                        </span>
                    </div>
                    <h2
                        className="font-bebas tracking-wider leading-none"
                        style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#e8e4dc" }}
                    >
                        Travaillons
                        <br />
                        <span style={{ color: "#c8f04a" }}>Ensemble.</span>
                    </h2>
                </RevealAuScroll>

                {/* Carte contact centrale */}
                <RevealAuScroll delay={0.15}>
                    <div
                        className="relative max-w-2xl rounded-3xl p-10 md:p-14 overflow-hidden"
                        style={{
                            backgroundColor: "#0f0f0f",
                            border: "1px solid #1a1a1a",
                        }}
                    >
                        {/* Glow coin */}
                        <div
                            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none blur-3xl"
                            style={{ backgroundColor: "rgba(200, 240, 74, 0.06)" }}
                        />

                        <p
                            className="font-dm-mono text-sm md:text-base leading-relaxed mb-10 relative z-10"
                            style={{ color: "#555555" }}
                        >
                            Disponible pour des projets freelance, des collaborations ou
                            simplement pour échanger sur du code et du design. Je réponds
                            toujours.
                        </p>

                        {/* Email grandeaille */}
                        <motion.a
                            href={`mailto:${VELESKY.email}`}
                            className="block font-bebas tracking-wide mb-10 relative z-10 hover:text-accent transition-colors duration-300"
                            style={{
                                fontSize: "clamp(18px, 3vw, 28px)",
                                color: "#e8e4dc",
                                wordBreak: "break-all",
                            }}
                            whileHover={{ x: 4 }}
                        >
                            {VELESKY.email} ↗
                        </motion.a>

                        {/* Boutons */}
                        <div className="flex flex-wrap gap-4 relative z-10">
                            <ButtonMagnetic
                                variant="accent"
                                href={`mailto:${VELESKY.email}`}
                            >
                                <Mail size={14} />
                                Envoyer un mail
                            </ButtonMagnetic>
                            <ButtonMagnetic
                                variant="outline"
                                href={VELESKY.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={14} />
                                GitHub
                            </ButtonMagnetic>
                        </div>
                    </div>
                </RevealAuScroll>
            </div>
        </section>
    );
}
