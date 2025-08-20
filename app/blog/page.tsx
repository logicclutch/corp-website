export const runtime = "edge";

import { Rss, Edit3 } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container text-center">
          <Rss className="h-16 w-16 mx-auto text-primary mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Logic Clutch Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Insights, trends, and expert opinions on enterprise IT, digital transformation, and technology innovation.
            Stay tuned for our upcoming articles!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <Edit3 className="h-12 w-12 mx-auto text-muted-foreground mb-6" />
          <h2 className="text-3xl font-semibold mb-6">Our Blog is Coming Soon!</h2>
          <p className="text-muted-foreground mb-8">
            We are working hard to bring you valuable content, including industry analysis, best practices, case study
            highlights, and technology deep dives. Please check back soon for our latest posts.
          </p>
          <p className="text-muted-foreground">
            Want to be notified when our blog launches? Subscribe to our newsletter via the footer.
          </p>
        </div>
      </section>
    </div>
  )
}
