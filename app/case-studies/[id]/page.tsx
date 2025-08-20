
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Clock, Users, CheckCircle } from "lucide-react"
import { caseStudies } from "@/lib/data"

interface CaseStudyPageProps {
  params: {
    id: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((s) => s.id === params.id)

  if (!study) {
    notFound()
  }

  const otherStudies = caseStudies.filter((s) => s.id !== params.id).slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button variant="outline" asChild>
                <Link href="/case-studies">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{study.title}</h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{study.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{study.teamSize}</span>
                </div>
                <span>{study.industry}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden bg-muted">
              <Image
                src={study.image || "/placeholder.svg"}
                alt={study.alt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            {/* Challenge */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Key Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {otherStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-8">Related Success Stories</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {otherStudies.map((relatedStudy) => (
                  <Card key={relatedStudy.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="p-0">
                      <div className="relative h-56 rounded-t-lg overflow-hidden bg-muted">
                        <Image
                          src={relatedStudy.image || "/placeholder.svg"}
                          alt={relatedStudy.alt}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {relatedStudy.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl line-clamp-2">{relatedStudy.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{relatedStudy.industry}</p>
                      <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                        <Link href={`/case-studies/${relatedStudy.id}`}>
                          Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve similar results and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
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
