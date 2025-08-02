// This file structure is identical to the other service pages.
// Only the data (features, processStats, faqs) and hero title change.

import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const features = [
  { name: "End-to-End Solution" },
  { name: "Timely Delivery" },
  { name: "Creative Designs" },
  { name: "Expert Team" },
  { name: "Seamless Execution" },
  { name: "Cost-Effective" },
  { name: "Transparent Pricing" },
  { name: "Post-Completion Support" },
]

const processStats = [
  {
    percentage: "95%",
    title: "Concept & Planning",
    description: "We understand your vision and create a comprehensive design.",
  },
  {
    percentage: "98%",
    title: "Execution & Implementation",
    description: "We ensure timely and precise project execution.",
  },
  {
    percentage: "100%",
    title: "Final Touches & Handover",
    description: "We handle every detail before handing over your space.",
  },
]

const faqs = [
  {
    question: "What is a Turnkey Project?",
    answer:
      "A turnkey project is a complete service where we handle everything from design to construction, so you just move in once it's done.",
  },
  {
    question: "How long will the project take?",
    answer:
      "The duration depends on the scope and scale of the project. We provide a detailed timeline after the initial planning phase.",
  },
  {
    question: "What's included in a Turnkey Project?",
    answer:
      "It includes design, material procurement, project management, construction, and final handover. It's a hassle-free, all-inclusive service.",
  },
  {
    question: "How much will it cost?",
    answer:
      "The cost is determined by the project's requirements. We provide a transparent and detailed quotation with no hidden charges.",
  },
]

// Reusing the same components from the other service page

export default function PageTurnkey() {
  return (
    <div className="space-y-12">
      <PageHero title="Turnkey Projects" breadcrumb="Turnkey Projects" />
      <MainContent />
      <ProcessStatsSection />
      <FaqSection />
    </div>
  )
}

function PageHero({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <section className="relative w-full h-[40vh] rounded-2xl overflow-hidden">
      <Image src="/images/services/turnkey/banner.jpg" alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <div className="flex items-center gap-2 mt-4">
          <Link href="/" className="hover:underline">
            SRK Interiors
          </Link>
          <ChevronRight className="h-5 w-5" />
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <ChevronRight className="h-5 w-5" />
          <span>{breadcrumb}</span>
        </div>
      </div>
    </section>
  )
}

function MainContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <p className="text-gray-600 text-lg">
          <span className="text-4xl font-bold text-[#C0A080] float-left mr-2">A</span>t SRK Interiors, we specialize in
          delivering complete turnkey solutions that transform your vision into reality. From initial design concepts to
          the final handover, we manage every aspect of the project with precision and care. Our turnkey service is
          designed to be completely hassle-free, allowing you to focus on what matters while we create your dream space.
        </p>
        <ul className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <li key={feature.name} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Image
          src="/images/services/turnkey/feature.jpg"
          alt="Beautifully finished interior"
          width={500}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}

function ProcessStatsSection() {
  return (
    <div className="space-y-8">
      <p className="text-gray-600 text-center max-w-3xl mx-auto">
        Our turnkey projects offer a comprehensive, hassle-free solution, taking care of every aspect from concept to
        completion. With a focus on quality, timeliness, and personalized design, we ensure that your vision becomes a
        reality without the stress of managing multiple vendors and contractors.
      </p>
      <div className="grid sm:grid-cols-3 gap-8 text-center">
        {processStats.map((stat) => (
          <div key={stat.title}>
            <div className="w-32 h-32 rounded-full bg-[#C0A080]/20 flex items-center justify-center text-4xl font-bold text-[#C0A080] mx-auto">
              {stat.percentage}
            </div>
            <h4 className="text-xl font-bold mt-4">{stat.title}</h4>
            <p className="text-gray-500 mt-1">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function FaqSection() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-6">Get the answers to common queries about our services</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-base text-gray-600">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
