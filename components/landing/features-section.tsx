"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Code2, Globe, Cpu, Search, ShoppingCart, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FEATURES_SECTION } from "./constants";
import { useIsMobile } from "@/hooks/use-mobile";

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
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
              {FEATURES_SECTION.eyebrow}
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {FEATURES_SECTION.headline.main}
              <br />
              <span className="text-muted-foreground">{FEATURES_SECTION.headline.highlight}</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            {FEATURES_SECTION.description}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Main Feature - Large */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 rounded-[32px] p-8 lg:p-12 overflow-hidden relative group">
             <div className={`absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full ${isMobile ? '' : 'blur-[100px]'} -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700`} />
             
             <div className="relative z-10 h-full flex flex-col">
               <div className="w-14 h-14 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-8 shadow-sm ring-1 ring-border/50">
                 <Globe className="w-7 h-7" />
               </div>
               
               <h3 className="text-3xl lg:text-5xl font-display mb-4 whitespace-pre-line text-foreground">{FEATURES_SECTION.mainFeature.title}</h3>
               <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-12">
                 {FEATURES_SECTION.mainFeature.description}
               </p>
               
               <div className="mt-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {FEATURES_SECTION.mainFeature.stats.map((stat, i) => (
                    <div key={i} className="bg-secondary/30 backdrop-blur border border-border/50 rounded-2xl p-4 flex flex-col">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</span>
                      <span className="text-xl font-display text-foreground">{stat.value}</span>
                    </div>
                  ))}
               </div>
             </div>
          </div>

          {/* Secondary Feature 1 */}
          <div className="bg-card border border-border/50 hover:border-primary/30 rounded-[32px] p-8 lg:p-10 transition-all duration-300 group shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center mb-6 ring-1 ring-border/50">
              <LayoutTemplate className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display mb-3 text-foreground">{FEATURES_SECTION.secondaryFeatures[0].title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {FEATURES_SECTION.secondaryFeatures[0].description}
            </p>
            <div className="mt-8 pt-8 border-t border-border/40 space-y-4">
               {FEATURES_SECTION.secondaryFeatures[0].bullets?.map((t, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground font-mono">
                   <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" /> {t}
                 </div>
               ))}
            </div>
          </div>

          {/* Secondary Feature 2 */}
          <div className="bg-secondary/40 border border-border/50 rounded-[32px] p-8 lg:p-10 hover:border-primary/30 transition-all duration-300 group overflow-hidden relative shadow-sm">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-background border border-border/50 text-foreground flex items-center justify-center mb-6 shadow-sm">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display mb-3 text-foreground">{FEATURES_SECTION.secondaryFeatures[1].title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {FEATURES_SECTION.secondaryFeatures[1].description}
              </p>
              
              <Button
                asChild
                variant="outline"
                className="w-full bg-background/50 hover:bg-background text-foreground rounded-xl h-12 border-border/50 group-hover:border-primary/30 transition-colors"
              >
                <Link href="/contact">
                  {FEATURES_SECTION.secondaryFeatures[1].cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
             </div>
          </div>

          {/* Workflow/Code Block */}
          <div className="md:col-span-2 lg:col-span-2 bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 rounded-[32px] p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm relative overflow-hidden group">
             <div className={`absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full ${isMobile ? '' : 'blur-[80px]'} group-hover:bg-primary/10 transition-colors duration-700`} />
             <div className="flex-1 space-y-4 relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 font-mono text-xs bg-primary/5 text-primary">
                  {FEATURES_SECTION.workflow.label}
                </div>
                <h3 className="text-2xl lg:text-3xl font-display text-foreground">{FEATURES_SECTION.workflow.title}</h3>
                <p className="text-muted-foreground">{FEATURES_SECTION.workflow.description}</p>
             </div>
             
             <div className="w-full md:w-[60%] lg:w-[50%] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-xl relative z-10">
                <div className="px-4 py-3 border-b border-white/5 flex gap-2 items-center bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center text-[10px] text-white/30 font-mono">architecture.tsx</div>
                </div>
                <div className="p-4 md:p-6 font-mono text-xs sm:text-sm text-foreground/70 leading-relaxed overflow-x-auto">
                   <span className="text-primary/90">export default function</span> <span className="text-blue-400">Scale</span>() {'{'} <br/>
                   &nbsp;&nbsp;<span className="text-primary/90">return</span> (<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">Performance</span>&gt;<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">NoBloat</span> /&gt;<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">HighConversion</span> /&gt;<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">Performance</span>&gt;<br/>
                   &nbsp;&nbsp;);<br/>
                   {'}'}
                </div>
             </div>
          </div>

          {/* Small Feature */}
          <div className="bg-card border border-border/50 hover:border-primary/30 rounded-[32px] p-8 transition-all duration-300 flex flex-col justify-center text-left shadow-sm group">
             <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center mb-6 ring-1 ring-border/50">
               <Search className="w-6 h-6" />
             </div>
             <h3 className="text-2xl font-display mb-3 text-foreground">{FEATURES_SECTION.smallFeature.title}</h3>
             <p className="text-muted-foreground">{FEATURES_SECTION.smallFeature.description}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
