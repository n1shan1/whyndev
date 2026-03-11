"use client";

import { useEffect, useState } from "react";

export function AmbientCursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen"
      aria-hidden="true"
    >
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[100px] bg-accent/10 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
        }}
      />
    </div>
  );
}
