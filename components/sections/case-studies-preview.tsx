import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Healthcare AI Implementation",
    client: "Major Healthcare Provider",
    description:
      "Implemented AI-powered patient management system that reduced processing time by 60% and improved patient satisfaction scores.",
    image: "/images/case-study-healthcare-ai.png",
    category: "Healthcare",
    results: [
      { label: "Processing Time", value: "60% Reduction" },
      { label: "Patient Satisfaction", value: "40% Increase" },
      { label: "Cost Savings", value: "$2M Annual" },
    ],
    href: "/case-studies/healthcare-ai",
  },
  {
    title: "E-commerce Platform Transformation",
    client: "Retail Giant",
    description:
      "Complete digital transformation of legacy e-commerce platform resulting in 300% increase in online sales and improved user experience.",
    image: "/images/case-study-ecommerce-transformation.png",
    category: "E-commerce",
    results: [
      { label: "Online Sales", value: "300% Increase" },
      { label: "Page Load Time", value: "70% Faster" },
      { label: "Conversion Rate", value: "150% Boost" },
    ],
    href: "/case-studies/ecommerce-transformation",
  },
  {
    title: "CRM Integration & Growth",
    client: "Financial Services",
    description:
      "Salesforce CRM implementation and integration that streamlined operations and increased lead conversion by 85%.",
    image: "/images/case-study-crm-growth.png",
    category: "CRM",
    results: [
      { label: "Lead Conversion", value: "85% Increase" },
      { label: "Sales Cycle", value: "40% Shorter" },
      { label: "Team Productivity", value: "65% Boost" },
    ],
    href: "/case-studies/crm-growth",
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results through innovative
            technology solutions and expert implementation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-sky-500 hover:bg-sky-600">{study.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-sky-600 transition-colors">{study.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-sky-600">{study.client}</CardDescription>
                <CardDescription>{study.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{result.label}:</span>
                      <span className="font-semibold text-sky-600">{result.value}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-sky-50 group-hover:border-sky-200 bg-transparent"
                >
                  <Link href={study.href}>
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
