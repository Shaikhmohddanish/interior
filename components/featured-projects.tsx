import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "Modern Luxury Apartment",
    location: "Mumbai, Maharashtra",
    image: "/modern-luxury-apartment-interior-design.png",
    category: "Residential",
  },
  {
    id: 2,
    title: "Corporate Office Design",
    location: "Pune, Maharashtra",
    image: "/corporate-office-interior-design-project.png",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Boutique Hotel Interior",
    location: "Goa",
    image: "/boutique-hotel-interior-design-project.png",
    category: "Hospitality",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest interior design transformations that showcase our expertise in creating beautiful,
            functional spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.location}</p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/contact">Get Quote for This Project</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
