"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ChevronRight, Plus, Minus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import React from "react"

const features = [
  { name: "Skilled 2D/3D Designers" },
  { name: "Adaptable for All Spaces" },
  { name: "Customer-Centered Approach" },
  { name: "Precision and Accuracy" },
  { name: "Hassle-Free Project Handling" },
  { name: "Innovative Design Solutions" },
]

const processStats = [
  {
    percentage: "0%",
    title: "Site Measurement",
    description: "Accurate measurements for perfect furniture placement and flow.",
  },
  {
    percentage: "0%",
    title: "2D Planning",
    description: "Detailed floor plans that map out every element and execution seamlessly.",
  },
  {
    percentage: "0%",
    title: "3D Modeling",
    description: "High-quality, realistic 3D models that provide an immersive design experience.",
  },
]

const faqs = [
  {
    question: "What is the difference between 2D and 3D layouts?",
    answer:
      "2D layouts are flat, detailed floor plans showing the layout of spaces, while 3D layouts provide a more immersive view, allowing you to visualize the space with depth, textures, and lighting. 3D models offer a realistic perspective on spaces, furniture arrangements, and the overall feel of the environment.",
  },
  {
    question: "Why should I choose 3D layouts for my project?",
    answer:
      "3D layouts help in better visualization, decision-making, and communication. They allow you to see exactly how your space will look, reducing the chances of costly changes during execution.",
  },
  {
    question: "How accurate are the measurements in your designs?",
    answer:
      "We pride ourselves on precision. Our team uses advanced tools for site measurement to ensure that all plans and models are highly accurate, leading to a seamless execution process.",
  },
]

export default function Page2D3D() {
  return (
    <div className="space-y-12">
      <PageHero title="2D/3D Layouts" breadcrumb="2D/3D Layouts" />
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
          <span className="text-4xl font-bold text-[#C0A080] float-left mr-2">A</span>t SRK Interiors, we specialize in
          transforming your ideas into reality through detailed and accurate 2D and 3D layouts. These layouts are more
          than just drawings—they are the blueprint for creating harmonious and functional spaces. Our designs take into
          account spatial flow, furniture arrangement, lighting, and color schemes, ensuring that every element is
          perfectly placed.
        </p>
        <ul className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <li key={feature.name} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#C0A080] fill-[#C0A080]/20" />
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Image
          src="/placeholder.svg?height=400&width=500"
          alt="3D render of a living room"
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
        We understand that creating environments that are not only visually appealing but also enhance well-being. By
        integrating natural elements like wood, stone, and greenery, our 2D/3D layouts reflect biophilic design
        principles that promote better health, reduce stress, and foster a deeper connection with nature.
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
  const [value, setValue] = React.useState("item-0")

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-6">
        Get answers to all your queries about creating the perfect interior design with our precise 2D and 3D layouts.
      </h3>
      <Accordion type="single" collapsible className="w-full" value={value} onValueChange={setValue}>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b">
            <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-4">
              <span className="flex-1">{faq.question}</span>
              {value === `item-${index}` ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 pb-4">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
