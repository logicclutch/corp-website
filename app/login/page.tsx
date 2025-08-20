"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Lock, User, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              Client Portal
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Welcome Back</h1>
            <p className="text-xl text-muted-foreground">
              Access your project dashboard, reports, and collaborate with our team through the secure client portal.
            </p>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Client Portal Login</CardTitle>
                <p className="text-muted-foreground">Enter your credentials to access your account</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Sign In <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
                <div className="mt-6 text-center space-y-4">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Forgot your password?
                  </Link>
                  <div className="text-sm text-muted-foreground">
                    Need access?{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact our team
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What's Available in Your Portal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access all your project information, collaborate with our team, and track progress in real-time.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Project Dashboard",
                description: "Real-time view of project status, milestones, and deliverables",
              },
              {
                title: "Document Library",
                description: "Access all project documents, reports, and technical specifications",
              },
              {
                title: "Team Communication",
                description: "Direct messaging and collaboration with your dedicated project team",
              },
              {
                title: "Progress Reports",
                description: "Detailed analytics and progress reports for all ongoing projects",
              },
              {
                title: "Resource Center",
                description: "Training materials, best practices, and implementation guides",
              },
              {
                title: "Support Tickets",
                description: "Submit and track support requests with our technical team",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
