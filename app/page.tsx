import HeroSection from "@/components/sections/hero-section"
import ServicesOverview from "@/components/sections/services-overview"
import ProductsOverview from "@/components/sections/products-overview"
import CaseStudiesPreview from "@/components/sections/case-studies-preview"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ClientsSection from "@/components/sections/clients-section"
import ComplianceLogos from "@/components/sections/compliance-logos"
import CTASection from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ProductsOverview />
      <CaseStudiesPreview />
      <TestimonialsSection />
      <ClientsSection />
      <ComplianceLogos />
      <CTASection />
    </>
  )
}
