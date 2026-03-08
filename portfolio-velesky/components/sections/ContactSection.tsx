"use client";

import { motion, useInView } from "framer-motion";
import { VELESKY } from "@/lib/constants";
import { RevealAuScroll } from "@/components/ui/RevealAuScroll";
import { ButtonMagnetic } from "@/components/ui/ButtonMagnetic";
import { Github, Mail, MessageCircle } from "lucide-react";
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
              Disponible pour des projets freelance, des collaborations ou simplement pour échanger
              sur du code et du design. Je réponds toujours.
            </p>

            {/* Email grande taille avec typewriter */}
            <div
              className="flex flex-col gap-4 font-bebas tracking-wide mb-10 relative z-10"
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
                aria-label="Envoyer un e-mail à Velesky"
              >
                <TypewriterEmail email={VELESKY.email} /> ↗
              </motion.a>
              <motion.a
                href={VELESKY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
                whileHover={{ x: 4 }}
                aria-label="Contacter Velesky sur WhatsApp"
              >
                <span className="font-dm-mono text-xs md:text-sm mr-2 opacity-60">WhatsApp:</span>
                {VELESKY.whatsapp} ↗
              </motion.a>
            </div>

            {/* Boutons avec slide-in */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 relative z-10 w-full">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-[320px] md:max-w-none md:w-auto"
              >
                <ButtonMagnetic
                  variant="accent"
                  href={`mailto:${VELESKY.email}`}
                  className="w-full md:px-8"
                  aria-label="Envoyer un mail"
                >
                  <Mail size={16} aria-hidden="true" />
                  Envoyer un mail
                </ButtonMagnetic>
              </motion.div>

              <div className="flex flex-row gap-3 w-full max-w-[320px] justify-center md:justify-start md:w-auto">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 md:flex-initial md:w-auto"
                >
                  <ButtonMagnetic
                    variant="outline"
                    href={VELESKY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-xs sm:text-sm md:px-6"
                    aria-label="Contacter sur WhatsApp"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    WhatsApp
                  </ButtonMagnetic>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 md:flex-initial md:w-auto"
                >
                  <ButtonMagnetic
                    variant="ghost"
                    href={VELESKY.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-xs sm:text-sm md:px-6"
                  >
                    <Github size={16} />
                    GitHub
                  </ButtonMagnetic>
                </motion.div>
              </div>
            </div>
          </div>
        </RevealAuScroll>
      </div>
    </section>
  );
}
