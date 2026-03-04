// Section Compétences — Portfolio Velesky

import { competences } from "@/data/competences";
import { BarreProgression } from "@/components/ui/BarreProgression";
import { RevealAuScroll } from "@/components/ui/RevealAuScroll";

export function CompetencesSection() {
    return (
        <section
            id="competences"
            className="py-24 md:py-32 px-6 md:px-10"
            style={{ backgroundColor: "#0a0a0a" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* En-tête */}
                <RevealAuScroll className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="block w-8 h-px" style={{ backgroundColor: "#c8f04a" }} />
                        <span
                            className="font-dm-mono text-xs tracking-widest uppercase"
                            style={{ color: "#c8f04a" }}
                        >
                            Compétences
                        </span>
                    </div>
                    <h2
                        className="font-bebas tracking-wider leading-none"
                        style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#e8e4dc" }}
                    >
                        Mon
                        <br />
                        <span style={{ color: "#c8f04a" }}>Arsenal.</span>
                    </h2>
                </RevealAuScroll>

                {/* Grille des barres */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl">
                    {competences.map((comp, index) => (
                        <BarreProgression
                            key={comp.nom}
                            nom={comp.nom}
                            description={comp.description}
                            niveau={comp.niveau}
                            delay={index * 0.08}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
