"use client";

// Carte de compétence pour le défilement horizontal — Portfolio Velesky
// TEMPORAIRE : effet décalage carte précédente/suivante désactivé (voir conteneur ci‑dessous)

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import {
  Server,
  Code,
  Smartphone,
  Palette,
  Bot,
  Wrench,
  LucideIcon,
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
} from "lucide-react";

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

  const opacity = isActive ? 1 : 0.4;
  const scale = isActive ? 1 : 0.9;

  return (
    <motion.div
      className="flex-shrink-0 w-[82vw] md:w-[45vw] lg:w-[32vw] h-[55vh] min-h-[420px] max-h-[600px] flex items-center justify-center px-2 md:px-8 will-change-[transform,opacity]"
      animate={{
        opacity,
        scale,
      }}
      transition={{
        type: "spring",
        stiffness: 150, // Plus doux pour moins de stress CPU
        damping: 25,
        mass: 1,
      }}
    >
      <div
        className="relative w-full max-w-xl bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-3xl p-5 md:p-6 overflow-hidden group transition-all duration-500"
        style={{
          boxShadow: isActive
            ? "0 20px 40px -10px rgba(200, 240, 74, 0.1)"
            : "0 5px 15px -10px rgba(0,0,0,0.3)",
          borderColor: isActive ? "rgba(200, 240, 74, 0.25)" : "rgba(255,255,255,0.05)",
        }}
      >
        {/* Effet de brillance en arrière-plan */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 transition-opacity duration-1000"
          style={{
            background: "radial-gradient(circle, #c8f04a 0%, transparent 70%)",
            opacity: isActive ? 0.2 : 0,
          }}
        />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              {/* Numéro de slide */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isActive ? 0.3 : 0, x: isActive ? 0 : -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                    scale: isActive ? 1 : 0.8,
                    rotate: isActive ? 0 : -10,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent group-hover:scale-110 transition-transform duration-500"
                >
                  <IconComponent size={28} strokeWidth={1.5} />
                </motion.div>
              )}
            </div>

            {/* Nom de la compétence avec Parallax subtil */}
            <motion.h3
              animate={{
                x: isActive ? 0 : index % 2 === 0 ? 40 : -40,
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
              className="font-bebas text-3xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4 leading-none"
            >
              {nom}
            </motion.h3>

            {/* Description */}
            <motion.p
              animate={{
                y: isActive ? 0 : 20,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-dm-mono text-[10px] md:text-sm text-text-muted max-w-md leading-relaxed mb-6"
            >
              {description}
            </motion.p>

            {/* Badges de Technologies */}
            {techs && techs.length > 0 && (
              <div className="flex flex-wrap gap-3 max-w-md">
                {techs.map((tech, i) => {
                  const TechIcon = iconMap[tech.iconName];
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 10,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.15 + i * 0.04,
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
              <span className="font-dm-mono text-[10px] text-text-muted uppercase tracking-widest">
                Maîtrise
              </span>
              <Counter
                value={`${niveau}%`}
                trigger={isActive}
                className="font-bebas text-2xl md:text-4xl text-accent"
              />
            </div>

            {/* Barre de progression custom */}
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: isActive ? `${niveau}%` : 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                style={{
                  boxShadow: "0 0 15px rgba(200, 240, 74, 0.5)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
