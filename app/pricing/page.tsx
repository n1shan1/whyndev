"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const primaryPlans = [
  {
    name: "Landing Page",
    badge: "STARTUP",
    priceOnce: "$500–$900",
    priceMonth: "$49/mo",
    term: "12 months, incl. hosting",
    features: [
      "Single high-converting landing page",
      "Lead capture form",
      "Fast load performance",
      "Mobile optimized",
      "Basic analytics"
    ],
    isFeatured: false
  },
  {
    name: "Multi-Page",
    badge: "MOST POPULAR",
    priceOnce: "$1,200–$2,000",
    priceMonth: "$99/mo",
    term: "18 months, incl. maintenance",
    features: [
      "Up to 10 custom pages",
      "CMS Setup (Blog/News)",
      "Contact & Booking forms",
      "SEO foundation",
      "Performance optimized",
      "GDPR compliant"
    ],
    isFeatured: true
  },
  {
    name: "E-Commerce",
    priceOnce: "$3,000–$5,000",
    priceMonth: "$199/mo",
    term: "24 months, incl. maintenance",
    features: [
      "Secure payment gateways",
      "Product inventory system",
      "Cart & Checkout flow",
      "Order management",
      "Advanced SEO setup"
    ],
    isFeatured: false
  }
];

const enterprisePlans = [
  {
    name: "Corporate",
    priceOnce: "Coming Soon",
    priceMonth: "Coming Soon",
    features: [
      "Full marketing website",
      "Custom third-party integrations",
      "CRM setups & automations",
      "Advanced analytics",
      "Performance optimization",
      "Priority support"
    ],
    isFeatured: false,
    isComingSoon: true
  },
  {
    name: "Enterprise",
    badge: "BUILT FOR SCALE",
    priceOnce: "Coming Soon",
    priceMonth: "Coming Soon",
    term: "Custom architecture & VIP support",
    features: [
      "Custom SaaS platform",
      "Complex system architecture",
      "Advanced data integrations",
      "Dedicated infrastructure planning",
      "Ongoing support & monitoring",
      "Quarterly strategy reviews"
    ],
    isFeatured: true, // Featured Dark
    isComingSoon: true
  }
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade your plan at any time. We will credit the unused portion of your current plan toward your new subscription or project."
  },
  {
    q: "What are your payment options?",
    a: "We offer flexible payment options matching our pricing models: one-time upfront payments (typically 50% deposit, 50% upon completion), monthly subscription billing via Stripe, or custom enterprise billing terms."
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 14-day satisfaction guarantee on our subscription plans. For custom projects, milestones are approved before advancing to ensure complete satisfaction."
  },
  {
    q: "What is included in maintenance?",
    a: "Maintenance includes priority security updates, bug fixes, uptime monitoring, and small content changes (up to 5 hours per month depending on your tier)."
  },
  {
    q: "How long does a typical project take?",
    a: "Landing pages usually take 1-2 weeks. Starter packages run 2-4 weeks. Standard and Corporate builds take 4-8 weeks. Enterprise applications can take 8-16 weeks depending on scale and complexity."
  }
];

export default function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <main className="relative min-h-screen noise-overlay">
      <Navigation />
      
      {/* Header */}
      <section className="pt-40 lg:pt-48 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-display tracking-tight text-foreground mb-6">
          Pricing.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Transparent pricing. Built for startups that want websites that convert.
        </p>

        {/* Toggle controls */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex bg-secondary/30 p-1.5 rounded-full border border-border/50">
            <button 
              onClick={() => setIsMonthly(false)}
              className={`px-8 py-3 rounded-full font-mono text-sm transition-all duration-300 ${!isMonthly ? "bg-background shadow-md text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              One-Time
            </button>
            <button 
              onClick={() => setIsMonthly(true)}
              className={`px-8 py-3 rounded-full font-mono text-sm transition-all duration-300 ${isMonthly ? "bg-background shadow-md text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Monthly Subscription
            </button>
          </div>
          
          <div className="mt-6 h-6 overflow-hidden">
            <p className={`text-sm text-accent font-medium transition-all duration-300 ${isMonthly ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
              Project is paid upfront — you own it immediately.
            </p>
            <p className={`text-sm text-accent font-medium transition-all duration-300 ${isMonthly ? "-translate-y-full opacity-100" : "translate-y-0 opacity-0"}`}>
              Subscribe monthly — incl. maintenance & updates. You own it after the term.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Plans Grid */}
      <section className="px-6 lg:px-12 pb-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {primaryPlans.map((plan, i) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl p-8 lg:p-10 transition-transform duration-500 hover:-translate-y-2 ${
                plan.isFeatured 
                  ? "bg-background border-2 border-accent shadow-xl scale-100 lg:scale-105 z-10" 
                  : "bg-secondary/20 border border-border/50 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-mono font-bold tracking-widest shadow-md">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-display mb-2">{plan.name}</h3>
              
              <div className="mt-6 mb-8">
                <div className="text-4xl font-display">
                  {isMonthly ? plan.priceMonth : plan.priceOnce}
                </div>
                {isMonthly && plan.term && (
                  <div className="text-sm font-mono text-muted-foreground mt-2">{plan.term}</div>
                )}
              </div>
              
              <Link href="/contact" passHref legacyBehavior>
                <Button className={`w-full h-12 rounded-xl mb-8 ${plan.isFeatured ? "bg-accent hover:bg-accent/90" : "bg-foreground hover:bg-foreground/90"}`}>
                  Get Started
                </Button>
              </Link>
              
              <div className="space-y-4">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Plans Grid */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1000px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {enterprisePlans.map((plan, i) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl p-8 lg:p-10 transition-transform duration-500 hover:-translate-y-2 border ${
                plan.isFeatured 
                  ? "bg-foreground text-background border-foreground shadow-2xl" 
                  : "bg-background border-border shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 right-8 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-mono font-bold tracking-widest">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-display mb-2">{plan.name}</h3>
              
              <div className="mt-6 mb-8">
                <div className="text-4xl font-display">
                  {isMonthly ? plan.priceMonth : plan.priceOnce}
                </div>
                {isMonthly && plan.term && (
                  <div className={`text-sm font-mono mt-2 ${plan.isFeatured ? "text-background/50" : "text-muted-foreground"}`}>{plan.term}</div>
                )}
              </div>
              
              {plan.isComingSoon ? (
                <Button disabled className={`w-full h-12 rounded-xl mb-8 ${plan.isFeatured ? "bg-background text-foreground hover:bg-background/90" : "bg-secondary text-foreground hover:bg-secondary/80"}`}>
                  Coming Soon
                </Button>
              ) : (
                <Link href="/contact" passHref legacyBehavior>
                  <Button className={`w-full h-12 rounded-xl mb-8 ${plan.isFeatured ? "bg-background text-foreground hover:bg-background/90" : "bg-secondary text-foreground hover:bg-secondary/80"}`}>
                    Contact Sales
                  </Button>
                </Link>
              )}
              
              <div className="space-y-4">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.isFeatured ? "text-accent" : "text-accent"}`} />
                    <span className={plan.isFeatured ? "text-background/90" : "text-foreground/80"}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm font-mono text-muted-foreground">
          <p>Free initial consultation • Response guaranteed in 12h • Non-binding quote</p>
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 pb-32">
        <h2 className="text-3xl font-display text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-border/50 rounded-2xl bg-secondary/10 overflow-hidden cursor-pointer open:bg-background open:shadow-md transition-all">
              <summary className="px-6 py-5 font-medium flex justify-between items-center outline-none">
                {faq.q}
                <span className="text-xl group-open:rotate-45 transition-transform duration-300 text-accent">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">Need something custom?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Every business is unique. Let's discuss your specific needs and create a tailored solution.
        </p>
        <Link href="/contact" passHref legacyBehavior>
          <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-10 h-14 text-base rounded-full group cursor-pointer">
            Get Custom Quote
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      <FooterSection />
    </main>
  );
}
