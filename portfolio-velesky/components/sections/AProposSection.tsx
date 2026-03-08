"use client";

// Section À propos — Portfolio Velesky
// Refonte avec animations premium : Portrait mask, Split text, Stat counters.

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { VELESKY, COULEURS } from "@/lib/constants";
import { Counter } from "@/components/ui/Counter";

// Stats bio
const STATS = [
  { valeur: "3+", label: "Années de Dev" },
  { valeur: "4", label: "Projets Live" },
  { valeur: "100%", label: "Offline-first" },
];

export function AProposSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Titre fractionné pour l'animation
  const words = ["QUI", "EST", "VELESKY ?"];

  return (
    <section
      id="a-propos"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-10 overflow-hidden relative z-1 bg-[#080808] min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── En-tête : Titre avec Split Text ────────────────────────── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20px" }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="block w-8 h-px" style={{ backgroundColor: COULEURS.accent }} />
            <span
              className="font-dm-mono text-xs tracking-[0.3em] uppercase"
              style={{ color: COULEURS.accent }}
            >
              L&apos;identité
            </span>
          </motion.div>

          <h2
            className="font-bebas tracking-wider leading-[0.9]"
            style={{ fontSize: "clamp(50px, 12vw, 140px)", color: COULEURS.foreground }}
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: false, margin: "0px 0px -10% 0px" }} // Marge en % pour adaptabilité mobile/desktop
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                  style={{ color: word.includes("VELESKY") ? COULEURS.accent : "inherit" }}
                >
                  {word}
                </motion.span>
                {i === 1 && <br className="block md:hidden" />}
              </span>
            ))}
          </h2>
        </div>

        {/* ── Contenu : Photo + Bio ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Colonne Photo (Mask Reveal) */}
          <div className="lg:col-span-5 relative group px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5"
            >
              <Image
                src={VELESKY.photo}
                alt={`Portrait de ${VELESKY.pseudo}`}
                fill
                className="object-cover object-top grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay subtile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Tag Localisation (Slide-in latéral) */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 px-4 md:px-6 py-3 md:py-4 rounded-2xl flex items-center gap-2 md:gap-3 shadow-2xl backdrop-blur-xl z-20"
              style={{
                backgroundColor: "rgba(15, 15, 15, 0.8)",
                border: `1px solid ${COULEURS.borderSubtle}`,
              }}
            >
              <span
                className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse"
                style={{ backgroundColor: COULEURS.accent }}
              />
              <span
                className="font-dm-mono text-[10px] md:text-xs tracking-wider"
                style={{ color: COULEURS.foreground }}
              >
                {VELESKY.localisation}
              </span>
            </motion.div>
          </div>

          {/* Colonne Bio + Stats (Fade + Slide line by line) */}
          <div className="lg:col-span-7 flex flex-col gap-12 pt-4">
            <div className="flex flex-col gap-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-3xl font-dm-mono leading-tight tracking-tight"
                style={{ color: COULEURS.foreground }}
              >
                Je suis{" "}
                <span style={{ color: COULEURS.accent }}>{VELESKY.nom.split(" ").pop()}</span>,
                développeur basé en Côte d&apos;Ivoire. Je fusionne{" "}
                <span className="italic">ingénierie</span> et{" "}
                <span className="italic">esthétique</span> pour créer des solutions numériques
                d&apos;exception.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="font-dm-mono text-base md:text-lg leading-relaxed text-neutral-400">
                  Spécialisé dans l&apos;écosystème <span className="text-white">Flutter</span> pour
                  le mobile et <span className="text-white">Next.js</span> pour le web,
                  j&apos;accorde une importance capitale à l&apos;expérience utilisateur et aux
                  performances offline.
                </p>
                <p className="font-dm-mono text-base md:text-lg leading-relaxed text-neutral-500 italic">
                  &quot;Vibe coder&quot; par passion, mon code est rythmé par la recherche de la
                  perfection visuelle et la robustesse architecturale.
                </p>
              </motion.div>
            </div>

            {/* Bloc Statistiques (Counter Animation) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pt-8 border-t border-white/5">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className={`flex flex-col gap-2 ${i === 2 ? "col-span-2 md:col-span-1 border-t border-white/5 pt-4 md:border-0 md:pt-0" : ""}`}
                >
                  <Counter
                    value={stat.valeur}
                    className="font-bebas text-3xl md:text-6xl leading-none"
                    style={{ color: COULEURS.accent }}
                  />
                  <p className="font-dm-mono text-[10px] md:text-xs uppercase tracking-widest text-neutral-600">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
