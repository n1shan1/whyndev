"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ShinyButton } from "@/components/landing/shiny-button";
import { CTA_SECTION } from "./constants";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24 max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
              {CTA_SECTION.headline.main} <span className="text-primary italic">{CTA_SECTION.headline.highlight}</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              {CTA_SECTION.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <ShinyButton
                href="/contact"
                className="h-16 px-10 text-lg rounded-full"
              >
                {CTA_SECTION.buttons.primary}
              </ShinyButton>
              <a href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 text-lg rounded-full border-4 hover:bg-foreground/5 transition-all hover:border-foreground/40 hover:text-foreground cursor-pointer"
                >
                  {CTA_SECTION.buttons.secondary}
                </Button>
              </a>
            </div>

            <p className="text-sm text-primary/70 mt-8 font-mono tracking-widest uppercase">
              {CTA_SECTION.guarantee}
            </p>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-primary/20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-primary/20" />
        </div>
      </div>
    </section>
  );
}
