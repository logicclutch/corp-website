import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
      <div className="container">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how Logic Clutch can help you achieve your technology goals. Our experts are ready to
              provide customized solutions for your unique challenges.
            </p>
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-gray-100">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sky-600 bg-transparent"
            >
              <Link href="tel:+919929790897">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 99297 90897
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sky-100">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-sky-100">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30 Days</div>
              <div className="text-sky-100">Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
