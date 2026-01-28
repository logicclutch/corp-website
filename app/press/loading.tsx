import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function PressLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Skeleton className="h-16 w-96 mx-auto" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
            <Skeleton className="h-6 w-3/4 max-w-xl mx-auto" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-48" />
              <Skeleton className="h-12 w-48" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Skeleton */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-64 mx-auto mb-4" />
              <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Skeleton className="h-8 w-8 mx-auto mb-3" />
                    <Skeleton className="h-8 w-16 mx-auto mb-1" />
                    <Skeleton className="h-4 w-20 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="grid sm:grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-8 w-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases Skeleton */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-80 mx-auto mb-4" />
              <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index}>
                  <Skeleton className="h-48 w-full rounded-t-lg" />
                  <CardHeader>
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-24" />
                      <div className="flex space-x-2">
                        <Skeleton className="h-8 w-20" />
                        <Skeleton className="h-8 w-8" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Skeleton className="h-12 w-48 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Skeleton */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-64 mx-auto mb-4" />
              <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Skeleton className="w-32 h-32 mx-auto mb-4 rounded-full" />
                    <Skeleton className="h-6 w-32 mx-auto mb-1" />
                    <Skeleton className="h-5 w-40 mx-auto mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mx-auto mb-4" />
                    <div className="flex flex-wrap gap-1 justify-center">
                      {Array.from({ length: 3 }).map((_, skillIndex) => (
                        <Skeleton key={skillIndex} className="h-6 w-16" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit Skeleton */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-48 mx-auto mb-4" />
              <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({ length: 3 }).map((_, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <Skeleton className="h-4 w-32 mb-1" />
                          <Skeleton className="h-3 w-20" />
                        </div>
                        <Skeleton className="h-8 w-8" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact Skeleton */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Skeleton className="h-10 w-48 mx-auto mb-4" />
                  <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-32" />
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Skeleton className="h-5 w-5" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-48 mb-1" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Skeleton className="h-5 w-5" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-40 mb-1" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Skeleton className="h-6 w-32" />
                    <div className="space-y-2">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} className="h-4 w-full" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center">
                  <Skeleton className="h-12 w-48 mx-auto" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
