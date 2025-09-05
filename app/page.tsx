import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { FeaturedProjects } from "@/components/featured-projects"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProcessOverview } from "@/components/process-overview"
import { Testimonials } from "@/components/testimonials"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessOverview />
      <Testimonials />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
