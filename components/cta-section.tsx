import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">Ready to Transform Your Space?</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Let's discuss your vision and create something extraordinary together. Get in touch for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
