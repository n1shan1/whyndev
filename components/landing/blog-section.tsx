"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "../../app/blog/constants";
import { ShinyButton } from "./shiny-button";

export function BlogSection() {
  const latestPosts = BLOG_POSTS.slice(0, 4);

  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Insights & Engineering
              </span>
              <div className="w-12 h-px bg-foreground/10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground">
              Thoughts on the modern web.
            </h2>
          </div>
          
          <div className="shrink-0">
             {/* The user didn't want it anchored in navbar, so we just provide a link here to perhaps a future /blog index page, or just keep it contained here */}
             <div className="hidden sm:inline-flex items-center justify-center h-12 px-6 rounded-full bg-secondary text-foreground text-sm font-medium border border-border/50 opacity-70 pointer-events-none">
                 <BookOpen className="w-4 h-4 mr-2" />
                 10 Articles Available
             </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestPosts.map((post, idx) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="group bg-card border border-border/50 rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-sm relative overflow-hidden h-[380px]"
            >
              {/* Subtle hover background sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                   <span className="inline-block px-2.5 py-1 rounded-md border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono uppercase tracking-widest">
                     {post.category}
                   </span>
                   <span className="text-xs font-mono text-muted-foreground">
                     {post.readTime}
                   </span>
                </div>
                
                <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-3 mb-4">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 flex items-center justify-between border-t border-border/50">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                   {post.author}
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Additional Articles List */}
        <div className="mt-12 bg-secondary/10 border border-border/50 rounded-3xl p-6 lg:p-8">
          <h3 className="text-lg font-display mb-6">More articles</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
             {BLOG_POSTS.slice(4).map((post) => (
               <Link href={`/blog/${post.slug}`} key={post.slug} className="group py-2 border-b border-border/30 last:border-0 sm:last:border-b flex flex-col gap-1">
                 <span className="text-sm text-foreground/80 font-medium group-hover:text-primary transition-colors line-clamp-1">{post.title}</span>
                 <span className="text-xs text-muted-foreground font-mono">{post.date}</span>
               </Link>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
