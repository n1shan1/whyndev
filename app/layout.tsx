import React from "react"
import type { Metadata } from 'next'
import { Poppins, Lora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SmoothScroll } from "@/components/landing/smooth-scroll"
import { AmbientCursorGlow } from "@/components/landing/ambient-cursor-glow"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins'
});

const lora = Lora({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-lora'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),

  title: {
    default: "WHYN — AI Powered Websites That Drive Business Growth",
    template: "%s | WHYN",
  },

  description:
    "WHYN builds high-performance websites and AI-powered digital platforms designed to increase leads, conversions, and business growth.",

  keywords: [
    "web development agency",
    "AI websites",
    "high converting websites",
    "Next.js development",
    "startup websites",
    "business website development",
  ],

  authors: [{ name: "WHYN Studio" }],

  openGraph: {
    title: "WHYN — AI Powered Websites That Drive Business Growth",
    description:
      "High-performance websites engineered to convert visitors into customers.",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    siteName: "WHYN",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WHYN — AI Powered Websites",
    description:
      "We build high-converting websites and AI-powered platforms for modern businesses.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
}

import { ContactDock } from "@/components/landing/contact-dock"
import { Toaster } from "sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${lora.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <SmoothScroll>
          <AmbientCursorGlow />
          <ContactDock />
          {children}
          <Toaster richColors position="top-right" />
        </SmoothScroll>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
