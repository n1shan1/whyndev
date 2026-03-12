import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-[780px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
            >
              &larr; Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-display tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-foreground/80 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-foreground/80 [&_a]:transition-colors">
            {children}
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
