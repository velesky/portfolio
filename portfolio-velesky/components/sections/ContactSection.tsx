'use client';

import { motion, useInView } from "framer-motion";
import { VELESKY } from "@/lib/constants";
import { RevealAuScroll } from "@/components/ui/RevealAuScroll";
import { ButtonMagnetic } from "@/components/ui/ButtonMagnetic";
import { Github, Mail } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// --- Composant Typewriter ---
function TypewriterEmail({ email }: { email: string }) {
    const [text, setText] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const timer = setInterval(() => {
                setText(email.substring(0, i));
                i++;
                if (i > email.length) clearInterval(timer);
            }, 40);
            return () => clearInterval(timer);
        }
    }, [isInView, email]);

    return (
        <span ref={ref} className="inline-block min-h-[1.2em]">
            {text}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[0.8em] bg-accent ml-1 align-middle"
            />
        </span>
    );
}

export function ContactSection() {
    const titleWords = "Travaillons".split(" ");

    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* En-tête */}
                <RevealAuScroll className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="block h-px"
                            style={{ backgroundColor: "#c8f04a" }}
                        />
                        <span
                            className="font-dm-mono text-xs tracking-widest uppercase"
                            style={{ color: "#c8f04a" }}
                        >
                            Contact
                        </span>
                    </div>
                    <h2
                        className="font-bebas tracking-wider leading-none flex flex-wrap gap-x-4"
                        style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#e8e4dc" }}
                    >
                        {titleWords.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                            >
                                {word}
                            </motion.span>
                        ))}
                        <br className="w-full" />
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                            className="relative"
                            style={{ color: "#c8f04a" }}
                        >
                            Ensemble.
                            <motion.span
                                className="absolute inset-0 blur-xl opacity-30 pointer-events-none"
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                style={{ backgroundColor: "#c8f04a" }}
                            />
                        </motion.span>
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

                        {/* Email grande taille avec typewriter */}
                        <div
                            className="block font-bebas tracking-wide mb-10 relative z-10"
                            style={{
                                fontSize: "clamp(18px, 3vw, 28px)",
                                color: "#e8e4dc",
                                wordBreak: "break-all",
                            }}
                        >
                            <motion.a
                                href={`mailto:${VELESKY.email}`}
                                className="hover:text-accent transition-colors duration-300"
                                whileHover={{ x: 4 }}
                            >
                                <TypewriterEmail email={VELESKY.email} /> ↗
                            </motion.a>
                        </div>

                        {/* Boutons avec slide-in */}
                        <div className="flex flex-wrap gap-4 relative z-10">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <ButtonMagnetic
                                    variant="accent"
                                    href={`mailto:${VELESKY.email}`}
                                >
                                    <Mail size={14} />
                                    Envoyer un mail
                                </ButtonMagnetic>
                            </motion.div>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <ButtonMagnetic
                                    variant="outline"
                                    href={VELESKY.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={14} />
                                    GitHub
                                </ButtonMagnetic>
                            </motion.div>
                        </div>
                    </div>
                </RevealAuScroll>
            </div>
        </section>
    );
}
