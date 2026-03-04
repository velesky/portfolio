'use client';

// Wrapper Framer Motion reveal au viewport — Portfolio Velesky

import { motion, useReducedMotion, Transition } from "framer-motion";
import { ReactNode } from "react";
import { VIEWPORT_CONFIG } from "@/lib/constants";

interface RevealAuScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right";
}

export function RevealAuScroll({
    children,
    className,
    delay = 0,
    direction = "up",
}: RevealAuScrollProps) {
    // Respecter prefers-reduced-motion
    const prefersReduced = useReducedMotion();

    const hiddenState = prefersReduced
        ? { opacity: 0, x: 0, y: 0 }
        : direction === "left"
            ? { opacity: 0, x: -40, y: 0 }
            : direction === "right"
                ? { opacity: 0, x: 40, y: 0 }
                : { opacity: 0, y: 40, x: 0 };

    const transition: Transition = prefersReduced
        ? { duration: 0.3 }
        : { duration: 0.6, ease: "easeOut", delay };

    return (
        <motion.div
            className={className}
            initial={hiddenState}
            whileInView={{ opacity: 1, x: 0, y: 0, transition }}
            viewport={VIEWPORT_CONFIG}
        >
            {children}
        </motion.div>
    );
}
