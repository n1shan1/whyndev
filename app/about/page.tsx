import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { Copy, Plus, MoreHorizontal, Link as LinkIcon, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      
      {/* Instagram Profile Container */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        
        {/* Profile Header Block */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-12">
          
          {/* Avatar (Left) */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary to-accent">
              <div className="w-full h-full rounded-full border-4 border-background overflow-hidden relative bg-secondary">
                {/* Founder Avatar */}
                <div className="absolute inset-0 flex items-center justify-center text-5xl font-display text-primary bg-background">
                  N.
                </div>
              </div>
            </div>
          </div>

          {/* Info (Right) */}
          <div className="flex-1 w-full flex flex-col pt-2">
            
            {/* Username & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
              <h1 className="text-3xl font-semibold flex items-center gap-2 tracking-tight">
                nishant.dev
                <CheckCircle2 className="w-6 h-6 text-primary fill-primary/20" />
              </h1>
              
              <div className="flex items-center gap-2 mb-4 md:mb-0 w-full sm:w-auto">
                <Button className="bg-foreground text-background hover:bg-foreground/90 h-9 px-6 rounded-lg font-semibold w-full sm:w-auto">
                  Hire WHYN
                </Button>
                <Button variant="secondary" className="bg-secondary hover:bg-secondary/80 text-foreground h-9 px-6 rounded-lg font-semibold w-full sm:w-auto">
                  Connect
                </Button>
                <Button variant="secondary" size="icon" className="bg-secondary hover:bg-secondary/80 h-9 w-9 rounded-lg shrink-0">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-6 text-base">
              <div className="flex flex-col md:flex-row md:items-center gap-1">
                <span className="font-semibold text-foreground">Next.js</span>
                <span className="text-foreground/80">expert</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-1">
                <span className="font-semibold text-foreground">Java</span>
                <span className="text-foreground/80">backends</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-1">
                <span className="font-semibold text-foreground">100%</span>
                <span className="text-foreground/80">clean code</span>
              </div>
            </div>

            {/* Bio */}
            <div className="text-[15px] space-y-1">
              <p className="font-semibold text-lg">Nishant Dev (Founder, WHYN)</p>
              <p className="text-foreground/80 font-mono text-sm mb-2">Software Engineer @ DTCC | Ex-Nokia</p>
              <p className="whitespace-pre-line leading-relaxed max-w-lg">
                {"Building "}<span className="font-bold">WHYN</span>{", a developer-led studio for startups building serious apps.\n\n"}
                {"We don't do slow, bloated agency websites. We build fast, scalable, production-ready software using React, Node.js, Spring Boot, and Kafka.\n\n"}
                {"Real products. Clean architecture. No buzzwords."}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4 mb-3 text-foreground/80 text-sm">
                <span className="bg-secondary px-2 py-1 rounded-md">TypeScript</span>
                <span className="bg-secondary px-2 py-1 rounded-md">Java</span>
                <span className="bg-secondary px-2 py-1 rounded-md">Kafka</span>
                <span className="bg-secondary px-2 py-1 rounded-md">LLMs / AI</span>
              </div>
              <div className="flex items-center gap-1 mb-2 text-foreground/80 pt-2">
                <MapPin className="w-4 h-4" />
                <span>Global Engineering Partner</span>
              </div>
              <Link href="https://whyn.dev" className="flex items-center gap-1 text-primary font-semibold hover:underline mt-1 w-fit">
                <LinkIcon className="w-4 h-4" />
                whyn.dev/build-with-us
              </Link>
            </div>

          </div>
        </div>

        {/* Highlights Row */}
        <div className="flex gap-4 md:gap-8 overflow-x-auto pb-8 mb-4 scrollbar-hide px-2">
          {[
            { name: "SaaS", bg: "bg-secondary" },
            { name: "Backends", bg: "bg-primary/20" },
            { name: "Dashboards", bg: "bg-accent/20" },
            { name: "AI Tools", bg: "bg-secondary" },
            { name: "Infrastructure", bg: "bg-primary/30" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border p-1">
                <div className={`w-full h-full rounded-full border border-border/50 ${item.bg} group-hover:opacity-80 transition-opacity flex items-center justify-center`}>
                   <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-mono text-center leading-tight">{item.name}</span>
                </div>
              </div>
            </div>
          ))}

        {/* Feed Tabs */}
        <div className="border-t border-border flex justify-center gap-12 text-xs font-semibold uppercase tracking-widest text-muted-foreground pt-4 mb-4">
          <div className="flex items-center gap-2 text-foreground border-t border-foreground -mt-[17px] pt-4 cursor-pointer">
            <svg aria-label="" className="w-3 h-3 fill-current" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
            Posts
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors pt-4 -mt-[17px]">
            <svg aria-label="" className="w-3 h-3 fill-current" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
            Saved
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors pt-4 -mt-[17px]">
            <svg aria-label="" className="w-3 h-3 fill-current" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
            Tagged
          </div>
        </div>

        {/* 3x3 Grid Feed */}
        <div className="grid grid-cols-3 gap-1 md:gap-4 mt-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-secondary relative group cursor-pointer overflow-hidden rounded-sm md:rounded-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
              {/* Optional top-right icon */}
              {i % 3 === 0 && (
                 <Copy className="absolute top-2 right-2 w-4 h-4 text-white drop-shadow-md z-10" />
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 z-20">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <span>❤️</span> {Math.floor(Math.random() * 500) + 100}
                </div>
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <span>💬</span> {Math.floor(Math.random() * 50) + 5}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      <FooterSection />
    </main>
  );
}
