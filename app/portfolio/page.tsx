"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const projectsData = [
  {
    slug: "propvex-capital",
    title: "Propvex Capital",
    category: "Finance",
    description: "Investment and capital management. Professional financial platform with an elegant design.",
    client: "Propvex Capital",
    date: "January 2026",
    website: "propvex.capital",
    technologies: ["Next.js", "Tailwind CSS", "Financial Design", "SEO"],
    challenge: "Creating a trustworthy digital presence that appeals to high-net-worth individuals while securely handling sensitive financial data presentations.",
    solution: "We engineered a robust platform using Next.js with a sharp focus on typography, refined color schemes, and seamless user journeys. Everything from the layout to the micro-interactions reflects the premium nature of the firm.",
    results: "Increased inbound high-value leads by 45% in the first quarter, establishing Propvex as a modern authority in the finance space.",
  },
  {
    slug: "steakclub-ny",
    title: "Steakclub New York",
    category: "Gastronomie",
    description: "High-end Dining Branding. Sophisticated visual identity for exclusive dining.",
    client: "Steakclub NY",
    date: "December 2025",
    website: "steakclub.nyc",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    challenge: "Translating the physical luxury of a high-end NY steakhouse into a digital format that drives exclusive reservations.",
    solution: "A highly visual, immersive website featuring smooth scroll animations, dark mode elegance, and a seamless reservation system integration.",
    results: "Bookings increased by 30%, with mobile reservations seeing a massive 60% bump due to the optimized UI/UX.",
  },
  {
    slug: "chauffeur-munchen",
    title: "Chauffeur München",
    category: "Transport",
    description: "Luxury Transport UI/UX. Elegant booking ecosystem for premium transportation.",
    client: "Chauffeur München",
    date: "November 2025",
    website: "chauffeur-muc.de",
    technologies: ["React", "Next.js", "Stripe Integration", "Google Maps API"],
    challenge: "Building a complex booking system with real-time availability and dynamic pricing while keeping the frontend interface extremely simple and luxurious.",
    solution: "We integrated a customized Google Maps distance matrix and Stripe checkout into a beautifully minimal, native-feeling progressive web app.",
    results: "Reduced booking drop-off rate by 22% and automated 90% of previously manual scheduling tasks.",
  },
  {
    slug: "car-company",
    title: "Car Company",
    category: "Automotive",
    description: "Digitalization of a used car dealership with modern web presence.",
    client: "Car Company GMBH",
    date: "October 2025",
    website: "carcompany.de",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    challenge: "Modernizing a legacy business with large, frequently changing inventory. Creating a fast, searchable platform.",
    solution: "A headless architectural approach using Supabase for inventory management, allowing lightning-fast filtering and instant vehicle detail pages.",
    results: "Inventory views skyrocketed by 300%. The dealership now processes 40% of their initial sales inquiries entirely online.",
  },
  {
    slug: "moussa-export",
    title: "Moussa Export",
    category: "Trade",
    description: "Import & Export platform for international trade and logistics.",
    client: "Moussa Export LTD",
    date: "August 2025",
    website: "moussa-export.com",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    challenge: "Managing international logistic tracking data in a visually comprehensible format for global enterprise clients.",
    solution: "Developed a custom dashboard application that unifies various tracking APIs into a single, clean interface with localized support.",
    results: "Client support tickets dropped by 70% as clients could independently track and manage their trades in real-time.",
  },
  {
    slug: "kose-autolackiererei",
    title: "Köse Autolackiererei",
    category: "Automotive",
    description: "Professional auto paint services website with portfolio showcase.",
    client: "Köse AG",
    date: "July 2025",
    website: "koese-lack.de",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    challenge: "Showcasing high-detail visual work (auto paint finishes) without compromising on website load speeds.",
    solution: "Implemented an advanced image optimization pipeline with Next.js Image component and lazy-loading galleries.",
    results: "Achieved a 100/100 Lighthouse performance score while delivering 4K resolution images of their work.",
  },
];

const categories = ["All", "Finance", "Gastronomie", "Transport", "Automotive", "Trade"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <main className="relative min-h-screen noise-overlay">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-40 lg:pt-48 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-display tracking-tight text-foreground mb-6">
          Our Work.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A collection of premium digital experiences, web apps, and AI integrations.
        </p>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-12 mb-12 max-w-[1400px] mx-auto flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-mono text-sm transition-all ${
              activeCategory === cat 
              ? "bg-foreground text-background shadow-md" 
              : "bg-secondary/50 text-foreground/70 hover:bg-secondary border border-border/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {filteredProjects.map((project, i) => (
            <Link 
              href={`/portfolio/${project.slug}`} 
              key={project.slug}
              className="group block"
            >
              <div 
                className="relative aspect-[4/3] rounded-2xl bg-secondary/30 border border-border/50 mb-6 overflow-hidden flex items-center justify-center animate-char-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Temporary placeholder since we don't have real images yet */}
                <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex flex-col items-center justify-center p-8 text-center group-hover:scale-105 transition-transform duration-700">
                  <span className="font-display text-3xl opacity-20 group-hover:opacity-40 transition-opacity">{project.title}</span>
                </div>
                
                <div className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>
              
              <div className="flex gap-3 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-accent">{project.category}</span>
                <span className="text-xs font-mono text-muted-foreground">— {project.date}</span>
              </div>
              
              <h3 className="text-2xl font-display mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted-foreground line-clamp-2">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto text-center">
         <div className="bg-secondary/40 border border-border/50 rounded-3xl p-12 lg:p-20 relative overflow-hidden backdrop-blur-sm">
            <h2 className="text-3xl lg:text-5xl font-display mb-6">Like what you see?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's create something amazing together.
            </p>
            <Link href="/contact" passHref legacyBehavior>
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group cursor-pointer inline-flex items-center">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
         </div>
      </section>

      <FooterSection />
    </main>
  );
}
