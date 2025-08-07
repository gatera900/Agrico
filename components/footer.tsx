import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#004d33] text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image src="/images/logo.png" alt="Agrico logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-bold text-[#6ee7b7]">Agrico</span>
            </Link>
            <p className="max-w-xs text-gray-300">
              Connecting farmers with buyers to create a sustainable and profitable agricultural ecosystem.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  Buyer Connections
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  Market Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  Logistics Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  Agricultural Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Farming Lane</li>
              <li className="text-gray-300">Agriville, AG 12345</li>
              <li className="text-gray-300">United States</li>
              <li>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@agrico.com" className="text-gray-300 hover:text-[#6ee7b7] transition-colors">
                  info@agrico.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">© 2024 Agrico. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
