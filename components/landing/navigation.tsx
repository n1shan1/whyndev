"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "./constants";
import { ShinyButton } from "@/components/landing/shiny-button";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Use IntersectionObserver instead of scroll events for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Sentinel element to detect scroll position */}
      <div ref={sentinelRef} className="h-1" aria-hidden="true" />
      
      <header
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled 
            ? "top-4 left-4 right-4" 
            : "top-0 left-0 right-0"
        }`}
      >
        <nav 
          aria-label="Main"
          className={`relative z-50 mx-auto transition-all duration-500 ${
            isScrolled || isMobileMenuOpen
              ? `bg-background/80 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-2xl'} border border-foreground/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-[900px] mt-4 rounded-full`
              : "bg-transparent max-w-[1400px]"
          }`}
        >
          <div 
            className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
              isScrolled ? "h-16" : "h-24"
            }`}
          >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className={`font-display tracking-tight transition-all duration-500 font-bold ${isScrolled ? "text-xl" : "text-2xl"}`}>
              {NAVIGATION.logo}<span className="text-primary ">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {NAVIGATION.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm px-4 py-2 rounded-full transition-all duration-300 relative group overflow-hidden ${
                    isActive 
                      ? "text-foreground font-medium" 
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-foreground/5 rounded-full -z-10" />
                  )}
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ShinyButton
              href="/contact"
              className={`rounded-full shadow-lg ${isScrolled ? "h-9 px-5 py-1 text-xs" : "h-11 px-7 py-2 text-sm"}`}
            >
              {NAVIGATION.cta}
            </ShinyButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 relative z-[60] cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay - Only renders when menu is open */}
      {isMobileMenuOpen && (
      <div
        role="dialog"
        aria-label="Main menu"
        aria-hidden={!isMobileMenuOpen}
        className="md:hidden fixed inset-0 bg-background z-30 pointer-events-auto overflow-y-auto"
        style={{ top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <div className="flex flex-col min-h-screen px-6 pt-24 pb-8 bg-background">
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center gap-8">
            {NAVIGATION.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-display font-bold text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Bottom CTAs */}
          <div className="flex flex-col gap-4 pt-8 border-t border-foreground/10">
            <ShinyButton href="/contact" className="w-full h-14 text-base rounded-lg flex items-center justify-center">
              {NAVIGATION.cta}
            </ShinyButton>
          </div>
        </div>
      </div>
      )}
    </header>
    </>
  );
}
