"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="flex md:flex-row flex-col w-full max-w-screen-xl px-6 md:px-8 lg:px-10 py-10 md:py-0 gap-8 md:gap-4">
        {/* Left Text Body */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-5 z-10"
        >
          <div className="relative">
            <h1
              style={{ fontFamily: "Arsenica", fontWeight: "500" }}
              className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-black"
            >
              Hey,
            </h1>
            <div className="absolute -top-4 -left-6 w-12 h-12 rounded-full bg-blue-100 -z-10 hidden md:block" />
          </div>

          <h1
            style={{ fontFamily: "Arsenica", fontWeight: "300" }}
            className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-black mt-2 md:-mt-3"
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
            className="text-base md:text-lg lg:text-xl xl:text-[1.3em] text-black/80 max-w-xl text-center md:text-left"
          >
            A results-driven team player with strong communication and interpersonal skills. As a born-again Christian,
            I am deeply committed to achieving goals with integrity, dedication, and a solid work ethic.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 md:gap-5 mt-4 md:mt-6"
          >
            <button
              style={{ fontFamily: "Afacad" }}
              className="bg-blue-400 text-white text-sm md:text-base lg:text-lg px-6 py-2.5 md:px-8 lg:px-10 rounded-md hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
            >
              Resume
            </button>
            <button
              style={{ fontFamily: "Afacad" }}
              className="border-2 border-blue-400 text-sm md:text-base lg:text-lg text-black px-6 py-2.5 md:px-8 lg:px-10 rounded-md hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
              onClick={scrollToContact}
            >
              Contact Me
            </button>
          </motion.div>

          <div className="hidden md:flex gap-6 mt-8">
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

        {/* Image Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 flex items-center justify-center md:justify-center mt-4 md:mt-0 relative"
        >
          <div className="absolute w-[80%] h-[80%] bg-blue-100 rounded-full opacity-50 blur-3xl -z-10" />
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-200/50 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-blue-300/40 -z-10" />
            <img
              className="w-[90%] md:w-[400px] lg:w-[500px] xl:w-[550px] h-auto object-contain rounded-2xl shadow-xl"
              src={Kardita3 || "/placeholder.svg?height=600&width=500"}
              loading="lazy"
              alt="Phoebe"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToNext}
      >
        <p style={{ fontFamily: "Afacad" }} className="text-sm text-black/70 mb-2">
          Scroll Down
        </p>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ChevronDown className="h-6 w-6 text-blue-400" />
        </motion.div>
      </motion.div> */}

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 hidden lg:block" />
    </section>
  )
}

export default Home

