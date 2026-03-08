'use client';

// Carte de compétence pour le défilement horizontal — Portfolio Velesky

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { Server, Code, Smartphone, Palette, Bot, Wrench, LucideIcon, Link, Database, ShieldCheck, Layers, Zap, Wind, Target, Waves, CloudOff, Activity, MousePointer2, Box, Sparkles, MessageSquare, Cpu, FileCode, GitBranch, Cloud, RefreshCw, CheckCircle2, Triangle } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Server,
    Code,
    Smartphone,
    Palette,
    Bot,
    Wrench,
    Link,
    Database,
    ShieldCheck,
    Layers,
    Zap,
    Wind,
    Target,
    Waves,
    CloudOff,
    Activity,
    MousePointer2,
    Box,
    Sparkles,
    MessageSquare,
    Cpu,
    FileCode,
    GitBranch,
    Cloud,
    RefreshCw,
    CheckCircle2,
    Triangle,
};

interface CompetenceCardProps {
    nom: string;
    description: string;
    niveau: number;
    isActive: boolean;
    index: number;
    iconName?: string;
    techs?: {
        name: string;
        iconName: string;
    }[];
}

export function CompetenceCard({
    nom,
    description,
    niveau,
    isActive,
    index,
    iconName,
    techs,
}: CompetenceCardProps) {
    const IconComponent = iconName ? iconMap[iconName] : null;

    return (
        <div
            className="flex-shrink-0 w-[75vw] md:w-[45vw] lg:w-[35vw] h-[45vh] flex items-center justify-center px-4 md:px-8 transition-all duration-700 ease-out"
            style={{
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1 : 0.85,
                filter: isActive ? "blur(0px)" : "blur(2px)",
            }}
        >
            <div
                className="relative w-full max-w-xl bg-[#0d0d0d]/80 backdrop-blur-md border border-white/5 rounded-3xl p-5 md:p-6 overflow-hidden group shadow-2xl"
                style={{
                    boxShadow: isActive ? "0 20px 50px -10px rgba(200, 240, 74, 0.1)" : "none"
                }}
            >
                {/* Effet de brillance en arrière-plan */}
                <div
                    className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 transition-opacity duration-1000"
                    style={{
                        background: "radial-gradient(circle, #c8f04a 0%, transparent 70%)",
                        opacity: isActive ? 0.2 : 0
                    }}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            {/* Numéro de slide */}
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isActive ? 0.5 : 0, x: isActive ? 0 : -20 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="font-dm-mono text-xs text-accent/50 block tracking-widest uppercase"
                            >
                                Skill 0{index + 1}
                            </motion.span>

                            {/* Logo / Icône */}
                            {IconComponent && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        scale: isActive ? 1 : 0.5,
                                        rotate: isActive ? 0 : -20
                                    }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent"
                                >
                                    <IconComponent size={28} strokeWidth={1.5} />
                                </motion.div>
                            )}
                        </div>

                        {/* Nom de la compétence avec Parallax subtil */}
                        <motion.h3
                            animate={{
                                x: isActive ? 0 : index % 2 === 0 ? 40 : -40,
                                opacity: isActive ? 1 : 0.5
                            }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="font-bebas text-3xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4 leading-none"
                        >
                            {nom}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                            animate={{
                                y: isActive ? 0 : 20,
                                opacity: isActive ? 1 : 0
                            }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-dm-mono text-[10px] md:text-sm text-text-muted max-w-md leading-relaxed mb-6"
                        >
                            {description}
                        </motion.p>

                        {/* Badges de Technologies */}
                        {techs && (
                            <div className="flex flex-wrap gap-3 max-w-md">
                                {techs.map((tech, i) => {
                                    const TechIcon = iconMap[tech.iconName];
                                    return (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{
                                                opacity: isActive ? 1 : 0,
                                                y: isActive ? 0 : 10
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.5 + (i * 0.1)
                                            }}
                                            className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/10"
                                        >
                                            {TechIcon && <TechIcon size={12} className="text-accent" />}
                                            <span className="font-dm-mono text-[9px] md:text-[10px] text-white/70 uppercase tracking-wider">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Section Progression */}
                    <div className="mt-8">
                        <div className="flex items-end justify-between mb-4">
                            <span className="font-dm-mono text-[10px] text-text-muted uppercase tracking-widest">Maîtrise</span>
                            <Counter
                                value={`${niveau}%`}
                                className="font-bebas text-2xl md:text-4xl text-accent"
                            />
                        </div>

                        {/* Barre de progression custom */}
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-accent"
                                initial={{ width: 0 }}
                                animate={{ width: isActive ? `${niveau}%` : 0 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                                style={{
                                    boxShadow: "0 0 15px rgba(200, 240, 74, 0.5)"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
