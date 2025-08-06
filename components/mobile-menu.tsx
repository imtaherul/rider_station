"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface MobileMenuProps {
  currentPage?: string
}

export function MobileMenu({ currentPage = "home" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu} />}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/rider-station-logo.png"
                alt="Rider Station Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-bold text-gray-800">Rider Station</h3>
                <p className="text-xs text-orange-600">Your Delivery Partner</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <Link
                href="/"
                onClick={closeMenu}
                className={`block text-lg font-medium transition-colors ${
                  currentPage === "home" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/#services"
                onClick={closeMenu}
                className="block text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                onClick={closeMenu}
                className="block text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/#industries"
                onClick={closeMenu}
                className="block text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                Industries
              </Link>
              <Link
                href="/#coverage"
                onClick={closeMenu}
                className="block text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                Coverage Areas
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`block text-lg font-medium transition-colors ${
                  currentPage === "contact" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                onClick={closeMenu}
              >
                Get Started
              </Button>
            </div>
          </nav>

          {/* Contact Info */}
          <div className="px-6 py-6 bg-gray-50 border-t">
            <h4 className="font-semibold text-gray-800 mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-orange-600" />
                <span>+966 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-orange-600" />
                <span>info@riderstation.sa</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-orange-600" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
