"use client";

import { useEffect } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen bg-background noise-overlay flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="w-24 h-24 bg-red-500/10 text-red-500 rounded-3xl mx-auto flex items-center justify-center border border-red-500/20">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-display tracking-tight text-foreground">
              Something went wrong
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              An unexpected error occurred. Our team has been notified and is looking into it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => reset()} 
              className="h-12 px-8 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium"
            >
              <RefreshCcw className="mr-2 w-4 h-4" />
              Try again
            </Button>
            <Button 
              onClick={() => window.location.href = "/"}
              variant="outline"
              className="h-12 px-8 rounded-xl bg-secondary/50 hover:bg-secondary font-medium border-border/50 text-foreground"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go home
            </Button>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
