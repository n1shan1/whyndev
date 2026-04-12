"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DEVELOPERS_SECTION } from "./constants";

const team = DEVELOPERS_SECTION.team;

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developers" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              {DEVELOPERS_SECTION.eyebrow}
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              {DEVELOPERS_SECTION.headline[0]}
              <br />
              <span className="text-muted-foreground">{DEVELOPERS_SECTION.headline[1]}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {DEVELOPERS_SECTION.description}
            </p>

            {/* Team */}
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {team.map((developer, index) => (
                <Link
                  key={developer.name}
                  href={developer.aboutLink}
                  className={`group block bg-card rounded-[24px] p-6 border border-border/50 hover:border-primary/40 transition-all duration-500 shadow-sm ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-secondary border border-border/50 ring-4 ring-transparent group-hover:ring-primary/10 transition-all">
                      <Image
                        src={developer.image}
                        alt={developer.name}
                        width={80}
                        height={80}
                        sizes="80px"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">{developer.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{developer.role}</p>
                      <div className="mt-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-semibold text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        {developer.experience}
                      </div>
                    </div>
                    <div className="mt-2 text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 duration-300">
                      Read Story <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: The WHYN Guarantee */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="bg-card w-full h-[600px] border border-border/50 rounded-3xl p-2 lg:p-4 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
              <iframe
                src="https://cal.com/niishantdev/30min"
                className="w-full h-full border-0 rounded-2xl bg-transparent"
                title="Book a consultation with WHYN"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
