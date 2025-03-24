"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Kardita3 from "../assets/Kardita3.webp"

function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToNext = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen w-full py-8 lg:mt-10 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Main container - optimized for phone view */}
      <div className="flex flex-col lg:flex-row MD w-full h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-6 lg:py-0 gap-6 lg:gap-4">
        {/* Left Text Body - optimized for phone view */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-3 lg:space-y-5 z-10"
        >
          <div className="relative">
            <h1
              style={{ fontFamily: "Arsenica", fontWeight: "500" }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black"
            >
              Hey,
            </h1>
            <div className="absolute -top-4 -left-6 w-12 h-12 rounded-full bg-blue-100 -z-10 hidden sm:block" />
          </div>

          <h1
            style={{ fontFamily: "Arsenica", fontWeight: "300" }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black mt-1 sm:mt-0 lg:-mt-3"
          >
            I'm{" "}
            <span className="relative inline-block">
              Phoebe
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
            </span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontFamily: "Afacad" }}
            className="text-base sm:text-lg lg:text-xl xl:text-[1.3em] text-black/80 max-w-xl text-center lg:text-left px-2 sm:px-0"
          >
            A results-driven team player with strong communication and interpersonal skills. As a born-again Christian,
            I am deeply committed to achieving goals with integrity, dedication, and a solid work ethic.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-3 sm:gap-4 lg:gap-5 mt-3 sm:mt-4 lg:mt-6"
          >
            <button
              style={{ fontFamily: "Afacad" }}
              className="bg-blue-400 text-white text-sm sm:text-base lg:text-lg px-5 sm:px-6 py-2.5 lg:px-10 rounded-md hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
            >
              Resume
            </button>
            <button
              style={{ fontFamily: "Afacad" }}
              className="border-2 border-blue-400 text-sm sm:text-base lg:text-lg text-black px-5 sm:px-6 py-2.5 lg:px-10 rounded-md hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
              onClick={scrollToContact}
            >
              Contact Me
            </button>
          </motion.div>

          <div className="hidden sm:flex gap-6 mt-4 sm:mt-6 lg:mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 0.7 : 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-16 h-1 bg-blue-300 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 0.4 : 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="w-8 h-1 bg-blue-200 rounded-full"
            />
          </div>
        </motion.div>

        {/* Image Body - optimized for phone view */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0 relative"
        >
          {/* Background glow - adjusted for phone */}
          <div className="absolute w-[80%] h-[80%] rounded-full opacity-50 blur-3xl -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />

          {/* Image container - optimized for phone */}
          <div className="flex justify-center items-center w-full">
            {/* Decorative elements - adjusted for phone */}
            <div className="relative">
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 rounded-full bg-blue-200/50 -z-10" />
              <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 rounded-full bg-blue-300/40 -z-10" />

              {/* Image - optimized for phone */}
              <img
                className="w-[90%] sm:w-[85%] lg:w-[500px] xl:w-[550px] mx-auto h-auto object-contain rounded-2xl shadow-xl"
                src={Kardita3 || "/placeholder.svg?height=600&width=500"}
                loading="lazy"
                alt="Phoebe"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements - adjusted for phone */}
      <div className="absolute top-20 left-10 w-36 sm:w-48 lg:w-64 h-36 sm:h-48 lg:h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 hidden sm:block" />
      <div className="absolute bottom-20 right-10 w-28 sm:w-36 lg:w-48 h-28 sm:h-36 lg:h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 hidden sm:block" />
    </section>
  )
}

export default Home

