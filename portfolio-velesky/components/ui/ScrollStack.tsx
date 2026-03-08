"use client";

import React, { useLayoutEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

interface ScrollStackProps {
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

export const ScrollStackItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`scroll-stack-item ${className}`}>{children}</div>;
};

const ScrollStack = ({
  children,
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      const scroller = scrollerRef.current;
      if (!scroller) return { scrollTop: 0, containerHeight: 0, scrollContainer: null };

      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Utilisation d'un calcul plus direct pour le trigger point
      // Si initialTopRef n'est pas encore capturé, on le fait maintenant
      if (initialTopRef.current === null) {
        const rect = scroller.getBoundingClientRect();
        initialTopRef.current = rect.top + scrollY;
      }

      const stackPosPx = parsePercentage(stackPosition, viewportHeight);

      // Le point de départ est quand le conteneur arrive en haut du viewport (moins l'offset du stack)
      const triggerPoint = initialTopRef.current - stackPosPx;
      const relativeScroll = scrollY - triggerPoint;

      return {
        scrollTop: Math.max(0, relativeScroll),
        containerHeight: viewportHeight,
        scrollContainer: document.documentElement,
      };
    }
    return {
      scrollTop: scrollerRef.current?.scrollTop || 0,
      containerHeight: scrollerRef.current?.offsetHeight || 0,
      scrollContainer: scrollerRef.current,
    };
  }, [useWindowScroll, parsePercentage, stackPosition]);

  const updateItemsRef = useRef<() => void>(() => {});

  const updateItems = useCallback(() => {
    const { scrollTop, containerHeight } = getScrollData();
    const stackPos = parsePercentage(stackPosition, containerHeight);

    let allCompleted = true;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const itemStart = index * itemDistance;
      const progress = calculateProgress(scrollTop, itemStart, itemStart + itemDistance);

      // Animation values
      const scale = baseScale + index * itemScale - progress * itemScale;
      // On ajoute scrollTop pour contrer le défilement du parent et simuler un "sticky" manuel
      const translateY =
        scrollTop + stackPos + index * itemStackDistance - progress * itemStackDistance;
      const rotate = rotationAmount ? index * rotationAmount - progress * rotationAmount : 0;
      const blur = blurAmount ? index * blurAmount - progress * blurAmount : 0;

      // Opacity:
      let opacity = 1;
      const isPastEnd = scrollTop > cardsRef.current.length * itemDistance + 200;

      if (scrollTop <= 0 || isPastEnd) {
        opacity = 0;
      } else if (scrollTop < itemStart) {
        opacity = calculateProgress(scrollTop, itemStart - 100, itemStart);
      } else {
        opacity = 1;
      }

      card.style.transform = `translate3d(-50%, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`;
      card.style.filter = blur ? `blur(${blur}px)` : "none";
      card.style.opacity = opacity.toString();
      card.style.zIndex = (index + 10).toString();

      // Reset debug styles
      card.style.backgroundColor = "";
      card.style.border = "";

      if (progress < 1) allCompleted = false;
    });

    if (allCompleted && !stackCompletedRef.current) {
      stackCompletedRef.current = true;
      onStackComplete?.();
    } else if (!allCompleted) {
      stackCompletedRef.current = false;
    }

    if (!useWindowScroll) {
      animationFrameRef.current = requestAnimationFrame(updateItemsRef.current);
    }
  }, [
    getScrollData,
    parsePercentage,
    stackPosition,
    itemDistance,
    itemScale,
    itemStackDistance,
    baseScale,
    rotationAmount,
    blurAmount,
    calculateProgress,
    onStackComplete,
    useWindowScroll,
  ]);

  useLayoutEffect(() => {
    updateItemsRef.current = updateItems;
  }, [updateItems]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (useWindowScroll) {
      const handleScroll = () => updateItems();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", updateItems);
      updateItems();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateItems);
      };
    } else {
      if (!scrollerRef.current) return;

      lenisRef.current = new Lenis({
        wrapper: scrollerRef.current as HTMLElement,
        content: scrollerRef.current?.firstElementChild as HTMLElement,
        lerp: 0.1,
      });

      const raf = (time: number) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
          updateItemsRef.current();
        }
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
      updateItems(); // Initial update

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        lenisRef.current?.destroy();
      };
    }
  }, [useWindowScroll, updateItems]);
  // updateItems is a dependency because it's called directly for initial update and in handleScroll

  return (
    <div
      ref={scrollerRef}
      className={`scroll-stack-container ${useWindowScroll ? "window-scroll" : ""}`}
    >
      <div
        className="scroll-stack-content"
        style={{
          height: `${children ? React.Children.count(children) * itemDistance + 400 : 0}px`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="scroll-stack-item-wrapper"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollStack;
