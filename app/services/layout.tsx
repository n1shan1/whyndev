import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "Custom websites, e-commerce platforms, and AI-powered digital solutions built for business growth. Explore WHYN's full range of web development services.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/services` },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
