"use client"

import { useState, useEffect } from "react"
import { MdOutlineCancel } from "react-icons/md"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGripLines } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
        document.body.style.overflow = "unset"
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "unset" : "hidden"
  }

  return (
    <>
      {/* Navbar Container */}
      <div
        className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 transition-all duration-300 px-4 md:px-8 lg:px-12 ${
          isScrolled ? "h-16 backdrop-blur-lg shadow-md" : "h-20"
        } ${isOpen ? "bg-transparent" : "bg-red"}`}
      >
        {/* Logo */}
        <div style={{ fontFamily: "Arsenica" }} className="text-2xl md:text-[1.9em] font-medium text-black">
          PK
        </div>

        {/* Hamburger Icon */}
       {/* Hamburger Icon */}
{/* Hamburger Icon */}
{/* Hamburger and Close Icon */}
<div className="lg:hidden flex items-center z-[100]">
  <button
    onClick={toggleMenu}
    className="text-gray-700 hover:text-gray-900 transition-colors p-2 relative"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    {isOpen ? (
      <MdOutlineCancel size={28} className="text-white" />
    ) : (
      <FontAwesomeIcon icon={faGripLines} className="h-6 w-6" />
    )}
  </button>
</div>


        {/* Desktop Navbar */}
        <nav className="hidden ml-15 lg:flex items-center justify-center flex-1">
          <ul
            style={{ fontFamily: "Afacad" }}
            className="flex flex-row gap-4 xl:gap-5 text-base xl:text-[1.1em] cursor-pointer"
          >
            <li className="hover:text-sky-700 transition-colors">
              <a href="#home" className="px-2 py-1">
                Home
              </a>
            </li>d
            <li className="hover:text-sky-700 transition-colors">
              <a href="#about" className="px-2 py-1">
                About
              </a>
            </li>
            <li className="hover:text-sky-700 transition-colors">
              <a href="#experience" className="px-2 py-1">
                Experience
              </a>
            </li>
            <li className="hover:text-sky-700 transition-colors">
              <a href="#travelgallery" className="px-2 py-1">
                Travel Gallery
              </a>
            </li>
            <li className="hover:text-sky-700 transition-colors">
              <a href="#contact" className="px-2 py-1">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Email Me Button */}
        <div className="hidden lg:block">
        <a
  href="phoebekardita@gmail.com"
  style={{ fontFamily: "Afacad" }}
  className="bg-black text-white transition duration-500 hover:bg-sky-700 rounded-full px-5 py-2 shadow-lg text-[0.945em] inline-block"
>
  Email Me
</a>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-80 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-[100dvh] transform transition-transform duration-300 ease-out z-[55] lg:hidden overflow-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          style={{ fontFamily: "Afacad" }}
          className="flex flex-col items-center justify-center min-h-[100dvh] py-20"
        >
          <nav>
            <ul className="flex flex-col items-center gap-3 md:gap-8 text-lg md:text-xl">
              <li onClick={toggleMenu}>
                <a href="#home" className="text-white hover:text-sky-300 transition-colors block px-4 py-2">
                  Home
                </a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#about" className="text-white hover:text-sky-300 transition-colors block px-4 py-2">
                  About
                </a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#experience" className="text-white hover:text-sky-300 transition-colors block px-4 py-2">
                  Experience
                </a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#travelgallery" className="text-white hover:text-sky-300 transition-colors block px-4 py-2">
                  Travel Gallery
                </a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#contact" className="text-white hover:text-sky-300 transition-colors block px-4 py-2">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleMenu}
            className="mt-8 bg-white text-black transition duration-500 hover:bg-sky-300 rounded-full px-6 py-2.5 shadow-lg text-base md:text-[0.945em]"
          >
            Email Me
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
