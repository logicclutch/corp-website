export const runtime = "edge";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"
import { products } from "@/lib/data"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              SaaS Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Innovative Products for Modern Business
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our suite of AI-powered analytics and IT management solutions designed to streamline operations
              and drive intelligent decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:gap-16">
            {products.map((product, index) => {
              const Icon = product.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid gap-8 lg:gap-12 items-center ${isEven ? "lg:grid-cols-2" : "lg:grid-cols-2"}`}
                >
                  <div className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold">{product.title}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground">{product.description}</p>
                    </div>
                    <Button size="lg" asChild>
                      <Link href={product.link} target="_blank" rel="noopener noreferrer">
                        Explore {product.title} <ExternalLink className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`relative ${!isEven ? "lg:order-1" : ""}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.title} product interface`}
                      width={600}
                      height={400}
                      className="object-contain w-full h-auto rounded-lg shadow-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Interested in Our Products?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us to learn more about how our products can transform your business operations and provide valuable
            insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
