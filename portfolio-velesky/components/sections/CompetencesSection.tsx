'use client';

// Section Compétences avec défilement horizontal — Portfolio Velesky

import { useRef, useState, useEffect } from "react";
import { competences } from "@/data/competences";
import { CompetenceCard } from "@/components/ui/CompetenceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function CompetencesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useGSAP(() => {
        const pin = pinRef.current;
        const trigger = triggerRef.current;
        if (!pin || !trigger) return;

        // Calcul de la distance de défilement horizontal
        // On enlève 100vw car le premier écran est déjà visible
        const totalWidth = pin.scrollWidth;
        const scrollDistance = totalWidth - window.innerWidth;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${scrollDistance + 1000}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                refreshPriority: -1,
                onEnter: () => gsap.set(sectionRef.current, { zIndex: 100 }),
                onLeaveBack: () => gsap.set(sectionRef.current, { zIndex: 30 }),
                onUpdate: (self) => {
                    // Calcul de l'index actif en fonction du progrès
                    // Il y a 6 compétences + l'en-tête (7 éléments au total)
                    const count = competences.length + 1;
                    const index = Math.min(
                        Math.floor(self.progress * count),
                        count - 1
                    );
                    setActiveIndex(index);
                },
            },
        });

        tl.to(pin, {
            x: -scrollDistance,
            ease: "none",
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
        };
    }, { scope: triggerRef });

    return (
        <section
            ref={sectionRef}
            id="competences"
            className="overflow-hidden bg-[#080808] relative z-30 min-h-screen"
        >
            <div ref={triggerRef} className="relative">
                <div
                    ref={pinRef}
                    className="flex h-screen items-center will-change-transform"
                    style={{ width: "fit-content" }}
                >
                    {/* Slide 0 : En-tête */}
                    <div className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-10 md:px-24">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="block w-12 h-px bg-accent" />
                            <span className="font-dm-mono text-xs md:text-sm tracking-[0.3em] uppercase text-accent">
                                Mes Domaines
                            </span>
                        </div>
                        <h2 className="font-bebas text-[15vw] md:text-[12vw] leading-none text-white tracking-tighter">
                            MON <br />
                            <span className="text-accent italic translate-x-4 inline-block">ARSENAL.</span>
                        </h2>


                    </div>

                    {/* Slides des compétences */}
                    {competences.map((comp, index) => (
                        <CompetenceCard
                            key={comp.nom}
                            nom={comp.nom}
                            description={comp.description}
                            niveau={comp.niveau}
                            iconName={comp.iconName}
                            techs={comp.techs}
                            index={index}
                            isActive={activeIndex === index + 1}
                        />
                    ))}

                    {/* Espace final pour ne pas couper brusquement */}
                    <div className="flex-shrink-0 w-[20vw] h-full" />
                </div>
            </div>
        </section>
    );
}
