import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FloatingCallButton } from "@/components/floating-call-button"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://srkinteriordesigner.com'),
  title: {
    default: "SRK Interior Designer - Premium Interior Design Services in Mumbai, Pune & Bangalore",
    template: "%s | SRK Interior Designer"
  },
  description:
    "Transform your spaces with SRK Interior Designer. Professional interior design services offering 2D/3D layouts, design planning, and turnkey projects since 2016. 50+ completed projects across Mumbai, Pune, Bangalore. Get free consultation.",
  keywords: [
    "interior designer",
    "interior design services",
    "home interior design",
    "office interior design",
    "2D 3D layouts",
    "turnkey interior projects",
    "Mumbai interior designer",
    "Pune interior designer",
    "Bangalore interior designer",
    "residential interior design",
    "commercial interior design",
    "SRK Interior Designer"
  ],
  authors: [{ name: "SRK Interior Designer" }],
  creator: "SRK Interior Designer",
  publisher: "SRK Interior Designer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'SRK Interior Designer',
    title: 'SRK Interior Designer - Premium Interior Design Services',
    description: 'Transform your spaces with professional interior design services. 2D/3D layouts, design planning, and turnkey projects since 2016. 50+ completed projects.',
    url: 'https://srkinteriordesigner.com',
    images: [
      {
        url: '/luxury-modern-living-room-interior-design-with-war.png',
        width: 1200,
        height: 630,
        alt: 'SRK Interior Designer - Premium Interior Design Services',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SRK Interior Designer - Premium Interior Design Services',
    description: 'Transform your spaces with professional interior design services. 2D/3D layouts, design planning, and turnkey projects since 2016.',
    images: ['/luxury-modern-living-room-interior-design-with-war.png'],
    creator: '@srkinteriordesigner',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://srkinteriordesigner.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignService",
  "name": "SRK Interior Designer",
  "description": "Professional interior design services offering 2D/3D layouts, design planning, and turnkey projects since 2016.",
  "url": "https://srkinteriordesigner.com",
  "logo": "https://srkinteriordesigner.com/favicon.svg",
  "foundingDate": "2016",
  "founder": [
    {
      "@type": "Person",
      "name": "Sharukh Qureshi"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "Maharashtra",
    "addressLocality": "Mumbai"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 9819393613",
    "email": "info@srkinteriordesigner.com",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  },
  "areaServed": [
    "Mumbai",
    "Pune", 
    "Bangalore",
    "Chennai",
    "Delhi NCR",
    "Hyderabad",
    "Goa",
    "Ahmedabad"
  ],
  "serviceType": [
    "Interior Design",
    "2D/3D Layouts",
    "Design Planning",
    "Turnkey Projects",
    "Residential Interior Design",
    "Commercial Interior Design"
  ],
  "priceRange": "₹6,999 - ₹14,499",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ScrollToTop />
        <Suspense fallback={null}>{children}</Suspense>
        <FloatingCallButton />
        <Analytics />
      </body>
    </html>
  )
}
