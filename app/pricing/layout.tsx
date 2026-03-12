import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for custom web development. Choose a plan that fits your business — from landing pages to full-scale platforms.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing` },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
