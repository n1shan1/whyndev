import { AGENCY_ABOUT_SECTION } from "./constants";

export function AgencyAboutSection() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto text-center lg:text-justify">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-8">
          {AGENCY_ABOUT_SECTION.headline.main} <br />
          <span className="text-primary italic">{AGENCY_ABOUT_SECTION.headline.highlight}</span>
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            {AGENCY_ABOUT_SECTION.paragraphs[0]}
          </p>
          <p>
            {AGENCY_ABOUT_SECTION.paragraphs[1]}
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 w-full text-left">
          {AGENCY_ABOUT_SECTION.features.map((feature, i) => (
            <div key={i} className="bg-secondary/10 border border-border/50 p-6 lg:p-8 rounded-3xl hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center mb-6 ring-1 ring-border/50">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
