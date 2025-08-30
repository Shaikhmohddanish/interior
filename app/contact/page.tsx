"use client"

import { useActionState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ArrowUpRight, Sofa, DraftingCompass, Layers, Home } from "lucide-react"
import { submitContactForm } from "./actions"

const serviceCards = [
  {
    icon: Sofa,
    title: "Modern Living Area",
    description: "Iterative methods of developing the corporate strategy.",
  },
  {
    icon: Home,
    title: "Interior Design",
    description: "We create the complete set of project information.",
  },
  {
    icon: DraftingCompass,
    title: "3D Design Layouts",
    description: "Iterative methods of developing the corporate strategy.",
  },
  {
    icon: Layers,
    title: "Remodel Spaces",
    description: "We create the complete set of project information.",
  },
]

const interestOptions = [
  "Living Room",
  "Bedroom",
  "Master Bedroom",
  "Kitchen",
  "Bathroom",
  "Foyer Area & Safety Door",
  "Commercial Space",
]

const initialState = {
  message: "",
  success: false,
}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F2]">
      <Header />
      <main className="flex-1">
        <PageHero />
        <ServiceCardsSection />
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-widest text-[#C0A080]">CONTACT US</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Have questions or need assistance?</h2>
                <p className="text-gray-600">
                  Whether you're ready to start your project, need expert advice, or simply want to explore ideas, our
                  team is here to help. Let's make your vision a reality—reach out to us today!
                </p>
                <div className="w-full h-64 relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/contact/contact-image.jpg"
                    alt="Interior design consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <Card className="p-8 shadow-lg">
                <form action={formAction} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input name="name" placeholder="Name *" required />
                    <Input name="mobile" placeholder="Mobile Number *" required />
                    <Input name="email" type="email" placeholder="Email *" required />
                    <Input name="city" placeholder="City *" required />
                  </div>
                  <Select name="package" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Package *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Package</SelectItem>
                      <SelectItem value="premium">Premium Package</SelectItem>
                      <SelectItem value="ultra-premium">Ultra Premium Package</SelectItem>
                      <SelectItem value="luxury">Luxury Package</SelectItem>
                    </SelectContent>
                  </Select>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Interests</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {interestOptions.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <Checkbox id={item.toLowerCase().replace(/ /g, "-")} name="interests" value={item} />
                          <label htmlFor={item.toLowerCase().replace(/ /g, "-")} className="text-sm">
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Textarea name="message" placeholder="Your Message" rows={4} />
                  <Button type="submit" disabled={isPending} className="w-full bg-[#C0A080] hover:bg-[#A98B70]">
                    {isPending ? "Submitting..." : "Submit Form"}
                  </Button>
                  {state?.message && (
                    <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function PageHero() {
  return (
    <section className="relative w-full h-[50vh]">
      <Image src="/images/contact/banner.jpg" alt="Contact us background" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
        <div className="flex items-center gap-2 mt-4 text-lg">
          <Link href="/" className="hover:underline">
            SRK Interior
          </Link>
          <ChevronRight className="h-5 w-5" />
          <span>Contact Us</span>
        </div>
      </div>
    </section>
  )
}

function ServiceCardsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCards.map((card) => (
            <Card key={card.title} className="p-6 text-center group hover:shadow-xl transition-shadow">
              <CardContent className="p-0 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <card.icon className="w-8 h-8 text-[#C0A080]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600 flex-1">{card.description}</p>
                <div className="mt-4 w-8 h-8 rounded-full bg-gray-200 group-hover:bg-[#C0A080] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
