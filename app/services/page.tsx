import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Layout, PenTool, Building, ArrowRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Services - 2D/3D Layouts, Design Planning & Turnkey Projects",
  description: "Professional interior design services starting from ₹6,999. 2D/3D layouts, design planning, and turnkey projects. Get expert consultation for homes and offices in Mumbai, Pune, Bangalore.",
  keywords: ["interior design services", "2D 3D layouts", "turnkey interior projects", "design planning", "home interior design", "office interior design", "Mumbai interior services"],
  openGraph: {
    title: "Interior Design Services - 2D/3D Layouts & Turnkey Projects",
    description: "Professional interior design services starting from ₹6,999. Complete home and office solutions.",
    images: ["/3d-interior-design-layout-visualization.png"],
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: Layout,
      title: "2D/3D Layouts",
      description: "Transform your vision into reality with detailed floor plans and stunning 3D visualizations.",
      features: [
        "Detailed 2D Floor Plans",
        "Photorealistic 3D Renderings",
        "Virtual Reality Tours",
        "Material & Texture Selection",
        "Lighting Simulation",
        "Multiple Design Options",
      ],
      image: "/3d-interior-design-layout-visualization.png",
      href: "/services/layouts",
      price: "Starting from ₹6,999",
    },
    {
      icon: PenTool,
      title: "Design & Planning",
      description: "Comprehensive design solutions tailored to your lifestyle and functional requirements.",
      features: [
        "Space Planning & Optimization",
        "Color Scheme Development",
        "Furniture Selection & Layout",
        "Lighting Design Strategy",
        "Material Specification",
        "Style Consultation",
      ],
      image: "/interior-design-planning-consultation.png",
      href: "/services/design-planning",
      price: "Starting from ₹8,499",
    },
    {
      icon: Building,
      title: "Turnkey Projects",
      description: "Complete end-to-end solutions from initial concept to final project completion.",
      features: [
        "Project Management",
        "Contractor Coordination",
        "Quality Control & Supervision",
        "Timeline Management",
        "Budget Optimization",
        "Final Handover",
      ],
      image: "/turnkey-interior-design-project-completion.png",
      href: "/services/turnkey",
      price: "Starting from ₹10,499",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              From initial concept to final execution, we offer comprehensive interior design services tailored to your
              unique needs and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                      <p className="text-primary font-medium">{service.price}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href={service.href} className="flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure every project meets your expectations and delivers exceptional
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your vision, requirements, and budget.",
              },
              {
                step: "02",
                title: "Design Development",
                description: "Creating detailed plans, 3D visualizations, and material selections.",
              },
              {
                step: "03",
                title: "Approval & Refinement",
                description: "Review designs together and make necessary adjustments.",
              },
              {
                step: "04",
                title: "Implementation",
                description: "Project execution with quality control and timeline management.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-balance">
            Let's discuss your specific needs and create a customized solution that brings your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
