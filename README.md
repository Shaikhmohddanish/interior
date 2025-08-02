# SRK Interior Designer Website

A modern, responsive website for SRK Interior Designer, a professional interior design company operating since 2016. The website showcases their interior design services, portfolio, and provides easy contact options for potential clients.

![SRK Interior Designer Logo](/public/logo.png)

## Overview

This website is built using Next.js 15 with React 19 and styled with Tailwind CSS. It features a clean, elegant design that reflects the premium nature of SRK's interior design services. The site includes multiple pages for different services, projects, and company information.

## Features

- **Responsive Design**: Fully responsive for all device sizes
- **Modern UI**: Clean and professional interface with elegant animations
- **Service Showcase**: Dedicated pages for various design services
- **Project Gallery**: Filterable portfolio of completed projects
- **Pricing Information**: Transparent pricing packages
- **Contact Form**: Easy-to-use contact form for client inquiries
- **WhatsApp Integration**: Direct WhatsApp chat button for quick client communication
- **Theme Support**: Light/dark mode with system preference detection
- **High-Quality Images**: Professional copyright-free interior design images organized by room type and purpose

## Image Credits

All images used in this project are copyright-free and sourced from:
- [Unsplash](https://unsplash.com) - Attribution-free photography
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Royalty-free images

Images are organized in the `/public/images/` directory by category for easy maintenance and updates.

## Pages

### Home Page
The landing page features a hero carousel, company introduction, services overview, process steps, project gallery preview, guarantees, design visualization, and testimonials.

### About Us
Provides information about SRK Interior Designer, including the company history, stats, welcome message, and founder information.

### Services
Includes three main service pages:
- **2D/3D Layouts**: Detailed floor plans and immersive 3D models
- **Turnkey Projects**: End-to-end solutions from concept to execution
- **Design & Planning**: Expert planning and creative design services

### Project Gallery
A filterable gallery of completed projects across various categories:
- Living Room
- Bedroom
- Kitchen
- Bathroom
- Commercial
- Virtual Tour

### Pricing
Transparent pricing for different service packages:
- Standard Package
- Premium Package
- Ultra Premium Package
- Luxury Package

### Contact
Contact form for inquiries and consultations, with email and phone contact options.

## Technology Stack

### Frontend
- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Components**: Radix UI components
- **Icons**: Lucide React
- **Theme**: Next-themes for light/dark mode support
- **Forms**: React Hook Form with Zod validation
- **Animations**: Tailwind CSS animations
- **Carousels**: Embla Carousel

### UI Components
- Customized UI components based on Radix UI primitives
- Responsive navigation with mobile support
- Carousel components for testimonials and project showcases
- Accordion components for FAQs
- Form elements with validation

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (preferred) or npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Shaikhmohddanish/interior.git
cd srk-interior-designer
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/              # About us page
│   ├── contact/            # Contact page with form
│   ├── pricing/            # Pricing packages page
│   ├── project/            # Projects gallery page
│   ├── services/           # Services pages
│   │   ├── 2d-3d-layouts/  # 2D/3D layouts service
│   │   ├── design-and-planning/ # Design service
│   │   └── turnkey-projects/ # Turnkey service
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── ui/                 # UI components (buttons, forms, etc.)
│   ├── header.tsx          # Site header with navigation
│   ├── footer.tsx          # Site footer
│   ├── process-steps.tsx   # Process steps component
│   ├── guarantees-section.tsx # Guarantees section
│   ├── testimonials-section.tsx # Testimonials carousel
│   ├── whatsapp-button.tsx # WhatsApp floating button
│   └── ...                 # Other components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
│   ├── images/             # Organized image assets
│   │   ├── living-room/    # Living room images
│   │   ├── bedroom/        # Bedroom images
│   │   ├── kitchen/        # Kitchen images
│   │   ├── bathroom/       # Bathroom images
│   │   ├── commercial/     # Commercial space images
│   │   ├── hero/           # Hero section images
│   │   ├── process/        # Process-related images
│   │   ├── design/         # Design visualization images
│   │   └── services/       # Service-specific images
│   ├── logo.png            # Company logo
│   └── other static files
├── styles/                 # Additional styles
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Contact Information

- **Email**: info@srkinteriordesigner.com
- **Phone**: +91 9819393613
- **Social Media**:
  - Facebook
  - Instagram
  - LinkedIn

## License

Copyright © 2025 SRK Interior Designer. All Rights Reserved.
