import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, Share2, Calendar, Tag } from "lucide-react"
import { pressReleases } from "@/lib/data"

interface PressReleasePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PressReleasePageProps): Promise<Metadata> {
  const release = pressReleases.find((r) => r.id === Number.parseInt(params.id))

  if (!release) {
    return {
      title: "Press Release Not Found | Logic Clutch",
    }
  }

  return {
    title: `${release.title} | Logic Clutch Press`,
    description: release.excerpt,
    keywords: release.tags.join(", "),
    openGraph: {
      title: release.title,
      description: release.excerpt,
      images: [release.image],
      type: "article",
      publishedTime: release.publishedAt,
    },
  }
}

export async function generateStaticParams() {
  return pressReleases.map((release) => ({
    id: release.id.toString(),
  }))
}

export default function PressReleasePage({ params }: PressReleasePageProps) {
  const release = pressReleases.find((r) => r.id === Number.parseInt(params.id))

  if (!release) {
    notFound()
  }

  const relatedReleases = pressReleases
    .filter((r) => r.id !== release.id && r.category === release.category)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/press">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Press Center
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">{release.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(release.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{release.title}</h1>

            <p className="text-xl text-muted-foreground mb-8">{release.excerpt}</p>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href={release.downloadUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={release.image || "/placeholder.svg"}
                alt={release.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-foreground leading-relaxed">{release.content}</div>
            </div>

            <Separator className="my-12" />

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Tag className="mr-2 h-5 w-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {release.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Media Contact</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Email:</strong> press@logicclutch.com
                  </div>
                  <div>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </div>
                  <div>
                    <strong>Response Time:</strong> 24-48 hours for standard inquiries
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Press Releases */}
      {relatedReleases.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Press Releases</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedReleases.map((related) => (
                  <Card key={related.id} className="group hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge>{related.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{related.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {new Date(related.publishedAt).toLocaleDateString()}
                        </span>
                        <Button size="sm" asChild>
                          <Link href={`/press/${related.id}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
