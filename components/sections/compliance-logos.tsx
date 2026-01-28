import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    name: "ISO 27001",
    logo: "/images/logo-iso-27001.png",
    description: "Information Security Management",
  },
  {
    name: "SOC 2",
    logo: "/images/logo-soc-2.png",
    description: "Security & Availability",
  },
  {
    name: "GDPR",
    logo: "/images/logo-gdpr.png",
    description: "Data Protection Compliance",
  },
]

const partnerships = [
  {
    name: "Salesforce Partner",
    logo: "/images/logo-salesforce-partner.png",
    description: "Certified Implementation Partner",
  },
  {
    name: "Informatica Partner",
    logo: "/images/logo-informatica-partner.png",
    description: "MDM Solutions Expert",
  },
  {
    name: "Microsoft Startup",
    logo: "/images/microsoft-startup-badge.jpeg",
    description: "Microsoft for Startups Program",
  },
  {
    name: "NVIDIA Inception",
    logo: "/images/nvidia-inception-badge.png",
    description: "AI Technology Partner",
  },
]

export default function ComplianceLogos() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Certified</span> & Compliant
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We maintain the highest standards of security, compliance, and partnership certifications to ensure your
            business data and operations are protected.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Security & Compliance</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={`${cert.name} certification`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
                <Badge variant="outline" className="border-sky-200 text-sky-700">
                  Certified
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Technology Partnerships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} partnership`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{partner.name}</h4>
                  <p className="text-xs text-muted-foreground">{partner.description}</p>
                </div>
                <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">Partner</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Trust statement */}
        <div className="text-center mt-16 p-8 bg-sky-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Your Data Security is Our Priority</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We implement enterprise-grade security measures and maintain strict compliance standards to protect your
            sensitive business information and ensure regulatory adherence.
          </p>
        </div>
      </div>
    </section>
  )
}
