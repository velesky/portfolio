'use client';

// Section À propos — Portfolio Velesky

import Image from "next/image";
import { motion } from "framer-motion";
import { VELESKY, VIEWPORT_CONFIG } from "@/lib/constants";
import { RevealAuScroll } from "@/components/ui/RevealAuScroll";
import { containerVariant, itemVariant } from "@/lib/animations";

// Stats bio
const STATS = [
    { valeur: "3+", label: "Années de Dev" },
    { valeur: "4", label: "Projets Live" },
    { valeur: "100%", label: "Offline-first" },
    { valeur: "🇨🇮", label: "Abidjan" },
];

export function AProposSection() {
    return (
        <section id="a-propos" className="py-24 md:py-32 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">
                {/* En-tête */}
                <RevealAuScroll className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="block w-8 h-px" style={{ backgroundColor: "#c8f04a" }} />
                        <span className="font-dm-mono text-xs tracking-widest uppercase" style={{ color: "#c8f04a" }}>
                            À propos
                        </span>
                    </div>
                    <h2
                        className="font-bebas tracking-wider leading-none"
                        style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#e8e4dc" }}
                    >
                        Qui est
                        <br />
                        <span style={{ color: "#c8f04a" }}>Velesky</span> ?
                    </h2>
                </RevealAuScroll>

                {/* Contenu : photo + bio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Photo */}
                    <RevealAuScroll direction="left">
                        <div className="relative">
                            <div
                                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden"
                                style={{ border: "1px solid #1a1a1a" }}
                            >
                                <Image
                                    src={VELESKY.photo}
                                    alt={`Portrait de ${VELESKY.pseudo}`}
                                    fill
                                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                                    loading="lazy"
                                />
                                {/* Overlay gradient bas */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1/3"
                                    style={{ background: "linear-gradient(to top, #080808, transparent)" }}
                                />
                            </div>
                            {/* Badge localisation */}
                            <div
                                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-2xl font-dm-mono text-xs"
                                style={{
                                    backgroundColor: "#0f0f0f",
                                    border: "1px solid #1a1a1a",
                                    color: "#555555",
                                }}
                            >
                                📍 {VELESKY.localisation}
                            </div>
                        </div>
                    </RevealAuScroll>

                    {/* Bio + stats */}
                    <RevealAuScroll direction="right" delay={0.15}>
                        <div className="flex flex-col gap-6">
                            <p className="font-dm-mono text-sm md:text-base leading-relaxed" style={{ color: "#e8e4dc" }}>
                                Je suis <span style={{ color: "#c8f04a" }}>{VELESKY.nom}</span>, développeur junior
                                basé à Abidjan. Je construis des apps mobiles offline-first avec Flutter,
                                des expériences web premium avec Next.js, et des interfaces qui marquent.
                            </p>
                            <p className="font-dm-mono text-sm leading-relaxed" style={{ color: "#555555" }}>
                                Mon approche : l&apos;IA comme co-pilote, le design comme langage,
                                la simplicité comme philosophie. Backend de formation, &quot;vibe coder&quot; de vocation.
                            </p>

                            {/* Stats */}
                            <motion.div
                                className="grid grid-cols-2 gap-4 mt-4"
                                variants={containerVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={VIEWPORT_CONFIG}
                            >
                                {STATS.map((stat) => (
                                    <motion.div
                                        key={stat.label}
                                        variants={itemVariant}
                                        className="p-4 rounded-2xl"
                                        style={{ backgroundColor: "#0f0f0f", border: "1px solid #1a1a1a" }}
                                    >
                                        <p className="font-bebas text-3xl" style={{ color: "#c8f04a" }}>
                                            {stat.valeur}
                                        </p>
                                        <p className="font-dm-mono text-xs" style={{ color: "#555555" }}>
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </RevealAuScroll>
                </div>
            </div>
        </section>
    );
}
