import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact SRK Interior Designer - Get Free Consultation | +91 9819393613",
  description: "Contact SRK Interior Designer for free consultation. Call +91 9819393613 or email info@srkinteriordesigner.com. Serving Mumbai, Pune, Bangalore. Get your interior design quote today.",
  keywords: ["contact interior designer", "free consultation", "interior design quote", "Mumbai interior designer contact", "SRK interior designer phone", "interior design consultation"],
  openGraph: {
    title: "Contact SRK Interior Designer - Get Free Consultation",
    description: "Contact us for free interior design consultation. Call +91 9819393613 or fill our contact form.",
    images: ["/modern-office-interior-design-workspace.png"],
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "+91 9819393613",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@srkinteriordesigner.com",
      description: "Send us your project details",
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: "Mumbai, Pune, Bangalore & More",
      description: "We serve major cities across India",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
      description: "Sunday by appointment only",
    },
  ]

  const roomTypes = [
    "Living Room",
    "Bedroom",
    "Master Bedroom",
    "Kitchen",
    "Bathroom",
    "Foyer Area & Safety Door",
    "Commercial Space",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Get In Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your space? Contact us today for a free consultation and let's discuss how we can bring
              your interior design vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow border-border/50">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="font-semibold text-primary mb-2">{info.details}</div>
                  <CardDescription className="text-sm">{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you within 24 hours
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your full name" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input id="mobile" placeholder="Your mobile number" className="bg-background" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="Your email address" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Your city" className="bg-background" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="package">Select Package *</Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Choose a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Package - ₹6,999</SelectItem>
                        <SelectItem value="premium">Premium Package - ₹8,499</SelectItem>
                        <SelectItem value="ultra-premium">Ultra Premium Package - ₹10,499</SelectItem>
                        <SelectItem value="luxury">Luxury Package - ₹14,499</SelectItem>
                        <SelectItem value="custom">Custom Quote Required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Select Interests</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {roomTypes.map((room, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`room-${index}`} />
                          <Label htmlFor={`room-${index}`} className="text-sm font-normal">
                            {room}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, timeline, and any specific preferences..."
                      className="min-h-[120px] bg-background"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Form
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    Our Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">Serving major cities across India</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Primary Cities</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Mumbai</li>
                        <li>Pune</li>
                        <li>Bangalore</li>
                        <li>Chennai</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Extended Areas</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Delhi NCR</li>
                        <li>Hyderabad</li>
                        <li>Goa</li>
                        <li>Ahmedabad</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                  <CardDescription>Need immediate assistance? Reach out directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">Call Now</div>
                      <div className="text-sm text-muted-foreground">+91 9819393613</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-sm text-muted-foreground">info@srkinteriordesigner.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-primary text-primary-foreground border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6" />
                    <h3 className="font-semibold text-lg">Response Guarantee</h3>
                  </div>
                  <p className="text-sm opacity-90">
                    We respond to all inquiries within 24 hours. For urgent projects, call us directly for immediate
                    assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens Next?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what you can expect after reaching out to us for your interior design project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Contact",
                description: "We'll respond within 24 hours to schedule your free consultation call.",
                icon: Phone,
              },
              {
                step: "02",
                title: "Consultation Call",
                description: "Detailed discussion about your requirements, budget, and timeline.",
                icon: MessageCircle,
              },
              {
                step: "03",
                title: "Proposal & Quote",
                description: "Customized proposal with detailed scope, timeline, and transparent pricing.",
                icon: Send,
              },
              {
                step: "04",
                title: "Project Kickoff",
                description: "Once approved, we begin the design process with site visit and measurements.",
                icon: MapPin,
              },
            ].map((process, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <process.icon className="w-8 h-8 text-primary mx-auto mb-4" />
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

      <Footer />
    </main>
  )
}
