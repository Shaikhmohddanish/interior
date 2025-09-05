import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Layout, Eye, Palette, Ruler, Lightbulb, Monitor } from "lucide-react"

export default function LayoutsPage() {
  const features = [
    {
      icon: Ruler,
      title: "Detailed 2D Floor Plans",
      description: "Precise technical drawings showing room layouts, dimensions, and spatial relationships.",
    },
    {
      icon: Eye,
      title: "Photorealistic 3D Renderings",
      description: "High-quality visualizations that show exactly how your space will look when completed.",
    },
    {
      icon: Monitor,
      title: "Virtual Reality Tours",
      description: "Immersive VR experiences that let you walk through your space before construction begins.",
    },
    {
      icon: Palette,
      title: "Material & Texture Selection",
      description: "Detailed material specifications with realistic textures and finishes.",
    },
    {
      icon: Lightbulb,
      title: "Lighting Simulation",
      description: "Accurate lighting studies showing natural and artificial light throughout the day.",
    },
    {
      icon: Layout,
      title: "Multiple Design Options",
      description: "Various layout alternatives to help you choose the perfect configuration.",
    },
  ]

  const packages = [
    {
      name: "Standard Package",
      price: "₹6,999",
      coverage: "Room Design (150 sq. ft.)",
      features: [
        "4 Standard 3D Views",
        "2 Revisions",
        "Pre-designed Models",
        "10-Day Support",
        "Material Details Included",
        "2 Free Virtual Meetings",
      ],
    },
    {
      name: "Premium Package",
      price: "₹8,499",
      coverage: "Room Design (250 sq. ft.)",
      features: [
        "5 HD 3D Views",
        "3 Revisions",
        "2D Furniture Layout",
        "14-Day Support",
        "Concept Creation Assistance",
        "3 Free Virtual Meetings",
      ],
    },
    {
      name: "Ultra Premium Package",
      price: "₹10,499",
      coverage: "Room Design (350 sq. ft.)",
      features: [
        "6 HD Views + Virtual Tour",
        "Bespoke Custom Design",
        "2D Detailed Drawings",
        "7-Day Design Delivery",
        "1 Site Visit",
        "5 Free Virtual Meetings",
      ],
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
                  <Layout className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">2D/3D Layouts</h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your vision into reality with our detailed 2D floor plans and stunning 3D visualizations. See
                your space come to life before construction begins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href="/projects">View Examples</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2d-3d-layouts.jpg-ITdOFXoJgQHQy9AFFivICzV7c5GS0H.jpeg"
                alt="Designer working on 2D/3D layouts at desk"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layout Examples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of 2D floor plans and 3D visualizations across different room types and styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/contact" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/modern-living-room-3d-layout-design.png"
                  alt="Modern Living Room 3D Layout"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Get Quote</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Living Room</h3>
              <p className="text-muted-foreground">3D visualization with furniture layout and lighting</p>
            </Link>

            <Link href="/contact" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/luxury-bedroom-2d-floor-plan-layout.png"
                  alt="Luxury Bedroom 2D Floor Plan"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Get Quote</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Master Bedroom Suite</h3>
              <p className="text-muted-foreground">Detailed 2D floor plan with dimensions</p>
            </Link>

            <Link href="/contact" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/contemporary-kitchen-3d-interior-design-layout.png"
                  alt="Contemporary Kitchen 3D Layout"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Get Quote</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contemporary Kitchen</h3>
              <p className="text-muted-foreground">3D rendering with material specifications</p>
            </Link>

            <Link href="/contact" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/office-workspace-2d-layout-design-plan.png"
                  alt="Office Workspace 2D Layout"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Get Quote</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Office Workspace</h3>
              <p className="text-muted-foreground">Efficient layout planning for productivity</p>
            </Link>

            <Link href="/contact" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/luxury-bathroom-3d-visualization-interior.png"
                  alt="Luxury Bathroom 3D Visualization"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Get Quote</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Bathroom</h3>
              <p className="text-muted-foreground">Photorealistic 3D visualization</p>
            </Link>

            <Link href="/contact" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/dining-room-2d-3d-layout-design-plan.png"
                  alt="Dining Room Layout Design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Get Quote</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Elegant Dining Room</h3>
              <p className="text-muted-foreground">Combined 2D and 3D layout presentation</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our 2D/3D layout service provides comprehensive visualization tools to help you make informed design
              decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layout Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your project size and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.coverage}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">Choose Package</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Layout Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial measurements to final 3D visualization, we ensure every detail is perfect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Survey",
                description: "Accurate measurements and site analysis to understand your space.",
              },
              {
                step: "02",
                title: "2D Planning",
                description: "Detailed floor plans with precise dimensions and layout options.",
              },
              {
                step: "03",
                title: "3D Modeling",
                description: "Creating photorealistic 3D models with materials and lighting.",
              },
              {
                step: "04",
                title: "Final Delivery",
                description: "Complete package with all drawings, renderings, and virtual tours.",
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Visualize Your Space?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-balance">
            Get detailed 2D plans and stunning 3D visualizations that bring your interior design vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">Start Your Layout</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/pricing">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
