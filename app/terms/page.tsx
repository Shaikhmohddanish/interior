import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Clock, AlertCircle } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Please read these terms and conditions carefully before engaging our interior design services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Service Agreement */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Service Agreement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Service Scope</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    SRK Interior Designer provides interior design services including but not limited to 2D/3D layouts,
                    design planning, material selection, and turnkey project management. The specific scope of work will
                    be detailed in the project proposal and agreement signed by both parties.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Client Responsibilities</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Clients are responsible for providing accurate site measurements, timely feedback on design
                    proposals, and ensuring site accessibility for our team. Any delays caused by client-side factors
                    may result in project timeline extensions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Design Ownership</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All design concepts, drawings, and intellectual property remain the property of SRK Interior
                    Designer until full payment is received. Upon completion of payment, clients receive usage rights
                    for the specific project only.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Payment Schedule</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Design packages require 50% advance payment to commence work, with the remaining 50% due upon design
                    delivery. Turnkey projects follow a milestone-based payment schedule as outlined in the project
                    agreement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Additional Charges</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Any changes to the original scope of work, additional revisions beyond the package limit, or extra
                    services will be charged separately as per our current rates. Clients will be informed of additional
                    charges before proceeding.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Refund Policy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Refunds are processed only if the project is cancelled before design work commences. Once design
                    work begins, payments are non-refundable. However, we offer unlimited revisions within the package
                    limits to ensure client satisfaction.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Project Execution */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Project Execution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Timeline Commitments</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We commit to delivering designs within the specified timeline for each package. Execution timelines
                    for turnkey projects depend on project complexity and will be clearly communicated in the project
                    agreement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Quality Assurance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All work is subject to our quality control processes. We guarantee that all deliverables meet
                    industry standards and client specifications as agreed upon in the project scope.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Force Majeure</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    SRK Interior Designer shall not be liable for delays or failures in performance due to circumstances
                    beyond our reasonable control, including but not limited to natural disasters, government
                    regulations, or material supply disruptions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Liability and Warranty */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Liability and Warranty</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Design Warranty</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide a 30-day warranty on all design deliverables for any technical errors or omissions. This
                    warranty covers design corrections but does not include changes to design preferences or additional
                    features.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Limitation of Liability</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our liability is limited to the total amount paid for the specific service. We are not responsible
                    for indirect, consequential, or incidental damages arising from the use of our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Third-Party Services</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When we coordinate with contractors, vendors, or other third parties, we act as facilitators only.
                    Clients enter into direct agreements with these parties, and we are not liable for their performance
                    or quality of work.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Questions About These Terms?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  If you have any questions about these terms and conditions, please contact us before engaging our
                  services.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Email:</span> info@srkinteriordesigner.com
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> +91 9819393613
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
