"use client";

import { useEffect, useRef } from "react";

export function AnimatedWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);

  // Disable on reduced motion only, but render on mobile with lower complexity
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "·∘○◯◌●◉";
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const FRAME_SKIP = isMobile ? 6 : 3; // Render every 6th frame on mobile (10fps), 3rd on desktop (20fps)
    let time = 0;

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

        const cellSize = 28; // Increased from 24 = fewer cells
        const cols = Math.floor(rect.width / cellSize);
        const rows = Math.floor(rect.height / cellSize);

        // Pre-compute frequently used values
        const timeMultiplier2 = time * 2;
        const timeMultiplier1_5 = time * 1.5;
        const timeMultiplier0_8 = time * 0.8;

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const px = (x + 0.5) * (rect.width / cols);
            const py = (y + 0.5) * (rect.height / rows);

            // Multiple wave interference with reduced precision
            const x_0_2 = x * 0.2;
            const y_0_15 = y * 0.15;
            const xy_0_1 = (x + y) * 0.1;
            const xy_diff_0_1 = (x - y) * 0.1;
            
            const wave1 = Math.sin(x_0_2 + timeMultiplier2) * Math.cos(y_0_15 + time);
            const wave2 = Math.sin(xy_0_1 + timeMultiplier1_5);
            const wave3 = Math.cos(xy_diff_0_1 + timeMultiplier0_8);
            
            const combined = wave1 + wave2 + wave3;
            const normalized = (combined + 3) * 0.1667; // (combined + 3) / 6 for range [0,1]
            
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
