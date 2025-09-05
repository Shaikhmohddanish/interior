import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-modern-living-room-interior-design-with-war.png" alt="Luxury Interior Design" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Transform Your Space Into Something Extraordinary
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-balance opacity-90 max-w-3xl mx-auto">
          Where creativity meets functionality. Since 2016, we've been creating inspiring environments that enhance your
          quality of life through exceptional design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            <Link href="/contact">Start Your Project</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-foreground bg-transparent"
          >
            <Link href="/projects">View Our Work</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
