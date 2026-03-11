import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { projectsData } from "../page"; // Reusing the hardcoded data to simulate DB
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="relative min-h-screen noise-overlay">
      <Navigation />
      
      {/* Spacer */}
      <div className="h-32 lg:h-40" />

      {/* Bento Grid Header */}
      <section className="px-6 lg:px-12 pb-16 max-w-[1400px] mx-auto">
        <div className="bg-background rounded-3xl border border-border/50 p-8 lg:p-12 mb-8 shadow-sm relative overflow-hidden">
          {/* subtle bg decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent font-mono text-sm mb-6">
                {project.category}
              </span>
              <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-4 min-w-[200px]">
              <a 
                href={`https://${project.website}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-secondary/30 hover:bg-secondary transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Live Site</span>
                  <span className="font-medium">{project.website}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-accent" />
              </a>
              <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-secondary/30">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Tech Stack</span>
                  <span className="font-medium">{project.technologies.length} core tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Mockup Box */}
        <div className="aspect-[16/9] lg:aspect-[21/9] rounded-3xl bg-secondary/30 border border-border/50 overflow-hidden flex flex-col items-center justify-center p-8">
            {/* Real laptop mockups wouldn't look great as raw CSS, so we just use a massive hero-like abstract graphic */}
            <div className="w-full h-full max-w-4xl bg-background rounded-t-2xl border-t-8 border-x-8 border-foreground/10 shadow-2xl flex items-center justify-center">
                <div className="animate-pulse flex items-center gap-4 text-muted-foreground opacity-50">
                  <div className="w-4 h-4 rounded-full bg-accent" />
                  <span className="font-mono text-sm">Visual Presentation Area</span>
                </div>
            </div>
            <div className="w-full max-w-5xl h-4 bg-foreground/10 rounded-b-xl" />
        </div>
      </section>

      {/* Main Content Split */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Client</h4>
                <p className="text-lg font-medium">{project.client}</p>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div>
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Timeline</h4>
                <p className="text-lg font-medium">{project.date}</p>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div>
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-foreground text-background rounded-2xl p-8 mt-12 shadow-xl">
              <h3 className="text-2xl font-display mb-4">Interested?</h3>
              <p className="text-background/70 mb-8">We can build a similar tailored solution for your exact business use case.</p>
              <Link href="/contact" passHref legacyBehavior>
                <Button className="w-full bg-background hover:bg-background/90 text-foreground h-12">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Story */}
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="text-3xl font-display mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-display mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.solution}
              </p>
              <div className="bg-secondary/20 border border-border/50 rounded-xl p-6 sm:p-8">
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">Key Implementations</h4>
                <ul className="space-y-4">
                  {[
                    "Architectural system design",
                    "Frontend UI/UX development",
                    "Backend infrastructure integration",
                    "Performance optimization phase"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                      <span className="text-foreground/90 leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display mb-6">The Result</h2>
              <p className="text-lg font-medium leading-relaxed p-6 sm:p-8 border-l-4 border-accent bg-accent/5 rounded-r-xl">
                {project.results}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="bg-foreground text-background rounded-[40px] p-12 lg:p-24 text-center">
          <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8">Ready for your project?</h2>
          <p className="text-xl lg:text-2xl text-background/60 max-w-2xl mx-auto mb-12">
            Let's get started together. Send me an inquiry and receive a response within 12 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" passHref legacyBehavior>
              <Button size="lg" className="bg-background hover:bg-background/90 text-foreground px-10 h-16 text-lg rounded-full group cursor-pointer">
                PROJEKT STARTEN
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <p className="mt-12 text-sm font-mono text-background/40">
            whyn agency — Web Design & Software Development — Available for new projects
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
