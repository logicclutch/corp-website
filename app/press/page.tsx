import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ExternalLink,
  Calendar,
  Newspaper,
  Video,
  Twitter,
  Download,
  Award,
  Users,
  Building2,
  Globe,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Press & Media Coverage | Logic Clutch",
  description:
    "Latest press releases, media coverage, and news about Logic Clutch's innovative AI solutions and enterprise technology consulting services.",
  openGraph: {
    title: "Press & Media Coverage | Logic Clutch",
    description:
      "Latest press releases, media coverage, and news about Logic Clutch's innovative AI solutions and enterprise technology consulting services.",
    images: ["/images/og-image-logic-clutch.png"],
  },
}

const pressReleases = [
  {
    id: "series-a-funding",
    title: "Logic Clutch Secures $15M Series A Funding to Accelerate AI and Data Management Solutions",
    date: "January 20, 2024",
    category: "Funding",
    excerpt:
      "Investment led by prominent venture capital firm will fuel expansion of LogicEye AI platform and global market reach.",
    image: "/images/hero-image-main.png",
    downloadUrl: "#",
  },
  {
    id: "healthcare-partnership",
    title: "Logic Clutch Partners with Leading Healthcare Network for AI-Powered Patient Analytics",
    date: "December 15, 2023",
    category: "Partnership",
    excerpt:
      "LogicEye platform implementation across 15 facilities expected to improve patient outcomes and operational efficiency.",
    image: "/images/case-study-healthcare-ai.png",
    downloadUrl: "#",
  },
  {
    id: "smart-city-deployment",
    title: "Major Metropolitan Area Selects Logic Clutch ITMS for Traffic Management Transformation",
    date: "November 28, 2023",
    category: "Product Launch",
    excerpt: "Comprehensive deployment of Intelligent Traffic Management System expected to reduce congestion by 30%.",
    image: "/images/itms-web.png",
    downloadUrl: "#",
  },
]

const mediaKit = {
  logoAssets: [
    {
      name: "Primary Logo (PNG)",
      description: "High-resolution PNG logo for digital use",
      url: "/images/logic-clutch-logo-new.png",
      format: "PNG",
      size: "2000x800px",
    },
    {
      name: "Logo with Text (PNG)",
      description: "Logo with company name for presentations",
      url: "/images/logic-clutch-logo.png",
      format: "PNG",
      size: "1500x600px",
    },
    {
      name: "Company Favicon",
      description: "Website favicon for digital use",
      url: "/favicon.ico",
      format: "ICO",
      size: "32x32px",
    },
  ],
  productImages: [
    {
      name: "LogicEye Platform",
      description: "Screenshot of LogicEye AI platform interface",
      url: "/images/logiceye-web.png",
      category: "Product",
    },
    {
      name: "ITMS Dashboard",
      description: "ITMS traffic management dashboard",
      url: "/images/itms-web.png",
      category: "Product",
    },
  ],
  executivePhotos: [
    {
      name: "Sneha Sharma - Founder & Director",
      url: "/images/leader-sneha-sharma.jpeg",
      role: "Founder & Director",
    },
    {
      name: "Anjali Jain - Director of Operations",
      url: "/images/leader-anjali-jain.jpeg",
      role: "Director of Inbound Operations",
    },
    {
      name: "Vikram Jain - Director Program Management",
      url: "/images/leader-vikram-jain.png",
      role: "Director - Program Management Global",
    },
  ],
}

const leadership = [
  {
    name: "Sneha Sharma",
    role: "Founder & Director",
    bio: "15+ years experienced in consulting and serial entrepreneur. A woman leader who believes in ethical business practices and driving meaningful change through technology.",
    image: "/images/leader-sneha-sharma.jpeg",
    linkedin: "https://www.linkedin.com/in/snehasharma1121/",
  },
  {
    name: "Anjali Jain",
    role: "Director of Inbound Operations",
    bio: "Electrical Engineer by education who believes in firm teamwork and transparency. Dedicated to operational excellence and building strong collaborative processes.",
    image: "/images/leader-anjali-jain.jpeg",
    linkedin: "https://www.linkedin.com/in/anjalijain1707/",
  },
  {
    name: "Vikram Jain",
    role: "Director - Program Management Global",
    bio: "16+ years experienced in IT industry with global exposure. Holds Executive MBA from IIM, Raipur. Expert in managing complex global programs and driving strategic initiatives.",
    image: "/images/leader-vikram-jain.png",
    linkedin: "https://www.linkedin.com/in/jainvikram1512/",
  },
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4">
              Press & Media
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Press Center</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Latest news, press releases, and media coverage about Logic Clutch's innovative AI solutions and
              enterprise technology consulting services.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a href="https://www.logicclutch.com/press" target="_blank" rel="noopener noreferrer">
                  Visit Official Press Page
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#media-kit">
                  Download Media Kit
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Media Coverage */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Recent Media Coverage</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Logic Clutch has been featured in leading publications and media outlets for our innovative AI solutions
              and contributions to enterprise technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* National Newspaper Coverage */}
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/patrika-news-coverage.jpeg"
                  alt="Patrika Newspaper Coverage - Logic Clutch AI Solutions for Road Safety"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute left-4 top-4 bg-blue-600">
                  <Newspaper className="mr-1 h-3 w-3" />
                  Print Media
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  November 22, 2024
                </div>
                <CardTitle className="text-lg">National Newspaper Coverage</CardTitle>
                <CardDescription>
                  Featured in Patrika, a leading Hindi newspaper, highlighting Logic Clutch's innovative AI and computer
                  vision technology for road safety improvement and traffic management solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Publication: Patrika</p>
                  <p className="text-sm text-muted-foreground">Location: Jaipur City, Page 8</p>
                  <p className="text-sm text-muted-foreground">
                    Coverage focuses on drone technology and AI-powered traffic management systems.
                  </p>
                </div>
                <Button variant="outline" size="sm" className="mt-4 bg-transparent" asChild>
                  <a href="https://epaper.patrika.com/" target="_blank" rel="noopener noreferrer">
                    View Source
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Startup Mahakumbh Coverage */}
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-red-500/10 to-orange-500/10">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Video className="mx-auto mb-4 h-16 w-16 text-red-600" />
                    <h3 className="text-lg font-semibold">Startup Mahakumbh 2025</h3>
                    <p className="text-sm text-muted-foreground">Exclusive Coverage</p>
                  </div>
                </div>
                <Badge className="absolute left-4 top-4 bg-red-600">
                  <Video className="mr-1 h-3 w-3" />
                  Video Coverage
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  January 2025
                </div>
                <CardTitle className="text-lg">Startup Mahakumbh 2025</CardTitle>
                <CardDescription>
                  Exclusive coverage during Startup Mahakumbh 2025, showcasing Logic Clutch's innovative AI solutions
                  and entrepreneurial journey in the startup ecosystem.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Event: Startup Mahakumbh 2025</p>
                  <p className="text-sm text-muted-foreground">Platform: YouTube</p>
                  <p className="text-sm text-muted-foreground">
                    Featured presentation on AI-powered enterprise solutions and startup innovation.
                  </p>
                </div>
                <Button variant="outline" size="sm" className="mt-4 bg-transparent" asChild>
                  <a href="https://youtu.be/z_A_fXlRhy4?t=1253" target="_blank" rel="noopener noreferrer">
                    Watch Video
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Zee News Coverage */}
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Twitter className="mx-auto mb-4 h-16 w-16 text-blue-600" />
                    <h3 className="text-lg font-semibold">Zee Rajasthan</h3>
                    <p className="text-sm text-muted-foreground">Social Media Coverage</p>
                  </div>
                </div>
                <Badge className="absolute left-4 top-4 bg-blue-600">
                  <Twitter className="mr-1 h-3 w-3" />
                  Social Media
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  July 2024
                </div>
                <CardTitle className="text-lg">Zee Rajasthan Coverage</CardTitle>
                <CardDescription>
                  Featured coverage by Zee Rajasthan highlighting Logic Clutch's contributions to technology innovation
                  and entrepreneurship in Rajasthan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Media: Zee Rajasthan</p>
                  <p className="text-sm text-muted-foreground">Platform: Twitter/X</p>
                  <p className="text-sm text-muted-foreground">
                    Social media coverage showcasing regional technology leadership and innovation.
                  </p>
                </div>
                <Button variant="outline" size="sm" className="mt-4 bg-transparent" asChild>
                  <a
                    href="https://x.com/zeerajasthan_/status/1818324691934687466?t=VJZRCCXPxfeuQ7dI7_z44g&s=19"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Post
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Press Releases */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Latest Press Releases</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Official announcements and press releases from Logic Clutch about our latest developments, partnerships,
              and achievements.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {pressReleases.map((release) => (
              <Card key={release.id} className="overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image src={release.image || "/placeholder.svg"} alt={release.title} fill className="object-cover" />
                  <Badge className="absolute left-4 top-4">{release.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {release.date}
                  </div>
                  <CardTitle className="line-clamp-2">{release.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{release.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={release.downloadUrl}>
                        <Download className="mr-2 h-3 w-3" />
                        Download PDF
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://www.logicclutch.com/press" target="_blank" rel="noopener noreferrer">
                        Read More
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <a href="https://www.logicclutch.com/press" target="_blank" rel="noopener noreferrer">
                View All Press Releases
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Company Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">About Logic Clutch</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Logic Clutch is a leading enterprise technology consulting firm specializing in AI-powered solutions,
                  Master Data Management, and Salesforce CRM implementations. Founded in 2018, the company has rapidly
                  grown to serve Fortune 500 clients across multiple industries.
                </p>
                <p>
                  Our flagship products include LogicEye, an advanced Computer Vision AI platform, and ITMS, an
                  Intelligent Traffic Management System for smart cities. We combine deep technical expertise with
                  industry-specific knowledge to deliver transformative digital solutions.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">2018</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Employees</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Fortune 500 Clients</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">Industries Served</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-semibold">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Microsoft for Startups Partner</div>
                    <div className="text-sm text-muted-foreground">
                      Selected for Microsoft's prestigious startup acceleration program
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">NVIDIA Inception Program Member</div>
                    <div className="text-sm text-muted-foreground">
                      Recognized for innovative AI and computer vision solutions
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">ISO 27001 Certified</div>
                    <div className="text-sm text-muted-foreground">
                      Maintaining highest standards of information security
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Global Client Base</div>
                    <div className="text-sm text-muted-foreground">
                      Serving clients across North America, Europe, and Asia-Pacific
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Leadership Team</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Meet the experienced leaders driving Logic Clutch's vision and innovation in enterprise technology
              consulting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader) => (
              <Card key={leader.name} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{leader.bio}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Media Kit */}
      <section id="media-kit" className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Media Kit</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Download high-resolution logos, product images, and executive photos for media coverage and press
              materials.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Logo Assets */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Logo Assets
                </CardTitle>
                <CardDescription>High-resolution logos in various formats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mediaKit.logoAssets.map((asset) => (
                    <div key={asset.name} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{asset.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {asset.format} • {asset.size}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={asset.url} download>
                          <Download className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Product Images */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Product Images
                </CardTitle>
                <CardDescription>Screenshots and product visuals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mediaKit.productImages.map((image) => (
                    <div key={image.name} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{image.name}</div>
                        <div className="text-xs text-muted-foreground">{image.category}</div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={image.url} download>
                          <Download className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Executive Photos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Executive Photos
                </CardTitle>
                <CardDescription>High-resolution leadership team photos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mediaKit.executivePhotos.map((photo) => (
                    <div key={photo.name} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{photo.name}</div>
                        <div className="text-xs text-muted-foreground">{photo.role}</div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={photo.url} download>
                          <Download className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Media Contact</h2>
            <p className="mb-8 text-muted-foreground">
              For press inquiries, interview requests, or additional information, please contact our media relations
              team.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Press Inquiries</CardTitle>
                  <CardDescription>For media coverage and press releases</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <strong>Email:</strong> press@logicclutch.com
                  </div>
                  <div className="text-sm">
                    <strong>Phone:</strong> +91 99297 90897
                  </div>
                  <div className="text-sm">
                    <strong>Response Time:</strong> Within 24 hours
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>General Information</CardTitle>
                  <CardDescription>For general inquiries and information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <strong>Email:</strong> info@logicclutch.com
                  </div>
                  <div className="text-sm">
                    <strong>Address:</strong> 91, Shri Ram Enclave, Kallawala, Vatika Road, Jaipur 303905
                  </div>
                  <div className="text-sm">
                    <strong>Website:</strong>
                    <a href="https://www.logicclutch.com" className="ml-1 text-primary hover:underline">
                      www.logicclutch.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <a href="https://www.logicclutch.com/press" target="_blank" rel="noopener noreferrer">
                  Visit Official Press Page
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
