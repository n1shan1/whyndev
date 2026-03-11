"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Code2, Globe, Cpu, Search, ShoppingCart, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              What We Build
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Digital solutions.
              <br />
              <span className="text-muted-foreground">Engineered for scale.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Premium web development, seamless e-commerce integrations, and optimized digital footprints all under one roof.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Main Feature - Large */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary/20 hover:bg-secondary/30 transition-colors border border-border/50 rounded-[32px] p-8 lg:p-12 overflow-hidden relative group">
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-700" />
             
             <div className="relative z-10 h-full flex flex-col">
               <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center mb-8 shadow-xl">
                 <Globe className="w-7 h-7" />
               </div>
               
               <h3 className="text-3xl lg:text-5xl font-display mb-4">High-converting<br />Landing Pages.</h3>
               <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-12">
                 We build clean, fast, and optimized landing pages designed specifically to capture leads and drive sales. Focus on your business, we'll handle the conversions.
               </p>
               
               <div className="mt-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Design", value: "Premium" },
                    { label: "Performance", value: "100/100" },
                    { label: "SEO", value: "Optimized" },
                    { label: "Delivery", value: "Fast" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-background/50 backdrop-blur border border-border/50 rounded-2xl p-4">
                      <div className="text-sm font-mono text-muted-foreground mb-1">{stat.label}</div>
                      <div className="text-xl font-display">{stat.value}</div>
                    </div>
                  ))}
               </div>
             </div>
          </div>

          {/* Secondary Feature 1 */}
          <div className="bg-background border-2 border-accent/20 hover:border-accent/40 rounded-[32px] p-8 lg:p-10 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
              <LayoutTemplate className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display mb-3">Multi-Page Sites</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive digital presence for your business. Full-scale corporate websites with intuitive CMS and clean architecture.
            </p>
            <div className="mt-8 pt-8 border-t border-border/50 space-y-3">
               {["Up to 10 Custom Pages", "CMS Integration", "Contact & Booking"].map((t, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm text-foreground/80 font-mono">
                   <div className="w-1 h-1 bg-accent rounded-full" /> {t}
                 </div>
               ))}
            </div>
          </div>

          {/* Secondary Feature 2 */}
          <div className="bg-foreground text-background rounded-[32px] p-8 lg:p-10 hover:shadow-2xl transition-all group overflow-hidden relative">
             <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-accent/20 blur-[50px] rounded-full" />
             <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-background/10 text-background flex items-center justify-center mb-6">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display mb-3">E-Commerce Setup</h3>
              <p className="text-background/70 leading-relaxed mb-8">
                Robust online stores with secure checkouts, seamless inventory management, and beautiful product showcases.
              </p>
              
              <Link href="/contact" passHref legacyBehavior>
                <Button className="w-full bg-background hover:bg-background/90 text-foreground rounded-xl h-12">
                  Start Selling
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
             </div>
          </div>

          {/* Workflow/Code Block (Replacing How it works) */}
          <div className="md:col-span-2 lg:col-span-2 bg-secondary/10 border border-border/50 rounded-[32px] p-8 flex flex-col md:flex-row gap-8 items-center">
             <div className="flex-1 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full border border-border/50 font-mono text-xs bg-background/50 backdrop-blur">
                  Technical Excellence
                </div>
                <h3 className="text-2xl lg:text-3xl font-display">Clean architecture by default.</h3>
                <p className="text-muted-foreground">We write maintainable, scalable code utilizing modern tech stacks like Next.js, Tailwind, and TypeScript.</p>
             </div>
             
             <div className="w-full md:w-1/2 bg-[#141413] border border-border/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="px-4 py-3 border-b border-white/5 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="p-4 md:p-6 font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed overflow-x-auto">
                   <span className="text-accent">export default function</span> <span className="text-blue-400">Agency</span>() {'{'} <br/>
                   &nbsp;&nbsp;<span className="text-accent">return</span> (<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">QualityFirst</span>&gt;<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">LightningFast</span> /&gt;<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">ScaleableArchitecture</span> /&gt;<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">QualityFirst</span>&gt;<br/>
                   &nbsp;&nbsp;);<br/>
                   {'}'}
                </div>
             </div>
          </div>

          {/* Small Feature */}
          <div className="bg-secondary/20 border border-border/50 hover:bg-secondary/40 rounded-[32px] p-8 transition-colors flex flex-col justify-center items-center text-center">
             <div className="w-16 h-16 rounded-full bg-background border border-border/50 flex items-center justify-center mb-6 shadow-sm">
               <Search className="w-6 h-6 text-foreground" />
             </div>
             <h3 className="text-xl font-display mb-2">SEO Optimization</h3>
             <p className="text-sm text-muted-foreground max-w-[200px]">Technical audits and keyword structures built directly into your website's core.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
