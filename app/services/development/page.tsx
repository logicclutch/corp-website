export const runtime = "edge";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Globe, Database, CheckCircle } from "lucide-react"

export default function DevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications built with React, Next.js, and cloud-native technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable APIs and microservices architecture with Node.js, Python, and cloud platforms",
    },
    {
      icon: Code,
      title: "Custom Integrations",
      description: "Seamless system integrations and API development for enterprise applications",
    },
  ]

  const technologies = [
    "React & Next.js for modern web applications",
    "Node.js & Python for backend development",
    "React Native & Flutter for mobile apps",
    "AWS, Azure, and GCP cloud platforms",
    "PostgreSQL, MongoDB, and Redis databases",
    "Docker & Kubernetes for containerization",
    "CI/CD pipelines and DevOps practices",
    "Agile development methodologies",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                On-Demand Development
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Scale Your Development with <span className="text-primary">Expert Teams</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Access elastic teams of senior engineers who integrate seamlessly with your existing processes. From web
                applications to mobile apps, we deliver high-quality code that accelerates your product roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Build Your Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/on-demand-development-hero.png"
                alt="Software development team collaboration and coding"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Full-Stack Development Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced development teams work across the entire technology stack to deliver robust, scalable
              solutions that meet your business objectives.
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

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Modern Technology Stack</h2>
              <p className="text-lg text-muted-foreground">
                Our development teams are proficient in the latest technologies and frameworks, ensuring your
                applications are built with industry best practices and future-ready architecture.
              </p>
              <div className="grid gap-3">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-development.png"
                alt="Modern development technologies and frameworks"
                width={600}
                height={400}
                className="object-contain w-full h-auto rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow agile methodologies and best practices to ensure rapid delivery without compromising on quality.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "Deep dive into your project requirements and technical specifications",
              },
              {
                step: "02",
                title: "Team Assembly",
                description: "Assemble the right mix of senior developers and specialists for your project",
              },
              {
                step: "03",
                title: "Agile Development",
                description: "Iterative development with regular demos and feedback cycles",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Production deployment with ongoing maintenance and support",
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Accelerate Your Development?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let our expert development teams help you build robust, scalable applications that drive your business
            forward. Get started with a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/case-studies">View Development Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
