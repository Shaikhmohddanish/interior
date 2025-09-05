import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Layout, PenTool, Building } from "lucide-react"

export function ServicesOverview() {
  const services = [
    {
      icon: Layout,
      title: "2D/3D Layouts",
      description:
        "Visualize your space with detailed 2D floor plans and stunning 3D renderings that bring your vision to life.",
      features: ["Floor Plans", "3D Visualizations", "Virtual Tours", "Material Selection"],
      href: "/services/layouts",
    },
    {
      icon: PenTool,
      title: "Design & Planning",
      description:
        "Comprehensive design solutions tailored to your lifestyle, preferences, and functional requirements.",
      features: ["Space Planning", "Color Schemes", "Furniture Selection", "Lighting Design"],
      href: "/services/design-planning",
    },
    {
      icon: Building,
      title: "Turnkey Projects",
      description:
        "Complete end-to-end solutions from concept to completion, handling every aspect of your interior transformation.",
      features: ["Project Management", "Contractor Coordination", "Quality Control", "Timely Delivery"],
      href: "/services/turnkey",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From initial concept to final execution, we offer comprehensive interior design services tailored to your
            unique needs and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
