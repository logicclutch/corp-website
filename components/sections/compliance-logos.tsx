import Image from "next/image"
import Link from "next/link"
import { complianceLogos } from "@/lib/data"

export default function ComplianceLogos() {
  return (
    <section className="py-16 md:py-24 bg-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">Trusted Partnerships & Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to be part of leading technology partner programs that enable us to deliver cutting-edge
            solutions to our clients.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {complianceLogos.map((logo, index) => (
            <Link
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-16 w-32 md:h-20 md:w-40 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
