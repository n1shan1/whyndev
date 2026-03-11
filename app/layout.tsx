import React from "react"
import type { Metadata } from 'next'
import { Poppins, Lora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
  title: 'whyn.dev - Web Design & AI Integration',
  description: 'We build what makes your business grow. Premium web design, AI-powered solutions, and custom software for modern brands.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
