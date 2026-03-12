import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web development, design, and digital growth from the WHYN studio. Tips, guides, and industry analysis for modern businesses.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog` },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
