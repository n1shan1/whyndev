import { ShoppingCart, Search, Globe, LayoutTemplate } from "lucide-react";

export const SERVICES = [
  {
    id: "landing-page",
    title: "Landing Page Development",
    tagline: "High-converting, single-page websites.",
    description:
      "We build sleek, focused landing pages designed to capture leads and drive sales.",
    icon: Globe,
    features: [
      "Custom responsive design",
      "Lead capture & contact forms",
      "Lightning-fast load performance",
      "Mobile-first optimized layout",
      "Basic SEO setup",
      "Secure hosting & SSL certificate"
    ],
    process: ["01 Planning", "02 Content", "03 Design", "04 Launch"],
    outcomes: [
      "Higher conversion rates",
      "Clean user experience",
      "Fast, SEO-friendly site"
    ],
    price: "From $800"
  },
  {
    id: "multi-page",
    title: "Multi-Page Websites",
    tagline: "Full-featured corporate websites.",
    description:
      "Comprehensive multi-page sites (about, services, contact, blog) that establish your brand’s online presence.",
    icon: LayoutTemplate,
    features: [
      "Up to 10 custom pages",
      "WordPress (or headless) CMS integration",
      "Responsive, SEO-friendly design",
      "Contact & booking forms",
      "Blog/news integration",
      "Secure hosting & updates"
    ],
    process: ["01 Strategy", "02 Wireframes", "03 Development", "04 Testing"],
    outcomes: [
      "Professional brand image",
      "Scalable architecture",
      "Higher engagement & leads"
    ],
    price: "From $2,000"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Stores",
    tagline: "Online shops built to sell.",
    description:
      "Robust e-commerce platforms with custom catalogs, secure checkout, and optimized product pages.",
    icon: ShoppingCart,
    features: [
      "Secure payment gateway integration",
      "Custom product catalog & inventory",
      "Intuitive cart & checkout flow",
      "Order tracking dashboard",
      "Mobile-friendly shopping UX",
      "Advanced SEO & analytics integration"
    ],
    process: ["01 Planning", "02 Setup", "03 Integration", "04 Launch"],
    outcomes: [
      "Seamless checkout experience",
      "Higher average order value",
      "Secure, scalable transactions"
    ],
    price: "From $5,000"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    tagline: "Rank higher on search engines.",
    description:
      "Comprehensive SEO audits and strategies to improve your site’s visibility and attract quality traffic.",
    icon: Search,
    features: [
      "Technical SEO audit",
      "Keyword & content optimization",
      "Performance & Core Web Vitals",
      "Meta tags & schema markup",
      "Sitemap & robots.txt setup",
      "Local SEO & Google Business"
    ],
    process: ["01 Audit", "02 Optimization", "03 Monitoring", "04 Reporting"],
    outcomes: [
      "Increased organic traffic",
      "Better search rankings",
      "More qualified inbound leads"
    ],
    price: "From $800"
  }
];

export const SERVICES_PAGE = {
  header: {
    tag: "What We Build",
    title1: "Digital ",
    title2: "Growth ",
    title3: "Solutions",
    subtitle:
      "From optimized landing pages to comprehensive e-commerce platforms, we engineer websites that drive your business forward."
  },
  labels: {
    startingAt: "Starting At",
    coreFeatures: "Core Features",
    process: "Process",
    avgOutcomes: "Typical Outcomes"
  },
  bottomCta: {
    title: "Not sure which service fits?",
    subtitle:
      "Book a free consultation and we'll recommend the best approach for your business goals.",
    button: "Book Free Consultation"
  }
};

