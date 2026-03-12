"use client";

import { ArrowUpRight } from "lucide-react";
import { FOOTER_SECTION } from "./constants";

const footerLinks = FOOTER_SECTION.footerLinks;
const socialLinks = FOOTER_SECTION.socialLinks;

export function FooterSection() {
  return (
    <footer className="relative pt-24 mt-20 overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-foreground/0 to-foreground/0" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col relative z-10">
        {/* Massive Logo Lockup */}
        <div className="w-full flex justify-center items-center overflow-hidden mb-16 border-b border-background/20 pb-16">
          <p aria-hidden="true" className="text-[clamp(6rem,20vw,24rem)] font-display text-background leading-none tracking-tighter select-none">
            {FOOTER_SECTION.logo}
          </p>
        </div>

        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">{FOOTER_SECTION.brandName}</span>
              </a>

              <p className="text-background/60 leading-relaxed mb-8 max-w-xs">
                {FOOTER_SECTION.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/60 hover:text-background transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6 text-background/90">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-background/60 hover:text-background transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && (link as any).badge && (
                          <span className="text-xs px-2 py-0.5 bg-background text-foreground rounded-full">
                            {(link as any).badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            {FOOTER_SECTION.copyright}
          </p>

          <div className="flex items-center gap-4 text-sm text-background/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {FOOTER_SECTION.statusLink}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
