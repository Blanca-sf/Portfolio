"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-6">
        <div className="text-xl font-bold tracking-wider">Blanca F</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-md font-medium">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="relative group hover:text-white transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
       <div className="md:hidden bg-black/80 backdrop-blur-md text-white px-6 py-4 space-y-4 flex flex-col text-md font-medium items-center">
          {["about", "skills", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)} // close menu on click
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
