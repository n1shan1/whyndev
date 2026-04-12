import { Code2, Rocket, Shield, Lock, Eye, FileCheck, Globe, Search, ShoppingCart, LayoutTemplate, Cpu, Database, Infinity, ShieldCheck, Unlock } from "lucide-react";
import { PRIMARY_PLANS } from "@/app/pricing/constants";

export const NAVIGATION = {
  logo: "whyn",
  links: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
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
  headline: ["Rigorous work.", "Tangible results."],
  verified: "Verified",
  metrics: [
    { value: 12, suffix: "+", prefix: "", label: "Projects Delivered" },
    { value: 15, suffix: "+", prefix: "", label: "Technologies Used" },
    { value: 100, suffix: "k+", prefix: "", label: "Lines of Code Written" },
    { value: 12, suffix: "h", prefix: "<", label: "Avg Response Time" }
  ]
};

export const SECURITY_SECTION = {
  eyebrow: "Technical Sovereignty",
  headline: ["Built for ownership.", "Designed for scale."],
  description: "We don't just build websites; we build assets. You own 100% of your code and intellectual property. No proprietary black boxes—just clean, elite engineering built to sustain your growth.",
  certifications: ["100% IP Ownership", "GDPR Compliant", "Clean Architecture", "Edge-Ready", "Zero Bench Fee"],
  features: [
    { icon: Unlock, title: "Full Code Sovereignty", description: "Every line of code is yours from day one. Zero recurring 'agency license' fees or hidden dependencies." },
    { icon: Infinity, title: "Foundational Scalability", description: "Architected on the Vercel Edge Network. Built to handle 10k users as easily as 1 with zero infrastructure lag." },
    { icon: Cpu, title: "Elite Engineering", description: "Strict TypeScript and Server Component patterns. We build code that your future in-house team will actually love." },
    { icon: ShieldCheck, title: "Zero-Trust Security", description: "Sanitized API layers and secure authentication patterns to protect your customer data and business integrity." }
  ]
};

export const TESTIMONIALS_SECTION = {
  eyebrow: "What people say",
  keyResult: "Core Outcome",
  marqueeLabel: "Trusted by founders and growing teams",
  testimonials: [
    {
      quote: "Working with WHYN was refreshingly straightforward. The process was transparent and the final site performs extremely well.",
      author: "Arjun Patel",
      role: "Indie Founder",
      company: "SaaS Launch",
      metric: "Lightning-fast performance",
      rating: 5
    },
    {
      quote: "What stood out most was the attention to performance and clean architecture. The site feels fast and thoughtfully built.",
      author: "Daniel Rivera",
      role: "Product Lead",
      company: "DevTool Systems",
      metric: "Scalable codebase",
      rating: 5
    },
    {
      quote: "The collaboration was smooth and the final website looks much more modern than what we had before.",
      author: "Sophia Chen",
      role: "Operation Lead",
      company: "Modern Retail",
      metric: "Modernized UX/UI",
      rating: 5
    }
  ],
  googleReviewWidget: {
    status: "Top Rated",
    rating: "5.0",
    label: "Highly Recommended by Founders",
    embedLink: "#"
  },
  companies: ["SaaS Startups", "Indie Founders", "Content Creators", "Developer Tools", "Local Businesses", "Growth Teams"]
};

export const PRICING_SECTION = {
  eyebrow: "Pricing Plans",

  headline: ["Transparent pricing", "built for growth"],

  description:
    "Simple, transparent pricing designed for startups and growing businesses. Every project focuses on performance, clarity, and turning visitors into customers.",

  consultationNote:
    "Free consultation • 12h response time • No obligation quote",

  bottomNote:
    "All plans include responsive design, performance optimization, and analytics setup.",

  links: {
    viewAll: "View full pricing",
    custom: "Need something custom? Book consultation"
  },

  plans: PRIMARY_PLANS.map((plan) => ({
    name: plan.name,
    description: plan.description,
    price: {
      monthly: parseInt(plan.priceMonth.replace(/[^0-9]/g, "")),
      annual: parseInt(plan.priceMonth.replace(/[^0-9]/g, ""))
    },
    oneTime: plan.priceOnce,
    features: plan.features,
    cta: "Get Started",
    popular: plan.isFeatured,
    tier: plan.tier
  })),

  tierStyles: {
    starter: {
      card:
        "bg-gradient-to-b from-background to-blue-950/10 border border-blue-500/15 hover:border-blue-500/30 hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.15)]",
      badge: "",
      button:
        "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
      check: "text-blue-500"
    },

    popular: {
      card:
        "bg-gradient-to-b from-accent/5 via-background to-accent/10 border-2 border-accent/40 hover:border-accent/60 hover:shadow-[0_8px_40px_-12px_rgba(217,119,87,0.25)]",
      badge: "bg-accent text-white",
      button:
        "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25",
      check: "text-accent"
    },

    premium: {
      card:
        "bg-gradient-to-b from-background via-amber-950/5 to-amber-950/15 border border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.15)]",
      badge: "",
      button:
        "bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 shadow-lg shadow-amber-600/20",
      check: "text-amber-500"
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
      image: "/nishant.jpeg",
      aboutLink: "/about"
    },
    {
      name: "Sweta Yadav",
      role: "UI/UX Specialist • India",
      experience: "1 Yr Exp",
      image: "/sweta.jpeg",
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
  description: "Strict technical accountability for growth-focused brands. We custom engineer screaming-fast, pixel-perfect digital assets designed to convert. You own 100% of your code.",
  copyright: `© ${new Date().getFullYear()} Whyn. All rights reserved.`,
  statusLink: "Available for new projects",
  socialLinks: [
    { name: "LinkedIn", href: "https://linkedin.com/in/nishantdev" },
    { name: "X", href: "https://x.com/n1sh_an1" },
    { name: "GitHub", href: "https://github.com/n1shan1" },
    { name: "connect.nishantdev@gmail.com", href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "connect.nishantdev@gmail.com"}` }
  ],
  footerLinks: {
    Services: [
      { name: "Landing Pages", href: "/services#landing-page" },
      { name: "Multi-Page Sites", href: "/services#multi-page" },
      { name: "E-Commerce Stores", href: "/services#ecommerce" },
      { name: "SEO Optimization", href: "/services#seo" }
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/portfolio" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" }
    ],
    Resources: [
      { name: "Case Studies", href: "/portfolio" },
      { name: "Project Inquiry", href: "/contact" },
      { name: "Contact Us", href: "/contact" },
      { name: "Newsletter", href: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "/legal/privacy-policy" },
      { name: "Terms of Service", href: "/legal/terms-of-service" },
      { name: "Cookie Policy", href: "/legal/cookie-policy" },
      { name: "Legal / Imprint", href: "/legal/imprint" }
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
