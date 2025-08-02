import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { TextContrastEnhancer } from "@/components/text-contrast-enhancer"

export const metadata: Metadata = {
  title: "SRK Interior Designer",
  description: "Premium Interior Design Solutions",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TextContrastEnhancer>
            {children}
            <WhatsAppButton />
          </TextContrastEnhancer>
        </ThemeProvider>
      </body>
    </html>
  )
}
