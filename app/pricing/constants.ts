export const PRIMARY_PLANS = [
  {
    name: "Landing Page",
    badge: "STARTER",
    description: "High-converting single page for launches and campaigns",
    priceOnce: "$800–$1,200",
    priceMonth: "$79/mo",
    term: "12 mo (hosting & maintenance incl.)",
    features: [
      "Single high-converting landing page",
      "Lead capture & contact form",
      "Lightning-fast performance (SEO-friendly)",
      "Mobile-responsive design",
      "Basic analytics setup (Google Analytics)",
      "Secure hosting with SSL certificate"
    ],
    isFeatured: false,
    tier: "starter" as const
  },
  {
    name: "Multi-Page",
    badge: "MOST POPULAR",
    description: "Complete multi-page website for growing companies",
    priceOnce: "$2,000–$3,000",
    priceMonth: "$149/mo",
    term: "18 mo (hosting & maintenance incl.)",
    features: [
      "Up to 10 custom pages",
      "WordPress CMS (blog/news) setup",
      "Contact & booking forms",
      "SEO-friendly, performance-optimized design",
      "Secure hosting (SSL) & regular updates",
      "GDPR & privacy compliance"
    ],
    isFeatured: true,
    tier: "popular" as const
  },
  {
    name: "E-Commerce",
    badge: "PREMIUM",
    description: "Scalable online store engineered for sales",
    priceOnce: "$5,000–$8,000",
    priceMonth: "$249/mo",
    term: "24 mo (hosting & maintenance incl.)",
    features: [
      "Secure payment gateway integration (PCI-compliant)",
      "Custom product catalog & inventory system",
      "Intuitive cart & checkout flow",
      "Order tracking & management dashboard",
      "Mobile-optimized shopping experience",
      "Advanced SEO & performance optimization"
    ],
    isFeatured: false,
    tier: "premium" as const
  }
];

export const ENTERPRISE_PLANS = [
  {
    name: "Corporate Website",
    priceOnce: "Custom Quote",
    priceMonth: "Custom Quote",
    features: [
      "Extensive multi-page site (services, about, blog, etc.)",
      "Custom CRM & third-party integrations",
      "Advanced analytics dashboard",
      "Dedicated account manager & 24/7 support",
      "Priority security updates & monitoring"
    ],
    isFeatured: false,
    isComingSoon: false
  },
  {
    name: "Enterprise",
    badge: "BUILT FOR SCALE",
    priceOnce: "Custom Quote",
    priceMonth: "Custom Quote",
    term: "Custom contract (VIP support)",
    features: [
      "Full SaaS platform or web application",
      "Complex system architecture & integrations",
      "Advanced data pipelines & automations",
      "Dedicated cloud infrastructure planning",
      "Quarterly strategy reviews & SLAs"
    ],
    isFeatured: true,
    isComingSoon: false
  }
];

export const FAQS = [
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade at any time. We'll credit any unused balance from your current plan toward the new one, prorated by time remaining."
  },
  {
    q: "What are your payment options?",
    a: "We accept one-time upfront payments (typically 50% deposit and 50% on completion) or monthly subscriptions via Stripe. Enterprise clients can arrange custom billing terms."
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. We offer a 14-day satisfaction guarantee on all subscription plans. For one-time projects, we use milestone approvals to ensure you’re happy before advancing."
  },
  {
    q: "What is included in maintenance?",
    a: "Maintenance covers hosting, security updates, and up to 5 hours/month of updates (depending on your plan). It also includes uptime monitoring and performance tuning."
  },
  {
    q: "How long does a typical project take?",
    a: "Typical timelines: Landing Page sites: 1-2 weeks; Multi-Page sites: 4-6 weeks; E-Commerce sites: 6-10 weeks; Corporate sites: 8-12 weeks; Enterprise platforms: 12-24 weeks."
  }
];

export const PRICING_PAGE = {
  header: {
    title: "Pricing Plans",
    subtitle: "Transparent pricing for growth-focused startups and businesses.",
    toggles: {
      once: "One-Time Payment",
      monthly: "Monthly Plan"
    },
    descriptions: {
      once: "Pay upfront — you own your website immediately with a one-time fee.",
      monthly: "Monthly subscription — includes hosting, updates, and support. Ownership transfers after the contract term."
    }
  },
  buttons: {
    getStarted: "Get Started",
    comingSoon: "Coming Soon",
    contactSales: "Contact Sales"
  },
  enterpriseFooter: "Free initial consultation • 12h guaranteed response • Non-binding quote",
  faqTitle: "Frequently Asked Questions",
  bottomCta: {
    title: "Need something custom?",
    subtitle: "Every business is unique. Let’s discuss your specific needs and create a tailored solution.",
    button: "Get Custom Quote"
  }
};