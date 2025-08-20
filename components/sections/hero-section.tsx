import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/2 to-background py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Enterprise Technology Experts
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Business with <span className="text-primary">Data Intelligence</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We specialize in Master Data Management, Salesforce CRM, and AI-powered analytics that drive real
                business outcomes. Partner with us to unlock the full potential of your enterprise data.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  <Play className="mr-2 h-5 w-5" />
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/hero-image-main.png"
                alt="Digital transformation and AI technology illustration"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
