export const runtime = "edge";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Linkedin, Clock, Award, Target } from "lucide-react"
import { leadership } from "@/lib/data"
import ClientsSection from "@/components/sections/clients-section"

export default function AboutPage() {
  const stats = [
    { icon: Clock, label: "Combined Team Experience", value: "40+ Years" },
    { icon: Award, label: "Solutions Delivered", value: "200+" },
    { icon: Target, label: "Client Success Rate", value: "98%" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              About Logic Clutch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transforming Businesses Through Technology
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate technologists with proven experience delivering solutions for industry leaders.
              Our senior executives and developers bring decades of hands-on expertise to accelerate your digital
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Logic Clutch, we believe that data is the foundation of every successful business decision. Our mission
              is to help organizations harness the power of their data through expert consulting, innovative solutions,
              and cutting-edge technology. Our team's collective experience working with global leaders like TomTom,
              TCS, and Kingston Technology enables us to deliver enterprise-grade solutions that drive real business
              value. With over 40 years of combined experience, we have successfully delivered 200+ solutions across 15+
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* Team Experience Section */}
      <ClientsSection />

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who have worked with industry leaders and now lead our mission to
              transform businesses through technology and ethical business practices.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.alt}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{member.bio}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every project, delivering solutions that exceed expectations.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace cutting-edge technologies and innovative approaches to solve complex challenges.",
              },
              {
                title: "Partnership",
                description:
                  "We build long-term partnerships with our clients, becoming trusted advisors in their journey.",
              },
              {
                title: "Integrity",
                description: "We operate with the highest ethical standards and transparency in all our interactions.",
              },
              {
                title: "Expertise",
                description: "Our team brings deep technical expertise and industry knowledge to every engagement.",
              },
              {
                title: "Results",
                description: "We focus on delivering measurable business outcomes and tangible value for our clients.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss how our proven experience and expertise can help drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
