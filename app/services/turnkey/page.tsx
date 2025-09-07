import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building, Users, CheckCircle, Clock, Shield, Award } from "lucide-react"

export default function TurnkeyPage() {
  const services = [
    {
      icon: Users,
      title: "Project Management",
      description: "Dedicated project managers overseeing every aspect of your interior transformation.",
    },
    {
      icon: Building,
      title: "Contractor Coordination",
      description: "Managing all contractors and vendors to ensure seamless project execution.",
    },
    {
      icon: CheckCircle,
      title: "Quality Control & Supervision",
      description: "Regular inspections and quality checks to maintain the highest standards.",
    },
    {
      icon: Clock,
      title: "Timeline Management",
      description: "Strict adherence to project schedules with regular progress updates.",
    },
    {
      icon: Shield,
      title: "Budget Optimization",
      description: "Cost-effective solutions without compromising on quality or design vision.",
    },
    {
      icon: Award,
      title: "Final Handover",
      description: "Complete project delivery with documentation and maintenance guidelines.",
    },
  ]

  const projectTypes = [
    {
      title: "Residential Apartments",
      description: "Complete home transformations from concept to move-in ready.",
      features: [
        "Full home renovation",
        "Kitchen & bathroom upgrades",
        "Living space optimization",
        "Custom storage solutions",
      ],
      image: "/residential-apartment-turnkey-project.png",
    },
    {
      title: "Office Spaces",
      description: "Professional workspace design that enhances productivity and brand image.",
      features: ["Open office layouts", "Meeting room design", "Reception area styling", "Ergonomic workstations"],
      image: "/office-space-turnkey-interior-project.png",
    },
    {
      title: "Commercial Spaces",
      description: "Retail and hospitality spaces designed to create memorable customer experiences.",
      features: ["Retail store design", "Restaurant interiors", "Hotel room styling", "Brand-focused aesthetics"],
      image: "/commercial-space-turnkey-interior-design.png",
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
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Turnkey Projects</h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete end-to-end interior design solutions from initial concept to final project completion. We
                handle everything so you can simply enjoy your transformed space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href="/projects">View Completed Projects</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/turnkey-project-management-interior-design.png"
                alt="Turnkey project consultation with interior designers"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Projects Portfolio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Turnkey Projects Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our completed turnkey projects showcasing end-to-end interior transformations across various
              spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/luxury-apartment-turnkey-renovation-project.png"
                  alt="Luxury Apartment Turnkey Project"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project Details</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Apartment Renovation</h3>
              <p className="text-muted-foreground">Complete 3BHK transformation with modern amenities</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/corporate-office-turnkey-interior-design.png"
                  alt="Corporate Office Turnkey Design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project Details</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Corporate Office Design</h3>
              <p className="text-muted-foreground">Professional workspace with ergonomic solutions</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/restaurant-interior-turnkey-project.png"
                  alt="Restaurant Interior Turnkey Project"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project Details</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Restaurant Interior Design</h3>
              <p className="text-muted-foreground">Complete dining space with kitchen integration</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/villa-turnkey-interior-design-project.png"
                  alt="Villa Turnkey Interior Project"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project Details</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Villa Interior Transformation</h3>
              <p className="text-muted-foreground">Luxury villa with custom furniture and lighting</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/retail-store-turnkey-interior-design.png"
                  alt="Retail Store Turnkey Design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project Details</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retail Store Design</h3>
              <p className="text-muted-foreground">Brand-focused retail space with customer flow optimization</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/hotel-room-turnkey-interior-project.png"
                  alt="Hotel Room Turnkey Project"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project Details</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hotel Room Interior</h3>
              <p className="text-muted-foreground">Hospitality design with comfort and functionality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Project Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our turnkey approach means you get a single point of contact for your entire interior design project.
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

      {/* Project Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Turnkey Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle complete interior transformations for various types of spaces and requirements.
            </p>
          </div>

          <div className="space-y-20">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Turnkey Project Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures smooth project execution from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Understanding your vision, requirements, and budget parameters.",
              },
              {
                step: "02",
                title: "Design Development",
                description: "Creating comprehensive design plans and obtaining your approval.",
              },
              {
                step: "03",
                title: "Project Planning",
                description: "Detailed timeline, resource allocation, and contractor selection.",
              },
              {
                step: "04",
                title: "Execution Phase",
                description: "Managing all aspects of construction and installation work.",
              },
              {
                step: "05",
                title: "Final Handover",
                description: "Quality inspection, cleanup, and project documentation delivery.",
              },
            ].map((process, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{process.description}</CardDescription>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Turnkey Solutions?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Single Point of Contact</h3>
                    <p className="text-muted-foreground">
                      One team managing all aspects of your project for seamless coordination.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Time & Stress Savings</h3>
                    <p className="text-muted-foreground">
                      We handle all the complexities while you focus on your daily life.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground">Rigorous quality control at every stage of the project.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cost Transparency</h3>
                    <p className="text-muted-foreground">Clear pricing with no hidden costs or surprise expenses.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/turnkey-project-management-interior-design.png"
                alt="Project Management"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready for a Complete Transformation?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-balance">
            Let us handle every aspect of your interior design project from concept to completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">Start Your Turnkey Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/pricing">View Project Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
