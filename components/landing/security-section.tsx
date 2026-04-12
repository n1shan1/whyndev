"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { SECURITY_SECTION } from "./constants";
import { useIsMobile } from "@/hooks/use-mobile";

const securityFeatures = SECURITY_SECTION.features;
const certifications = SECURITY_SECTION.certifications;

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="security" 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative py-24 lg:py-40 bg-background overflow-hidden border-y border-border/50"
    >
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* Gradient Spotlight */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent), transparent 40%)`
        }}
      />

      {/* Decorative Blur Orbs */}
      <div className={`absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full ${isMobile ? '' : 'blur-[120px]'} pointer-events-none`} />
      <div className={`absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full ${isMobile ? '' : 'blur-[120px]'} pointer-events-none`} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left Side: Editorial Content */}
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent font-mono text-xs uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {SECURITY_SECTION.eyebrow}
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.9]">
              {SECURITY_SECTION.headline[0]}
              <br />
              <span className="text-muted-foreground italic">{SECURITY_SECTION.headline[1]}</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-12">
              {SECURITY_SECTION.description}
            </p>

            {/* Certifications / Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className={cn(
                    "px-4 py-2 bg-secondary/30 backdrop-blur-sm border border-border/50 text-xs font-mono tracking-wider transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  {cert}
                </div>
              ))}
            </div>

            {/* Technical Status Indicator */}
            <div className="mt-12 p-6 rounded-2xl bg-secondary/20 border border-border/50 max-w-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Sovereignty Status</span>
                <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Active</span>
              </div>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500/50 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Side: Feature Matrix */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "p-8 bg-secondary/10 backdrop-blur-md border border-border/50 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden h-full",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 right-2 w-px h-4 bg-accent/30" />
                  <div className="absolute bottom-2 right-2 h-px w-4 bg-accent/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

