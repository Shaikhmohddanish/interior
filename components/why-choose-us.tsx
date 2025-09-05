import { CheckCircle, Users, Award, Clock } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "8+ Years of Excellence",
    description:
      "Established in 2016, we bring extensive experience in transforming spaces across residential and commercial sectors.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team combines creative design expertise with technical engineering knowledge for comprehensive solutions.",
  },
  {
    icon: Award,
    title: "50+ Successful Projects",
    description:
      "We've successfully completed diverse projects, from luxury apartments to corporate offices and hospitality spaces.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We pride ourselves on completing projects on time without compromising on quality or attention to detail.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose SRK Interior Designer?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine creativity, expertise, and dedication to deliver exceptional interior design solutions that
            exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
