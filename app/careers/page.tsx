import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, ArrowRight } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container text-center">
          <Briefcase className="h-16 w-16 mx-auto text-primary mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            At Logic Clutch, we are always looking for talented and passionate individuals to help us drive digital
            transformation for our clients. Explore opportunities to grow your career with us.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Current Openings</h2>
          <p className="text-muted-foreground mb-8">
            We are currently expanding our team and will be posting new opportunities soon. If you are passionate about
            technology and innovation, we'd love to hear from you.
          </p>
          <p className="text-muted-foreground mb-8">
            In the meantime, you can send your resume and a cover letter expressing your interest to our HR department.
          </p>
          <Button size="lg" asChild>
            <Link href="mailto:careers@logicclutch.com">
              Contact HR <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <div className="mt-12 p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-3">Why Work at Logic Clutch?</h3>
            <ul className="space-y-2 text-muted-foreground text-left list-disc list-inside">
              <li>Opportunity to work on challenging enterprise-level projects.</li>
              <li>Collaborative and innovative work environment.</li>
              <li>Continuous learning and professional development.</li>
              <li>Competitive salary and benefits package.</li>
              <li>Contribute to impactful digital transformation initiatives.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
