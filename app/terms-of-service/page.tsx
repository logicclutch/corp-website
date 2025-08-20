import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              These terms govern your use of our services. Please read them carefully.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: January 1, 2024</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using Logic Clutch services, you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Services Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Logic Clutch provides enterprise technology consulting services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Master Data Management solutions</li>
                <li>Salesforce CRM implementations</li>
                <li>Custom software development</li>
                <li>Resource augmentation services</li>
                <li>AI-powered analytics platforms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">As a client, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Cooperate with our team during project execution</li>
                <li>Make timely payments as agreed</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain confidentiality of proprietary information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Payment terms are specified in individual service agreements. Generally, payments are due within 30 days
                of invoice date. Late payments may incur additional charges as specified in the service agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All intellectual property rights in our services, including but not limited to software, documentation,
                and methodologies, remain the property of Logic Clutch unless otherwise specified in writing. Custom
                developments may be subject to separate intellectual property agreements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Logic Clutch's liability is limited to the amount paid for the specific service that gave rise to the
                claim. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Either party may terminate services with written notice as specified in the service agreement. Upon
                termination, all outstanding payments become due immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at legal@logicclutch.com or through our
                contact page.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
