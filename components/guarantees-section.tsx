import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Wrench } from "lucide-react" // Using a placeholder icon

export function GuaranteesSection() {
  const guarantees = [
    {
      icon: Wrench,
      title: "Creative Designs",
      description: "We create unique, stylish spaces that perfectly match your vision and needs.",
    },
    {
      icon: Wrench,
      title: "Latest Technology",
      description: "We use advanced tools and technology to bring your dream space to life with precision.",
    },
    {
      icon: Wrench,
      title: "High-Quality Designs",
      description: "Our designs are made with care and attention to detail, ensuring high-quality results.",
    },
    {
      icon: Wrench,
      title: "Clear Pricing",
      description: "No surprises—just clear and upfront pricing so you know exactly what to expect.",
    },
  ]
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-[#C0A080]">WHY CHOOSE US?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Design without limits, creativity guaranteed.
          </h2>
        </div>
        <Carousel opts={{ align: "start" }} className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {guarantees.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <Card className="text-center p-8 bg-white shadow-lg h-full">
                  <CardContent className="flex flex-col items-center gap-4 p-0">
                    <div className="bg-gray-100 p-4 rounded-full">
                      <item.icon className="w-8 h-8 text-[#C0A080]" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-1rem]" />
          <CarouselNext className="right-[-1rem]" />
        </Carousel>
      </div>
    </section>
  )
}
