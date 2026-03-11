import { Code2, Rocket, Shield, Lock, Eye, FileCheck, Globe, Search, ShoppingCart, LayoutTemplate } from "lucide-react";

export const NAVIGATION = {
  logo: "whyn",
  links: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ],
  cta: "Book a Call"
};

export const HERO_SECTION = {
  words: ["lead", "scale", "launch", "convert", "grow"],
  eyebrow: "Premium Digital Solutions",
  headline: ["Building websites", "that genuinely"],
  description: "We believe in strict technical accountability. No bloated templates or surprise fees—WHYN is a professional studio that builds fast, beautifully engineered tools guaranteed to scale and drive measurable growth for your business.",
  ctas: {
    primary: "Start Project",
    secondary: "View Portfolio"
  }
};

export const AGENCY_ABOUT_SECTION = {
  headline: {
    main: "We fix what typical",
    highlight: "agencies break."
  },
  paragraphs: [
    "Most businesses suffer through the same agency cycle: missed deadlines, hidden fees, unmaintainable code, and zero communication once the contract is signed. We saw this broken model and built WHYN to be the exact opposite.",
    "We are your technical partner, accountable for your growth. We don't use bloated drag-and-drop templates. We custom engineer screaming-fast, pixel-perfect platforms designed explicitly to convert your visitors and scale your revenue. No fluff, no jargon—just rigorous execution."
  ],
  features: [
    {
      icon: Shield,
      title: "100% Accountability",
      description: "Transparent pricing, guaranteed deadlines, and direct communication with the engineers building your product."
    },
    {
      icon: Code2,
      title: "Engineered to Scale",
      description: "Zero bloated plugins. We write clean, custom code that loads instantly and ranks higher."
    }
  ],
  stack: {
    title: "The Stack We Use To Win",
    items: [
      { label: "Frontend Performance", tech: "Next.js / React / Tailwind UX" },
      { label: "Backend Scalability", tech: "Node.js / Supabase / PostgreSQL" },
      { label: "Global Edge Delivery", tech: "Vercel / Cloudflare" },
      { label: "Conversion Automation", tech: "Stripe / HubSpot / OpenAI" }
    ]
  }
};

export const FEATURES_SECTION = {
  eyebrow: "Our Arsenal",
  headline: {
    main: "Tools to scale",
    highlight: "your revenue."
  },
  description: "No templated junk. Only high-performance, conversion-optimized digital assets that actually work for your business.",
  mainFeature: {
    title: "Lead-Generation\nMachines.",
    description: "Landing pages engineered with one goal: capturing leads. Lightning fast load times, persuasive copy structures, and frictionless funnels.",
    stats: [
      { label: "Speed", value: "Sub-1s" },
      { label: "Design", value: "Tailored" },
      { label: "Conversion", value: "Optimized" },
      { label: "Analytics", value: "Built-in" }
    ]
  },
  secondaryFeatures: [
    {
      title: "Corporate Platforms",
      description: "Authoritative multi-page websites. Scalable architecture powered by a headless CMS so you control your narrative.",
      bullets: ["Custom Routing", "Headless CMS", "Secure Forms"]
    },
    {
      title: "E-Commerce",
      description: "High-converting online storefronts. Secure checkouts, zero friction, and flawless inventory logic.",
      cta: "View Examples"
    }
  ],
  workflow: {
    label: "No Shortcuts",
    title: "Code that doesn't break.",
    description: "We build on enterprise-grade infrastructure. Next.js, TypeScript, and edge networks mean superior uptime and speed."
  },
  smallFeature: {
    title: "Technical SEO",
    description: "Rank higher natively. Clean semantic code and schema markup."
  }
};

export const METRICS_SECTION = {
  eyebrow: "Our Impact",
  headline: ["Results you", "can trust."],
  verified: "Verified",
  metrics: [
    { value: 92, suffix: "+", prefix: "", label: "Projects Completed" },
    { value: 7.5, suffix: "M+", prefix: "", label: "Users Reached" },
    { value: 100, suffix: "%", prefix: "", label: "Client Satisfaction" },
    { value: 24, suffix: "h", prefix: "", label: "Avg Response Time" }
  ]
};

export const SECURITY_SECTION = {
  eyebrow: "Quality & Standards",
  headline: ["Excellence", "by default."],
  description: "Every project is built to the highest standards with security, performance, and user experience as core pillars.",
  certifications: ["GDPR", "SSL", "Best Practices", "Responsive", "SEO Ready"],
  features: [
    { icon: Shield, title: "Data Protection", description: "GDPR compliant with encrypted data storage and secure API connections." },
    { icon: Lock, title: "SSL & Security", description: "Free SSL certificates and comprehensive security measures on all projects." },
    { icon: Eye, title: "Quality Assurance", description: "Rigorous testing and code reviews ensure production-ready solutions." },
    { icon: FileCheck, title: "Performance", description: "PageSpeed 100, optimized load times, and conversion-focused design." }
  ]
};

export const TESTIMONIALS_SECTION = {
  eyebrow: "What people say",
  keyResult: "Key Result",
  marqueeLabel: "Trusted by forward-thinking teams",
  testimonials: [
    { quote: "The ROI-first approach changed how we view our digital spend. Traffic doubled in 3 months!", author: "Alex Rivera", role: "CEO", company: "TechFlow", metric: "+248% user growth", rating: 5 },
    { quote: "Incredible speed performance. Our bounce rate dropped by 45% since the redesign.", author: "Sarah Chen", role: "Founder", company: "Bloom Media", metric: "45% bounce reduction", rating: 5 },
    { quote: "A professional team that understands business goals, not just pretty designs.", author: "Marcus Thorne", role: "Partner", company: "Thorne & Co", metric: "100% satisfied", rating: 5 }
  ],
  googleReviewWidget: {
    status: "Excellent",
    rating: "5.0",
    label: "Based on 30+ Google Reviews",
    embedLink: "#" // Placeholder for actual Google Maps review link or widget script
  },
  companies: ["TechFlow", "Bloom Media", "Thorne & Co", "Propvex Capital", "Steakclub NY", "Car Company", "Moussa Export"]
};

export const PRICING_SECTION = {
  eyebrow: "Pricing Plans",
  headline: ["Transparent pricing", "for growth"],
  description: "Built for expanding businesses that want websites that convert visitors into customers. No hidden fees, no surprises.",
  consultationNote: "Free initial consultation • Response guaranteed in 12h • Non-binding quote",
  bottomNote: "All plans include unlimited updates, mobile optimization, and analytics.",
  links: {
    viewAll: "View all plans",
    custom: "Custom solution? Book consultation"
  },
  plans: [
    {
      name: "Landing Page",
      description: "Single high-converting page",
      price: { monthly: 69, annual: 69 },
      oneTime: "$900 – $1,500",
      features: ["Single landing page", "AI lead capture form", "Fast load performance", "Mobile optimized", "Basic analytics"],
      cta: "Get Started",
      popular: false,
      tier: "starter" as const
    },
    {
      name: "Starter",
      description: "Perfect for growing businesses",
      price: { monthly: 149, annual: 149 },
      oneTime: "$2,000 – $3,500",
      features: ["Up to 5 pages", "AI chat assistant", "Conversion optimized", "SEO foundation", "Responsive design", "GDPR compliant"],
      cta: "Get Started",
      popular: true,
      tier: "popular" as const
    },
    {
      name: "Standard",
      description: "For established businesses",
      price: { monthly: 249, annual: 249 },
      oneTime: "$5,000 – $8,000",
      features: ["Up to 10 pages", "Advanced AI lead capture", "Conversion analytics", "Automated email flows", "Performance optimization"],
      cta: "Get Started",
      popular: false,
      tier: "premium" as const
    }
  ],
  tierStyles: {
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
    }
  }
};

export const DEVELOPERS_SECTION = {
  eyebrow: "The Engineers",
  headline: ["The minds", "behind WHYN."],
  description: "Crafting robust, scalable, and intelligent web applications. Based in India, we merge modern UI/UX with rigorous engineering to deliver conversion-focused solutions.",
  team: [
    {
      name: "Nishant Dev",
      role: "Lead Systems Engineer • India",
      experience: "2 Yrs Exp",
      image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nishant&backgroundColor=000000,101010&skinColor=f8d25c&eyes=happy&mouth=smile",
      aboutLink: "/about"
    },
    {
      name: "Sweta Yadav",
      role: "UI/UX Specialist • India",
      experience: "1 Yr Exp",
      image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sweta&backgroundColor=000000,101010&skinColor=ffdbb4&eyes=happy&mouth=smile",
      aboutLink: "/about"
    }
  ],
  advantages: {
    title: "The WHYN Guarantee",
    items: [
      {
        title: "Direct Access",
        description: "Speak directly with the engineers building your platform. No account managers playing telephone."
      },
      {
        title: "100% Ownership",
        description: "You own the full codebase and intellectual property from day one. Zero vendor lock-in."
      },
      {
        title: "Fixed Pricing",
        description: "Clear, upfront pricing and guaranteed delivery timelines. Never any hourly scope creep or surprise bills."
      }
    ]
  },
  links: {
    workTogether: "Let's work together",
    email: "hello@whyn.dev"
  }
};

export const INFRASTRUCTURE_SECTION = {
  eyebrow: "Technology Stack",
  headline: ["Built with modern", "technologies."],
  description: "We use industry-leading tools and frameworks to build fast, scalable, and maintainable solutions that stand the test of time.",
  stats: [
    { value: "100", label: "PageSpeed Score" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "4-8 wks", label: "Typical Timeline" }
  ],
  edgeNetwork: {
    title: "Edge Network",
    status: "All operational"
  },
  locations: [
    { city: "Next.js", region: "React Framework", latency: "Production Ready" },
    { city: "Tailwind CSS", region: "Design System", latency: "Responsive" },
    { city: "TypeScript", region: "Type Safe", latency: "Maintainable" },
    { city: "Vercel", region: "Deployment", latency: "Global CDN" },
    { city: "Supabase", region: "Database", latency: "Real-time" },
    { city: "OpenAI", region: "AI Integration", latency: "Smart" }
  ]
};

export const HOW_IT_WORKS_SECTION = {
  eyebrow: "How We Work",
  headline: ["From vision", "to launch in 4-8 weeks."],
  steps: [
    {
      number: "I",
      title: "Research & Strategy",
      description: "We dive deep into your business goals, audience, and competition. Understanding your vision is the foundation.",
      code: "// Project Discovery\n01. Initial consultation\n02. Business analysis\n03. Audience research\n04. Strategy workshop"
    },
    {
      number: "II",
      title: "Design & Build",
      description: "Custom design tailored to your brand, followed by clean, optimized code built for performance.",
      code: "// Development Process\n01. Design mockups\n02. Client feedback\n03. Frontend development\n04. Backend integration"
    },
    {
      number: "III",
      title: "Deploy & Optimize",
      description: "We launch your project and continuously optimize for conversions, performance, and user experience.",
      code: "// Launch & Optimization\n01. Final testing\n02. Deployment\n03. Analytics setup\n04. Performance tuning"
    }
  ],
  windowLabels: {
    fileName: "workflow.ts",
    status: "Ready"
  }
};

export const CTA_SECTION = {
  headline: {
    main: "Let's build something",
    highlight: "exceptional."
  },
  description: "We are ready to take your brand to the next level. Book a free consultation and let's create a flagship product together.",
  buttons: {
    primary: "Start Project",
    secondary: "View Portfolio"
  },
  guarantee: "// Reply guaranteed in 12 hours"
};

export const FOOTER_SECTION = {
  logo: "whyn.",
  brandName: "whyn.dev",
  description: "Premium web design and digital innovation for modern brands. We build what makes your business grow.",
  copyright: "© 2026 Whyn. All rights reserved.",
  statusLink: "Available for new projects",
  socialLinks: [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "hello@whyn.dev", href: "mailto:hello@whyn.dev" }
  ],
  footerLinks: {
    Services: [
      { name: "AI Conversion Websites", href: "/services#ai-conversion" },
      { name: "Lead Capture Systems", href: "/services#ai-leads" },
      { name: "Chat Sales Assistants", href: "/services#ai-chat" },
      { name: "Web App Development", href: "/services#saas" }
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/portfolio" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" }
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Case Studies", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
      { name: "Support", href: "/contact" }
    ],
    Legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Cookies", href: "#" }
    ]
  }
};

export const INTEGRATIONS_SECTION = {
  eyebrow: "Integrations",
  headline: ["Modern tech stack", "you can trust."],
  description: "Best-in-class tools and frameworks. We stay current with industry standards.",
  integrations: [
    { name: "Next.js", category: "Web Framework" },
    { name: "React", category: "UI Library" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Stripe", category: "Payments" },
    { name: "HubSpot", category: "CRM" },
    { name: "Salesforce", category: "CRM" },
    { name: "OpenAI", category: "AI" },
    { name: "Vercel", category: "Hosting" },
    { name: "Supabase", category: "Backend" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Figma", category: "Design" }
  ]
};
