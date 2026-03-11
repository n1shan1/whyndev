"use client";

import { useEffect, useState } from "react";
import { Mail, Calendar, Github, Twitter, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DOCK_ITEMS = [
  {
    icon: Calendar,
    label: "Book a Call",
    href: "https://cal.com/nishantdev/30min",
    color: "group-hover:text-blue-500",
  },
  {
    icon: Mail,
    label: "Email Us",
    href: "mailto:hello@whyn.dev",
    color: "group-hover:text-emerald-500",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "group-hover:text-foreground",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    href: "https://twitter.com",
    color: "group-hover:text-sky-500",
  },
];

export function ContactDock() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 pointer-events-none">
      <div className="p-3 bg-secondary/40 backdrop-blur-xl border border-border/50 shadow-2xl rounded-full flex flex-col items-center gap-3 pointer-events-auto">
        {DOCK_ITEMS.map((item, idx) => {
          // Calculate magnification based on distance from hovered item
          let scale = 1;
          let yOffset = 0;
          
          if (hoveredIdx !== null) {
            const distance = Math.abs(hoveredIdx - idx);
            if (distance === 0) {
              scale = 1.3;
            } else if (distance === 1) {
              scale = 1.15;
              yOffset = hoveredIdx > idx ? -4 : 4;
            } else if (distance === 2) {
              scale = 1.05;
              yOffset = hoveredIdx > idx ? -2 : 2;
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
                transform: `scale(${scale}) translateY(${yOffset}px)`,
                width: "48px",
                height: "48px",
                zIndex: hoveredIdx === idx ? 10 : 1,
              }}
            >
              {/* Tooltip */}
              <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none origin-right">
                {item.label}
              </span>

              {/* Bubble Background */}
              <div className="absolute inset-0 bg-background/80 rounded-full border border-border/50 shadow-sm opacity-100 transition-all duration-300 group-hover:bg-background group-hover:shadow-md group-hover:border-border" />
              
              {/* Icon */}
              <item.icon className={cn("relative z-10 w-5 h-5 text-muted-foreground transition-colors duration-300", item.color)} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
