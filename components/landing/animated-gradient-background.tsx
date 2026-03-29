"use client";

import { useEffect, useRef } from "react";

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const FRAME_SKIP = 2; // Render every 2nd frame (30fps instead of 60fps)

    const orbs = [
      { x: 0, y: 0, vx: 0.1, vy: 0.15, r: 350, baseRadius: 350, color: 'rgba(217, 119, 87, 0.1)' },
      { x: 0, y: 0, vx: -0.1, vy: -0.1, r: 400, baseRadius: 400, color: 'rgba(42, 42, 41, 0.5)' },
      { x: 0, y: 0, vx: 0.15, vy: -0.05, r: 300, baseRadius: 300, color: 'rgba(217, 119, 87, 0.05)' },
    ];

    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      orbs[0].x = width * 0.2;
      orbs[0].y = height * 0.2;
      orbs[1].x = width * 0.8;
      orbs[1].y = height * 0.8;
      orbs[2].x = width * 0.5;
      orbs[2].y = height * 0.5;
    };

    const drawFrame = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      time += 0.01 * FRAME_SKIP;

      if (!prefersReducedMotion) {
        for (const orb of orbs) {
          orb.x += orb.vx * FRAME_SKIP;
          orb.y += orb.vy * FRAME_SKIP;

          if (orb.x < 0 || orb.x > width) orb.vx *= -1;
          if (orb.y < 0 || orb.y > height) orb.vy *= -1;

          orb.r = orb.baseRadius + Math.sin(time) * 50;
        }
      }

      for (const orb of orbs) {
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(20, 20, 19, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const render = () => {
      frameCountRef.current++;
      
      // Skip frames to reduce evaluation time
      if (frameCountRef.current % FRAME_SKIP === 0) {
        drawFrame();
      }

      if (!prefersReducedMotion) {
        animationFrameIdRef.current = window.requestAnimationFrame(render);
      }
    };

    const handleResize = () => {
      resizeCanvas();
      drawFrame();
    };

    resizeCanvas();
    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current !== null) {
        window.cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-20"
    />
  );
}
