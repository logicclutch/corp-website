export const runtime = "edge";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Shield, Zap, CheckCircle, Target, BarChart, Lock, Workflow } from "lucide-react"

export default function MDMPage() {
  const coreServices = [
    {
      icon: Database,
      title: "Data Management",
      description: "Centralize and standardize your enterprise data across all systems and departments",
      features: [
        "Single source of truth creation",
        "Data standardization and cleansing",
        "Master record management",
        "Data lifecycle management",
      ],
    },
    {
      icon: Workflow,
      title: "Data Integration",
      description: "Seamlessly connect disparate systems and ensure consistent data flow",
      features: [
        "Real-time data synchronization",
        "ETL/ELT pipeline development",
        "API-based integrations",
        "Legacy system modernization",
      ],
    },
    {
      icon: Shield,
      title: "Data Governance",
      description: "Establish policies, procedures, and controls for enterprise data assets",
      features: [
        "Data quality frameworks",
        "Compliance management",
        "Access control policies",
        "Audit trail maintenance",
      ],
    },
  ]

  const platforms = [
    {
      name: "Informatica MDM",
      description: "Industry-leading platform for comprehensive master data management",
      strengths: ["Enterprise scalability", "Advanced matching algorithms", "Cloud-native architecture"],
    },
    {
      name: "Microsoft MDS",
      description: "Integrated solution within Microsoft ecosystem for data mastering",
      strengths: ["Seamless Office integration", "Cost-effective licensing", "Familiar interface"],
    },
    {
      name: "IBM InfoSphere",
      description: "Robust platform for large-scale enterprise data management",
      strengths: ["High-volume processing", "Advanced analytics", "Industry templates"],
    },
    {
      name: "Talend Data Fabric",
      description: "Open-source foundation with enterprise-grade capabilities",
      strengths: ["Flexible deployment", "Strong community", "Cost optimization"],
    },
    {
      name: "Oracle Enterprise Data Management",
      description: "Comprehensive suite for Oracle-centric environments",
      strengths: ["Database integration", "Performance optimization", "Enterprise security"],
    },
    {
      name: "SAP Master Data Governance",
      description: "Native solution for SAP landscapes and business processes",
      strengths: ["SAP integration", "Business workflow", "Industry compliance"],
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Improved Decision Making",
      description: "Access to accurate, consistent data enables better strategic decisions",
      impact: "85% improvement in data-driven decision accuracy",
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Eliminate data silos and reduce manual data reconciliation efforts",
      impact: "60% reduction in data processing time",
    },
    {
      icon: BarChart,
      title: "Enhanced Customer Experience",
      description: "360-degree customer view improves service delivery and satisfaction",
      impact: "40% increase in customer satisfaction scores",
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Meet industry standards and regulatory requirements with confidence",
      impact: "100% compliance audit success rate",
    },
  ]

  const industries = [
    {
      name: "Financial Services",
      challenges: "Customer data across multiple products, regulatory reporting, risk management",
      solutions: "Unified customer profiles, automated compliance reporting, real-time risk assessment",
    },
    {
      name: "Healthcare",
      challenges: "Patient data integration, clinical data management, regulatory compliance",
      solutions: "Comprehensive patient records, clinical data standardization, HIPAA compliance",
    },
    {
      name: "Manufacturing",
      challenges: "Product data management, supplier information, quality control",
      solutions: "Centralized product catalogs, supplier master data, quality metrics tracking",
    },
    {
      name: "Retail & E-commerce",
      challenges: "Product information management, customer data unification, inventory tracking",
      solutions: "Omnichannel product data, unified customer profiles, real-time inventory",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Master Data Management Solutions
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Transform Your Enterprise with <span className="text-primary">Unified Data Management</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Establish a single source of truth for your critical business data. Our comprehensive MDM solutions
                integrate data management, governance, and integration across multiple platforms to drive business
                excellence and regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start Your MDM Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/mdm-hero-informatica.png"
                alt="Master Data Management architecture showing data integration, governance, and management across enterprise systems"
                width={600}
                height={400}
                className="object-contain w-full h-auto rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Comprehensive MDM Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our master data management expertise spans across three critical pillars that form the foundation of
              successful enterprise data strategy and digital transformation initiatives.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {coreServices.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid gap-8 lg:gap-12 items-center ${isEven ? "lg:grid-cols-2" : "lg:grid-cols-2"}`}
                >
                  <div className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <div className="grid gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative ${!isEven ? "lg:order-1" : ""}`}>
                    <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                      <div className="text-center space-y-4">
                        <Icon className="h-16 w-16 text-primary mx-auto" />
                        <h4 className="text-xl font-semibold">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {service.title === "Data Management" &&
                            "Centralize, standardize, and optimize your enterprise data assets"}
                          {service.title === "Data Integration" &&
                            "Connect systems and ensure seamless data flow across platforms"}
                          {service.title === "Data Governance" &&
                            "Establish policies and controls for data quality and compliance"}
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Multi-Platform Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with leading MDM platforms to deliver solutions that best fit your technology landscape, budget
              constraints, and business requirements. Our platform-agnostic approach ensures optimal outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{platform.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Key Strengths:</h5>
                    <ul className="space-y-1">
                      {platform.strengths.map((strength, strengthIndex) => (
                        <li key={strengthIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Measurable Business Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizations implementing comprehensive MDM solutions experience significant improvements across key
              performance indicators and operational metrics.
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
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="text-primary font-semibold text-sm">{benefit.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every industry faces unique data challenges. Our MDM solutions are tailored to address specific regulatory
              requirements, business processes, and operational complexities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-2 text-red-600">Common Challenges:</h5>
                    <p className="text-sm text-muted-foreground">{industry.challenges}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-2 text-green-600">Our Solutions:</h5>
                    <p className="text-sm text-muted-foreground">{industry.solutions}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Proven Implementation Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures successful MDM deployment, user adoption, and long-term sustainability
              across your organization.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description:
                  "Comprehensive analysis of current data landscape, business requirements, and technical architecture",
                deliverables: ["Data audit report", "Gap analysis", "Platform recommendation"],
              },
              {
                step: "02",
                title: "Strategy & Design",
                description:
                  "Development of MDM roadmap, data models, and governance framework aligned with business objectives",
                deliverables: ["MDM strategy document", "Data architecture", "Governance policies"],
              },
              {
                step: "03",
                title: "Implementation & Integration",
                description:
                  "Platform deployment, data migration, system integrations, and workflow automation development",
                deliverables: ["Configured platform", "Data pipelines", "Integration endpoints"],
              },
              {
                step: "04",
                title: "Testing & Optimization",
                description:
                  "Comprehensive testing, performance tuning, user training, and continuous improvement processes",
                deliverables: ["Test results", "Performance metrics", "Training materials"],
              },
            ].map((phase, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">{phase.step}</div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-xs text-primary">Key Deliverables:</h5>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <li key={delIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Master Your Enterprise Data?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Transform your data chaos into competitive advantage. Our MDM experts will help you establish a robust
            foundation for data-driven decision making and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/case-studies">View MDM Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
