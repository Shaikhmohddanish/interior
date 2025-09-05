import { AnimatedCounter } from "@/components/animated-counter"

export function StatsSection() {
  const stats = [
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 8, suffix: "+", label: "Years Experience" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
    { number: 2016, suffix: "", label: "Established" },
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter 
                end={stat.number}
                suffix={stat.suffix}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                duration={2500}
              />
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
