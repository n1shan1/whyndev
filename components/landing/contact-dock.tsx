"use client";

import { useEffect, useState } from "react";
import { Mail, Calendar, Github, Twitter, MessageCircle, Linkedin, X, Instagram } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DOCK_ITEMS = [
  {
    icon: Calendar,
    label: "Book a Call",
    href: "https://cal.com/niishantdev/30min",
    color: "group-hover:text-red-500",
  },
  {
    icon: Mail,
    label: "Email Us",
    href: "mailto:connect.nishantdev@gmail.com",
    color: "group-hover:text-amber-500",
  },

  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/whyn.dev",
    color: "group-hover:text-yellow-500",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/n1shan1",
    color: "group-hover:text-foreground",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    href: "https://x.com/n1sh_an1",
    color: "group-hover:text-sky-500",
  },
  {
    icon: Linkedin,
    label: "Linkedin",
    href: "https://linkedin.com/in/nishantdev",
    color: "group-hover:text-blue-500",
  },
];

export function ContactDock() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn(
      "fixed z-50 flex items-center gap-4 pointer-events-none transition-all duration-500",
      isMobile
        ? "bottom-6 left-1/2 -translate-x-1/2 flex-row w-auto"
        : "right-6 top-1/2 -translate-y-1/2 flex-col"
    )}>
      <div className={cn(
        `p-3 bg-secondary/40 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-xl'} border border-border/50 shadow-2xl rounded-full flex items-center gap-3 pointer-events-auto`,
        isMobile ? "flex-row px-4" : "flex-col py-4"
      )}>
        {DOCK_ITEMS.map((item, idx) => {
          let scale = 1;
          let offset = 0;

          if (hoveredIdx !== null) {
            const distance = Math.abs(hoveredIdx - idx);
            if (distance === 0) {
              scale = 1.3;
            } else if (distance === 1) {
              scale = 1.15;
              offset = hoveredIdx > idx ? -4 : 4;
            } else if (distance === 2) {
              scale = 1.05;
              offset = hoveredIdx > idx ? -2 : 2;
            }
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group relative flex items-center justify-center transition-all duration-300 ease-out"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                transform: `scale(${scale}) ${isMobile ? `translateX(${offset}px)` : `translateY(${offset}px)`}`,
                width: isMobile ? "40px" : "48px",
                height: isMobile ? "40px" : "48px",
                zIndex: hoveredIdx === idx ? 10 : 1,
              }}
            >
              {/* Tooltip */}
              <span className={cn(
                "absolute px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none",
                isMobile
                  ? "bottom-full mb-4 left-1/2 -translate-x-1/2 origin-bottom translate-y-2 group-hover:translate-y-0"
                  : "right-full mr-4 top-1/2 -translate-y-1/2 origin-right -translate-x-2 group-hover:translate-x-0"
              )}>
                {item.label}
              </span>

              {/* Bubble Background */}
              <div className="absolute inset-0 bg-background/80 rounded-full border border-border/50 shadow-sm opacity-100 transition-all duration-300 group-hover:bg-background group-hover:shadow-md group-hover:border-border" />

              {/* Icon */}
              <item.icon className={cn("relative z-10 w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground transition-colors duration-300", item.color)} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
