"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { PRICING_SECTION } from "./constants";

const plans = PRICING_SECTION.plans;
const tierStyles = PRICING_SECTION.tierStyles;

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            {PRICING_SECTION.eyebrow}
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            {PRICING_SECTION.headline[0]}
            <br />
            <span className="text-stroke">{PRICING_SECTION.headline[1]}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            {PRICING_SECTION.description}
          </p>
        </div>

        {/* Free Consultation Note */}
        <div className="flex items-center gap-4 mb-16 text-sm text-muted-foreground">
          <span className="font-mono">•</span>
          <p>{PRICING_SECTION.consultationNote}</p>
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
          {PRICING_SECTION.bottomNote}{" "}
          <a href="/pricing" className="underline underline-offset-4 hover:text-foreground transition-colors">
            {PRICING_SECTION.links.viewAll}
          </a>
          {" · "}
          <a href="/contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
            {PRICING_SECTION.links.custom}
          </a>
        </p>
      </div>
    </section>
  );
}
