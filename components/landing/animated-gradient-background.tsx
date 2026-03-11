"use client";

import { useEffect, useState, useRef } from "react";

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth && window.innerHeight) {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Orb coordinates
    const orbs = [
      { x: canvas.width * 0.2, y: canvas.height * 0.2, vx: 0.1, vy: 0.15, r: 350, baseRadius: 350, rDelta: 0, color: 'rgba(217, 119, 87, 0.1)' }, // Accent
      { x: canvas.width * 0.8, y: canvas.height * 0.8, vx: -0.1, vy: -0.1, r: 400, baseRadius: 400, rDelta: 0, color: 'rgba(42, 42, 41, 0.5)' }, // Secondary grey
      { x: canvas.width * 0.5, y: canvas.height * 0.5, vx: 0.15, vy: -0.05, r: 300, baseRadius: 300, rDelta: 0, color: 'rgba(217, 119, 87, 0.05)' } // Accent subtle
    ];

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      
      // Clear with background color instead of transparent to avoid trails in some browsers
      ctx.fillStyle = '#141413'; // var(--background)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      orbs.forEach(orb => {
        // Move
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce
        if (orb.x < 0 || orb.x > canvas.width) orb.vx *= -1;
        if (orb.y < 0 || orb.y > canvas.height) orb.vy *= -1;
        
        // Pulse size
        orb.r = orb.baseRadius + Math.sin(time) * 50;

        // Draw radial gradient
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(20, 20, 19, 0)'); // fade to bg

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-20"
    />
  );
}
