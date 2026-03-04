// Footer minimal — Portfolio Velesky

import { VELESKY } from "@/lib/constants";
import { Github, Mail } from "lucide-react";

export function PiedDePage() {
    const annee = new Date().getFullYear();

    return (
        <footer
            className="border-t"
            style={{ borderColor: "#1a1a1a", backgroundColor: "#080808" }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <p className="font-dm-mono text-xs text-text-muted">
                    © {annee}{" "}
                    <span style={{ color: "#c8f04a" }}>{VELESKY.pseudo}</span>{" "}
                    — {VELESKY.nom}
                </p>

                {/* Localisation */}
                <p className="font-dm-mono text-xs text-text-muted">
                    {VELESKY.localisation}
                </p>

                {/* Icônes réseaux */}
                <div className="flex items-center gap-4">
                    <a
                        href={VELESKY.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Velesky"
                        className="text-text-muted hover:text-accent transition-colors duration-200"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href={`mailto:${VELESKY.email}`}
                        aria-label="Email Velesky"
                        className="text-text-muted hover:text-accent transition-colors duration-200"
                    >
                        <Mail size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
