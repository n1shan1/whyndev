"use client";

import { useEffect, useRef } from "react";

export function AmbientCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };

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

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

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
