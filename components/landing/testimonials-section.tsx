"use client";

import { Star } from "lucide-react";

import { TESTIMONIALS_SECTION } from "./constants";

const testimonials = TESTIMONIALS_SECTION.testimonials;

export function TestimonialsSection() {
  return (
    <section className="relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header & Google Reviews Widget */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {TESTIMONIALS_SECTION.eyebrow}
              </span>
              <div className="w-12 h-px bg-foreground/10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground">
              Don't just take our word for it.
            </h2>
          </div>

          {/* Google Reviews Integration Placeholder */}
          <a href={TESTIMONIALS_SECTION.googleReviewWidget.embedLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-secondary/30 border border-border/50 px-6 py-4 rounded-2xl hover:bg-secondary/50 transition-colors group cursor-pointer shrink-0">
            <div className="bg-white p-2 rounded-full shrink-0 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base font-bold text-foreground">{TESTIMONIALS_SECTION.googleReviewWidget.status}</span>
                <span className="flex items-center text-sm font-bold text-foreground gap-1">
                  {TESTIMONIALS_SECTION.googleReviewWidget.rating}
                  <Star className="w-3.5 h-3.5 fill-[#FABB05] text-[#FABB05]" />
                </span>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">{TESTIMONIALS_SECTION.googleReviewWidget.label}</p>
            </div>
          </a>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative flex flex-col gap-6 overflow-hidden w-[100vw] ml-[calc(50%-50vw)] px-6 lg:px-12 pb-4">
          {/* Dark gradient blur edges for smooth entry/exit */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="flex gap-6 w-max marquee hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, setIdx) => (
              <div key={`row1-${setIdx}`} className="flex gap-6 shrink-0">
                {testimonials.map((testimonial, idx) => (
                  <div key={`row1-${setIdx}-${idx}`} className="w-[350px] md:w-[420px] bg-card border border-border/50 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/30 transition-colors shadow-sm shrink-0">
                    <div>
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#FABB05] text-[#FABB05]" />
                        ))}
                      </div>
                      <blockquote className="mb-8">
                        <p className="text-xl text-foreground font-medium leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                    </div>
                    
                    <div>
                      <div className="mb-6 p-4 bg-secondary/30 rounded-2xl border border-border/50">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground block mb-1">
                          {TESTIMONIALS_SECTION.keyResult}
                        </span>
                        <span className="font-display text-lg text-foreground">
                          {testimonial.metric}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 ring-1 ring-border/50">
                          <span className="font-display text-xl text-foreground">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2 - Slightly offset and running opposite if supported, but just offsetting the start is fine */}
          <div className="flex gap-6 w-max marquee hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
            {[...Array(4)].map((_, setIdx) => (
              <div key={`row2-${setIdx}`} className="flex gap-6 shrink-0">
                {[...testimonials].reverse().map((testimonial, idx) => (
                  <div key={`row2-${setIdx}-${idx}`} className="w-[350px] md:w-[420px] bg-card border border-border/50 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/30 transition-colors shadow-sm shrink-0">
                    <div>
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#FABB05] text-[#FABB05]" />
                        ))}
                      </div>
                      <blockquote className="mb-8">
                        <p className="text-xl text-foreground font-medium leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                    </div>
                    
                    <div>
                      <div className="mb-6 p-4 bg-secondary/30 rounded-2xl border border-border/50">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground block mb-1">
                          {TESTIMONIALS_SECTION.keyResult}
                        </span>
                        <span className="font-display text-lg text-foreground">
                          {testimonial.metric}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 ring-1 ring-border/50">
                          <span className="font-display text-xl text-foreground">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos Marquee Label */}
        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            {TESTIMONIALS_SECTION.marqueeLabel}
          </p>
        </div>
      </div>
      
      {/* Full-width marquee outside container */}
      <div className="w-full">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {TESTIMONIALS_SECTION.companies.map((company) => (
                  <span
                    key={`${setIdx}-${company}`}
                    className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
