'use client';

// Curseur personnalisé trailing avec glow vert acidulé — Portfolio Velesky

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export function CurseurPersonnalise() {
    const [visible, setVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Coordonnées souris brutes
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    // Springs pour le trailing fluide
    const springX = useSpring(0, { stiffness: 120, damping: 18, mass: 0.8 });
    const springY = useSpring(0, { stiffness: 120, damping: 18, mass: 0.8 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;
            springX.set(e.clientX);
            springY.set(e.clientY);
            if (!visible) setVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.closest("a") ||
                target.closest("button") ||
                target.tagName === "A" ||
                target.tagName === "BUTTON";
            setIsHovering(!!isInteractive);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        document.documentElement.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [springX, springY, visible]);

    // Pas de curseur sur mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) return null;

    return (
        <>
            {/* Point central précis */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0.4 : 1,
                    opacity: visible ? 1 : 0,
                }}
                transition={{ duration: 0.15 }}
            >
                <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#c8f04a" }}
                />
            </motion.div>

            {/* Anneau trailing + glow */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                    opacity: visible ? 0.6 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <div
                    className="w-8 h-8 rounded-full border"
                    style={{
                        borderColor: "rgba(200, 240, 74, 0.5)",
                        boxShadow: "0 0 12px rgba(200, 240, 74, 0.2)",
                    }}
                />
            </motion.div>
        </>
    );
}
