import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Settings, BarChart3 } from "lucide-react"

const products = [
  {
    title: "LogicEye",
    description:
      "Advanced analytics and monitoring platform that provides real-time insights into your business operations and performance metrics.",
    image: "/images/logiceye-web.png",
    href: "/products#logiceye",
    status: "Available",
    features: ["Real-time Analytics", "Custom Dashboards", "Performance Monitoring", "Automated Reporting"],
    icon: Eye,
  },
  {
    title: "ITMS (IT Management System)",
    description:
      "Comprehensive IT management solution for enterprise operations, asset tracking, and service management.",
    image: "/images/itms-web.png",
    href: "/products#itms",
    status: "Available",
    features: ["Asset Management", "Service Desk", "Incident Tracking", "Resource Planning"],
    icon: Settings,
  },
]

export default function ProductsOverview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our <span className="gradient-text">Innovative Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our suite of proprietary software solutions designed to streamline operations and drive business
            efficiency across various industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                      {product.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-sky-600" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <BarChart3 className="h-4 w-4 text-sky-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button asChild className="flex-1 bg-sky-500 hover:bg-sky-600">
                      <Link href={product.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Request Demo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
