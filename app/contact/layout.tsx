import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project with WHYN. Book a consultation and build a high-performing website for your business.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact` },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
