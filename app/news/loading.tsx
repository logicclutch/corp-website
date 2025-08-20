import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function NewsLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Skeleton */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-3/4 mx-auto mb-8" />
            <Skeleton className="h-10 w-80 mx-auto" />
          </div>
        </div>
      </section>

      {/* Category Filter Skeleton */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid Skeleton */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <Skeleton className="aspect-video w-full rounded-t-lg" />
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
