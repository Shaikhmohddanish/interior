"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, Facebook, Instagram, Linkedin, Search, ArrowRight, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // Services is now a dropdown
    { name: "Project", href: "/project" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ]

  const serviceLinks = [
    {
      title: "2D/3D Layouts",
      href: "/services/2d-3d-layouts",
      description: "Detailed floor plans and immersive 3D models to visualize your space.",
    },
    {
      title: "Turnkey Projects",
      href: "/services/turnkey-projects",
      description: "A complete, end-to-end solution from design concept to final execution.",
    },
    {
      title: "Design & Planning",
      href: "/services/design-and-planning",
      description: "Expert planning and creative design to bring your unique vision to life.",
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="bg-gray-100 text-gray-700 text-sm hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@srkinteriordesigner.com"
              className="flex items-center gap-2 hover:text-[#C0A080] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@srkinteriordesigner.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9819393613" className="flex items-center gap-2 hover:text-[#C0A080] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 9819393613</span>
            </a>
            <div className="flex items-center gap-3 ml-4">
              <Link href="#" aria-label="Facebook" className="hover:text-[#C0A080] transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-[#C0A080] transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-[#C0A080] transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="SRK Interior Designer Logo" width={150} height={50} className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {serviceLinks.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/project" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Project</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button asChild className="bg-white text-black border border-gray-300 hover:bg-gray-100 rounded-full group">
            <Link href="/contact">
              Book Consult
              <span className="ml-2 bg-[#C0A080] text-white rounded-full p-1 group-hover:rotate-45 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="p-4">
              <Link href="/">
                <Image src="/logo.png" alt="SRK Interior Designer Logo" width={120} height={40} />
              </Link>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-lg font-medium hover:text-[#C0A080]">
                    {link.name}
                  </Link>
                ))}
                {/* Simple dropdown for mobile */}
                <div className="text-lg font-medium">
                  <p className="flex items-center">
                    Services <ChevronDown className="ml-1 h-5 w-5" />
                  </p>
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {serviceLinks.map((link) => (
                      <Link key={link.title} href={link.href} className="text-base font-normal hover:text-[#C0A080]">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
              <Button asChild className="w-full mt-8 bg-[#C0A080] hover:bg-[#A98B70] text-white">
                <Link href="/contact">Book Consult</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: { className?: string; title: string; children: React.ReactNode; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
