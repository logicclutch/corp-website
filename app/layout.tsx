
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Master Data Management",
    "Salesforce CRM",
    "Enterprise Technology",
    "Data Analytics",
    "Custom Development",
    "IT Consulting",
    "Resource Augmentation",
    "AI Analytics",
  ],
  authors: [
    {
      name: "Logic Clutch",
      url: siteConfig.url,
    },
  ],
  creator: "Logic Clutch",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@logicclutch",
  },
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.favicon,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppChat
              phoneNumber="+919929790897"
              businessName="Logic Clutch"
              welcomeMessage="Hi! 👋 How can we help you with your technology needs today?"
              position="bottom-right"
            />
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-QYGN7G70SM" />
      </body>
    </html>
  )
}
