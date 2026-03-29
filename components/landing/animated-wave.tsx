"use client";

import { useEffect, useRef } from "react";

export function AnimatedWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "·∘○◯◌●◉";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let time = 0;
    const FRAME_SKIP = 2; // Render every 2nd frame (30fps instead of 60fps)

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      frameCountRef.current++;
      
      // Skip frames to reduce evaluation time
      if (frameCountRef.current % FRAME_SKIP === 0) {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);

        ctx.font = "14px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const cellSize = 24;
        const cols = Math.floor(rect.width / cellSize);
        const rows = Math.floor(rect.height / cellSize);

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const px = (x + 0.5) * (rect.width / cols);
            const py = (y + 0.5) * (rect.height / rows);

            // Multiple wave interference
            const wave1 = Math.sin(x * 0.2 + time * 2) * Math.cos(y * 0.15 + time);
            const wave2 = Math.sin((x + y) * 0.1 + time * 1.5);
            const wave3 = Math.cos(x * 0.1 - y * 0.1 + time * 0.8);
            
            const combined = (wave1 + wave2 + wave3) / 3;
            const normalized = (combined + 1) / 2;
            
            const charIndex = Math.floor(normalized * (chars.length - 1));
            const alpha = 0.15 + normalized * 0.5;

            ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
            ctx.fillText(chars[charIndex], px, py);
          }
        }

        time += 0.03 * FRAME_SKIP;
      }

      if (!prefersReducedMotion) {
        frameRef.current = window.requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
