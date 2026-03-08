"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate, motion } from "framer-motion";

interface CounterProps {
  value: string; // "3+", "4", "100%"
  className?: string;
  style?: React.CSSProperties;
  /** Quand fourni, remplace useInView — utilisé pour scroll horizontal (ex: CompetenceCard) */
  trigger?: boolean;
}

export function Counter({ value, className, style, trigger }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Extraire le nombre et le suffixe
  const numericMatch = value.match(/\d+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(/\d+/, "");
  const prefix = value.split(/\d+/)[0] === value ? "" : value.split(/\d+/)[0];

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // trigger prioritaire pour scroll horizontal (évite reset brutal au scroll)
  const shouldAnimate = trigger !== undefined ? trigger : isInView;

  useEffect(() => {
    if (shouldAnimate) {
      animate(count, numericValue, {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      });
    } else {
      count.set(0);
    }
  }, [shouldAnimate, count, numericValue]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
