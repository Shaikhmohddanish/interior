import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I absolutely love my newly designed flat. SRK Interiors did a fantastic job in creating a perfect blend of style and comfort for my living space.",
      name: "Saif Palte",
      location: "Flat",
    },
    {
      quote:
        "Professional, creative, and delivered beyond our expectations. Our office space is now a place of inspiration.",
      name: "Ananya Roy",
      location: "Corporate Office",
    },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-[#C0A080]">CLIENT FEEDBACK</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Here's what our satisfied clients are saying
            </h2>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
              <p className="text-5xl font-bold text-gray-800">4.82</p>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">55 Ratings</p>
              </div>
            </div>
          </div>
          <div>
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-[#3A506B] text-white rounded-2xl">
                      <CardContent className="p-8 relative">
                        <p className="text-6xl font-serif absolute top-4 left-4 opacity-10">“</p>
                        <p className="italic text-lg z-10 relative">"{testimonial.quote}"</p>
                        <p className="mt-4 font-bold text-right">
                          / {testimonial.name} <span className="font-normal">{testimonial.location}</span>
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
