'use client';

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

    const springX = useSpring(x, { stiffness: 200, damping: 20 });
    const springY = useSpring(y, { stiffness: 200, damping: 20 });

    const rotateX = useTransform(springY, [-20, 20], [4, -4]);
    const rotateY = useTransform(springX, [-20, 20], [-4, 4]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.4);
        y.set((e.clientY - centerY) * 0.4);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const stylesVariant = {
        accent: {
            backgroundColor: "#c8f04a",
            color: "#080808",
            border: "none",
            boxShadow: "0 0 0 rgba(200, 240, 74, 0)",
        },
        outline: {
            backgroundColor: "transparent",
            color: "#c8f04a",
            border: "1px solid rgba(200, 240, 74, 0.4)",
            boxShadow: "none",
        },
        ghost: {
            backgroundColor: "transparent",
            color: "#e8e4dc",
            border: "none",
            boxShadow: "none",
        },
    };

    const Tag = href ? "a" : "button";

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY, rotateX, rotateY, perspective: 600 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            <motion.div
                whileHover={{
                    scale: 1.04,
                    boxShadow:
                        variant === "accent"
                            ? "0 0 24px rgba(200, 240, 74, 0.35)"
                            : variant === "outline"
                                ? "0 0 16px rgba(200, 240, 74, 0.15)"
                                : "none",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="rounded-full overflow-hidden"
            >
                <Tag
                    href={href}
                    target={target}
                    rel={rel}
                    onClick={onClick}
                    className={`
            inline-flex items-center gap-2 px-6 py-3 rounded-full
            font-dm-mono text-sm tracking-wider font-medium
            transition-colors duration-200
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
