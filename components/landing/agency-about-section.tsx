import { Terminal, Code2, Zap, Rocket } from "lucide-react";

export function AgencyAboutSection() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-8">
            Built by developers, <br />
            <span className="text-primary italic">not just designers.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Many businesses struggle with agencies that deliver slow, bloated, or poorly engineered websites. 
              <span className="text-foreground font-semibold"> WHYN is different.</span> We are a technical partner focused on delivering clean architecture, high performance, and thoughtful product design.
            </p>
            <p>
              From custom web apps and SaaS platforms to AI-enabled tools, we work closely with founders to take ideas from concept to production-ready software. No buzzwords, just fast execution and quality software you can rely on.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Code2 className="w-5 h-5 text-primary" />
                <div className="font-semibold text-foreground">Clean Code</div>
              </div>
              <p className="text-sm text-muted-foreground">Clean engineering practices and developer-friendly maintainable architecture.</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-5 h-5 text-primary" />
                <div className="font-semibold text-foreground">Startup Speed</div>
              </div>
              <p className="text-sm text-muted-foreground">Fast iteration cycles helping startup founders ship products faster.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl -z-10" />
          <div className="bg-secondary/30 border border-border/50 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50 text-foreground">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-mono font-semibold text-lg">Our Stack</span>
            </div>
            <ul className="space-y-6 font-mono text-sm text-muted-foreground">
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="uppercase tracking-wider text-xs opacity-70">Frontend</span> 
                <span className="text-foreground">Next.js / React / Tailwind</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="uppercase tracking-wider text-xs opacity-70">Backend</span> 
                <span className="text-foreground">Node.js / Java Spring Boot</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="uppercase tracking-wider text-xs opacity-70">Data</span> 
                <span className="text-foreground">PostgreSQL / Kafka</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="uppercase tracking-wider text-xs opacity-70">Infrastructure</span> 
                <span className="text-foreground">Docker / Kubernetes</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="uppercase tracking-wider text-xs opacity-70">Intelligence</span> 
                <span className="text-foreground">LLMs / RAG / Embeddings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
