"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ExternalLink, Check } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const projects: Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    client: string;
    date: string;
    website: string;
    technologies: string[];
    challenge: string;
    solution: string;
    results: string;
    features: string[];
  }
> = {
  "propvex-capital": {
    title: "Propvex Capital",
    category: "Finance",
    description:
      "Investment and capital management. Professional financial platform with an elegant design.",
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
    features: [
      "Interactive investment dashboards",
      "Secure document portal",
      "Real-time market data integration",
      "Investor onboarding flow",
    ],
  },
  "steakclub-ny": {
    title: "Steakclub New York",
    category: "Gastronomie",
    description:
      "High-end Dining Branding. Sophisticated visual identity for exclusive dining.",
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
    features: [
      "Online reservation system",
      "Dynamic menu showcase",
      "Event booking integration",
      "Brand storytelling",
    ],
  },
  "chauffeur-munchen": {
    title: "Chauffeur München",
    category: "Transport",
    description:
      "Luxury Transport UI/UX. Elegant booking ecosystem for premium transportation.",
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
    features: [
      "Real-time booking system",
      "Route visualization",
      "Secure payment processing",
      "Fleet management dashboard",
    ],
  },
  "car-company": {
    title: "Car Company",
    category: "Automotive",
    description:
      "Digitalization of a used car dealership with modern web presence.",
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
    features: [
      "Vehicle inventory management",
      "Advanced search filters",
      "Lead capture forms",
      "Image gallery system",
    ],
  },
  "moussa-export": {
    title: "Moussa Export",
    category: "Trade",
    description:
      "Import & Export platform for international trade and logistics.",
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
    features: [
      "Shipment tracking dashboard",
      "Document management system",
      "Client portal access",
      "Multi-currency support",
    ],
  },
  "kose-autolackiererei": {
    title: "Köse Autolackiererei",
    category: "Automotive",
    description:
      "Professional auto paint services website with portfolio showcase.",
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
    features: [
      "Portfolio gallery with before/after",
      "Online quote request",
      "Service catalog",
      "Google Maps integration",
    ],
  },
};

const allSlugs = Object.keys(projects);

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!project) {
    notFound();
  }

  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-44 pb-16 lg:pb-20 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Back link */}
          <Link
            href="/portfolio"
            className={`inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main info */}
            <div className="lg:col-span-8">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                  {project.category}
                </span>
              </div>

              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-display leading-[0.9] tracking-tight mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {project.title}
              </h1>

              <p
                className={`text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {project.description}
              </p>
            </div>

            {/* Meta sidebar */}
            <div
              className={`lg:col-span-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Client
                  </span>
                  <span className="text-foreground">{project.client}</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Date
                  </span>
                  <span className="text-foreground">{project.date}</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Website
                  </span>
                  <span className="text-foreground inline-flex items-center gap-1">
                    {project.website}
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </span>
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1.5 border border-foreground/10 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Visual / Mockup */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="border border-foreground/10 bg-foreground/[0.02] aspect-[16/9] flex items-center justify-center">
            {/* Laptop mockup placeholder */}
            <div className="w-full max-w-3xl px-8">
              <div className="border border-foreground/10 rounded-t-lg overflow-hidden">
                {/* Browser chrome */}
                <div className="h-8 bg-foreground/[0.03] border-b border-foreground/10 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                  <div className="flex-1 mx-8">
                    <div className="h-4 bg-foreground/[0.05] rounded-full max-w-xs mx-auto" />
                  </div>
                </div>
                {/* Screen content placeholder */}
                <div className="aspect-[16/10] bg-foreground/[0.01] flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-6xl font-display text-foreground/10 mb-4">
                      {project.title.charAt(0)}
                    </div>
                    <div className="text-sm font-mono text-foreground/20">{project.website}</div>
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="h-4 bg-foreground/[0.03] border-x border-b border-foreground/10 rounded-b-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Challenge / Solution / Results */}
      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* The Challenge */}
            <div className="lg:col-span-6 border border-foreground/10 p-8 lg:p-12">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
                The Challenge
              </span>
              <p className="text-lg text-foreground/80 leading-relaxed">{project.challenge}</p>
            </div>

            {/* Our Solution */}
            <div className="lg:col-span-6 border border-foreground/10 p-8 lg:p-12">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
                Our Solution
              </span>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">{project.solution}</p>

              {/* Features */}
              <div className="space-y-3">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Result - full width */}
            <div className="lg:col-span-12 border border-foreground/10 p-8 lg:p-12 bg-foreground/[0.02]">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
                The Result
              </span>
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed max-w-3xl font-display">
                {project.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="relative border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2">
            {/* Previous */}
            <div className="py-12 pr-8 border-r border-foreground/10">
              {prevSlug ? (
                <Link
                  href={`/portfolio/${prevSlug}`}
                  className="group block"
                >
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Previous
                  </span>
                  <span className="text-xl font-display group-hover:-translate-x-1 inline-block transition-transform">
                    ← {projects[prevSlug].title}
                  </span>
                </Link>
              ) : (
                <div className="text-muted-foreground/30 font-mono text-xs">No previous project</div>
              )}
            </div>

            {/* Next */}
            <div className="py-12 pl-8 text-right">
              {nextSlug ? (
                <Link
                  href={`/portfolio/${nextSlug}`}
                  className="group block"
                >
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Next
                  </span>
                  <span className="text-xl font-display group-hover:translate-x-1 inline-block transition-transform">
                    {projects[nextSlug].title} →
                  </span>
                </Link>
              ) : (
                <div className="text-muted-foreground/30 font-mono text-xs">No next project</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 lg:py-28 bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-4">
            Ready for your project?
          </h2>
          <p className="text-background/60 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s get started together. Send me an inquiry and receive a response within 12 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-background hover:bg-background/90 text-foreground px-10 h-14 text-base rounded-full group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          <p className="text-background/40 text-sm font-mono mt-8">
            whyn agency — Web Design & Software Development — Available for new projects
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
