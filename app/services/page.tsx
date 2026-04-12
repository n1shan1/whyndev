"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ShinyButton } from "@/components/landing/shiny-button";
import { useIsMobile } from "@/hooks/use-mobile";

import { SERVICES, SERVICES_PAGE } from "./constants";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen noise-overlay">
      <Navigation />
      
      {/* Header */}
      <section className="pt-40 lg:pt-48 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <Badge variant="outline" className="mb-6 px-4 py-1 border-primary/20 bg-background/50 font-mono text-xs">
          {SERVICES_PAGE.header.tag}
        </Badge>
        <h1 className={`text-5xl lg:text-7xl font-display tracking-tight text-foreground mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
          {SERVICES_PAGE.header.title1}<span className="text-accent underline decoration-accent/30 underline-offset-8">{SERVICES_PAGE.header.title2}</span>{SERVICES_PAGE.header.title3}
        </h1>
        <p className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
          {SERVICES_PAGE.header.subtitle}
        </p>
      </section>

      {/* Services List */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto space-y-16">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-32 flex flex-col bg-card border border-border/40 rounded-[32px] overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary/30 group"
            >
              {/* Header Section */}
              <div className="p-8 lg:p-12 border-b border-border/40 bg-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-accent/20 transition-colors duration-700" />
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="flex-1">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-xl ring-4 ring-primary/10">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-display mb-3">{service.title}</h2>
                    <h3 className="text-xl font-medium text-accent mb-4">{service.tagline}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="shrink-0 w-full md:w-auto">
                    <div className={`inline-flex flex-col w-full md:items-end bg-background/60 ${isMobile ? 'backdrop-blur-md' : 'backdrop-blur-xl'} border border-border/50 rounded-2xl p-6 shadow-sm`}>
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono mb-2">{SERVICES_PAGE.labels.startingAt}</span>
                      <span className="text-4xl font-display text-foreground">{service.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body Section Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
                {/* Core Features */}
                <div className="p-8 lg:p-10 bg-background/50">
                  <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">{SERVICES_PAGE.labels.coreFeatures}</h4>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_8px_rgba(249,202,36,0.6)]" />
                        <span className="text-foreground/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="p-8 lg:p-10 bg-secondary/5">
                  <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">{SERVICES_PAGE.labels.process}</h4>
                  <div className="relative border-l-2 border-border/60 ml-3 space-y-8">
                    {service.process.map((step, i) => (
                      <div key={i} className="relative pl-6">
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background" />
                        <span className="text-foreground/90 font-display text-lg">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-accent/5 md:col-span-2 lg:col-span-1 border-t md:border-t-0 lg:border-t-0">
                  <h4 className="text-sm font-mono text-primary/80 uppercase tracking-wider mb-8">{SERVICES_PAGE.labels.avgOutcomes}</h4>
                  <ul className="space-y-6">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-4 group/item">
                        <div className="w-10 h-10 rounded-full bg-background border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover/item:scale-110">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-lg font-medium text-foreground/90">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Service Card CTA */}
              <div className="p-6 md:p-8 border-t border-border/40 bg-card flex flex-col sm:flex-row items-center justify-between gap-6">
                 <p className="text-muted-foreground text-sm font-medium">Ready to start your project?</p>
                 <ShinyButton href={`/contact?service=${service.id}`} className="w-full sm:w-auto h-12 px-8 text-sm rounded-xl">
                   Discuss {service.title}
                 </ShinyButton>
              </div>
            </div>
          )
        })}
      </section>

      {/* CTA Bottom */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto text-center">
         <div className={`bg-secondary/40 border border-border/50 rounded-3xl p-12 lg:p-20 relative overflow-hidden ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-sm'} shadow-sm`}>
            <h2 className="text-3xl lg:text-5xl font-display mb-6">{SERVICES_PAGE.bottomCta.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {SERVICES_PAGE.bottomCta.subtitle}
            </p>
            <div className="inline-block">
              <ShinyButton href="/contact">
                {SERVICES_PAGE.bottomCta.button}
              </ShinyButton>
            </div>
          </div>
      </section>

      <FooterSection />
    </main>
  );
}
