import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/srkinteriordesigner-2Ec7qSgV7aTKkKkexHGWxKH8PjDGwr.png"
              alt="SRK Interior Designer"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/80 mb-6 max-w-md">
              Since 2016, we've been transforming spaces into inspiring environments. Our mission is to enhance your
              quality of life through exceptional design.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@srkinteriordesigner.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9819393613</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-background/80 hover:text-background transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-background/80 hover:text-background transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-background/80 hover:text-background transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">© 2024 SRK Interior Designer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
