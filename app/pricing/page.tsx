"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Check, Star } from "lucide-react";

type PricingMode = "one-time" | "monthly";

const primaryPlans = [
  {
    name: "Landing Page",
    badge: "AFFORDABLE",
    description: "Single high-converting page",
    prices: {
      "one-time": "$900 – $1,500",
      monthly: "from $69/mo",
    },
    monthlyNote: "12 months, incl. hosting",
    features: [
      "Single high-converting landing page",
      "AI lead capture form",
      "Fast load performance",
      "Mobile optimized",
      "Basic analytics",
    ],
    popular: false,
  },
  {
    name: "Starter",
    badge: "MOST POPULAR",
    description: "Perfect for growing businesses",
    prices: {
      "one-time": "$2,000 – $3,500",
      monthly: "from $149/mo",
    },
    monthlyNote: "18 months, incl. maintenance",
    features: [
      "Up to 5 pages",
      "AI chat assistant integration",
      "Conversion optimized layout",
      "SEO foundation",
      "Responsive design",
      "GDPR compliant",
    ],
    popular: true,
  },
  {
    name: "Standard",
    badge: null,
    description: "For established businesses",
    prices: {
      "one-time": "$5,000 – $8,000",
      monthly: "from $249/mo",
    },
    monthlyNote: "24 months, incl. maintenance",
    features: [
      "Up to 10 pages",
      "Advanced AI lead capture",
      "Conversion analytics dashboard",
      "Automated email flows",
      "Performance optimization",
    ],
    popular: false,
  },
];

const enterprisePlans = [
  {
    name: "Corporate",
    badge: null,
    description: "Full marketing presence",
    prices: {
      "one-time": "$10,000 – $18,000",
      monthly: "from $450/mo",
    },
    features: [
      "Full marketing website",
      "AI customer assistant",
      "CRM integrations",
      "Advanced analytics",
      "Performance optimization",
      "Priority support",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    badge: "PREMIUM",
    description: "Custom-built platforms",
    prices: {
      "one-time": "$20,000+",
      monthly: "from $1,500/mo",
    },
    monthlyNote: "24 months, VIP support",
    features: [
      "Custom SaaS platform",
      "AI automation systems",
      "Advanced integrations",
      "Dedicated architecture planning",
      "Ongoing support & monitoring",
      "Quarterly strategy reviews",
    ],
    popular: true,
  },
];

const techStack = [
  { name: "Next.js", icon: "▲", description: "Modern React Architecture" },
  { name: "React", icon: "⚛", description: "Interactive UI Components" },
  { name: "TypeScript", icon: "TS", description: "Type-Safe Code" },
  { name: "Tailwind CSS", icon: "🎨", description: "Flexible Design System" },
  { name: "Vercel", icon: "▼", description: "Global CDN Performance" },
  { name: "AI Integrations", icon: "🧠", description: "Intelligent Automation" },
];

const faqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or change your plan at any time. We'll credit your existing investment toward the new plan.",
  },
  {
    question: "What payment options are available?",
    answer:
      "We offer one-time project payments, monthly subscription billing, and custom enterprise billing arrangements based on your needs.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day satisfaction guarantee. If you're not happy with the direction of the project within the first 14 days, we'll work with you to make it right.",
  },
  {
    question: "What's included in maintenance?",
    answer:
      "Maintenance plans include security updates, up to 5 content changes per month, uptime monitoring, and priority support access.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Landing pages typically take 1-2 weeks, Starter packages 2-4 weeks, Standard/Corporate 4-8 weeks, and Enterprise projects 8-16 weeks depending on scope.",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState<PricingMode>("one-time");
  const techView = useInView();
  const faqView = useInView();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-44 pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Pricing Plans
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-[8rem] font-display leading-[0.9] tracking-tight mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Pricing.
          </h1>

          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Transparent pricing. Built for startups that want websites that convert.
          </p>
        </div>
      </section>

      {/* Mode Toggle */}
      <section className="relative pb-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => setMode("one-time")}
              className={`px-6 py-3 text-sm font-mono transition-all duration-300 ${
                mode === "one-time"
                  ? "bg-foreground text-background"
                  : "border border-foreground/10 text-muted-foreground hover:border-foreground/30"
              }`}
            >
              One-time Project
            </button>
            <button
              onClick={() => setMode("monthly")}
              className={`px-6 py-3 text-sm font-mono transition-all duration-300 ${
                mode === "monthly"
                  ? "bg-foreground text-background"
                  : "border border-foreground/10 text-muted-foreground hover:border-foreground/30"
              }`}
            >
              Monthly Subscription
            </button>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            {mode === "one-time"
              ? "Project is paid upfront — you own it immediately."
              : "Subscribe monthly — incl. maintenance & updates. You own it after the term."}
          </p>
        </div>
      </section>

      {/* Free Consultation Note */}
      <section className="relative pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-mono">•</span>
            <p>Free initial consultation • Response guaranteed in 12h • Non-binding quote</p>
          </div>
        </div>
      </section>

      {/* Primary Pricing Cards */}
      <section className="relative pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
            {primaryPlans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`relative p-8 lg:p-12 bg-background transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${
                  plan.popular
                    ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground z-10"
                    : ""
                }`}
                style={{ transitionDelay: `${idx * 100 + 400}ms` }}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest flex items-center gap-1.5">
                    <Star className="w-3 h-3" />
                    {plan.badge}
                  </span>
                )}
                {!plan.popular && plan.badge && (
                  <span className="inline-block px-3 py-1 border border-foreground/10 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                    {plan.badge}
                  </span>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-foreground/10">
                  <div className="font-display text-3xl lg:text-4xl text-foreground">
                    {plan.prices[mode]}
                  </div>
                  {mode === "monthly" && plan.monthlyNote && (
                    <p className="text-xs text-muted-foreground font-mono mt-2">{plan.monthlyNote}</p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="/contact">
                  <button
                    className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                      plan.popular
                        ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                        : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Plans */}
      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
              <span className="w-8 h-px bg-foreground/30" />
              Enterprise Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl font-display tracking-tight">
              Built for scale.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
            {enterprisePlans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`relative p-8 lg:p-12 transition-all duration-700 ${
                  plan.popular
                    ? "bg-foreground text-background"
                    : "bg-background"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest mb-4 ${
                      plan.popular
                        ? "border border-background/20 text-background/70"
                        : "border border-foreground/10 text-muted-foreground"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <div className="mb-8">
                  <h3
                    className={`font-display text-3xl mt-2 ${
                      plan.popular ? "text-background" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-2 ${
                      plan.popular ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 pb-8 border-b border-foreground/10">
                  <div
                    className={`font-display text-3xl lg:text-4xl ${
                      plan.popular ? "text-background" : "text-foreground"
                    }`}
                  >
                    {plan.prices[mode]}
                  </div>
                  {mode === "monthly" && plan.monthlyNote && (
                    <p
                      className={`text-xs font-mono mt-2 ${
                        plan.popular ? "text-background/50" : "text-muted-foreground"
                      }`}
                    >
                      {plan.monthlyNote}
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.popular ? "text-background" : "text-foreground"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-background/70" : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="/contact">
                  <button
                    className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                      plan.popular
                        ? "bg-background text-foreground hover:bg-background/90"
                        : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {plan.popular ? "Book Consultation" : "Get Started"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div ref={techView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Technology
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                techView.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              The stack behind
              <br />
              <span className="text-stroke">every whyn website.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`bg-background p-8 lg:p-10 group hover:bg-foreground/[0.02] transition-all duration-500 ${
                  techView.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-display mb-1 group-hover:translate-x-1 transition-transform">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div ref={faqView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: heading */}
            <div
              className={`transition-all duration-700 ${
                faqView.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                FAQ
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
                Straight answers
                <br />
                to your questions.
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Everything you need to know about working with us.
              </p>
            </div>

            {/* Right: Accordion */}
            <div
              className={`transition-all duration-700 delay-200 ${
                faqView.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-foreground/10">
                    <AccordionTrigger className="text-left text-base font-display py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Need something custom?
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 max-w-3xl mx-auto">
            Every business is unique.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Let&apos;s discuss your specific needs and create a tailored solution.
          </p>
          <a href="/contact">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-10 h-14 text-base rounded-full group"
            >
              Get Custom Quote
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
