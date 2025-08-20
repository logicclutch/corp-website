import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data"

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Comprehensive Technology Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From data management to custom development, we provide end-to-end solutions that accelerate your digital
            transformation journey.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="p-2 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <Link href={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
