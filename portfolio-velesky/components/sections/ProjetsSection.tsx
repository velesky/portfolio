'use client';

// Section Projets — Animation GSAP MotionPath ScrollTrigger — Portfolio Velesky
// Principe : une seule card mobile voyage d'un ghost slot à l'autre le long d'un chemin courbe.
// Le contenu de la card change au bon seuil de progression (ease:none → points uniformément répartis).

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { projets } from '@/data/projets';
import { RevealAuScroll } from '@/components/ui/RevealAuScroll';

// Enregistrement GSAP une seule fois
gsap.registerPlugin(ScrollTrigger);

// ─── Constantes design ───────────────────────────────────────────────────────
const ACCENT = '#c8f04a';
const CARD_BG = '#0f0f0f';
const BORDER = '#1a1a1a';
const BORDER_ACTIVE = 'rgba(200, 240, 74, 0.5)';
const GLOW_ACTIVE = '0 0 24px rgba(200, 240, 74, 0.15)';

// Positions zig-zag des ghost slots en % (left, top) dans la zone principale
// Slot 0 = départ de la card mobile (pas un ghost)
const SLOT_POSITIONS: { left: string; top: string }[] = [
    { left: '4%', top: '0%' }, // Point de départ
    { left: '52%', top: '20%' }, // Stop 1 — droite
    { left: '4%', top: '44%' }, // Stop 2 — gauche
    { left: '52%', top: '68%' }, // Stop 3 — droite
];

// ─── Composant principal ──────────────────────────────────────────────────────
export function ProjetsSection() {
    // Refs pour GSAP
    const sectionRef = useRef<HTMLElement>(null);
    const zoneRef = useRef<HTMLDivElement>(null);    // zone principale (position:relative)
    const cardRef = useRef<HTMLDivElement>(null);    // card mobile (position:absolute)
    const startRef = useRef<HTMLDivElement>(null);    // container de départ (trigger start)
    const endMarkerRef = useRef<HTMLDivElement>(null);    // marqueur de fin
    const ghostRefs = useRef<(HTMLDivElement | null)[]>([]);  // ghost slots 1..N
    const ctxRef = useRef<gsap.Context | null>(null);

    // Contenu courant de la card
    const activeIndexRef = useRef<number>(0);
    const cardContentRef = useRef<HTMLDivElement>(null);

    // ── Initialisation / resize ────────────────────────────────────────────────
    // ── Helpers DOM ────────────────────────────────────────────────────────────
    // Mise à jour directe du DOM de la card (pas de setState → pas de re-render GSAP)
    const updateCardDOM = (index: number) => {
        const projet = projets[index];
        const content = cardContentRef.current;
        if (!projet || !content) return;

        const numEl = content.querySelector<HTMLElement>('[data-card-num]');
        const titleEl = content.querySelector<HTMLElement>('[data-card-titre]');
        const descEl = content.querySelector<HTMLElement>('[data-card-desc]');
        const badgesEl = content.querySelector<HTMLElement>('[data-card-badges]');
        const linksEl = content.querySelector<HTMLElement>('[data-card-links]');

        if (numEl) numEl.textContent = String(index + 1).padStart(2, '0');
        if (titleEl) titleEl.textContent = projet.titre;
        if (descEl) descEl.textContent = projet.description;

        if (badgesEl) {
            badgesEl.innerHTML = projet.stack
                .map(s => `<span style="display:inline-block;font-size:0.75rem;padding:2px 8px;border-radius:9999px;background:rgba(200,240,74,0.08);color:#c8f04a;border:1px solid rgba(200,240,74,0.2);font-family:DM Mono,monospace">${s}</span>`)
                .join('');
        }

        if (linksEl) {
            const links: string[] = [];
            if (projet.github) links.push(`<a href="${projet.github}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem;color:#6b6b6b;font-family:DM Mono,monospace">↗ GitHub</a>`);
            if (projet.lien) links.push(`<a href="${projet.lien}"   target="_blank" rel="noopener noreferrer" style="font-size:0.75rem;color:#6b6b6b;font-family:DM Mono,monospace">↗ Voir le projet</a>`);
            linksEl.innerHTML = links.join('');
        }
    };

    // ── Swap : déclenché AU CONTACT (95% du leg) ──────────────────────────────
    // Animation premium : Fade + Scale-up + Blur-in
    const swapContent = (newIndex: number) => {
        if (newIndex === activeIndexRef.current) return;
        activeIndexRef.current = newIndex;

        const content = cardContentRef.current;
        if (!content) return;

        gsap.to(content, {
            opacity: 0,
            scale: 0.92,
            filter: 'blur(8px)',
            duration: 0.15,
            ease: 'power2.in',
            overwrite: true,
            onComplete: () => {
                updateCardDOM(newIndex);
                gsap.fromTo(
                    content,
                    { opacity: 0, scale: 0.95, filter: 'blur(12px)' },
                    {
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                        duration: 0.4,
                        ease: 'back.out(1.4)'
                    }
                );
            },
        });
    };

    // ── Feedback visuel des ghost slots ────────────────────────────────────────
    const updateGhostActive = (activeStop: number) => {
        ghostRefs.current.forEach((ghost, i) => {
            if (!ghost) return;
            const isActive = i === activeStop - 1;
            ghost.style.borderColor = isActive ? BORDER_ACTIVE : BORDER;
            ghost.style.boxShadow = isActive ? GLOW_ACTIVE : 'none';
        });
        const start = startRef.current;
        if (start) {
            const isActive = activeStop === 0;
            start.style.borderColor = isActive ? BORDER_ACTIVE : BORDER;
            start.style.boxShadow = isActive ? GLOW_ACTIVE : 'none';
        }
    };

    useEffect(() => {
        const init = () => {
            ctxRef.current?.revert();

            const zone = zoneRef.current;
            const card = cardRef.current;
            const start = startRef.current;
            const end = endMarkerRef.current;
            const ghosts = ghostRefs.current;

            if (!zone || !card || !start || !end) return;

            // ── Étape 1 : forcer stop = même taille que la card ────────────────────
            const cardH = card.offsetHeight;
            card.style.height = `${cardH}px`;
            card.style.overflow = 'hidden';
            [start, ...ghosts].forEach(el => {
                if (!el) return;
                el.style.height = `${cardH}px`;
                el.style.minHeight = 'unset';
            });

            const cL = card.offsetLeft;
            const cT = card.offsetTop;

            const stops = ghosts.map(ghost => {
                if (!ghost) return { x: 0, y: 0 };
                return {
                    x: ghost.offsetLeft - cL,
                    y: ghost.offsetTop - cT,
                };
            });

            const n = stops.length;

            const totalY = end.offsetTop - start.offsetTop;
            const segmentDistances = stops.map((stop, i) => {
                const prevY = i === 0 ? 0 : stops[i - 1].y;
                return Math.abs(stop.y - prevY);
            });
            const durations = segmentDistances.map(d => (d / totalY) * n);
            const totalTimelineDuration = durations.reduce((a, b) => a + b, 0);

            ctxRef.current = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: start,
                        endTrigger: end,
                        start: 'top 15%',
                        end: 'bottom 75%',
                        scrub: 1.0,
                        onUpdate: (self) => {
                            const p = self.progress;

                            // ── Identification du stop actif (feedback visuel bords verts) ─────
                            let cumulativeDur = 0;
                            let activeStop = 0;
                            // Seuil de proximité pour le feedback visuel (plus souple)
                            for (let i = 0; i < n; i++) {
                                const legDur = durations[i];
                                const threshold = (cumulativeDur + legDur * 0.5) / totalTimelineDuration;
                                if (p >= threshold) {
                                    activeStop = i + 1;
                                }
                                cumulativeDur += legDur;
                            }
                            updateGhostActive(activeStop);

                            // ── Identification du projet cible (swap de contenu) ──────────────
                            // On cherche l'index le plus élevé dont le seuil est franchi
                            let targetIndex = 0;
                            cumulativeDur = 0;
                            for (let i = 0; i < n; i++) {
                                const legDur = durations[i];
                                // On swap dès que la carte est à 90% du trajet vers le stop suivant
                                const threshold = (cumulativeDur + legDur * 0.9) / totalTimelineDuration;
                                if (p >= threshold) {
                                    targetIndex = i + 1;
                                }
                                cumulativeDur += legDur;
                            }

                            // Si on scrolle en arrière, on ajuste le seuil pour plus de réactivité
                            cumulativeDur = totalTimelineDuration;
                            for (let i = n - 1; i >= 0; i--) {
                                const legDur = durations[i];
                                const threshold = (cumulativeDur - legDur * 0.9) / totalTimelineDuration;
                                if (p < threshold && targetIndex > i) {
                                    targetIndex = i;
                                }
                                cumulativeDur -= legDur;
                            }

                            // Mise à jour si l'index cible diffère de l'index actuel
                            if (targetIndex !== activeIndexRef.current) {
                                swapContent(targetIndex);
                            }
                        },
                    },
                });

                // ── Tweening avec durées calculées ────────────────────────────────
                stops.forEach((stop, i) => {
                    tl.to(card, {
                        x: stop.x,
                        y: stop.y,
                        ease: 'power2.inOut',
                        duration: durations[i],
                    });
                });
            });
        };

        // Délai minimal pour que le CSS final soit appliqué (offsetWidth correct)
        const timer = setTimeout(init, 100);

        const handleResize = () => {
            clearTimeout(timer);
            setTimeout(init, 120);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            ctxRef.current?.revert();
            clearTimeout(timer);
        };
    }, []);

    // ── Rendu ─────────────────────────────────────────────────────────────────
    return (
        <section
            id="projets"
            ref={sectionRef}
            className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">

                {/* ── En-tête section ─────────────────────────────────────────────── */}
                <RevealAuScroll className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="block w-8 h-px" style={{ backgroundColor: ACCENT }} />
                        <span className="font-dm-mono text-xs tracking-widest uppercase" style={{ color: ACCENT }}>
                            Mes projets
                        </span>
                    </div>
                    <h2
                        className="font-bebas tracking-wider leading-none"
                        style={{ fontSize: 'clamp(48px, 7vw, 88px)', color: '#e8e4dc' }}
                    >
                        Ce que
                        <br />
                        <span style={{ color: ACCENT }}>j&apos;ai</span> construit.
                    </h2>
                </RevealAuScroll>

                {/* ── Zone principale MotionPath ───────────────────────────────────── */}
                {/* Hauteur conçue pour que ScrollTrigger ait le temps de traverser tous les stops */}
                <div
                    ref={zoneRef}
                    className="relative w-full"
                    style={{ height: 'clamp(1600px, 220vh, 2400px)' }}
                >

                    {/* Container de départ — contient physiquement la card mobile */}
                    <div
                        ref={startRef}
                        className="absolute rounded-3xl transition-[border-color,box-shadow] duration-300"
                        style={{
                            left: SLOT_POSITIONS[0].left,
                            top: SLOT_POSITIONS[0].top,
                            width: 'clamp(280px, 44%, 520px)',
                            height: 'auto',
                            minHeight: '220px',
                            border: `1px solid ${BORDER}`,
                        }}
                    >
                        {/* Numéro du slot */}
                        <div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-bebas"
                            style={{ fontSize: '120px', color: 'rgba(200,240,74,0.03)' }}
                        >
                            01
                        </div>
                    </div>

                    {/* Ghost slots — cases vides cibles */}
                    {projets.slice(1).map((_, i) => {
                        const slotIndex = i + 1; // SLOT_POSITIONS[1..3]
                        const pos = SLOT_POSITIONS[slotIndex];
                        if (!pos) return null;
                        return (
                            <div
                                key={slotIndex}
                                ref={el => { ghostRefs.current[i] = el; }}
                                className="absolute rounded-3xl transition-[border-color,box-shadow] duration-300"
                                style={{
                                    left: pos.left,
                                    top: pos.top,
                                    width: 'clamp(280px, 44%, 520px)',
                                    minHeight: '220px',
                                    border: `1px solid ${BORDER}`,
                                }}
                            >
                                {/* Numéro HTML (pas ::after — instable avec position:absolute+flex) */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-bebas"
                                    style={{ fontSize: '120px', color: 'rgba(200,240,74,0.03)' }}
                                >
                                    {String(slotIndex + 1).padStart(2, '0')}
                                </div>

                                {/* Label discret */}
                                <div
                                    className="absolute top-4 left-6 font-dm-mono text-xs tracking-widest uppercase"
                                    style={{ color: 'rgba(200,240,74,0.2)' }}
                                >
                                    — stop {slotIndex}
                                </div>
                            </div>
                        );
                    })}

                    {/* Marqueur de fin de section (fin du ScrollTrigger) */}
                    <div
                        ref={endMarkerRef}
                        className="absolute"
                        style={{
                            bottom: '2%',
                            left: 0,
                            width: '1px',
                            height: '1px',
                        }}
                    />

                    {/* ── Card mobile (position:absolute dans la zone) ──────────────── */}
                    {/* Elle est physiquement dans le DOM à la position du départ, GSAP la translate */}
                    <div
                        ref={cardRef}
                        className="absolute rounded-3xl overflow-hidden"
                        style={{
                            left: SLOT_POSITIONS[0].left,
                            top: SLOT_POSITIONS[0].top,
                            width: 'clamp(280px, 44%, 520px)',
                            backgroundColor: CARD_BG,
                            border: `1px solid ${BORDER}`,
                            willChange: 'transform',
                            zIndex: 10,
                        }}
                    >
                        {/* Glow permanent accent */}
                        <div
                            className="absolute inset-0 rounded-3xl pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse at top left, rgba(200, 240, 74, 0.05) 0%, transparent 65%)',
                            }}
                        />

                        {/* Contenu de la card — mis à jour via DOM direct (swap) */}
                        <div ref={cardContentRef} className="relative">
                            {/* Numéro */}
                            <div
                                data-card-num
                                className="absolute top-5 right-6 font-bebas text-5xl leading-none pointer-events-none select-none"
                                style={{ color: 'rgba(200, 240, 74, 0.08)' }}
                            >
                                01
                            </div>

                            <div className="p-7 flex flex-col gap-4">
                                {/* Titre */}
                                <h3 data-card-titre className="font-bebas text-3xl tracking-wider" style={{ color: '#e8e4dc' }}>
                                    {projets[0].titre}
                                </h3>

                                {/* Description */}
                                <p data-card-desc className="font-dm-mono text-sm leading-relaxed" style={{ color: '#6b6b6b' }}>
                                    {projets[0].description}
                                </p>

                                {/* Badges */}
                                <div data-card-badges className="flex flex-wrap gap-2">
                                    {projets[0].stack.map(s => (
                                        <span
                                            key={s}
                                            className="font-dm-mono text-xs px-2 py-1 rounded-full"
                                            style={{
                                                background: 'rgba(200,240,74,0.08)',
                                                color: ACCENT,
                                                border: '1px solid rgba(200,240,74,0.2)',
                                            }}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                {/* Liens */}
                                <div data-card-links className="flex items-center gap-4 pt-2">
                                    {projets[0].github && (
                                        <a
                                            href={projets[0].github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 font-dm-mono text-xs"
                                            style={{ color: '#6b6b6b' }}
                                        >
                                            ↗ GitHub
                                        </a>
                                    )}
                                </div>

                                {/* Ligne accent bas */}
                                <div
                                    className="absolute bottom-0 left-0 h-[1px] w-full"
                                    style={{ backgroundColor: 'rgba(200, 240, 74, 0.18)' }}
                                />
                            </div>
                        </div>
                    </div>

                </div>{/* fin zone principale */}
            </div>
        </section>
    );
}
