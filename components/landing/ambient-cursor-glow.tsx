"use client";

import { useEffect, useRef } from "react";

export function AmbientCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const lastUpdateRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Only schedule RAF if position has moved significantly (throttle)
      const dx = Math.abs(clientX - lastUpdateRef.current.x);
      const dy = Math.abs(clientY - lastUpdateRef.current.y);
      if (dx < 8 && dy < 8) return;
      
      lastUpdateRef.current = { x: clientX, y: clientY };
      mousePositionRef.current = { x: clientX, y: clientY };

      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        const glow = glowRef.current;

        if (glow) {
          const { x, y } = mousePositionRef.current;
          glow.style.transform = `translate(${x - 400}px, ${y - 400}px)`;
        }

        frameRef.current = null;
      });
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (prefersReducedMotion || isMobile) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen"
      aria-hidden="true"
    >
      <div
        ref={glowRef}
        className="absolute w-200 h-200 rounded-full blur-[100px] bg-accent/10 transition-transform duration-75 ease-out"
        style={{ transform: "translate(-400px, -400px)" }}
      />
    </div>
  );
}
