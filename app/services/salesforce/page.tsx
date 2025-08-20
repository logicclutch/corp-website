import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Users, Zap, BarChart, CheckCircle } from "lucide-react"

export default function SalesforcePage() {
  const services = [
    {
      icon: Cloud,
      title: "Sales Cloud",
      description: "Streamline your sales process with intelligent lead management and opportunity tracking",
    },
    {
      icon: Users,
      title: "Service Cloud",
      description: "Deliver exceptional customer service with case management and knowledge base solutions",
    },
    {
      icon: Zap,
      title: "Marketing Cloud",
      description: "Create personalized customer journeys with automated marketing campaigns",
    },
    {
      icon: BarChart,
      title: "Analytics Cloud",
      description: "Gain actionable insights with advanced reporting and AI-powered analytics",
    },
  ]

  const capabilities = [
    "Salesforce implementation and migration",
    "Custom object and field configuration",
    "Workflow automation and process builder",
    "Third-party system integrations",
    "Custom Lightning components development",
    "Data migration and cleansing",
    "User training and adoption support",
    "Ongoing support and optimization",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Salesforce CRM Solutions
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Unlock the Full Power of <span className="text-primary">Salesforce</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your customer relationships with expertly implemented Salesforce solutions. From Sales Cloud
                to Service Cloud, we help you maximize ROI and drive business growth through intelligent CRM automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start Your Salesforce Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/salesforce-consulting-new.png"
                alt="Salesforce consulting services by Logic Clutch - team collaboration and CRM implementation"
                width={600}
                height={400}
                className="object-contain w-full h-auto rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Complete Salesforce Cloud Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're implementing your first Salesforce org or optimizing an existing deployment, our certified
              experts deliver solutions that drive measurable business outcomes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">End-to-End Salesforce Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Our certified Salesforce consultants bring deep platform knowledge and industry best practices to every
                engagement. We don't just implement Salesforce – we ensure it drives real business value for your
                organization.
              </p>
              <div className="grid gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/salesforce-consulting-new.png"
                alt="Salesforce implementation and customization process by Logic Clutch"
                width={600}
                height={400}
                className="object-contain w-full h-auto rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Salesforce Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful Salesforce deployment and high user adoption rates.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understand business requirements and design optimal Salesforce architecture",
              },
              {
                step: "02",
                title: "Configuration & Development",
                description: "Build custom solutions with workflows, automations, and integrations",
              },
              {
                step: "03",
                title: "Testing & Training",
                description: "Comprehensive testing and user training for smooth adoption",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Go-live support and ongoing optimization for continuous improvement",
              },
            ].map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">{phase.step}</div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Transform Your CRM?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let our Salesforce-certified experts help you implement a CRM solution that drives sales productivity,
            improves customer satisfaction, and accelerates business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/case-studies">View Salesforce Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
