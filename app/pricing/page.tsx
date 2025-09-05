import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Check, Star, Users, Clock, Eye, FileText, MapPin, Phone } from "lucide-react"

export default function PricingPage() {
  const packages = [
    {
      name: "Standard Package",
      price: "₹6,999",
      popular: false,
      description: "Perfect for single room makeovers with essential design elements",
      features: [
        "Room Design (150 sq. ft.)",
        "Styles: Modern, Minimal, Contemporary",
        "4 Standard 3D Views",
        "2 Revisions",
        "Pre-designed Models (No Custom Designs)",
        "10-Day Support",
        "Material Details Included",
        "2 Free Virtual Meetings",
      ],
      icon: Eye,
      color: "border-border",
    },
    {
      name: "Premium Package",
      price: "₹8,499",
      popular: true,
      description: "Enhanced design package with additional features and support",
      features: [
        "Room Design (250 sq. ft.)",
        "Styles: Modern, Minimal, Contemporary",
        "5 HD 3D Views",
        "3 Revisions",
        "Pre-designed Models (No Custom Designs)",
        "2D Furniture Layout",
        "14-Day Support",
        "Concept Creation Assistance",
        "Material Details Included",
        "2D Working Drawings",
        "3 Free Virtual Meetings",
      ],
      icon: FileText,
      color: "border-primary",
    },
    {
      name: "Ultra Premium Package",
      price: "₹10,499",
      popular: false,
      description: "Custom design solutions with site visit and technical support",
      features: [
        "Room Design (350 sq. ft.)",
        "Styles: Modern, Minimal, Contemporary",
        "6 HD Views + Virtual Tour",
        "3 Design Revisions",
        "Bespoke Custom Design",
        "Material Details & Bill of Quantity",
        "2D Detailed Drawings",
        "7-Day Design Delivery",
        "Concept Creation Assistance",
        "1 Site Visit",
        "Technical Support During Working Hours",
        "5 Free Virtual Meetings",
      ],
      icon: MapPin,
      color: "border-border",
    },
    {
      name: "Luxury Package",
      price: "₹14,499",
      popular: false,
      description: "Complete design solution with comprehensive support and assistance",
      features: [
        "Room Design (350 sq. ft.)",
        "Styles: Modern, Minimal, Contemporary",
        "2 Designs + 6 HD Views + Virtual Tour",
        "4 Design Revisions",
        "Bespoke Custom Design",
        "Material Details & Bill of Quantity",
        "2D Detailed Drawings",
        "10-Day Design Delivery",
        "Concept Creation Assistance",
        "2 Site Visits",
        "Technical Support During Working Hours",
        "5 Free Virtual Meetings",
        "Budgeting Assistance",
        "Contractor Selection Support",
      ],
      icon: Star,
      color: "border-border",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Transparent Pricing for Every Need
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Choose from our carefully crafted packages designed to suit different project requirements and budgets. No
              hidden costs, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-all duration-300 ${pkg.color} ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <pkg.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <CardDescription className="text-sm">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      pkg.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                    }`}
                  >
                    <Link href="/contact">Choose Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your design package with our specialized add-on services for a complete interior solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Site Survey & Measurement",
                price: "₹2,000",
                description: "Professional site measurement and documentation for accurate design planning.",
                icon: MapPin,
              },
              {
                title: "Additional 3D Views",
                price: "₹500 each",
                description: "Extra high-quality 3D renderings from different angles and perspectives.",
                icon: Eye,
              },
              {
                title: "Virtual Reality Tour",
                price: "₹3,000",
                description: "Immersive VR experience to walk through your designed space before execution.",
                icon: Users,
              },
              {
                title: "Project Management",
                price: "₹5,000/month",
                description: "Complete project oversight and coordination with contractors and vendors.",
                icon: Clock,
              },
              {
                title: "Material Procurement",
                price: "5% of material cost",
                description: "Professional sourcing and procurement of all design materials and furnishings.",
                icon: FileText,
              },
              {
                title: "Installation Supervision",
                price: "₹3,000/day",
                description: "On-site supervision during installation to ensure quality and accuracy.",
                icon: Phone,
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <div className="text-xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-sm">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our pricing and services to help you make an informed decision.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the room design area?",
                answer:
                  "The specified square footage covers the main room area. Additional spaces like balconies, attached bathrooms, or walk-in closets may incur extra charges based on complexity.",
              },
              {
                question: "Can I upgrade my package after starting?",
                answer:
                  "Yes, you can upgrade to a higher package at any time. You'll only pay the difference, and we'll incorporate the additional features into your ongoing project.",
              },
              {
                question: "What if I need more revisions than included?",
                answer:
                  "Additional revisions beyond the package limit are available at ₹1,000 per revision. We recommend discussing all requirements upfront to minimize extra revisions.",
              },
              {
                question: "Do you provide turnkey execution services?",
                answer:
                  "Yes, we offer complete turnkey execution services separately. This includes contractor coordination, material procurement, and project management for the actual implementation.",
              },
              {
                question: "What's the typical project timeline?",
                answer:
                  "Design delivery timelines are mentioned in each package. Actual execution timelines depend on project scope and typically range from 4-12 weeks for residential projects.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-balance">
            Choose the perfect package for your needs or contact us for a custom quote tailored to your specific
            requirements.
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
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
