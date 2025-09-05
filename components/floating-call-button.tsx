"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCallButton() {
  const handleCall = () => {
    window.location.href = "tel:+919819393613"
  }

  return (
    <Button
      onClick={handleCall}
      size="lg"
      className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300"
      aria-label="Call SRK Interior Designer"
    >
      <Phone className="h-6 w-6" />
    </Button>
  )
}
