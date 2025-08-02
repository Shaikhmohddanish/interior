import Image from "next/image"

export function ProcessSteps() {
  const steps = [
    {
      title: "Personalized Site Visit",
      description: "We visit your space to understand its unique qualities and your design vision.",
    },
    { title: "Complimentary 2D Layout", description: "Visualizing the potential with an initial floor plan." },
    { title: "Detailed Quotation", description: "Transparent pricing with a full breakdown of costs." },
    { title: "Realistic 3D Design", description: "Bringing the design to life with photorealistic 3D renderings." },
    {
      title: "Professional Execution",
      description: "Our skilled team brings the design to reality with precision and care.",
    },
  ]
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-[#C0A080]">SIMPLE STEPS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">From Vision to Reality in 5 Steps</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#C0A080]/20 text-[#C0A080] rounded-full flex items-center justify-center font-bold text-lg">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-gray-500 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src="/images/process/interior-design-process.jpg"
              alt="Interior designer at a construction site"
              width={500}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
