import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PenTool, Home, Palette, Sofa, Lightbulb, Users } from "lucide-react"

export default function DesignPlanningPage() {
  const services = [
    {
      icon: Home,
      title: "Space Planning & Optimization",
      description: "Maximize functionality and flow with intelligent space utilization strategies.",
    },
    {
      icon: Palette,
      title: "Color Scheme Development",
      description: "Create harmonious color palettes that reflect your personality and enhance mood.",
    },
    {
      icon: Sofa,
      title: "Furniture Selection & Layout",
      description: "Curate the perfect furniture pieces and arrange them for optimal comfort and style.",
    },
    {
      icon: Lightbulb,
      title: "Lighting Design Strategy",
      description: "Design layered lighting solutions that enhance ambiance and functionality.",
    },
    {
      icon: PenTool,
      title: "Material Specification",
      description: "Select premium materials and finishes that align with your aesthetic and budget.",
    },
    {
      icon: Users,
      title: "Style Consultation",
      description: "Personalized guidance to develop a cohesive design style that suits your lifestyle.",
    },
  ]

  const designStyles = [
    {
      name: "Modern Contemporary",
      description: "Clean lines, minimalist approach, and functional elegance.",
      image: "/modern-contemporary-interior-design-style.png",
    },
    {
      name: "Classic Traditional",
      description: "Timeless elegance with rich textures and sophisticated details.",
      image: "/classic-traditional-interior-design-style.png",
    },
    {
      name: "Industrial Chic",
      description: "Raw materials, exposed elements, and urban sophistication.",
      image: "/industrial-chic-interior-design-style.png",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <PenTool className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Design & Planning</h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive design solutions tailored to your lifestyle, preferences, and functional requirements. We
                create spaces that are both beautiful and perfectly suited to how you live.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Start Planning</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href="/projects">View Design Portfolio</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-planning.jpg-cRhxA0FuGg33k8RtKx6XhDuC3W4l3D.jpeg"
                alt="Modern minimalist bedroom with built-in storage design planning"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Planning Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive design planning projects showcasing detailed space planning, color schemes, and
              material selections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feature.jpg-u1mhXqL2AB7rc6OpldDm0dZkSsBxkl.jpeg"
                  alt="Modern living room space planning with sage green accent wall"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Planning Details</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Residential Space Planning</h3>
              <p className="text-muted-foreground">Optimized layout for maximum functionality and flow</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sidebar-image.jpg-90XK4q4IJONfCiLRpnMBeKJovlQcLe.jpeg"
                  alt="Contemporary apartment color scheme development"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Color Palette</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Color Palette Design</h3>
              <p className="text-muted-foreground">Harmonious color schemes for modern living spaces</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner.jpg-kOCSFMbBua1s5vFw5UUtZMHYjfUWSz.jpeg"
                  alt="Modern kitchen furniture layout planning"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Layout Plan</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Furniture Layout Planning</h3>
              <p className="text-muted-foreground">Strategic furniture placement for comfort and style</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feature.jpg-bMP4z2bGnhMDX34X9okcQrWmniaVJu.jpeg"
                  alt="Contemporary living room lighting design strategy"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Lighting Plan</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lighting Design Strategy</h3>
              <p className="text-muted-foreground">Layered lighting solutions for ambiance and function</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner.jpg-L2kLGDKWsAVpQGgEbAlrL0nAvI87fK.jpeg"
                  alt="Premium material selection for modern bedroom"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Materials</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Material Selection Board</h3>
              <p className="text-muted-foreground">Premium materials and finishes specification</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner.jpg-ZxmPcXKW73eJOUcijGjjp8l4iFChit.jpeg"
                  alt="Design consultation and style development meeting"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Style Guide</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Style Consultation</h3>
              <p className="text-muted-foreground">Personalized style development and mood boards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design & Planning Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures every aspect of your interior design is carefully planned and executed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Styles We Specialize In</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From modern minimalism to classic elegance, we work with various design styles to match your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designStyles.map((style, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={style.image || "/placeholder.svg"}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{style.name}</CardTitle>
                  <CardDescription className="text-base">{style.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures your design vision is realized perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your lifestyle, preferences, and functional needs.",
              },
              {
                step: "02",
                title: "Concept Development",
                description: "Creating initial design concepts and mood boards for your approval.",
              },
              {
                step: "03",
                title: "Detailed Planning",
                description: "Developing comprehensive plans with specifications and timelines.",
              },
              {
                step: "04",
                title: "Implementation Support",
                description: "Guiding the execution process to ensure design integrity.",
              },
            ].map((process, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Design & Planning Service?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Personalized Approach</h3>
                    <p className="text-muted-foreground">
                      Every design is tailored to your unique lifestyle and preferences.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-muted-foreground">
                      Professional advice on materials, colors, and layout optimization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Budget Optimization</h3>
                    <p className="text-muted-foreground">
                      Smart planning that maximizes impact within your budget constraints.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Timeless Design</h3>
                    <p className="text-muted-foreground">
                      Creating spaces that remain beautiful and functional for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner.jpg-ZxmPcXKW73eJOUcijGjjp8l4iFChit.jpeg"
                alt="Design consultation meeting with interior designer"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Plan Your Dream Space?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-balance">
            Let's work together to create a comprehensive design plan that perfectly reflects your style and meets your
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/pricing">View Design Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
