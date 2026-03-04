'use client';

// Navigation fixe scroll-aware — Portfolio Velesky

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LIENS, VELESKY } from "@/lib/constants";

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOuvert, setMenuOuvert] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLienClick = (href: string) => {
        setMenuOuvert(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
                backgroundColor: scrolled
                    ? "rgba(8, 8, 8, 0.9)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(26, 26, 26, 0.8)"
                    : "1px solid transparent",
            }}
        >
            <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
                {/* Logo / Pseudo */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
                            <motion.button
                                onClick={() => handleLienClick(lien.href)}
                                className="font-dm-mono text-sm text-text-muted hover:text-accent transition-colors duration-200 relative group"
                                whileHover={{ y: -1 }}
                            >
                                {lien.label}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                                    style={{ backgroundColor: "#c8f04a" }}
                                />
                            </motion.button>
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
                    aria-label="Menu"
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
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden overflow-hidden"
                        style={{
                            backgroundColor: "rgba(8, 8, 8, 0.98)",
                            borderBottom: "1px solid #1a1a1a",
                        }}
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {NAV_LIENS.map((lien) => (
                                <li key={lien.href}>
                                    <button
                                        onClick={() => handleLienClick(lien.href)}
                                        className="font-dm-mono text-sm text-foreground hover:text-accent transition-colors duration-200 w-full text-left py-2"
                                    >
                                        {lien.label}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <a
                                    href={VELESKY.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-dm-mono text-sm text-text-muted hover:text-accent transition-colors duration-200"
                                >
                                    GitHub ↗
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
