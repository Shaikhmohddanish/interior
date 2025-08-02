"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Plus, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F2]">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <ServicesSidebar />
          </aside>
          <main className="lg:col-span-3">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function ServicesSidebar() {
  const pathname = usePathname()
  const services = [
    { name: "2D/3D Layouts", href: "/services/2d-3d-layouts" },
    { name: "Turnkey Projects", href: "/services/turnkey-projects" },
    { name: "Design & Planning", href: "/services/design-and-planning" },
  ]

  return (
    <div className="space-y-8 sticky top-28">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Our Service</h3>
          <nav className="flex flex-col">
            {services.map((service) => {
              const isActive = pathname === service.href
              return (
                <Link
                  key={service.name}
                  href={service.href}
                  className={`flex justify-between items-center p-4 border-b border-gray-200 transition-colors ${
                    isActive ? "text-[#C0A080]" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Plus className="w-4 h-4" />
                    {service.name.toUpperCase()}
                  </span>
                  <div
                    className={`transition-all ${
                      isActive ? "w-8 h-8 bg-[#C0A080] text-white rounded-full flex items-center justify-center" : ""
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              )
            })}
          </nav>
        </CardContent>
      </Card>
      <div className="relative bg-black text-white text-center rounded-2xl overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=300"
          alt="Modern interior"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative p-8 space-y-4">
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full text-xs"
          >
            GET IN TOUCH WITH US TODAY
          </Button>
          <h3 className="text-2xl font-bold">Got questions or ready to start? We're here to help</h3>
          <a href="tel:9819393613" className="flex items-center justify-center gap-2 text-lg">
            <Phone className="w-5 h-5" />
            <span>+91 9819393613</span>
          </a>
          <Button asChild className="bg-[#C0A080] hover:bg-[#A98B70] text-white rounded-full px-8">
            <Link href="/contact">Register Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
