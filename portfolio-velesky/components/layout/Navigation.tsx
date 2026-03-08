"use client";

// Navigation fixe scroll-aware — Portfolio Velesky

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { NAV_LIENS, VELESKY } from "@/lib/constants";

// Enregistrement du plugin pour le défilement contrôlé
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOuvert, setMenuOuvert] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLienClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOuvert(false);

    // On attend un peu pour que le menu mobile se ferme (si ouvert)
    setTimeout(() => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: href,
          offsetY: 64, // Hauteur du header (h-16)
        },
        ease: "power4.out",
        onComplete: () => {
          window.history.pushState(null, "", href);
        },
      });
    }, 100);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: scrolled ? "rgba(8, 8, 8, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26, 26, 26, 0.8)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo / Pseudo */}
        <motion.button
          onClick={() => {
            gsap.to(window, {
              duration: 1.5,
              scrollTo: { y: 0 },
              ease: "power4.out",
            });
          }}
          className="font-bebas text-2xl tracking-widest text-foreground hover:text-accent transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {VELESKY.pseudo}
          <span style={{ color: "#c8f04a" }}>.</span>
        </motion.button>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LIENS.map((lien) => (
            <li key={lien.href}>
              <motion.a
                href={lien.href}
                onClick={(e) => handleLienClick(e, lien.href)}
                className="font-dm-mono text-sm text-text-muted hover:text-accent transition-colors duration-200 relative group cursor-pointer"
                whileHover={{ y: -1 }}
              >
                {lien.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#c8f04a" }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* CTA GitHub desktop */}
        <motion.a
          href={VELESKY.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full font-dm-mono text-xs tracking-wider hover:text-accent transition-colors duration-200"
          style={{ border: "1px solid #1a1a1a", color: "#555555" }}
          whileHover={{
            borderColor: "rgba(200, 240, 74, 0.4)",
            color: "#c8f04a",
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
        >
          GitHub ↗
        </motion.a>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <motion.span
            className="block w-5 h-px"
            style={{ backgroundColor: "#e8e4dc" }}
            animate={{ rotate: menuOuvert ? 45 : 0, y: menuOuvert ? 6 : 0 }}
          />
          <motion.span
            className="block w-5 h-px"
            style={{ backgroundColor: "#e8e4dc" }}
            animate={{ opacity: menuOuvert ? 0 : 1 }}
          />
          <motion.span
            className="block w-5 h-px"
            style={{ backgroundColor: "#e8e4dc" }}
            animate={{ rotate: menuOuvert ? -45 : 0, y: menuOuvert ? -6 : 0 }}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOuvert && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(8, 8, 8, 0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid #1a1a1a",
            }}
          >
            <ul className="flex flex-col px-6 py-8 gap-2">
              {NAV_LIENS.map((lien, i) => (
                <motion.li
                  key={lien.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <motion.a
                    href={lien.href}
                    onClick={(e) => handleLienClick(e, lien.href)}
                    className="font-bebas text-5xl tracking-wider text-foreground hover:text-accent transition-colors duration-200 w-full text-left py-4 block"
                  >
                    {lien.label}
                  </motion.a>
                </motion.li>
              ))}
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + NAV_LIENS.length * 0.05, duration: 0.4 }}
                className="mt-4 pt-6 border-t border-white/5"
              >
                <a
                  href={VELESKY.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm-mono text-sm inline-flex items-center gap-2 text-accent/80 hover:text-accent transition-colors duration-200"
                >
                  <span className="w-8 h-px bg-accent/30" />
                  GitHub ↗
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
