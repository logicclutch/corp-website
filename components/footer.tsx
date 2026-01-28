import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Transforming businesses through innovative software solutions and expert consulting services.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/salesforce" className="text-muted-foreground hover:text-foreground">
                  Salesforce Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/development" className="text-muted-foreground hover:text-foreground">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services/augmentation" className="text-muted-foreground hover:text-foreground">
                  Resource Augmentation
                </Link>
              </li>
              <li>
                <Link href="/services/mdm" className="text-muted-foreground hover:text-foreground">
                  Master Data Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">© 2024 Logic Clutch. All rights reserved.</p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
