import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/animated-counter"
import Link from "next/link"
import { Calendar, MapPin, Users, Square } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Portfolio - 50+ Completed Projects | SRK Interior Designer",
  description: "Explore our portfolio of 50+ completed interior design projects including luxury apartments, corporate offices, hotels, and residential spaces across Mumbai, Pune, Bangalore. Get inspired for your next project.",
  keywords: ["interior design portfolio", "completed projects", "luxury apartment design", "office interior design", "hotel interior design", "residential projects", "commercial projects"],
  openGraph: {
    title: "Interior Design Portfolio - 50+ Completed Projects",
    description: "Explore our diverse portfolio of residential and commercial interior design projects.",
    images: ["/modern-luxury-apartment-interior-design.png"],
  },
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Modern Luxury Apartment",
      category: "Residential",
      location: "Mumbai, Maharashtra",
      area: "1,200 sq ft",
      duration: "3 months",
      year: "2024",
      description:
        "Complete transformation of a 3BHK apartment with contemporary design elements and smart storage solutions.",
      image: "/modern-luxury-apartment-interior-design.png",
      tags: ["Living Room", "Kitchen", "Master Bedroom"],
    },
    {
      id: 2,
      title: "Corporate Office Redesign",
      category: "Commercial",
      location: "Pune, Maharashtra",
      area: "2,500 sq ft",
      duration: "4 months",
      year: "2024",
      description:
        "Professional workspace design focusing on productivity and employee well-being with modern aesthetics.",
      image: "/corporate-office-interior-design-project.png",
      tags: ["Open Office", "Meeting Rooms", "Reception"],
    },
    {
      id: 3,
      title: "Boutique Hotel Interiors",
      category: "Hospitality",
      location: "Goa",
      area: "5,000 sq ft",
      duration: "6 months",
      year: "2023",
      description: "Elegant hotel interior design combining local cultural elements with contemporary luxury.",
      image: "/boutique-hotel-interior-design-project.png",
      tags: ["Lobby", "Guest Rooms", "Restaurant"],
    },
    {
      id: 4,
      title: "Family Villa Renovation",
      category: "Residential",
      location: "Bangalore, Karnataka",
      area: "3,000 sq ft",
      duration: "5 months",
      year: "2023",
      description: "Complete renovation of a family villa with focus on natural lighting and sustainable materials.",
      image: "/family-villa-renovation-interior-design.png",
      tags: ["Living Areas", "Bedrooms", "Kitchen"],
    },
    {
      id: 5,
      title: "Retail Store Design",
      category: "Commercial",
      location: "Delhi",
      area: "800 sq ft",
      duration: "2 months",
      year: "2023",
      description: "Fashion retail store design with emphasis on brand identity and customer experience.",
      image: "/retail-store-interior-design-project.png",
      tags: ["Display Areas", "Fitting Rooms", "Checkout"],
    },
    {
      id: 6,
      title: "Penthouse Makeover",
      category: "Residential",
      location: "Chennai, Tamil Nadu",
      area: "2,800 sq ft",
      duration: "4 months",
      year: "2023",
      description: "Luxurious penthouse design with panoramic city views and premium finishes throughout.",
      image: "/penthouse-makeover-interior-design.png",
      tags: ["Terrace", "Master Suite", "Entertainment Area"],
    },
    {
      id: 7,
      title: "Contemporary Townhouse",
      category: "Residential",
      location: "Hyderabad, Telangana",
      area: "2,200 sq ft",
      duration: "4 months",
      year: "2024",
      description: "Modern townhouse design with open-plan living and seamless indoor-outdoor integration.",
      image: "/contemporary-townhouse-interior-design.png",
      tags: ["Open Plan", "Garden View", "Modern Kitchen"],
    },
    {
      id: 8,
      title: "Luxury Restaurant Interior",
      category: "Hospitality",
      location: "Mumbai, Maharashtra",
      area: "1,800 sq ft",
      duration: "3 months",
      year: "2024",
      description: "Upscale dining establishment with sophisticated ambiance and premium material palette.",
      image: "/luxury-restaurant-interior-design.png",
      tags: ["Dining Area", "Bar Section", "Private Booths"],
    },
    {
      id: 9,
      title: "Executive Office Suite",
      category: "Commercial",
      location: "Noida, Uttar Pradesh",
      area: "1,500 sq ft",
      duration: "2 months",
      year: "2024",
      description: "High-end executive office with premium finishes and state-of-the-art technology integration.",
      image: "/executive-office-suite-interior-design.png",
      tags: ["Executive Cabin", "Conference Room", "Reception"],
    },
    {
      id: 10,
      title: "Minimalist Studio Apartment",
      category: "Residential",
      location: "Pune, Maharashtra",
      area: "600 sq ft",
      duration: "2 months",
      year: "2024",
      description: "Space-efficient studio design maximizing functionality while maintaining aesthetic appeal.",
      image: "/minimalist-studio-apartment-interior.png",
      tags: ["Space Optimization", "Multi-functional", "Storage Solutions"],
    },
    {
      id: 11,
      title: "Spa & Wellness Center",
      category: "Hospitality",
      location: "Kerala",
      area: "3,500 sq ft",
      duration: "5 months",
      year: "2023",
      description: "Tranquil wellness space incorporating natural elements and calming color schemes.",
      image: "/spa-wellness-center-interior-design.png",
      tags: ["Treatment Rooms", "Reception", "Relaxation Area"],
    },
    {
      id: 12,
      title: "Industrial Loft Conversion",
      category: "Residential",
      location: "Kolkata, West Bengal",
      area: "2,000 sq ft",
      duration: "4 months",
      year: "2023",
      description: "Creative loft space combining industrial elements with modern comfort and functionality.",
      image: "/industrial-loft-conversion-interior.png",
      tags: ["Exposed Brick", "High Ceilings", "Open Layout"],
    },
  ]

  const categories = ["All", "Residential", "Commercial", "Hospitality"]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Our Portfolio</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Explore our collection of completed interior design projects showcasing diverse styles, innovative
              solutions, and exceptional craftsmanship across residential and commercial spaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <AnimatedCounter 
                end={50}
                suffix="+"
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                duration={2500}
              />
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <AnimatedCounter 
                end={8}
                suffix="+"
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                duration={2500}
              />
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <AnimatedCounter 
                end={100}
                suffix="%"
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                duration={2500}
              />
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <AnimatedCounter 
                end={15}
                suffix="+"
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                duration={2500}
              />
              <div className="text-sm text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90 text-foreground border-border/50">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Square className="w-4 h-4" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/contact">Get Quote for This Project</Link>
                  </Button>
                </CardContent>
              </Card>
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
              Every project follows our proven methodology to ensure exceptional results and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "Understanding your vision, lifestyle, and functional requirements through detailed consultation.",
                icon: Users,
              },
              {
                step: "02",
                title: "Design Development",
                description:
                  "Creating comprehensive design concepts with 2D/3D visualizations and material selections.",
                icon: Square,
              },
              {
                step: "03",
                title: "Project Execution",
                description: "Managing all aspects of implementation with regular updates and quality control.",
                icon: Calendar,
              },
              {
                step: "04",
                title: "Final Delivery",
                description: "Completing the project with final styling, documentation, and handover to client.",
                icon: MapPin,
              },
            ].map((process, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <process.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from satisfied clients who trusted us with their interior design projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                project: "Modern Luxury Apartment",
                rating: 5,
                testimonial:
                  "SRK Interior Designer transformed our apartment beyond our expectations. The attention to detail and professional approach made the entire process smooth and enjoyable.",
              },
              {
                name: "Rajesh Kumar",
                project: "Corporate Office Redesign",
                rating: 5,
                testimonial:
                  "Outstanding work on our office space. The team understood our requirements perfectly and delivered a workspace that truly reflects our company culture.",
              },
              {
                name: "Anita Patel",
                project: "Family Villa Renovation",
                rating: 5,
                testimonial:
                  "From concept to completion, the team was professional, creative, and responsive. Our home now feels like a luxury resort. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.testimonial}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.project}</div>
                  </div>
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
            Let's discuss your vision and create a space that reflects your style and meets your needs.
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
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
