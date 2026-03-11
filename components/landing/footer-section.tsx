"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "AI Conversion Websites", href: "/services#ai-conversion" },
    { name: "Lead Capture Systems", href: "/services#ai-leads" },
    { name: "Chat Sales Assistants", href: "/services#ai-chat" },
    { name: "Web App Development", href: "/services#saas" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Support", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "hello@whyn.dev", href: "mailto:hello@whyn.dev" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-border/50 pt-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col">
        {/* Massive Logo Lockup */}
        <div className="w-full flex justify-center items-center overflow-hidden mb-16 border-b border-border/50 pb-16">
          <h2 className="text-[clamp(6rem,20vw,24rem)] font-display text-foreground leading-none tracking-tighter select-none">
            whyn.
          </h2>
        </div>

        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">whyn.dev</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Premium web design and digital innovation for modern brands. We build what makes your business grow.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
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
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && (link as any).badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
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
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Whyn. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
