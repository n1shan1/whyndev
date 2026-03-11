import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ABOUT_PAGE } from "./constants";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6">
            {ABOUT_PAGE.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {ABOUT_PAGE.hero.description}
          </p>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-border/50">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {ABOUT_PAGE.profiles.map((profile, index) => (
            <div key={index} className="flex flex-col group">
              {/* Image Placeholder */}
              <div className="w-[240px] aspect-square bg-secondary/30 rounded-2xl mb-8 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-6xl font-display text-foreground/10 group-hover:scale-110 transition-transform duration-700">
                    {profile.avatarText}
                 </div>
              </div>

              <div className="mb-6">
                <h2 className="text-4xl font-display mb-2">{profile.name}</h2>
                <div className="font-mono text-sm text-primary mb-6">
                  {profile.role}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {profile.bio}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div>
                  <div className="text-foreground font-medium mb-1">Experience</div>
                  <div className="text-muted-foreground">{profile.experience}</div>
                </div>
                <div>
                  <div className="text-foreground font-medium mb-1">Location</div>
                  <div className="text-muted-foreground">{profile.location}</div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {profile.expertise.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-secondary rounded-md text-xs font-mono text-foreground/80 transition-colors group-hover:bg-foreground/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-border/50">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-12">
          <span className="w-8 h-px bg-foreground/30" />
          Our Values
        </span>
        <div className="grid md:grid-cols-3 gap-12">
          {ABOUT_PAGE.values.map((val, i) => (
            <div key={i} className="space-y-4">
              <div className="text-2xl font-display">{val.title}</div>
              <div className="text-muted-foreground leading-relaxed text-lg">{val.description}</div>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
