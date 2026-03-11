"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Users, Code, Check } from "lucide-react";

const services = [
  {
    id: "ai-conversion",
    number: "01",
    icon: Brain,
    title: "AI Conversion Websites",
    tagline: "Websites engineered to convert, powered by intelligence.",
    description:
      "We build AI-powered websites that dynamically adapt to user behavior, optimizing layouts, copy, and CTAs in real-time for maximum conversion rates.",
    features: [
      "Dynamic content personalization",
      "AI-driven A/B testing automation",
      "Heatmap-informed layout optimization",
      "Conversion funnel analytics dashboard",
      "Smart form optimization",
      "PageSpeed 100 performance guarantee",
    ],
    process: [
      { step: "01", label: "Research" },
      { step: "02", label: "Design" },
      { step: "03", label: "Build" },
      { step: "04", label: "Optimize" },
    ],
    outcomes: [
      { value: "+248%", label: "avg. user growth" },
      { value: "45%", label: "lower bounce rates" },
      { value: "3x", label: "faster load times" },
    ],
    price: "From $3,500",
  },
  {
    id: "ai-leads",
    number: "02",
    icon: Zap,
    title: "AI Lead Capture Systems",
    tagline: "Capture, qualify, and nurture leads automatically.",
    description:
      "Intelligent lead capture systems that go beyond simple forms. Our AI qualifies prospects, scores leads, and triggers personalized follow-up sequences — all on autopilot.",
    features: [
      "Smart lead scoring algorithms",
      "Behavioral trigger automation",
      "Multi-step intelligent forms",
      "CRM integration (HubSpot, Salesforce)",
      "Personalized email sequences",
      "Real-time lead quality analytics",
    ],
    process: [
      { step: "01", label: "Map" },
      { step: "02", label: "Build" },
      { step: "03", label: "Integrate" },
      { step: "04", label: "Scale" },
    ],
    outcomes: [
      { value: "60%", label: "lead qualification rate" },
      { value: "3x", label: "faster response time" },
      { value: "40%", label: "higher close rates" },
    ],
    price: "From $5,000",
  },
  {
    id: "ai-chat",
    number: "03",
    icon: Users,
    title: "AI Chat Sales Assistants",
    tagline: "Your 24/7 sales team that never sleeps.",
    description:
      "Custom AI chatbots trained on your business data, products, and sales processes. They qualify leads, answer questions, and guide visitors through to purchase — around the clock.",
    features: [
      "Custom-trained on your business",
      "Natural conversation handling",
      "Product recommendation engine",
      "Appointment booking integration",
      "Handoff to human agents",
      "Multi-language support",
    ],
    process: [
      { step: "01", label: "Train" },
      { step: "02", label: "Design" },
      { step: "03", label: "Deploy" },
      { step: "04", label: "Learn" },
    ],
    outcomes: [
      { value: "80%", label: "query resolution rate" },
      { value: "50%", label: "more qualified meetings" },
      { value: "24/7", label: "availability" },
    ],
    price: "From $4,000",
  },
  {
    id: "saas",
    number: "04",
    icon: Code,
    title: "SaaS / Web App Development",
    tagline: "Full-stack applications built for scale.",
    description:
      "From MVPs to enterprise platforms — we architect and build web applications using modern frameworks, scalable infrastructure, and clean code practices.",
    features: [
      "Full-stack Next.js / React",
      "Scalable database architecture",
      "Authentication & authorization",
      "API design and integration",
      "Real-time features (WebSocket)",
      "CI/CD pipeline setup",
    ],
    process: [
      { step: "01", label: "Scope" },
      { step: "02", label: "Architect" },
      { step: "03", label: "Develop" },
      { step: "04", label: "Launch" },
    ],
    outcomes: [
      { value: "8-12", label: "weeks to production" },
      { value: "99.9%", label: "uptime SLA" },
      { value: "∞", label: "scalability" },
    ],
    price: "From $10,000",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 !== 0;

  return (
    <div
      id={service.id}
      ref={ref}
      className={`relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Service number watermark */}
      <div className="absolute -top-16 right-0 text-[12rem] font-display text-foreground/[0.03] leading-none select-none pointer-events-none hidden lg:block">
        {service.number}
      </div>

      <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 ${isReversed ? "lg:direction-rtl" : ""}`}>
        {/* Content side */}
        <div className={`${isReversed ? "lg:order-2" : ""}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 border border-foreground/10 flex items-center justify-center">
              <service.icon className="w-6 h-6" />
            </div>
            <span className="font-mono text-sm text-muted-foreground">{service.number}</span>
          </div>

          <h3 className="text-3xl lg:text-5xl font-display tracking-tight mb-4">{service.title}</h3>
          <p className="text-xl text-accent font-display mb-6">{service.tagline}</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{service.description}</p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {service.features.map((feature, i) => (
              <div
                key={feature}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <Check className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span className="text-sm text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="inline-flex items-baseline gap-3 px-6 py-3 border border-foreground/10">
            <span className="font-display text-3xl">{service.price}</span>
          </div>
        </div>

        {/* Visual side */}
        <div className={`${isReversed ? "lg:order-1" : ""}`}>
          {/* Process */}
          <div className="border border-foreground/10 mb-8">
            <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
              <span className="font-mono text-sm text-muted-foreground">Process</span>
              <span className="font-mono text-xs text-muted-foreground">workflow.ts</span>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-4 gap-4">
                {service.process.map((step, i) => (
                  <div
                    key={step.step}
                    className={`text-center transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 400}ms` }}
                  >
                    <div className="text-3xl font-display mb-2 text-foreground/20">{step.step}</div>
                    <div className="text-sm font-mono text-muted-foreground">{step.label}</div>
                    {i < 3 && (
                      <div className="hidden sm:block absolute">
                        <ArrowRight className="w-3 h-3 text-foreground/10" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Progress bar */}
              <div className="mt-6 h-px bg-foreground/10 overflow-hidden">
                <div
                  className={`h-full bg-accent transition-all duration-2000 ease-out ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                />
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="grid grid-cols-3 gap-px bg-foreground/10">
            {service.outcomes.map((outcome, i) => (
              <div
                key={outcome.label}
                className={`bg-background p-6 text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${i * 100 + 600}ms` }}
              >
                <div className="text-2xl lg:text-3xl font-display mb-1">{outcome.value}</div>
                <div className="text-xs text-muted-foreground font-mono">{outcome.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 lg:pt-44 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              What We Build
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-[8rem] font-display leading-[0.9] tracking-tight mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            AI-Powered
            <br />
            <span className="text-stroke">Digital Solutions</span>
          </h1>

          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From intelligent websites to custom AI systems — engineering solutions that drive
            measurable business growth.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-32 lg:space-y-48">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Not sure which service fits?
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 max-w-3xl mx-auto">
            Book a free consultation
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            We&apos;ll recommend the best approach for your business goals.
          </p>
          <a href="/contact">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-10 h-14 text-base rounded-full group"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
