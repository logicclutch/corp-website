import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { products } from "@/lib/data"

export default function ProductsOverview() {
  return (
    <section className="py-16 md:py-24 bg-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI-Powered SaaS Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our suite of intelligent products designed to streamline operations and provide actionable insights
            for modern businesses.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.title} product interface`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{product.description}</p>
                  <Button size="lg" asChild className="w-full">
                    <Link href={product.link} target="_blank" rel="noopener noreferrer">
                      Explore {product.title} <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">
              View All Products <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
