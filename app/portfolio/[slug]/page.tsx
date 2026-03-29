import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/landing/shiny-button";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA as projectsData, PORTFOLIO_PAGE } from "../constants";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find(p => p.slug === resolvedParams.slug);

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
              {project.website && (
                <a
                  href={`${project.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-secondary/30 hover:bg-secondary transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">{PORTFOLIO_PAGE.projects.liveSite}</span>
                    <span className="font-medium">{project.website}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </a>
              )}
              <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-secondary/30">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">{PORTFOLIO_PAGE.projects.techStack}</span>
                  <span className="font-medium">{project.technologies.length} {PORTFOLIO_PAGE.projects.coreTools}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Image Box */}
        <div className="aspect-video rounded-3xl bg-secondary/30 border border-border/50 overflow-hidden relative group">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-background/50 backdrop-blur-sm">
              <div className="animate-pulse flex items-center gap-4 text-muted-foreground opacity-50">
                <div className="w-4 h-4 rounded-full bg-accent" />
                <span className="font-mono text-sm">{PORTFOLIO_PAGE.projects.visualPresentation}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Split */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">{PORTFOLIO_PAGE.projects.client}</h4>
                <p className="text-lg font-medium">{project.client}</p>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div>
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">{PORTFOLIO_PAGE.projects.timeline}</h4>
                <p className="text-lg font-medium">{project.date}</p>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div>
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">{PORTFOLIO_PAGE.projects.technologies}</h4>
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
              <h3 className="text-2xl font-display mb-4">{PORTFOLIO_PAGE.projects.interestedTitle}</h3>
              <p className="text-background/70 mb-8">{PORTFOLIO_PAGE.projects.interestedDesc}</p>
              <Button
                asChild
                className="w-full bg-background hover:bg-background/90 text-foreground h-12"
              >
                <Link href="/contact">
                  {PORTFOLIO_PAGE.projects.contactUs}
                </Link>
              </Button>
            </div>
          </div>

          {/* Main Story */}
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="text-3xl font-display mb-6">{PORTFOLIO_PAGE.projects.challenge}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-display mb-6">{PORTFOLIO_PAGE.projects.solution}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.solution}
              </p>
              <div className="bg-secondary/20 border border-border/50 rounded-xl p-6 sm:p-8">
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">{PORTFOLIO_PAGE.projects.implementations}</h4>
                <ul className="space-y-4">
                  {PORTFOLIO_PAGE.projects.implementationList.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                      <span className="text-foreground/90 leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display mb-6">{PORTFOLIO_PAGE.projects.result}</h2>
              <p className="text-lg font-medium leading-relaxed p-6 sm:p-8 border-l-4 border-accent bg-accent/5 rounded-r-xl">
                {project.results}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="bg-secondary/40 border border-border/50 rounded-[40px] p-12 lg:p-24 text-center relative overflow-hidden backdrop-blur-sm shadow-sm group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/20 transition-colors duration-1000 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 group-hover:bg-accent/15 transition-colors duration-1000 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-7xl font-display tracking-tight text-foreground mb-8">
              {PORTFOLIO_PAGE.projectDetailsCta.title}
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              {PORTFOLIO_PAGE.projectDetailsCta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <ShinyButton href="/contact" className="bg-foreground text-background hover:bg-foreground/90 h-14 px-10 text-lg rounded-full shadow-lg border-foreground ring-foreground">
                {PORTFOLIO_PAGE.projectDetailsCta.button}
              </ShinyButton>
            </div>
            <p className="mt-12 text-sm font-mono text-muted-foreground/60 uppercase tracking-widest">
              {PORTFOLIO_PAGE.projectDetailsCta.footer}
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
