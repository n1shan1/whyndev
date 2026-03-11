"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { AnimatedGradientBackground } from "./animated-gradient-background";

const words = ["slap", "scale", "ship", "convert"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <AnimatedGradientBackground />

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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            Premium Digital Solutions
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="block">Building web apps</span>
            <span className="block">
              that actually{" "}
              <span className="relative inline-block">
                <span
                  key={wordIndex}
                  className="inline-flex"
                >
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
              </span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p
            className={`text-xl lg:text-2xl text-foreground/90 font-medium leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            No cap — most agencies sell bloated, slow templates. WHYN is a developer-led studio engineering fast, scalable, production-ready software for startups that want to move fast.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <a href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-16 text-lg font-bold rounded-xl group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_-15px_rgba(212,175,55,0.6)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Let's Cook
                  <Zap className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-12 fill-current" />
                </span>
              </Button>
            </a>
            <a href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 text-lg font-bold rounded-xl border-primary/30 hover:bg-primary/10 relative overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)] hover:scale-105"
              >
                See The Receipts
              </Button>
            </a>
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
