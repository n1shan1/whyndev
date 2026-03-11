"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "OpenAI",
];

const stats = [
  { value: "50+", label: "Projects" },
  { value: "7.5M+", label: "Users" },
  { value: "10 yrs", label: "Experience" },
  { value: "30+", label: "Clients" },
];

const features = [
  { 
    title: "Full Stack", 
    description: "Next.js, React, Node.js - modern web development."
  },
  { 
    title: "AI Focused", 
    description: "Expert in integrating AI into web applications."
  },
  { 
    title: "Performance", 
    description: "PageSpeed 100, optimized for conversions."
  },
  { 
    title: "Quality First", 
    description: "Clean code and exceptional user experiences."
  },
];

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export function DevelopersSection() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(techStack.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Full Stack / AI Engineer
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              John Doe.
              <br />
              <span className="text-muted-foreground">The mind behind whyn.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Crafting robust, scalable, and intelligent web applications. Expert in merging modern UI/UX with AI architectures to deliver conversion-focused solutions.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Stats and Tech Stack */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`border border-foreground/10 p-6 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="text-4xl lg:text-5xl font-display mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="border border-foreground/10">
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <h3 className="font-mono text-sm font-medium">Tech Stack</h3>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy tech stack"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              {/* Stack items */}
              <div className="p-8 bg-foreground/[0.01]">
                <div className="space-y-3">
                  {techStack.map((tech, idx) => (
                    <div
                      key={tech}
                      className="dev-code-line flex items-center gap-2 text-foreground/80"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <span className="text-muted-foreground">→</span>
                      <span className="font-mono text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="/contact" className="text-foreground hover:underline underline-offset-4">
                Let&apos;s work together
              </a>
              <span className="text-foreground/20">|</span>
              <a href="mailto:hello@whyn.dev" className="text-muted-foreground hover:text-foreground">
                hello@whyn.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
