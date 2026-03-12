import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A portfolio of modern web platforms and AI-powered applications built by WHYN. See our work across e-commerce, SaaS, and business websites.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio` },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
