import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Logic Clutch - Enterprise Software Solutions & Consulting",
  description:
    "Leading provider of Salesforce consulting, custom development, and enterprise software solutions. Transform your business with our expert team.",
  keywords: "Salesforce consulting, custom development, enterprise software, business transformation, Logic Clutch",
  authors: [{ name: "Logic Clutch" }],
  creator: "Logic Clutch",
  publisher: "Logic Clutch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://logicclutch.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Logic Clutch - Enterprise Software Solutions & Consulting",
    description:
      "Leading provider of Salesforce consulting, custom development, and enterprise software solutions. Transform your business with our expert team.",
    url: "https://logicclutch.com",
    siteName: "Logic Clutch",
    images: [
      {
        url: "/images/og-image-logic-clutch.png",
        width: 1200,
        height: 630,
        alt: "Logic Clutch - Enterprise Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logic Clutch - Enterprise Software Solutions & Consulting",
    description:
      "Leading provider of Salesforce consulting, custom development, and enterprise software solutions. Transform your business with our expert team.",
    images: ["/images/og-image-logic-clutch.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  )
}
