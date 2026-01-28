import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cloud, Code, Users, Database } from "lucide-react"

const services = [
  {
    title: "Salesforce Consulting",
    description:
      "Complete Salesforce implementation, customization, and optimization services to maximize your CRM investment.",
    icon: Cloud,
    image: "/images/service-salesforce.png",
    href: "/services/salesforce",
    features: ["Implementation", "Customization", "Integration", "Training"],
  },
  {
    title: "Custom Development",
    description:
      "Tailored software solutions built with modern technologies to meet your unique business requirements.",
    icon: Code,
    image: "/images/service-development.png",
    href: "/services/development",
    features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Solutions"],
  },
  {
    title: "Resource Augmentation",
    description:
      "Scale your development team with our skilled professionals who integrate seamlessly with your existing team.",
    icon: Users,
    image: "/images/service-augmentation.png",
    href: "/services/augmentation",
    features: ["Dedicated Teams", "Flexible Scaling", "Expert Developers", "Project Management"],
  },
  {
    title: "Master Data Management",
    description:
      "Informatica-powered MDM solutions to ensure data quality, governance, and consistency across your enterprise.",
    icon: Database,
    image: "/images/informatica-mdm-expertise.png",
    href: "/services/mdm",
    features: ["Data Quality", "Data Governance", "Data Integration", "Informatica MDM"],
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our <span className="gradient-text">Expert Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive technology solutions that help businesses transform, scale, and achieve their
            digital objectives with proven expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-sky-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-center">{service.description}</CardDescription>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-sky-50 group-hover:border-sky-200 bg-transparent"
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
