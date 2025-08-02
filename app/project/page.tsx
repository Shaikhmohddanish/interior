"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GuaranteesSection } from "@/components/guarantees-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Plus } from "lucide-react"

const allProjects = [
  // Living Room
  { category: "Living Room", src: "/images/living-room/modern-living-room.jpg", alt: "Modern Living Room" },
  { category: "Living Room", src: "/images/living-room/cozy-living-area.jpg", alt: "Cozy Living Area" },
  { category: "Living Room", src: "/images/living-room/spacious-living-room.jpg", alt: "Spacious Living Room" },
  { category: "Living Room", src: "/images/living-room/minimalist-living-room.jpg", alt: "Minimalist Living Room" },
  { category: "Living Room", src: "/images/living-room/luxury-living-room.jpg", alt: "Luxury Living Room" },
  { category: "Living Room", src: "/images/living-room/contemporary-living-space.jpg", alt: "Contemporary Living Space" },

  // Bedroom
  { category: "Bedroom", src: "/images/bedroom/serene-bedroom.jpg", alt: "Serene Bedroom" },
  { category: "Bedroom", src: "/images/bedroom/master-bedroom-suite.jpg", alt: "Master Bedroom Suite" },
  { category: "Bedroom", src: "/images/bedroom/guest-bedroom.jpg", alt: "Guest Bedroom" },

  // Kitchen
  { category: "Kitchen", src: "/images/kitchen/modern-kitchen.jpg", alt: "Modern Kitchen" },
  { category: "Kitchen", src: "/images/kitchen/gourmet-kitchen.jpg", alt: "Gourmet Kitchen" },
  { category: "Kitchen", src: "/images/kitchen/open-plan-kitchen.jpg", alt: "Open-plan Kitchen" },

  // Bathroom
  { category: "Bathroom", src: "/images/bathroom/luxury-bathroom.jpg", alt: "Luxury Bathroom" },
  { category: "Bathroom", src: "/images/bathroom/spa-like-bathroom.jpg", alt: "Spa-like Bathroom" },

  // Commercial
  { category: "Commercial", src: "/images/commercial/corporate-office.jpg", alt: "Corporate Office" },
  { category: "Commercial", src: "/images/commercial/retail-space.jpg", alt: "Retail Space" },
]

export default function ProjectPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F2]">
      <Header />
      <main className="flex-1">
        <PageHero />
        <ProjectGallery />
        <GuaranteesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

function PageHero() {
  return (
    <section className="relative w-full h-[50vh]">
      <Image
        src="/images/project/hero-banner.jpg"
        alt="Stylish interior project"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold">Project</h1>
        <div className="flex items-center gap-2 mt-4 text-lg">
          <Link href="/" className="hover:underline">
            SRK Interiors
          </Link>
          <ChevronRight className="h-5 w-5" />
          <span>Project</span>
        </div>
      </div>
    </section>
  )
}

function ProjectGallery() {
  const [visibleCount, setVisibleCount] = useState(9)
  const categories = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Commercial", "Virtual Tour"]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="Living Room" className="w-full">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <TabsList className="flex-wrap h-auto bg-transparent p-0">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full data-[state=active]:bg-[#3A506B] data-[state=active]:text-white text-base px-6 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="hidden md:flex items-center gap-4 ml-auto border-l border-gray-200 pl-6">
              <div className="w-16 h-16 rounded-full border-2 border-[#C0A080] flex items-center justify-center">
                <span className="text-2xl font-bold text-[#C0A080]">
                  0<Plus className="inline w-5 h-5" />
                </span>
              </div>
              <p className="max-w-[150px] text-gray-600">Projects Completed Across Commercial and Residential Spaces</p>
            </div>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {allProjects
                  .filter((p) => p.category === category)
                  .slice(0, visibleCount)
                  .map((project, index) => (
                    <div key={index} className="overflow-hidden rounded-lg group break-inside-avoid">
                      <Image
                        src={`${project.src}&q=${category}${index}`}
                        alt={project.alt}
                        width={400}
                        height={500}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        {visibleCount < allProjects.length && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              variant="outline"
              className="border-[#C0A080] text-[#C0A080] hover:bg-[#C0A080] hover:text-white rounded-full px-8 py-6"
            >
              VIEW COMPLETE LIST
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
