
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Zap, Shield, Target, CheckCircle } from "lucide-react"

export default function AugmentationPage() {
  const benefits = [
    {
      icon: Zap,
      title: "Rapid Scaling",
      description: "Scale your team up or down quickly based on project demands",
    },
    {
      icon: Shield,
      title: "Vetted Professionals",
      description: "Access pre-screened, experienced developers and specialists",
    },
    {
      icon: Target,
      title: "Specialized Skills",
      description: "Get experts in specific technologies and domains",
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Our professionals integrate smoothly with your existing team",
    },
  ]

  const roles = [
    "Senior Full-Stack Developers",
    "Frontend Specialists (React, Angular, Vue)",
    "Backend Engineers (Node.js, Python, Java)",
    "Mobile Developers (React Native, Flutter)",
    "DevOps Engineers and Cloud Architects",
    "QA Engineers and Test Automation Specialists",
    "Project Managers and Scrum Masters",
    "UI/UX Designers and Product Managers",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Resource Augmentation
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Extend Your Team with <span className="text-primary">Expert Professionals</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Rapidly scale your development capacity with vetted specialists who integrate seamlessly with your
                existing team. Get the skills you need, when you need them, without the overhead of permanent hiring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Find Your Experts <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/resource-augmentation-new.png"
                alt="Resource augmentation - global talent integration with existing teams through seamless collaboration"
                width={600}
                height={400}
                className="object-contain w-full h-auto rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Resource Augmentation?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get immediate access to top-tier talent without the time and cost of traditional hiring. Our professionals
              are ready to contribute from day one.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Expert Professionals Across All Disciplines
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you need additional development capacity, specialized expertise, or project management support,
                our network of vetted professionals can fill any gap in your team.
              </p>
              <div className="grid gap-3">
                {roles.map((role, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/resource-augmentation-new.png"
                alt="Professional team collaboration and global talent integration"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How Resource Augmentation Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures you get the right professionals quickly and efficiently.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "Define your skill requirements, timeline, and team integration needs",
              },
              {
                step: "02",
                title: "Candidate Selection",
                description: "We match you with pre-vetted professionals from our talent network",
              },
              {
                step: "03",
                title: "Quick Onboarding",
                description: "Rapid integration with your team, tools, and processes",
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Continuous performance monitoring and team optimization",
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Scale Your Team?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get immediate access to expert professionals who can integrate with your team and start contributing from
            day one. Let's discuss your staffing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/case-studies">View Augmentation Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
