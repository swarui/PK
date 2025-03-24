"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Mail } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const navRef = useRef(null)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Travel Gallery", href: "#travelgallery" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false)
      }
    }

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, navItems])

  // Update body overflow when menu state changes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div ref={navRef}>
      {/* Navbar Container */}
      <div
        className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 transition-all duration-300 px-4 md:px-8 lg:px-12 ${
          isScrolled
            ? "h-16 backdrop-blur-lg bg-white/90 dark:bg-black/80 shadow-lg"
            : "h-20 bg-white/0 dark:bg-black/0"
        } ${isOpen ? "bg-transparent" : ""}`}
      >
        {/* Logo */}
        <div
          style={{ fontFamily: "Arsenica" }}
          className="text-2xl md:text-[1.9em] font-medium text-black dark:text-white transition-colors"
        >
          PK
        </div>

        {/* Hamburger and Close Icon */}
        <div className="lg:hidden flex items-center z-[100]">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors p-2 relative"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <ul style={{ fontFamily: "Afacad" }} className="flex flex-row gap-4 xl:gap-5 text-base xl:text-[1.1em]">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`px-2 py-1 inline-block transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-sky-700 dark:text-sky-400"
                      : "text-gray-800 dark:text-gray-200 hover:text-sky-700 dark:hover:text-sky-400"
                  }`}
                >
                  {item.name}
                 
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Email Me Button */}
        <div className="hidden lg:block">
          <a
            href="mailto:kahawake@gmail.com"
            style={{ fontFamily: "Afacad" }}
            className="bg-black dark:bg-white text-white dark:text-black transition duration-500 hover:bg-sky-700 dark:hover:bg-sky-400 hover:text-white rounded-full px-5 py-2 shadow-lg text-[0.945em] inline-flex items-center gap-2"
          >
            <Mail size={16} />
            <span>Email Me</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        onClick={toggleMenu}
      />

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 right-0 w-full max-w-xs h-[100dvh] bg-gradient-to-b from-black to-gray-900 transform transition-transform duration-300 ease-out z-50 lg:hidden overflow-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div
          style={{ fontFamily: "Afacad" }}
          className="flex flex-col items-center justify-center min-h-[100dvh] py-20"
        >
          <nav>
            <ul className="flex flex-col items-center gap-3 md:gap-6 text-lg md:text-xl">
              {navItems.map((item) => (
                <li key={item.name} onClick={toggleMenu}>
                  <a
                    href={item.href}
                    className={`text-white transition-colors block px-4 py-2 relative group ${
                      activeSection === item.href.substring(1) ? "text-sky-300" : "hover:text-sky-300"
                    }`}
                  >
                    {item.name}
                  
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="mailto:contact@example.com"
            onClick={toggleMenu}
            className="mt-8 bg-white text-black transition duration-500 hover:bg-sky-300 rounded-full px-6 py-2.5 shadow-lg text-base md:text-[0.945em] inline-flex items-center gap-2"
          >
            <Mail size={16} />
            <span>Email Me</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
