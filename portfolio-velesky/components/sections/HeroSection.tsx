"use client";

// Section Hero — Portfolio Velesky

import { motion, useReducedMotion } from "framer-motion";
import { VELESKY } from "@/lib/constants";
import { ButtonMagnetic } from "@/components/ui/ButtonMagnetic";
import Link from "next/link";
import { Github, Mail, MessageCircle } from "lucide-react";

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  const handleScrollProjets = () => {
    document.querySelector("#projets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-16 overflow-hidden"
    >
      {/* Fond : grille subtile */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow central */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full pointer-events-none blur-3xl"
        style={{ backgroundColor: "rgba(200, 240, 74, 0.05)" }}
      />

      <div id="hero-content" className="relative z-10 max-w-5xl w-full flex flex-col gap-8">
        {/* Tag dis créatif */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="block w-8 h-px" style={{ backgroundColor: "#c8f04a" }} />
          <span
            className="font-dm-mono text-xs tracking-widest uppercase"
            style={{ color: "#c8f04a" }}
          >
            Portfolio — {new Date().getFullYear()}
          </span>
        </motion.div>

        {/* Titre principal */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-bebas leading-[0.8] tracking-wider"
            style={{
              fontSize: "clamp(60px, 15vw, 160px)",
              color: "#e8e4dc",
            }}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 80, skewY: 3 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            VELESKY
          </motion.h1>
        </div>

        {/* Tagline accent */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="font-bebas tracking-wider"
            style={{
              fontSize: "clamp(24px, 6vw, 56px)",
              color: "#c8f04a",
              lineHeight: 1,
            }}
          >
            Vibe Coder & Developer
          </p>
        </motion.div>

        {/* Baseline */}
        <motion.p
          className="font-dm-mono text-sm md:text-base leading-relaxed max-w-lg italic"
          style={{ color: "#555555" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {VELESKY.baseline}
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 w-full sm:w-auto">
          {/* Ligne 1 : Voir mes projets + GitHub */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-3 w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="md:w-auto"
            >
              <ButtonMagnetic
                variant="accent"
                onClick={handleScrollProjets}
                className="w-full md:px-8"
              >
                Mes projets
              </ButtonMagnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:w-auto"
            >
              <Link
                href={VELESKY.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir mon profil GitHub"
              >
                <ButtonMagnetic className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-[var(--accent)] hover:text-black transition-colors group w-full md:px-6">
                  <Github size={16} aria-hidden="true" />
                  GitHub
                </ButtonMagnetic>
              </Link>
            </motion.div>
          </div>

          {/* Ligne 2 : WhatsApp + Email */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-3 w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:w-auto"
            >
              <ButtonMagnetic
                variant="outline"
                href={VELESKY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:px-6"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp
              </ButtonMagnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="md:w-auto"
            >
              <ButtonMagnetic
                variant="ghost"
                href={`mailto:${VELESKY.email}`}
                className="w-full md:px-6"
              >
                <Mail size={16} aria-hidden="true" />
                Email
              </ButtonMagnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
