'use client'

import { useState, useEffect } from 'react'

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl md:text-2xl">
            <span className={scrolled ? 'text-primary-600' : 'text-white text-shadow'}>
              FIGHTINGROOSTER
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`hover:text-primary-500 transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white text-shadow'
            }`}>Αρχική</a>
            <a href="#about" className={`hover:text-primary-500 transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white text-shadow'
            }`}>Σχετικά</a>
            <a href="#trainer" className={`hover:text-primary-500 transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white text-shadow'
            }`}>Προπονητής</a>
            <a href="#contact" className={`hover:text-primary-500 transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white text-shadow'
            }`}>Επικοινωνία</a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-2 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-primary-500 rounded">Αρχική</a>
              <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-primary-500 rounded">Σχετικά</a>
              <a href="#trainer" className="block px-3 py-2 text-gray-900 hover:text-primary-500 rounded">Προπονητής</a>
              <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-primary-500 rounded">Επικοινωνία</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}