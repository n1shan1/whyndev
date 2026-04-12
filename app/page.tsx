import dynamic from "next/dynamic";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { AgencyAboutSection } from "@/components/landing/agency-about-section";

const FeaturesSection = dynamic(
  () => import("@/components/landing/features-section").then((module) => module.FeaturesSection),
  { loading: () => <SectionPlaceholder height="52rem" /> },
)

const TestimonialsSection = dynamic(
  () => import("@/components/landing/testimonials-section").then((module) => module.TestimonialsSection),
  { loading: () => <SectionPlaceholder height="38rem" /> },
)

const IntegrationsSection = dynamic(
  () => import("@/components/landing/integrations-section").then((module) => module.IntegrationsSection),
  { loading: () => <SectionPlaceholder height="34rem" /> },
)

const SecuritySection = dynamic(
  () => import("@/components/landing/security-section").then((module) => module.SecuritySection),
  { loading: () => <SectionPlaceholder height="44rem" /> },
)

const PricingSection = dynamic(
  () => import("@/components/landing/pricing-section").then((module) => module.PricingSection),
  { loading: () => <SectionPlaceholder height="38rem" /> },
)

const DevelopersSection = dynamic(
  () => import("@/components/landing/developers-section").then((module) => module.DevelopersSection),
  { loading: () => <SectionPlaceholder height="44rem" /> },
)

const BlogSection = dynamic(
  () => import("@/components/landing/blog-section").then((module) => module.BlogSection),
  { loading: () => <SectionPlaceholder height="42rem" /> },
)

const CtaSection = dynamic(
  () => import("@/components/landing/cta-section").then((module) => module.CtaSection),
  { loading: () => <SectionPlaceholder height="24rem" /> },
)

const FooterSection = dynamic(
  () => import("@/components/landing/footer-section").then((module) => module.FooterSection),
  { loading: () => <SectionPlaceholder height="24rem" /> },
)

function SectionPlaceholder({ height }: { height: string }) {
  return <div aria-hidden="true" className="border-t border-foreground/10" style={{ minHeight: height }} />;
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hook */}
      <HeroSection />

      {/* The Problem & Our Approach */}
      <AgencyAboutSection />

      {/* The Solution */}
      <FeaturesSection />

      {/* Social Proof & Impact */}
      {/* <MetricsSection /> */}
      <TestimonialsSection />

      {/* The Engine & Trust */}
      <IntegrationsSection />
      <SecuritySection />

      {/* The Offer */}
      <PricingSection />

      {/* SEO & Insights */}
      <DevelopersSection />
      <BlogSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
