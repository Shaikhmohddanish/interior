import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessSteps } from "@/components/process-steps"
import { GuaranteesSection } from "@/components/guarantees-section"
import { ChevronRight } from "lucide-react"
import { DesignVisualizationSection } from "@/components/design-visualization-section"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F2] text-gray-800 font-sans">
      <Header />
      <main className="flex-1">
        <PageHero />
        <StatsSection />
        <WelcomeSection />
        <FoundersSection />
        <DesignVisualizationSection />
        <ProcessSteps />
        <GuaranteesSection />
      </main>
      <Footer />
    </div>
  )
}

function PageHero() {
  return (
    <section className="relative w-full h-[50vh]">
      <Image src="/placeholder.svg?height=500&width=1600" alt="Modern interior design" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        <div className="flex items-center gap-2 mt-4 text-lg">
          <Link href="/" className="hover:underline">
            SRK Interiors
          </Link>
          <ChevronRight className="h-5 w-5" />
          <span>About Us</span>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-[#C0A080]/20 flex items-center justify-center text-3xl font-bold text-[#C0A080]">
              60+
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Happy Client Review</h3>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-[#C0A080]/20 flex items-center justify-center text-3xl font-bold text-[#C0A080]">
              80+
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Successful Projects</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

function WelcomeSection() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome To SRK Interior Designer</h2>
        <div className="mt-6 space-y-4 text-gray-600 text-lg">
          <p>
            Where creativity meets functionality. Since our founding in 2016, we have dedicated ourselves to
            transforming spaces into inspiring environments. Our mission is clear: to enhance your quality of life
            through exceptional design.
          </p>
          <p>
            With over 50 successful projects completed, we have proven our ability to handle diverse spaces, including
            Office Spaces, Residential Apartments, and more. We create environments that foster productivity and
            collaboration, helping your team thrive. Our designs offer guests a memorable experience, making them feel
            welcomed and comfortable. We craft personalized homes that reflect individual lifestyles, ensuring every
            detail feels just right.
          </p>
        </div>
      </div>
    </section>
  )
}

function FoundersSection() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center bg-[#4A403A] text-white rounded-2xl p-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm uppercase tracking-widest text-gray-400">SINCE 2016</p>
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Founders</h2>
            <p className="text-gray-300">
              SRK Interiors was founded by two experts with a shared vision. Id. Maviya Zahoor Rohe, a Master's graduate
              in Interior Design, brings creativity and innovation to every project, while Er. Mukarim Rizwan Khan, a
              Civil Engineer from Mumbai University, focuses on structure and durability. Together, they create spaces
              that are as practical as they are beautiful.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-600"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-[#C0A080]"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">100%</div>
              </div>
              <h3 className="text-xl font-semibold">Clients Satisfactions</h3>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-600"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-[#C0A080]"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="70, 100" // 7 years is approx 70% of a decade, adjust as needed
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">7 Year</div>
              </div>
              <h3 className="text-xl font-semibold">Work Experiences</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
