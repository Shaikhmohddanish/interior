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
    },
    {
      title: "Turnkey Projects",
      href: "/services/turnkey-projects",
    },
    {
      title: "Design & Planning",
      href: "/services/design-and-planning",
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="bg-gray-100 text-gray-700 text-sm hidden md:block">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@srkinteriordesigner.com"
              className="flex items-center gap-2 hover:text-[#C0A080] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@srkinteriordesigner.com</span>
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
                <ul className="grid w-[250px] gap-3 p-4">
                  {serviceLinks.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.title}
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
            <Button variant="outline" size="icon" className="border-2 border-[#C0A080] rounded-md hover:bg-[#C0A080]/10">
              <Menu className="h-5 w-5 text-[#C0A080]" strokeWidth={2.5} />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-white border-r-0 shadow-xl">
            <div className="py-6 px-5">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="inline-block">
                  <Image src="/logo.png" alt="SRK Interior Designer Logo" width={120} height={40} />
                </Link>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-base font-semibold text-gray-800 hover:text-[#C0A080] transition-colors border-b border-gray-100 py-3 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                ))}
                {/* Collapsible dropdown for mobile */}
                <div className="text-base font-semibold text-gray-800 border-b border-gray-100">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between py-3 list-none">
                      <span>Services</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-open:rotate-180">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </summary>
                    <div className="pl-4 py-2 flex flex-col gap-3 mb-2 border-l-2 border-[#C0A080]/30 bg-gray-50 rounded-r-md">
                      {serviceLinks.map((link) => (
                        <Link 
                          key={link.title} 
                          href={link.href} 
                          className="text-base text-gray-700 hover:text-[#C0A080] transition-colors"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                </div>
              </nav>
              <Button 
                asChild 
                className="w-full mt-8 bg-[#C0A080] hover:bg-[#A98B70] text-white font-medium rounded-md py-6 shadow-md"
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-3">Contact Us</h3>
                <div className="flex flex-col gap-4">
                  <a href="tel:9819393613" className="flex items-center gap-3 text-gray-700 hover:text-[#C0A080] transition-colors">
                    <div className="bg-[#C0A080]/10 p-2 rounded-full">
                      <Phone className="w-4 h-4 text-[#C0A080]" />
                    </div>
                    <span className="font-medium">+91 9819393613</span>
                  </a>
                  <a href="mailto:info@srkinteriordesigner.com" className="flex items-center gap-3 text-gray-700 hover:text-[#C0A080] transition-colors">
                    <div className="bg-[#C0A080]/10 p-2 rounded-full">
                      <Mail className="w-4 h-4 text-[#C0A080]" />
                    </div>
                    <span className="font-medium text-sm">info@srkinteriordesigner.com</span>
                  </a>
                  <div className="flex items-center gap-4 mt-4">
                    <Link href="#" aria-label="Facebook" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:bg-[#C0A080]/10 hover:text-[#C0A080] transition-colors">
                      <Facebook className="w-5 h-5" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:bg-[#C0A080]/10 hover:text-[#C0A080] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="#" aria-label="Instagram" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:bg-[#C0A080]/10 hover:text-[#C0A080] transition-colors">
                      <Instagram className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
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
}: { className?: string; title: string; children?: React.ReactNode; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
