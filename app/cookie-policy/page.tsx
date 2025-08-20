
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground">
              Learn about how we use cookies and similar technologies on our website.
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
              <CardTitle>What Are Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Essential Cookies</h4>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function properly. They enable basic functions like
                  page navigation and access to secure areas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                <p className="text-muted-foreground">
                  We use analytics cookies to understand how visitors interact with our website, helping us improve our
                  services and user experience.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Functional Cookies</h4>
                <p className="text-muted-foreground">
                  These cookies remember your preferences and choices to provide a more personalized experience.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may use third-party services that set cookies on our behalf, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for content sharing</li>
                <li>Customer support tools for chat functionality</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">You can control and manage cookies in several ways:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>Opt-out tools: Some third-party services provide opt-out mechanisms</li>
                <li>Privacy settings: Adjust your privacy preferences in your browser</li>
              </ul>
              <p className="text-muted-foreground">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at privacy@logicclutch.com or
                through our contact page.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
