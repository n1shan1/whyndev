import { ShoppingCart, Search, Globe, LayoutTemplate } from "lucide-react";

export const SERVICES = [
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

export const SERVICES_PAGE = {
  header: {
    tag: "What We Build",
    title1: "Digital ",
    title2: "Growth",
    title3: " Solutions",
    subtitle: "From optimized landing pages to comprehensive e-commerce platforms — engineering websites that drive your business forward."
  },
  labels: {
    startingAt: "Starting At",
    coreFeatures: "Core Features",
    process: "Process",
    avgOutcomes: "Avg. Outcomes"
  },
  bottomCta: {
    title: "Not sure which service fits?",
    subtitle: "Book a free consultation and we'll recommend the best approach for your business goals.",
    button: "Book Free Consultation"
  }
};
