'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2 backdrop-blur-md' : 'bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Icon - Smaller */}
          <div className={`flex items-center space-x-2 md:space-x-3 transition-all duration-300`}>
            {/* Icon - Smaller */}
            <div
              className={`transition-all duration-300 ${
                scrolled ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10 md:w-12 md:h-12'
              }`}
            >
              <div
                className={`w-full h-full bg-primary-300 rounded-full flex items-center justify-center transition-all duration-300 ${
                  scrolled ? 'shadow-md' : 'shadow-lg animate-glow'
                }`}
              >
                <svg
                  className={`transition-all duration-300 text-black ${
                    scrolled ? 'w-4 h-4 md:w-5 md:h-5' : 'w-5 h-5 md:w-6 md:h-6'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4V6C15.1 6 16 6.9 16 8V10C17.1 10 18 10.9 18 12V14C17.5 14.2 17 14.4 16.5 14.7C16.2 14.9 15.8 15.1 15.5 15.3C15.1 15.6 14.6 15.9 14 16.2V18C14 19.1 13.1 20 12 20S10 19.1 10 20V16.2C9.4 15.9 8.9 15.6 8.5 15.3C8.2 15.1 7.8 14.9 7.5 14.7C7 14.4 6.5 14.2 6 14V12C6 10.9 6.9 10 8 10V8C8 6.9 8.9 6 10 6V4C10 2.9 10.9 2 12 2M12 4V6H10V8H8V10H6V12C6.5 12.2 7 12.4 7.5 12.7C7.8 12.9 8.2 13.1 8.5 13.3C8.9 13.6 9.4 13.9 10 14.2V16H14V14.2C14.6 13.9 15.1 13.6 15.5 13.3C15.8 13.1 16.2 12.9 16.5 12.7C17 12.4 17.5 12.2 18 12V10H16V8H14V6H12V4Z" />
                </svg>
              </div>
            </div>

            {/* Text Logo - Smaller */}
            <div
              className={`font-display font-bold transition-all duration-300 ${
                scrolled
                  ? 'text-base md:text-lg text-primary-500'
                  : 'text-lg md:text-xl lg:text-2xl text-primary-300 text-glow'
              }`}
            >
              <span className="tracking-wide">FIGHTING ROOSTER</span>
              <div
                className={`text-xs font-normal tracking-wider opacity-90 ${
                  scrolled ? 'text-gray-600' : 'text-primary-200'
                }`}
              >
                ATHENS
              </div>
            </div>
          </div>

          {/* Desktop Menu - Smaller */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#home"
              className={`transition-all duration-300 font-medium tracking-wide ${
                scrolled
                  ? 'text-sm text-gray-900 hover:text-primary-500 py-1 px-3 rounded-lg hover:bg-primary-50'
                  : 'text-base text-primary-100 hover:text-primary-300 text-shadow py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded-lg'
              }`}
            >
              Αρχική
            </a>
            <a
              href="#about"
              className={`transition-all duration-300 font-medium tracking-wide ${
                scrolled
                  ? 'text-sm text-gray-900 hover:text-primary-500 py-1 px-3 rounded-lg hover:bg-primary-50'
                  : 'text-base text-primary-100 hover:text-primary-300 text-shadow py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded-lg'
              }`}
            >
              Σχετικά
            </a>
            <a
              href="#trainer"
              className={`transition-all duration-300 font-medium tracking-wide ${
                scrolled
                  ? 'text-sm text-gray-900 hover:text-primary-500 py-1 px-3 rounded-lg hover:bg-primary-50'
                  : 'text-base text-primary-100 hover:text-primary-300 text-shadow py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded-lg'
              }`}
            >
              Προπονητής
            </a>
            <a
              href="#contact"
              className={`transition-all duration-300 font-medium tracking-wide ${
                scrolled
                  ? 'text-sm text-gray-900 hover:text-primary-500 py-1 px-3 rounded-lg hover:bg-primary-50'
                  : 'text-base text-primary-100 hover:text-primary-300 text-shadow py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded-lg'
              }`}
            >
              Επικοινωνία
            </a>

            {/* Call to Action Button - Smaller */}
            <a
              href="#contact"
              className={`transition-all duration-300 font-semibold tracking-wide rounded-lg border-2 ${
                scrolled
                  ? 'bg-primary-300 hover:bg-primary-400 text-black border-primary-300 py-1 px-4 text-sm'
                  : 'bg-primary-300 hover:bg-primary-400 text-black border-primary-300 py-2 px-6 text-base shadow-lg hover:shadow-xl'
              }`}
            >
              Δοκιμαστικό Μάθημα
            </a>
          </div>

          {/* Mobile Menu Button - Smaller */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-primary-300 hover:bg-white hover:bg-opacity-10'
              }`}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Smaller */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="bg-white shadow-xl rounded-xl p-4 space-y-2">
              <a
                href="#home"
                className="block text-base font-medium text-gray-900 hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Αρχική
              </a>
              <a
                href="#about"
                className="block text-base font-medium text-gray-900 hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Σχετικά
              </a>
              <a
                href="#trainer"
                className="block text-base font-medium text-gray-900 hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Προπονητής
              </a>
              <a
                href="#contact"
                className="block text-base font-medium text-gray-900 hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Επικοινωνία
              </a>

              {/* Mobile CTA Button */}
              <div className="pt-3 border-t border-gray-200">
                <a
                  href="#contact"
                  className="block w-full text-center bg-primary-300 hover:bg-primary-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Δοκιμαστικό Μάθημα
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
