'use client';

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, animate, motion } from "framer-motion";

interface CounterProps {
    value: string; // "3+", "4", "100%"
    className?: string;
    style?: React.CSSProperties;
}

export function Counter({ value, className, style }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    // Extraire le nombre et le suffixe
    const numericMatch = value.match(/\d+/);
    const numericValue = numericMatch ? parseInt(numericMatch[0]) : 0;
    const suffix = value.replace(/\d+/, "");
    const prefix = value.split(/\d+/)[0] === value ? "" : value.split(/\d+/)[0];

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            animate(count, numericValue, {
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
            });
        } else {
            // Réinitialiser le compteur quand il sort du viewport
            count.set(0);
        }
    }, [isInView, count, numericValue]);

    return (
        <span ref={ref} className={className} style={style}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}
