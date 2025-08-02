import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessSteps } from "@/components/process-steps"
import { GuaranteesSection } from "@/components/guarantees-section"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChevronRight, CheckCircle2 } from "lucide-react"

const pricingPackages = [
  {
    name: "Standard Package",
    price: "6999",
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
  },
  {
    name: "Premium Package",
    price: "8499",
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
  },
  {
    name: "Ultra Premium Package",
    price: "10499",
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
  },
  {
    name: "Luxury Package",
    price: "14499",
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
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F2]">
      <Header />
      <main className="flex-1">
        <PageHero />
        <PricingSection />
        <ProcessSteps />
        <GuaranteesSection />
      </main>
      <Footer />
    </div>
  )
}

function PageHero() {
  return (
    <section className="relative w-full h-[50vh]">
      <Image src="/images/pricing/banner.jpg" alt="Elegant interior" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold">Pricing</h1>
        <div className="flex items-center gap-2 mt-4 text-lg">
          <Link href="/" className="hover:underline">
            SRK Interiors
          </Link>
          <ChevronRight className="h-5 w-5" />
          <span>Pricing</span>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {pricingPackages.map((pkg) => (
            <Card key={pkg.name} className="flex flex-col rounded-2xl overflow-hidden shadow-lg">
              <CardHeader className="bg-[#3A506B] text-white p-6">
                <CardTitle className="text-2xl text-center">{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold">
                    <span className="text-3xl align-top">₹</span>
                    {pkg.price}
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C0A080]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full bg-[#C0A080] hover:bg-[#A98B70] text-white rounded-lg">
                  Purchase Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
