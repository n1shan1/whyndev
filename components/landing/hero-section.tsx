"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDeferredAnimation } from "@/hooks/use-deferred-animation";
import { HERO_SECTION } from "./constants";
import { ShinyButton } from "./shiny-button";

const AnimatedGradientBackground = dynamic(
  () => import("./animated-gradient-background").then((module) => module.AnimatedGradientBackground),
  { ssr: false, loading: () => null },
);

const AnimatedWave = dynamic(
  () => import("./animated-wave").then((module) => module.AnimatedWave),
  { ssr: false, loading: () => null },
);

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const shouldRenderAnimations = useDeferredAnimation(1500); // Show animations after 1.5s

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_SECTION.words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {shouldRenderAnimations && <AnimatedGradientBackground />}
      {shouldRenderAnimations && (
        <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-30">
          <AnimatedWave />
        </div>
      )}

      {/* Background Animated Orbs */}
      <div className="absolute top-[20%] left-[15%] w-[40vw] h-[40vw] max-w-150 max-h-150 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] max-w-125 max-h-125 bg-accent/20 rounded-full blur-[100px] mix-blend-screen animate-pulse translate-y-1/4" style={{ animationDuration: '10s' }} />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-32 lg:py-40 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="inline-flex items-center justify-center gap-3 text-sm font-mono text-muted-foreground bg-foreground/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-border/50">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {HERO_SECTION.eyebrow}
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-8 w-full">
          <h1
            className={`text-5xl md:text-7xl lg:text-[5.5rem] font-display leading-[1.1] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="block">{HERO_SECTION.headline[0]}</span>
            <span className="block mt-2">
              {HERO_SECTION.headline[1]}{" "}
              <span className="relative inline-block text-primary">
                <span
                  key={wordIndex}
                  className="inline-flex"
                >
                  {HERO_SECTION.words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 30}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/20 rounded-full" />
              </span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="flex flex-col items-center w-full max-w-2xl">
          <p
            className={`text-lg md:text-xl text-foreground/80 leading-relaxed transition-all duration-700 delay-200 mb-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            {HERO_SECTION.description}
          </p>

          {/* CTA Wrapper */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <ShinyButton
              href="/contact"
              className="relative z-10 h-14 w-60 text-lg rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.4)]"
            >
              {HERO_SECTION.ctas.primary}
            </ShinyButton>
          </div>
        </div>
      </div>

      {/* Stats marquee - full width outside container */}
      {/* <div
        className={`absolute bottom-24 left-0 right-0 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {[
                { value: "100%", label: "dedication", company: "DELIVERED" },
                { value: "Fast", label: "execution", company: "IMPACT" },
                { value: "Modern", label: "tech stack", company: "SATISFIED" },
                { value: "24h", label: "avg response time", company: "SUPPORT" },
              ].map((stat) => (
                <div key={`${stat.company}-${i}`} className="flex items-baseline gap-4">
                  <span className="text-4xl lg:text-5xl font-display">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                    <span className="block font-mono text-xs mt-1">{stat.company}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div> */}

      {/* Scroll indicator */}

    </section>
  );
}
