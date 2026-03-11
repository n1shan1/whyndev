export const PRIMARY_PLANS = [
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

export const ENTERPRISE_PLANS = [
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
    isFeatured: true,
    isComingSoon: true
  }
];

export const FAQS = [
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

export const PRICING_PAGE = {
  header: {
    title: "Pricing.",
    subtitle: "Transparent pricing. Built for startups that want websites that convert.",
    toggles: {
      once: "One-Time",
      monthly: "Monthly Subscription"
    },
    descriptions: {
      once: "Project is paid upfront — you own it immediately.",
      monthly: "Subscribe monthly — incl. maintenance & updates. You own it after the term."
    }
  },
  buttons: {
    getStarted: "Get Started",
    comingSoon: "Coming Soon",
    contactSales: "Contact Sales"
  },
  enterpriseFooter: "Free initial consultation • Response guaranteed in 12h • Non-binding quote",
  faqTitle: "Frequently Asked Questions",
  bottomCta: {
    title: "Need something custom?",
    subtitle: "Every business is unique. Let's discuss your specific needs and create a tailored solution.",
    button: "Get Custom Quote"
  }
};
