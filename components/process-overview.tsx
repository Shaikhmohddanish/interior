import { MessageSquare, PenTool, Hammer, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We start with understanding your vision, requirements, and budget through detailed discussions.",
  },
  {
    icon: PenTool,
    title: "Design & Planning",
    description: "Our team creates detailed 2D/3D layouts and design concepts tailored to your space and preferences.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description: "We manage the entire implementation process with skilled craftsmen and quality materials.",
  },
  {
    icon: CheckCircle,
    title: "Completion",
    description: "Final inspection and handover of your beautifully transformed space, ready to enjoy.",
  },
]

export function ProcessOverview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Design Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to final completion, we follow a systematic approach to ensure your project is
            delivered seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
