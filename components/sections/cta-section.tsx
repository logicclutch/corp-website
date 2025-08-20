import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-background.png"
          alt="Call to action background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="container relative z-10">
        <div className="text-center text-primary-foreground space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how our expertise in data management, CRM solutions, and custom development can accelerate
              your digital transformation journey.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Your Project
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
