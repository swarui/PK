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
      className="min-h-screen mt-10 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Main container - improved tablet responsiveness */}
      <div className="flex flex-col sm:flex-row md:flex-row w-full max-w-screen-xl mx-auto px-6 sm:px-10 md:px-8 lg:px-10 py-10 sm:py-6 md:py-0 gap-8 sm:gap-6 md:gap-4">
        {/* Left Text Body - improved tablet layout */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-1/2 md:w-1/2 flex flex-col justify-center items-center sm:items-start md:items-start space-y-4 md:space-y-5 z-10"
        >
          <div className="relative">
            <h1
              style={{ fontFamily: "Arsenica", fontWeight: "500" }}
              className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl text-black"
            >
              Hey,
            </h1>
            <div className="absolute -top-4 -left-6 w-12 h-12 rounded-full bg-blue-100 -z-10 hidden sm:block md:block" />
          </div>

          <h1
            style={{ fontFamily: "Arsenica", fontWeight: "300" }}
            className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl text-black mt-2 sm:-mt-2 md:-mt-3"
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
            className="text-base sm:text-base md:text-lg lg:text-xl xl:text-[1.3em] text-black/80 max-w-xl text-center sm:text-left md:text-left"
          >
            A results-driven team player with strong communication and interpersonal skills. As a born-again Christian,
            I am deeply committed to achieving goals with integrity, dedication, and a solid work ethic.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 sm:gap-4 md:gap-5 mt-4 sm:mt-5 md:mt-6"
          >
            <button
              style={{ fontFamily: "Afacad" }}
              className="bg-blue-400 text-white text-sm sm:text-sm md:text-base lg:text-lg px-6 sm:px-6 py-2.5 md:px-8 lg:px-10 rounded-md hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
            >
              Resume
            </button>
            <button
              style={{ fontFamily: "Afacad" }}
              className="border-2 border-blue-400 text-sm sm:text-sm md:text-base lg:text-lg text-black px-6 sm:px-6 py-2.5 md:px-8 lg:px-10 rounded-md hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
              onClick={scrollToContact}
            >
              Contact Me
            </button>
          </motion.div>

          <div className="hidden sm:flex md:flex gap-6 mt-6 sm:mt-6 md:mt-8">
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

        {/* Image Body - improved tablet display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full sm:w-1/2 md:w-1/2 flex items-center justify-center mt-4 sm:mt-0 md:mt-0 relative"
        >
          {/* Background glow - adjusted for tablets */}
          <div className="absolute w-[80%] h-[80%]  rounded-full opacity-50 blur-3xl -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />

          {/* Image container - improved for tablets */}
          <div className="flex justify-center items-center w-full">
            {/* Decorative elements - visible on tablets */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-blue-200/50 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-blue-300/40 -z-10" />

              {/* Image - optimized for tablets */}
              <img
                className="w-[95%] sm:w-[85%] md:w-[400px] lg:w-[500px] xl:w-[550px] mx-auto h-auto object-contain rounded-2xl shadow-xl"
                src={Kardita3 || "/placeholder.svg?height=600&width=500"}
                loading="lazy"
                alt="Phoebe"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements - now visible on tablets */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 hidden sm:block lg:block" />
      <div className="absolute bottom-20 right-10 w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 hidden sm:block lg:block" />
    </section>
  )
}

export default Home

