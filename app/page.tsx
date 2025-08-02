import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Building, Home, StarIcon as Industry, Plus } from "lucide-react"
import { ProcessSteps } from "@/components/process-steps"
import { GuaranteesSection } from "@/components/guarantees-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DesignVisualizationSection } from "@/components/design-visualization-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F2] text-gray-800 font-sans">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutIntroSection />
        <ServicesOverview />
        <ProcessSteps />
        <ProjectGallery />
        <GuaranteesSection />
        <DesignVisualizationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative w-full h-[85vh]">
      <Carousel
        opts={{ loop: true }}
        className="w-full h-full"
        // Add custom plugins for autoplay if needed
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full h-[85vh]">
              <Image
                src="/images/hero/modern-living-room.jpg"
                alt="Modern living room"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex flex-col items-start justify-center h-full text-white container mx-auto px-4">
                <span className="bg-black/50 px-4 py-1 rounded-full text-sm uppercase tracking-widest">
                  Beautiful Creativity
                </span>
                <h1 className="text-6xl md:text-8xl font-extrabold mt-4 tracking-tighter">DELINEATION.</h1>
                <p className="mt-4 max-w-md text-lg">
                  SRK Interior is a design firm that brings dimension to the design create for you
                </p>
                <Button asChild size="lg" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                  <Link href="/contact">
                    Book Consult <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
          {/* Add more CarouselItem for other slides */}
        </CarouselContent>
        <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 bg-white/80 hover:bg-white text-black" />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 bg-white/80 hover:bg-white text-black" />
      </Carousel>
    </section>
  )
}

function AboutIntroSection() {
  const categories = [
    { icon: Building, name: "Commercial" },
    { icon: Industry, name: "Industrial" },
    { icon: Home, name: "Residential" },
    { icon: Building, name: "Corporate" },
  ]
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-[#C0A080]">SINCE 2016</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Designing timeless interiors that inspire and elevate every space.
            </h2>
            <p className="text-gray-600">
              At SRK Interiors, we create beautiful, functional spaces for homes, offices, and businesses. Our designs
              balance style and practicality, making every space both stunning and liveable.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {categories.map((cat) => (
                <div key={cat.name} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <cat.icon className="w-8 h-8 text-[#C0A080]" />
                  <span className="font-semibold">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Designer with client"
              width={300}
              height={400}
              className="rounded-lg shadow-xl z-10 -mr-24"
            />
            <Image
              src="/placeholder.svg?height=350&width=250"
              alt="Happy client"
              width={250}
              height={350}
              className="rounded-lg shadow-xl z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesOverview() {
  const services = [
    { name: "2D/3D Layouts", image: "/images/services/2d-3d-layouts.jpg" },
    { name: "Turnkey Projects", image: "/images/services/turnkey-projects.jpg" },
    { name: "Design & Planning", image: "/images/services/design-planning.jpg" },
  ]
  return (
    <section className="py-16 md:py-24 bg-[#3A506B] text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400">WHAT WE DO</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">What we offer for you</h2>
        <div className="mt-12">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      width={400}
                      height={500}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                    <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                      <div className="bg-white text-black rounded-full p-3 group-hover:bg-[#C0A080] transition-colors">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-[-2rem] top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-[-2rem] top-1/2 -translate-y-1/2" />
            </div>
          </Carousel>
        </div>
        <p className="mt-8 text-gray-300">
          Need more services based on your demand?{" "}
          <Link href="/contact" className="font-semibold underline hover:text-white">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  )
}

function ProjectGallery() {
  const projects = {
    "Living Room": Array(3).fill({ src: "/placeholder.svg?height=400&width=400", alt: "Living Room" }),
    Bedroom: Array(3).fill({ src: "/placeholder.svg?height=400&width=400", alt: "Bedroom" }),
    Kitchen: Array(3).fill({ src: "/placeholder.svg?height=400&width=400", alt: "Kitchen" }),
    Bathroom: Array(3).fill({ src: "/placeholder.svg?height=400&width=400", alt: "Bathroom" }),
    "Commercial Space": Array(3).fill({ src: "/placeholder.svg?height=400&width=400", alt: "Commercial Space" }),
    "Virtual Tour": Array(3).fill({ src: "/placeholder.svg?height=400&width=400", alt: "Virtual Tour" }),
  }
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">OUR LATEST PROJECT</h2>
        </div>
        <Tabs defaultValue="Living Room" className="w-full">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-transparent p-0">
              {Object.keys(projects).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full data-[state=active]:bg-[#3A506B] data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {Object.entries(projects).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {items.map((project, index) => (
                  <div key={index} className="overflow-hidden rounded-lg group">
                    <Image
                      src={`${project.src}&v=${index}`}
                      alt={project.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="flex flex-col items-center justify-center mt-12 text-center">
          <div className="flex items-center text-6xl font-bold text-[#C0A080]">
            55 <Plus className="w-12 h-12 ml-1" />
          </div>
          <p className="text-gray-600 mt-2">Projects Completed in Commercial and Residential</p>
        </div>
      </div>
    </section>
  )
}
