// Section Projets — Portfolio Velesky

import { projets } from "@/data/projets";
import { CarteProjet } from "@/components/ui/CarteProjet";
import { RevealAuScroll } from "@/components/ui/RevealAuScroll";

export function ProjetsSection() {
    return (
        <section id="projets" className="py-24 md:py-32 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">
                {/* En-tête section */}
                <RevealAuScroll className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span
                            className="block w-8 h-px"
                            style={{ backgroundColor: "#c8f04a" }}
                        />
                        <span
                            className="font-dm-mono text-xs tracking-widest uppercase"
                            style={{ color: "#c8f04a" }}
                        >
                            Mes projets
                        </span>
                    </div>
                    <h2
                        className="font-bebas tracking-wider leading-none"
                        style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "#e8e4dc" }}
                    >
                        Ce que
                        <br />
                        <span style={{ color: "#c8f04a" }}>j&apos;ai</span> construit.
                    </h2>
                </RevealAuScroll>

                {/* Grille des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projets.map((projet, index) => (
                        <CarteProjet key={projet.id} projet={projet} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
