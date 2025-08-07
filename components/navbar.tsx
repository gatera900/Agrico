"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#004d33] text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#6ee7b7]">Agrico</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="bg-[#6ee7b7] text-[#004d33] px-4 py-2 rounded-md font-medium">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#6ee7b7] transition-colors">
            About
          </Link>
          <Link href="/offers" className="text-white hover:text-[#6ee7b7] transition-colors">
            Offers
          </Link>
          <Link href="/faqs" className="text-white hover:text-[#6ee7b7] transition-colors">
            FAQs
          </Link>
          <Link href="/contact" className="text-white hover:text-[#6ee7b7] transition-colors">
            Contact us
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="bg-[#6ee7b7] text-[#004d33] px-4 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#6ee7b7] px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/offers"
              className="text-white hover:text-[#6ee7b7] px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Offers
            </Link>
            <Link
              href="/faqs"
              className="text-white hover:text-[#6ee7b7] px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#6ee7b7] px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
