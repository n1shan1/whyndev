"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShinyButton } from "@/components/landing/shiny-button";

import { PROJECTS_DATA as projectsData, CATEGORIES as categories, PORTFOLIO_PAGE } from "./constants";

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
          {PORTFOLIO_PAGE.header.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {PORTFOLIO_PAGE.header.subtitle}
        </p>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-12 mb-12 max-w-[1400px] mx-auto flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`px-6 py-2 rounded-full font-mono text-sm transition-all ${activeCategory === cat
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
                className="relative aspect-video rounded-2xl bg-secondary/30 border border-border/50 mb-6 overflow-hidden flex items-center justify-center animate-char-in group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex flex-col items-center justify-center p-8 text-center">
                    <span className="font-display text-3xl opacity-20">{project.title}</span>
                  </div>
                )}

                <div className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
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
          <h2 className="text-3xl lg:text-5xl font-display mb-6">{PORTFOLIO_PAGE.bottomCta.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {PORTFOLIO_PAGE.bottomCta.subtitle}
          </p>
          <div className="inline-block">
            <ShinyButton href="/contact" className="bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base rounded-full shadow-lg border-foreground ring-foreground">
              {PORTFOLIO_PAGE.bottomCta.button}
            </ShinyButton>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
