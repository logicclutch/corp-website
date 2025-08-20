import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "@/lib/data"

export default function CaseStudiesPreview() {
  const featuredCaseStudies = caseStudies.slice(0, 3)

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Proven Results Across Industries</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped organizations transform their operations and achieve measurable business outcomes
            through innovative technology solutions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((study) => (
            <Card key={study.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative h-64 rounded-t-lg overflow-hidden bg-muted">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.alt}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {study.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg line-clamp-2">{study.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{study.industry}</p>
                <p className="text-sm text-muted-foreground line-clamp-3">{study.challenge}</p>
                <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                  <Link href={`/case-studies/${study.id}`}>
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/case-studies">
              View All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
