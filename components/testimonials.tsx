import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "SRK Interior Designer transformed our apartment into a dream home. Their attention to detail and creative vision exceeded our expectations. Highly recommended!",
  },
  {
    name: "Rajesh Patel",
    location: "Pune",
    text: "Professional service from start to finish. The team understood our requirements perfectly and delivered a stunning office design that our employees love.",
  },
  {
    name: "Anita Desai",
    location: "Thane",
    rating: 5,
    text: "Excellent work on our villa renovation. The 3D layouts helped us visualize everything perfectly before execution. Great value for money!",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < (testimonial.rating || 5) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
