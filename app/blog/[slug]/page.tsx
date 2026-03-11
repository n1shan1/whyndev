import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowLeft, Calendar,  User } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "../constants";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: `${post.title} | WHYN Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-background noise-overlay flex flex-col">
      <Navigation />
      
      <div className="flex-1 pt-32 lg:pt-40 pb-24 px-6 lg:px-12 max-w-[900px] mx-auto w-full">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-foreground mb-12 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Home
        </Link>
        
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-foreground mb-6 leading-[1.1]">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-mono pb-8 border-b border-border/50">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <div className="text-xl text-foreground/80 leading-relaxed font-medium mb-10 italic border-l-2 border-primary/50 pl-6">
            {post.excerpt}
          </div>
          
          <div className="text-muted-foreground leading-relaxed mt-10 whitespace-pre-wrap">
            {post.content}
          </div>
        </article>
      </div>

      <FooterSection />
    </main>
  );
}
