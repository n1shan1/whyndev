import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-background noise-overlay flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Visual Element */}
          <div className="relative mb-12 inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <h1 className="relative text-[120px] lg:text-[180px] font-display font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/20">
              404
            </h1>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-display mb-6 tracking-tight">
            Lost in the digital void
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <Link href="/" passHref legacyBehavior>
            <Button size="lg" className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105 active:scale-95">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
