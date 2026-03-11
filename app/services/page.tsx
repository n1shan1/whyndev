"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart, Search, Globe, LayoutTemplate } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "landing-page",
    title: "Landing Page Development",
    tagline: "High-converting, single-page websites.",
    description: "We build clean, fast, and optimized landing pages designed specifically to capture leads and drive sales.",
    icon: Globe,
    features: [
      "Custom responsive design",
      "Lead capture forms",
      "Fast load performance",
      "Mobile optimized",
      "Basic SEO setup",
      "Direct CTA placement",
    ],
    process: ["01 Scope", "02 Content", "03 Design", "04 Launch"],
    outcomes: ["Higher conversion rates", "Clean user experience", "Lightning fast load times"],
    price: "From $500",
  },
  {
    id: "multi-page",
    title: "Multi-Page Websites",
    tagline: "Comprehensive digital presence for your business.",
    description: "Full-scale corporate websites with multiple pages outlining your services, about, contact, and content.",
    icon: LayoutTemplate,
    features: [
      "Up to 10 custom pages",
      "CMS Integration",
      "Advanced responsive layouts",
      "Contact & Booking forms",
      "Blog/News integration",
      "Performance optimization",
    ],
    process: ["01 Strategy", "02 Wireframe", "03 Develop", "04 Test"],
    outcomes: ["Professional brand image", "Scalable architecture", "Higher engagement"],
    price: "From $1,200",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Stores",
    tagline: "Online shops built to sell.",
    description: "Robust e-commerce platforms with secure checkouts, inventory management, and optimized product pages.",
    icon: ShoppingCart,
    features: [
      "Secure payment gateways",
      "Product inventory system",
      "Cart & Checkout flow",
      "Order management",
      "Mobile commerce friendly",
      "Analytics integration",
    ],
    process: ["01 Plan", "02 Setup", "03 Integrate", "04 Launch"],
    outcomes: ["Seamless checkout", "Higher average order value", "Secure transactions"],
    price: "From $3,000",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    tagline: "Rank higher on search engines.",
    description: "Comprehensive SEO audits and implementations to ensure your new or existing website ranks for the keywords that matter.",
    icon: Search,
    features: [
      "Technical SEO auditing",
      "On-page keyword optimization",
      "Performance & Core Web Vitals",
      "Meta tags & schema markup",
      "Sitemap & robots.txt",
      "Local SEO setup",
    ],
    process: ["01 Audit", "02 Keyword Mapping", "03 Implement", "04 Monitor"],
    outcomes: ["Higher organic traffic", "Better search visibility", "Quality inbound leads"],
    price: "From $800",
  },
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen noise-overlay">
      <Navigation />
      
      {/* Header */}
      <section className="pt-40 lg:pt-48 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <Badge variant="outline" className="mb-6 px-4 py-1 border-primary/20 bg-background/50 font-mono text-xs">
          What We Build
        </Badge>
        <h1 className={`text-5xl lg:text-7xl font-display tracking-tight text-foreground mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
          Digital <span className="text-accent underline decoration-accent/30 underline-offset-8">Growth</span> Solutions
        </h1>
        <p className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
          From optimized landing pages to comprehensive e-commerce platforms — engineering websites that drive your business forward.
        </p>
      </section>

      {/* Services List */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto space-y-24">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-32 grid lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Title & Intro */}
              <div className="lg:col-span-5 sticky top-32">
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-xl">
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-display mb-4">{service.title}</h2>
                <h3 className="text-xl font-medium text-accent mb-4">{service.tagline}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="inline-block border border-border rounded-lg px-6 py-4 bg-background">
                  <span className="block text-sm text-muted-foreground uppercase tracking-widest mb-1 font-mono">Starting At</span>
                  <span className="text-2xl font-display">{service.price}</span>
                </div>
              </div>

              {/* Right Column: Grid Details */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                
                {/* Features Box */}
                <div className="sm:col-span-2 bg-secondary/30 border border-border/50 rounded-2xl p-8 hover-lift">
                  <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">Core Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Box */}
                <div className="bg-background border border-border/50 rounded-2xl p-8 hover-lift">
                  <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">Process</h4>
                  <ul className="space-y-4">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-baseline gap-4 font-display text-lg text-foreground/90 border-b border-border/50 pb-2 last:border-0">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes Box */}
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 hover-lift shadow-xl">
                  <h4 className="text-sm font-mono text-primary-foreground/60 uppercase tracking-wider mb-6">Avg. Outcomes</h4>
                  <ul className="space-y-4">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg">
                        <ArrowRight className="w-5 h-5 shrink-0 opacity-50 mt-1" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          )
        })}
      </section>

      {/* CTA Bottom */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto text-center">
         <div className="bg-secondary/40 border border-border/50 rounded-3xl p-12 lg:p-20 relative overflow-hidden backdrop-blur-sm">
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Not sure which service fits?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Book a free consultation and we'll recommend the best approach for your business goals.
            </p>
            <Link href="/contact" passHref legacyBehavior>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-base rounded-full group cursor-pointer inline-flex items-center">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
         </div>
      </section>

      <FooterSection />
    </main>
  );
}
