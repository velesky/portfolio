"use client";

// Bouton magnétique hover CTA — Portfolio Velesky

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ButtonMagneticProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "accent" | "outline" | "ghost";
}

export function ButtonMagnetic({
  children,
  className,
  onClick,
  href,
  target,
  rel,
  variant = "accent",
}: ButtonMagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Valeurs magnétiques
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 140, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 140, damping: 20, mass: 0.5 });

  const rotateX = useTransform(springY, [-20, 20], [6, -6]);
  const rotateY = useTransform(springX, [-20, 20], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const stylesVariant = {
    accent: {
      backgroundImage:
        "linear-gradient(135deg, #c8f04a, #d4f55a), radial-gradient(circle at 0% 0%, rgba(255,255,255,0.16), transparent 55%)",
      backgroundBlendMode: "soft-light, normal",
      color: "#080808",
      border: "1px solid rgba(200, 240, 74, 0.55)",
      boxShadow: "0 16px 40px rgba(200, 240, 74, 0.35)",
    },
    outline: {
      backgroundColor: "rgba(8, 8, 8, 0.7)",
      color: "#c8f04a",
      border: "1px solid rgba(200, 240, 74, 0.32)",
      boxShadow: "0 18px 40px rgba(0, 0, 0, 0.9)",
      backdropFilter: "blur(14px)",
    },
    ghost: {
      backgroundColor: "rgba(15, 15, 15, 0.85)",
      color: "#e8e4dc",
      border: "1px solid rgba(232, 228, 220, 0.14)",
      boxShadow: "0 18px 40px rgba(0, 0, 0, 0.85)",
      backdropFilter: "blur(10px)",
    },
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, rotateX, rotateY, perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        whileHover={{
          scale: 1.06,
          boxShadow:
            variant === "accent"
              ? "0 0 40px rgba(200, 240, 74, 0.65), 0 0 0 1px rgba(200, 240, 74, 0.6)"
              : "0 0 26px rgba(200, 240, 74, 0.18)",
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.7 }}
        className="rounded-full overflow-hidden"
      >
        <Tag
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={`
            inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full
            font-dm-mono text-sm tracking-wider font-medium
            transition-all duration-300 md:duration-400 ease-out
            text-center whitespace-nowrap min-h-[3rem]
            ${className ?? ""}
          `}
          style={stylesVariant[variant]}
        >
          {children}
        </Tag>
      </motion.div>
    </motion.div>
  );
}
