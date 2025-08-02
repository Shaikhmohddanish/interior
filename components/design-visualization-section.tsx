import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function DesignVisualizationSection() {
  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-0 items-center bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="p-4">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Interior sketch"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Interior render"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 shadow-2xl">
            <ArrowRight className="w-8 h-8 text-gray-800" />
          </div>
        </div>
      </div>
    </section>
  )
}
