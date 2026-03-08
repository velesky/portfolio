'use client';

// HeroPinTransition — Portfolio Velesky
// Transition cinématique Hero → Projets via GSAP ScrollTrigger pin + scrub.
//
// Architecture DOM (flux normal — pas d'overflow clip) :
//   <div#hero-pin-root>
//     <div z:1> <HeroSection /> </div>          ← min-height: 100vh
//     <div#projets-reveal margin-top:-100vh>     ← flux normal, z:2
//       <ProjetsSection />
//     </div>                                     ← contribue à la hauteur doc
//   </div>
//   <AProposSection />  <CompetencesSection />  <ContactSection />
//
// Principe de positionnement :
//   • margin-top: -100vh → le reveal se superpose visuellement au hero
//   • gsap.set(reveal, { y: '100vh' }) → décale vers le bas (hors vue)
//   • scrub : y: '100vh' → y: 0 = le reveal remonte pendant le pin
//   • Pas d'overflow:clip → le contenu complet de ProjetsSection reste visible

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeroSection } from '@/components/sections/HeroSection';
import { ProjetsSection } from '@/components/sections/ProjetsSection';
import { AProposSection } from '@/components/sections/AProposSection';
import { CompetencesSection } from '@/components/sections/CompetencesSection';
import { ContactSection } from '@/components/sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export function HeroPinTransition() {
    const pinRootRef = useRef<HTMLDivElement>(null);
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pinRoot = pinRootRef.current;
        const reveal = revealRef.current;
        const heroSection = document.getElementById('hero');
        const heroContent = document.getElementById('hero-content');

        if (!pinRoot || !reveal || !heroSection || !heroContent) return;

        // Décale le reveal d'un viewport vers le bas (hors-écran sous le hero)
        // margin-top:-100vh l'ancre visuellement au top du hero,
        // + y:100vh le pousse exactement en bas du viewport.
        gsap.set(reveal, { y: '100vh' });

        const mm = gsap.matchMedia();

        // ── Desktop ──────────────────────────────────────────────────────────
        mm.add('(min-width: 769px)', () => {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        id: 'hero-pin',
                        trigger: pinRoot,
                        start: 'top top',
                        end: '+=150%',
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                tl.to(heroSection, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.3, // Finit rapidement
                    ease: 'power2.in'
                }, 0);
                tl.set(heroSection, { visibility: 'hidden' }, 0.4);
                tl.to(reveal, { y: 0, ease: 'none' }, 0);
            });

            return () => {
                ctx.revert();
                gsap.set(reveal, { clearProps: 'y' });
            };
        });

        // ── Mobile ───────────────────────────────────────────────────────────
        mm.add('(max-width: 768px)', () => {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        id: 'hero-pin',
                        trigger: pinRoot,
                        start: 'top top',
                        end: '+=100%',
                        pin: true,
                        scrub: 0.8,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                tl.to(reveal, { y: 0, ease: 'none' }, '<');
            });

            return () => {
                ctx.revert();
                gsap.set(reveal, { clearProps: 'y' });
            };
        });

        // Recalculer les positions une fois que tout est monté et chargé
        const handleLoad = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('load', handleLoad);

        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);

        return () => {
            mm.revert();
            window.removeEventListener('load', handleLoad);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            {/* ── Zone de pin ─────────────────────────────────────────────── */}
            {/* PAS d'overflow:clip ici — on laisse ProjetsSection s'étendre  */}
            <div
                ref={pinRootRef}
                style={{ position: 'relative' }}
            >
                {/* Hero — z:1, occupe 100vh */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <HeroSection />
                </div>

                {/* Reveal — FLUX NORMAL (pas d'absolute) ─────────────────── */}
                {/* margin-top:-100vh → ancrage visuel sur le hero             */}
                {/* GSAP y:100vh → 0 = glisse depuis le bas pendant le pin    */}
                {/* Pas de clip → toute la hauteur de ProjetsSection existe    */}
                <div
                    ref={revealRef}
                    id="projets-reveal"
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        marginTop: '-100vh',         // superpose visuellement le hero
                        backgroundColor: '#080808',   // masque le hero derrière
                        willChange: 'transform',
                    }}
                >
                    <ProjetsSection />
                </div>
            </div>

            {/* ── Sections suivantes — flux normal ───────────────────────── */}
            <AProposSection />
            <CompetencesSection />
            <ContactSection />
        </>
    );
}
