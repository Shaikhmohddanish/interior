// This file structure is identical to 2d-3d-layouts/page.tsx
// Only the data (features, processStats, faqs) and hero title change.
// For brevity, I'm showing the structure and you can populate the specific content.

import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const features = [
  { name: "Experienced, time-served engineers" },
  { name: "Commitment to taking the stress out of your project" },
  { name: "Flexible with any structure of the building" },
  { name: "Experienced, time-served engineers" },
  { name: "Commitment to taking the stress out of your project" },
  { name: "Flexible with any structure of the building" },
]

const processStats = [
  {
    percentage: "96%",
    title: "Understand & Conceptualize",
    description: "We discuss your ideas and requirements to finalize your vision.",
  },
  {
    percentage: "97%",
    title: "Plan & Refine",
    description: "With your feedback, we finalize the design and materials.",
  },
  {
    percentage: "100%",
    title: "Approve & Execute",
    description: "Upon approval, we begin implementing the design as planned.",
  },
]

const faqs = [
  {
    question: "What is the Design & Planning process?",
    answer:
      "We first understand your vision, then create and refine the design with your input, making sure it's both beautiful and functional.",
  },
  {
    question: "How long does the Design & Planning take?",
    answer:
      "The timeline varies depending on the project's complexity. We provide a detailed schedule after the initial consultation.",
  },
  {
    question: "Can I make changes to the design?",
    answer:
      "Yes, we have specific stages for revisions to ensure you are completely happy with the plan before execution begins.",
  },
  {
    question: "Do you provide 3D visualizations?",
    answer:
      "Absolutely. 3D visualizations are a key part of our design process, helping you see the final outcome before any work starts.",
  },
]

// Reusing the same components from the other service page
// To keep this DRY, these components could be moved to a shared file
// e.g., components/service-page-blocks.tsx

export default function PageDesignPlanning() {
  return (
    <div className="space-y-12">
      <PageHero title="Design & Planning" breadcrumb="Design & Planning" />
      <MainContent />
      <ProcessStatsSection />
      <FaqSection />
    </div>
  )
}

function PageHero({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <section className="relative w-full h-[40vh] rounded-2xl overflow-hidden">
      <Image src="/placeholder.svg?height=400&width=1200" alt={title} fill className="object-cover" />
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
          <span className="text-4xl font-bold text-[#C0A080] float-left mr-2">W</span>e create custom design solutions
          that blend beauty with practicality, making each space a true reflection of your style and needs. Our design
          and planning process is collaborative and detailed, ensuring that every aspect of the project aligns with your
          expectations. From the first consultation and design ideas to the final layout, our team works closely with
          you at every step to bring your dream space to life in a way that exceeds expectations.
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
          src="/placeholder.svg?height=400&width=500"
          alt="Interior design moodboard"
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
        We understand that designing a space is a personal journey, so we prioritize clear communication and flexibility
        throughout the entire process. Our team works diligently to translate your ideas into actionable plans,
        carefully selecting materials and colors to planning layouts that maximize comfort and efficiency.
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
