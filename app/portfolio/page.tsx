"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Finance", "Gastronomie", "Transport", "Automotive", "Trade"];

const projects = [
  {
    title: "Propvex Capital",
    category: "Finance",
    slug: "propvex-capital",
    description: "Investment and capital management. Professional financial platform with an elegant design.",
    client: "Propvex Capital",
    date: "January 2026",
    website: "propvex.capital",
    technologies: ["Next.js", "Tailwind CSS", "Financial Design", "SEO"],
    challenge:
      "Propvex Capital needed a sophisticated digital platform that would convey trust and professionalism to high-net-worth investors while simplifying complex financial information into an accessible interface.",
    solution:
      "We designed and developed a premium financial platform with elegant data visualization, intuitive investment dashboards, and a seamless onboarding flow. The design language emphasizes trust, clarity, and sophistication.",
    results:
      "The platform launched successfully, attracting significant investor interest within the first quarter. User engagement metrics exceeded expectations with a 40% increase in time-on-site.",
    features: ["Interactive investment dashboards", "Secure document portal", "Real-time market data integration", "Investor onboarding flow"],
  },
  {
    title: "Steakclub New York",
    category: "Gastronomie",
    slug: "steakclub-ny",
    description: "High-end Dining Branding. Sophisticated visual identity for exclusive dining.",
    client: "Steakclub New York",
    date: "December 2025",
    website: "steakclub.nyc",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    challenge:
      "Steakclub needed a digital presence that matched the exclusivity and sophistication of their high-end dining experience in New York City.",
    solution:
      "We crafted a visually stunning brand identity and website that captures the essence of luxury dining. Rich photography, elegant typography, and subtle animations create an immersive digital experience.",
    results:
      "Online reservations increased by 65% within two months of launch. The website became a key driver for brand awareness among the target demographic.",
    features: ["Online reservation system", "Dynamic menu showcase", "Event booking integration", "Brand storytelling"],
  },
  {
    title: "Chauffeur München",
    category: "Transport",
    slug: "chauffeur-munchen",
    description: "Luxury Transport UI/UX. Elegant booking ecosystem for premium transportation.",
    client: "Chauffeur München",
    date: "November 2025",
    website: "chauffeur-munchen.de",
    technologies: ["React", "Next.js", "Stripe Integration", "Google Maps API"],
    challenge:
      "The client required a seamless booking platform that reflected the luxury and reliability of their premium chauffeur service in Munich.",
    solution:
      "We built an elegant booking ecosystem with real-time availability, route planning via Google Maps, and integrated Stripe payments. The UI emphasizes simplicity and speed for time-conscious clientele.",
    results:
      "Bookings through the new platform increased by 120% compared to the previous system. Customer satisfaction scores rose to 4.9/5.",
    features: ["Real-time booking system", "Route visualization", "Secure payment processing", "Fleet management dashboard"],
  },
  {
    title: "Car Company",
    category: "Automotive",
    slug: "car-company",
    description: "Digitalization of a used car dealership with modern web presence.",
    client: "Car Company",
    date: "October 2025",
    website: "carcompany.de",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    challenge:
      "A traditional used car dealership needed to modernize their digital presence and create an online showroom to compete with larger digital-first competitors.",
    solution:
      "We developed a full-stack platform with an intuitive vehicle inventory system, advanced search and filtering, and a modern design that builds trust with potential buyers.",
    results:
      "Online leads increased by 180% in the first three months. The dealership reported a significant reduction in time-to-sale for listed vehicles.",
    features: ["Vehicle inventory management", "Advanced search filters", "Lead capture forms", "Image gallery system"],
  },
  {
    title: "Moussa Export",
    category: "Trade",
    slug: "moussa-export",
    description: "Import & Export platform for international trade and logistics.",
    client: "Moussa Export",
    date: "September 2025",
    website: "moussaexport.com",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    challenge:
      "Moussa Export needed a comprehensive digital platform to manage their international trade operations and provide transparency to their global client base.",
    solution:
      "We built a custom web application with real-time shipment tracking, document management, and client portals. The platform streamlines communication between all parties in the supply chain.",
    results:
      "Operational efficiency improved by 35%. Client satisfaction increased significantly due to real-time visibility into shipment status.",
    features: ["Shipment tracking dashboard", "Document management system", "Client portal access", "Multi-currency support"],
  },
  {
    title: "Köse Autolackiererei",
    category: "Automotive",
    slug: "kose-autolackiererei",
    description: "Professional auto paint services website with portfolio showcase.",
    client: "Köse Autolackiererei",
    date: "August 2025",
    website: "kose-lack.de",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    challenge:
      "The auto paint shop needed a professional website that would showcase their craftsmanship and attract both individual and commercial clients.",
    solution:
      "We designed a visually rich website with an interactive portfolio gallery, before/after comparisons, and a streamlined quote request system. The design emphasizes quality and attention to detail.",
    results:
      "Website inquiries increased by 90%. The portfolio showcase became the primary driver for new business leads.",
    features: ["Portfolio gallery with before/after", "Online quote request", "Service catalog", "Google Maps integration"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Link href={`/portfolio/${project.slug}`}>
        <div
          className="group relative border border-foreground/10 hover:border-foreground/30 transition-all duration-500 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image placeholder */}
          <div className="relative aspect-[4/3] bg-foreground/[0.02] overflow-hidden">
            {/* Abstract visual based on category */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`transition-all duration-700 ${
                  isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                }`}
              >
                <svg
                  viewBox="0 0 200 150"
                  className="w-48 h-36 text-foreground/10"
                >
                  <rect
                    x="20"
                    y="15"
                    width="160"
                    height="120"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="45"
                    x2="180"
                    y2="45"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx="35"
                    cy="30"
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx="50"
                    cy="30"
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx="65"
                    cy="30"
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  {/* Content lines */}
                  {[0, 1, 2, 3].map((i) => (
                    <rect
                      key={i}
                      x="35"
                      y={60 + i * 18}
                      width={120 - i * 20}
                      height="8"
                      rx="1"
                      fill="currentColor"
                      opacity={0.3 - i * 0.05}
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-foreground/5 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 text-foreground font-mono text-sm">
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                {project.category}
              </span>
              <ArrowUpRight
                className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${
                  isHovered ? "translate-x-0.5 -translate-y-0.5 text-foreground" : ""
                }`}
              />
            </div>
            <h3 className="text-xl font-display mb-2 group-hover:translate-x-1 transition-transform duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-1 border border-foreground/10 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs font-mono px-2 py-1 text-muted-foreground">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-44 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Selected Work
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-[8rem] font-display leading-[0.9] tracking-tight mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Work.
          </h1>

          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A collection of premium digital experiences, web apps, and AI integrations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative pb-12 lg:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "border border-foreground/10 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-mono">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
                Like what you see?
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
                Let&apos;s create something
                <br />
                <span className="text-stroke">amazing together.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 lg:justify-end">
              <a href="/contact">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background px-10 h-14 text-base rounded-full group"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                >
                  View Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

// Export projects data for use in detail page
export { projects };
