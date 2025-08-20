"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Search, Calendar, Clock, User } from "lucide-react"
import { newsArticles } from "@/lib/data"
import Image from "next/image"

const categories = [
  "All",
  "Technology",
  "Product Update",
  "Case Study",
  "Insights",
  "Company News",
  "Industry Analysis",
]

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Logic Clutch Newsroom</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with the latest news and insights from Logic Clutch, your trusted partner in enterprise
              technology consulting and innovative data-driven solutions.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      By {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest updates on technology trends, product releases, and industry
              insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
