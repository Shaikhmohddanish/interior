import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About SRK Interior Designer - 8+ Years of Excellence in Interior Design",
  description: "Learn about SRK Interior Designer - Founded in 2016 by expert team including Master's graduate Maviya Zahoor Rohe and Civil Engineer Mukarim Rizwan Khan. 50+ successful projects across Mumbai, Pune, Bangalore.",
  keywords: ["about SRK interior designer", "interior design team", "Mumbai interior designers", "experience interior design", "founders SRK interior"],
  openGraph: {
    title: "About SRK Interior Designer - 8+ Years of Excellence",
    description: "Learn about our expert interior design team with 50+ successful projects since 2016.",
    images: ["/modern-office-interior-design-workspace.png"],
  },
}

export default function AboutPage() {
  const founders = [
    {
      name: "Sharukh Qureshi",
      role: "Founder & Visionary",
      description: "A visionary with a passion for transforming spaces into extraordinary environments.",
      image: "/professional-interior-designer-portrait.png",
    },
    {
      name: "Id. Maviya Zahoor Rohe",
      role: "Master Interior Designer",
      description: "Master's graduate in Interior Design, bringing creativity and innovation to every project.",
      image: "/female-interior-designer-professional-portrait.png",
    },
    {
      name: "Er. Mukarim Rizwan Khan",
      role: "Civil Engineer",
      description: "Civil Engineer from Mumbai University, focusing on structure and durability in every design.",
      image: "/male-civil-engineer-professional-portrait.png",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Welcome To SRK Interior Designer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Where creativity meets functionality. Since our founding in 2016, we have dedicated ourselves to
              transforming spaces into inspiring environments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mission is clear: to enhance your quality of life through exceptional design. We believe that
                well-designed spaces have the power to inspire, motivate, and transform the way we live and work.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 50 successful projects completed, we have proven our ability to handle diverse spaces,
                including Office Spaces, Residential Apartments, and more. We create environments that foster
                productivity and collaboration, helping your team thrive.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2016</div>
                  <div className="text-sm text-muted-foreground">Since Established</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-office-interior-design-workspace.png"
                alt="Modern Office Interior"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/luxury-residential-apartment-interior-design.png"
                alt="Luxury Residential Interior"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Experience</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our designs offer guests a memorable experience, making them feel welcomed and comfortable. We craft
                personalized homes that reflect individual lifestyles, ensuring every detail feels just right.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Spaces</h3>
                    <p className="text-sm text-muted-foreground">Creating productive work environments</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Residential Apartments</h3>
                    <p className="text-sm text-muted-foreground">Personalized homes that reflect your lifestyle</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Commercial Spaces</h3>
                    <p className="text-sm text-muted-foreground">Memorable experiences for your guests</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              SRK Interiors was founded by a team of passionate professionals who bring together creativity, technical
              expertise, and a shared vision for exceptional design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-primary font-medium mb-3">{founder.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{founder.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Together, they create spaces that are as practical as they are beautiful, ensuring every project meets the
              highest standards of design and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Work With Our Expert Team?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-balance">
            Let's discuss your vision and create something extraordinary together. Get in touch for a free consultation
            with our experienced designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/projects">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
