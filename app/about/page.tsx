"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Users, Lightbulb } from "lucide-react";

const stats = [
  { value: "92+", label: "Projects Completed" },
  { value: "7.5M+", label: "Users Reached" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24h", label: "Avg Response Time" },
];

const values = [
  {
    icon: Star,
    title: "Quality First",
    description: "We deliver exceptional code and design that stands the test of time.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Quick turnaround without compromising on quality or attention to detail.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your success is our success. We invest in understanding your goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We use cutting-edge technologies and best practices in our industry.",
  },
];

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl lg:text-7xl font-display tracking-tight">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const storyView = useInView();
  const valuesView = useInView();
  const founderView = useInView();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-44 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              About Us
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-[8rem] font-display leading-[0.9] tracking-tight mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            About Whyn.
          </h1>

          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The mind and vision behind whyn.dev
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative border-y border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-background p-8 lg:p-12 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <AnimatedCounter
                  end={parseFloat(stat.value.replace(/[^0-9.]/g, ""))}
                  suffix={stat.value.replace(/[0-9.]/g, "")}
                />
                <div className="mt-3 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 lg:py-32">
        <div ref={storyView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Content */}
            <div
              className={`transition-all duration-700 ${
                storyView.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                Our Story
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-10">
                Where vision
                <br />
                <span className="text-stroke">meets craft.</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Whyn was founded with the belief that great design and technology can transform
                  businesses. We combine strategic thinking with creative excellence to craft digital
                  solutions that truly matter.
                </p>
                <p>
                  Our mission is to be your trusted partner in digital innovation. We work closely
                  with our clients to understand their vision and deliver results that exceed
                  expectations. Every project is an opportunity to create something extraordinary.
                </p>
                <p>
                  Whether you&apos;re a startup establishing your brand or an established company ready for
                  innovation — we&apos;re here to help you succeed.
                </p>
              </div>
            </div>

            {/* Right: Stat cards */}
            <div
              className={`grid grid-cols-2 gap-6 self-center transition-all duration-700 delay-200 ${
                storyView.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`border border-foreground/10 p-6 hover:border-foreground/30 transition-all duration-500 group ${
                    storyView.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="text-3xl lg:text-4xl font-display mb-2 group-hover:translate-x-1 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
        {/* Diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                currentColor 40px,
                currentColor 41px
              )`,
            }}
          />
        </div>

        <div ref={valuesView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16 lg:mb-24">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
              <span className="w-8 h-px bg-background/30" />
              Our Values
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                valuesView.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              These principles guide
              <br />
              <span className="text-background/50">everything we do.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`transition-all duration-500 group ${
                  valuesView.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 border border-background/20 flex items-center justify-center mb-6 group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display mb-3 group-hover:translate-x-1 transition-transform">
                  {value.title}
                </h3>
                <p className="text-background/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-24 lg:py-32">
        <div ref={founderView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Visual */}
            <div
              className={`transition-all duration-700 ${
                founderView.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="border border-foreground/10 p-12 lg:p-16">
                {/* Portrait placeholder */}
                <div className="aspect-square bg-foreground/[0.02] border border-foreground/10 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <div className="text-8xl font-display text-foreground/10 mb-2">K</div>
                    <div className="text-sm font-mono text-foreground/20">Kerim Bilin</div>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "7.5M+", label: "Users Impacted" },
                    { value: "92+", label: "Projects" },
                    { value: "19", label: "Years Old" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-display">{stat.value}</div>
                      <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div
              className={`transition-all duration-700 delay-200 ${
                founderView.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                The Founder
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
                One mind,
                <br />
                clear vision.
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
                <p>
                  I&apos;m Kerim Bilin — the sole mind behind Whyn. No big team, no unnecessary
                  meetings, no wasted hours. As a young developer with innovative thinking, I work
                  efficiently, with quality, and fast.
                </p>
                <p>
                  I manage and execute everything myself to deliver the best result. No 500 hours of
                  work for things that simply need to work. I&apos;m the best partner you&apos;ll find when it
                  comes to excellence and getting things done.
                </p>
              </div>

              <a href="/contact">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background px-10 h-14 text-base rounded-full group"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Ready to collaborate?
          </span>
          <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-6 max-w-3xl mx-auto">
            Let&apos;s create something
            <br />
            <span className="text-stroke">extraordinary.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Let&apos;s discuss your project and create something extraordinary together.
          </p>
          <a href="/contact">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-10 h-14 text-base rounded-full group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
