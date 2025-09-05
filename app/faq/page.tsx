import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      faqs: [
        {
          question: "What types of interior design services do you offer?",
          answer:
            "We offer comprehensive interior design services including 2D/3D layouts, complete design planning, material selection, and turnkey project execution. Our services cover residential, commercial, and hospitality spaces with packages ranging from basic design consultation to complete project management.",
        },
        {
          question: "Which cities do you serve?",
          answer:
            "We primarily serve Mumbai, Pune, Bangalore, Chennai, Delhi NCR, Hyderabad, Goa, and Ahmedabad. We also consider projects in other major cities across India. Contact us to confirm service availability in your area.",
        },
        {
          question: "How experienced is your team?",
          answer:
            "SRK Interior Designer has been in business since 2016 with over 8 years of experience. Our team includes qualified interior designers, civil engineers, and project managers who have successfully completed 50+ projects across various sectors.",
        },
        {
          question: "Do you handle both residential and commercial projects?",
          answer:
            "Yes, we handle both residential and commercial projects. Our portfolio includes apartments, villas, offices, retail stores, restaurants, and hospitality spaces. Each project is tailored to meet specific functional and aesthetic requirements.",
        },
      ],
    },
    {
      title: "Design Process",
      icon: MessageCircle,
      faqs: [
        {
          question: "What is your design process?",
          answer:
            "Our process includes: 1) Initial consultation and requirement gathering, 2) Site survey and measurements, 3) Concept development and 3D visualization, 4) Design refinement with client feedback, 5) Final design delivery with detailed drawings and material specifications, 6) Optional execution and project management.",
        },
        {
          question: "How long does the design process take?",
          answer:
            "Design delivery timelines vary by package: Standard (10 days), Premium (14 days), Ultra Premium (7 days), and Luxury (10 days). These timelines begin after receiving the advance payment and completing the initial consultation.",
        },
        {
          question: "Can I see 3D visualizations of my space?",
          answer:
            "Yes, all our packages include high-quality 3D visualizations. The number of views varies by package, from 4 standard views in the Standard package to 6 HD views plus virtual tours in premium packages.",
        },
        {
          question: "How many revisions are included?",
          answer:
            "Revision limits vary by package: Standard (2 revisions), Premium (3 revisions), Ultra Premium (3 revisions), and Luxury (4 revisions). Additional revisions beyond the package limit are available at ₹1,000 per revision.",
        },
      ],
    },
    {
      title: "Pricing & Packages",
      icon: Phone,
      faqs: [
        {
          question: "What's included in the room design area?",
          answer:
            "The specified square footage covers the main room area being designed. Additional spaces like attached bathrooms, balconies, or walk-in closets may incur extra charges based on complexity and design requirements.",
        },
        {
          question: "Are there any hidden costs?",
          answer:
            "No, we believe in transparent pricing. All package features are clearly listed, and any additional services or changes to the original scope will be communicated and approved before proceeding. You only pay for what you agree to.",
        },
        {
          question: "Can I upgrade my package after starting?",
          answer:
            "Yes, you can upgrade to a higher package at any time during the design process. You'll only pay the difference between packages, and we'll incorporate the additional features into your ongoing project.",
        },
        {
          question: "Do you offer custom packages?",
          answer:
            "Yes, we can create custom packages for unique requirements or larger projects. Contact us with your specific needs, and we'll provide a tailored proposal with transparent pricing.",
        },
      ],
    },
    {
      title: "Project Execution",
      icon: Mail,
      faqs: [
        {
          question: "Do you provide turnkey execution services?",
          answer:
            "Yes, we offer complete turnkey execution services including contractor coordination, material procurement, project management, and quality supervision. This is available as an add-on service to our design packages.",
        },
        {
          question: "How do you ensure quality during execution?",
          answer:
            "We have a dedicated project management team that conducts regular site visits, quality inspections, and progress monitoring. We also provide detailed specifications to contractors and maintain direct communication with all stakeholders.",
        },
        {
          question: "What if I want to execute the design myself?",
          answer:
            "All our packages include detailed drawings and material specifications that you can use with your own contractors. We also provide technical support during execution to ensure the design is implemented correctly.",
        },
        {
          question: "Do you help with material procurement?",
          answer:
            "Yes, we offer material procurement services at 5% of the material cost. We have established relationships with suppliers and can source materials at competitive prices while ensuring quality and authenticity.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our interior design services, process, and packages.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                </div>

                <Card className="border-border/50">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border-border/50"
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/30">
                            <span className="font-medium">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl mb-4">Still Have Questions?</CardTitle>
              <CardDescription className="text-lg">
                Can't find the answer you're looking for? Our team is here to help you with any specific questions about
                your interior design project.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground text-sm mb-4">Speak directly with our design consultants</p>
                    <p className="font-medium text-primary">+91 9819393613</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-4">Send us your detailed questions</p>
                    <p className="font-medium text-primary">info@srkinteriordesigner.com</p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/pricing">View Our Packages</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
