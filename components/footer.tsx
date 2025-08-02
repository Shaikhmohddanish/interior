import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F8F5F2]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-gray-600">
            <Link href="/faq" className="hover:text-black">
              Faq
            </Link>
            <Link href="/services" className="hover:text-black">
              Service
            </Link>
            <Link href="/terms" className="hover:text-black">
              Term & Condition
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook" className="text-gray-500 hover:text-black">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-500 hover:text-black">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-black">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>Copyright &copy; {new Date().getFullYear()} SRK Interior Designer. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
