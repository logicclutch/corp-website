import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { clientLogos } from "@/lib/data"

export default function ClientsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Proven Experience
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Team of Senior Executives & Developers Has Worked With
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our experienced team members have successfully delivered transformative technology solutions while working
            with leading organizations across diverse industries. From global navigation leaders to financial services
            giants, we bring proven expertise from our collective experience.
          </p>
        </div>

        {/* Client Logos Grid - Updated to accommodate more logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 items-center justify-items-center mb-16">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="group relative transition-all duration-300 hover:scale-110 cursor-pointer"
              title={`Our team delivered solutions for ${client.name} - ${client.industry}`}
            >
              <div className="relative h-12 w-24 md:h-16 md:w-32 grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.alt}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>

              {/* Hover tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                <div className="font-semibold">Delivered for {client.name}</div>
                <div className="text-gray-300">{client.industry}</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Client Delivery Stories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clientLogos.slice(0, 3).map((client, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-24 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.alt}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{client.name}</h3>
                    <p className="text-sm text-primary">{client.industry}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our senior team members contributed to delivering innovative solutions for{" "}
                  {client.description.toLowerCase()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Experience Stats - Updated numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">65+</div>
            <div className="text-sm text-muted-foreground">Organizations Delivered For</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground">Industries Experienced</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">300+</div>
            <div className="text-sm text-muted-foreground">Solutions Delivered</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Years Combined Experience</div>
          </div>
        </div>

        {/* Industries Our Team Has Delivered In - Updated with new industries */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-4">Industries Our Team Has Delivered Solutions In</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our senior executives and developers bring hands-on experience from working with leading companies across
            these sectors
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Navigation & Mapping",
              "IT Services & Consulting",
              "Technology Hardware",
              "Smart Parking Solutions",
              "Digital Consulting & Services",
              "Identity & Access Management",
              "Financial Services",
              "Consulting & Technology Services",
              "Wealth Management Technology",
              "IT Consulting & Services",
              "Enterprise Software Solutions",
              "Hospitality & Events",
              "Digital Experience Solutions",
              "Customer Experience Technology",
              "Strategic Technology Consulting",
              "Manufacturing",
              "Healthcare",
              "E-commerce & Retail",
              "Automotive",
              "Smart Cities",
              "Enterprise Technology",
            ].map((industry, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1">
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        {/* Team Expertise Highlight */}
        <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Why Our Experience Matters</h3>
          <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
            <div>
              <div className="font-semibold text-foreground mb-2">Global Enterprise Experience</div>
              <p>
                Our executives have held key positions at Fortune 500 companies like Western Union, Capgemini, and Sopra
                Steria, bringing enterprise-level insights to every project.
              </p>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-2">Hands-On Development</div>
              <p>
                Our developers have architected and built solutions for global brands including TomTom, TCS, Kingston
                Technology, and SQLI Digital Experience, ensuring technical excellence and scalability.
              </p>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-2">Industry Deep Dive</div>
              <p>
                Having worked across 20+ industries from financial services to hospitality, we understand unique
                challenges and deliver tailored solutions that work across diverse business contexts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
