"use client";

import React from "react";
import Link from "next/link";
import { Github, Mail, MessageCircle } from "lucide-react";
import { VELESKY } from "@/lib/constants";

export function PiedDePage() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/5 bg-[#080808] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-dm-mono text-sm opacity-40">
            © {new Date().getFullYear()} {VELESKY.pseudo.toUpperCase()}. TOUS DROITS RÉSERVÉS.
          </p>
          <p className="font-dm-mono text-[10px] uppercase tracking-widest opacity-20">
            DISPONIBLE À {VELESKY.localisation.toUpperCase()} & EN REMOTE
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            href={VELESKY.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} aria-hidden="true" />
          </Link>
          <Link
            href={VELESKY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} aria-hidden="true" />
          </Link>
          <Link
            href={`mailto:${VELESKY.email}`}
            className="hover:text-[var(--accent)] transition-colors"
            aria-label="Envoyer un email"
          >
            <Mail size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
