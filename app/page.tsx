export const runtime = "edge";

import HeroSection from "@/components/sections/hero-section"
import ServicesOverview from "@/components/sections/services-overview"
import ProductsOverview from "@/components/sections/products-overview"
import ClientsSection from "@/components/sections/clients-section"
import CaseStudiesPreview from "@/components/sections/case-studies-preview"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ComplianceLogos from "@/components/sections/compliance-logos"
import CTASection from "@/components/sections/cta-section"
import WhatsAppChat from "@/components/whatsapp-chat"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <ProductsOverview />
      <ClientsSection />
      <CaseStudiesPreview />
      <TestimonialsSection />
      <ComplianceLogos />
      <CTASection />
      <WhatsAppChat />
    </main>
  )
}
