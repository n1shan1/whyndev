"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, BLOG_PAGE } from "./constants";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPosts = selectedCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-44 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              {BLOG_PAGE.hero.tag}
            </span>
          </div>

          <h1
            className={cn(
              "text-5xl md:text-7xl lg:text-[8rem] font-display leading-[0.9] tracking-tight mb-8 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {BLOG_PAGE.hero.title}
          </h1>

          <p
            className={cn(
              "text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {BLOG_PAGE.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="relative pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4 border-b border-foreground/10 pb-8">
            {BLOG_PAGE.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative pb-24 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={cn(
                  "group relative flex flex-col transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-foreground/5 mb-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-mono uppercase tracking-widest rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-6 text-sm font-mono text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-display leading-tight mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-foreground font-medium group/btn">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-xl text-muted-foreground">No articles found in this category.</p>
              <Button 
                variant="ghost" 
                className="mt-6"
                onClick={() => setSelectedCategory("All")}
              >
                View all articles
              </Button>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
