"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    description: "Single high-converting page",
    price: { monthly: 69, annual: 69 },
    oneTime: "$900 – $1,500",
    features: [
      "Single landing page",
      "AI lead capture form",
      "Fast load performance",
      "Mobile optimized",
      "Basic analytics",
    ],
    cta: "Get Started",
    popular: false,
    tier: "starter" as const,
  },
  {
    name: "Starter",
    description: "Perfect for growing businesses",
    price: { monthly: 149, annual: 149 },
    oneTime: "$2,000 – $3,500",
    features: [
      "Up to 5 pages",
      "AI chat assistant",
      "Conversion optimized",
      "SEO foundation",
      "Responsive design",
      "GDPR compliant",
    ],
    cta: "Get Started",
    popular: true,
    tier: "popular" as const,
  },
  {
    name: "Standard",
    description: "For established businesses",
    price: { monthly: 249, annual: 249 },
    oneTime: "$5,000 – $8,000",
    features: [
      "Up to 10 pages",
      "Advanced AI lead capture",
      "Conversion analytics",
      "Automated email flows",
      "Performance optimization",
    ],
    cta: "Get Started",
    popular: false,
    tier: "premium" as const,
  },
];

const tierStyles = {
  starter: {
    card: "bg-gradient-to-b from-background to-blue-950/10 border border-blue-500/15 hover:border-blue-500/30 hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.15)]",
    badge: "",
    button: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
    check: "text-blue-500",
  },
  popular: {
    card: "bg-gradient-to-b from-accent/5 via-background to-accent/10 border-2 border-accent/40 hover:border-accent/60 hover:shadow-[0_8px_40px_-12px_rgba(217,119,87,0.25)]",
    badge: "bg-accent text-white",
    button: "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25",
    check: "text-accent",
  },
  premium: {
    card: "bg-gradient-to-b from-background via-amber-950/5 to-amber-950/15 border border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.15)]",
    badge: "",
    button: "bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 shadow-lg shadow-amber-600/20",
    check: "text-amber-500",
  },
};

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Pricing Plans
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Transparent pricing
            <br />
            <span className="text-stroke">for growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Built for startups that want websites that convert. No hidden fees, no surprises.
          </p>
        </div>

        {/* Free Consultation Note */}
        <div className="flex items-center gap-4 mb-16 text-sm text-muted-foreground">
          <span className="font-mono">•</span>
          <p>Free initial consultation • Response guaranteed in 12h • Non-binding quote</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => {
            const styles = tierStyles[plan.tier];
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${styles.card}`}
              >
                {plan.popular && (
                  <span className={`absolute -top-3 left-8 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest ${styles.badge}`}>
                    Most Popular
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
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl lg:text-6xl text-foreground">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${styles.check}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA - pinned to bottom */}
                <a href="/contact" className="mt-auto">
                  <button
                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 group ${styles.button}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All plans include unlimited updates, mobile optimization, and analytics.{" "}
          <a href="/pricing" className="underline underline-offset-4 hover:text-foreground transition-colors">
            View all plans
          </a>
          {" · "}
          <a href="/contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Custom solution? Book consultation
          </a>
        </p>
      </div>
    </section>
  );
}
