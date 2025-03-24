"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import Kardita4 from "../assets/Kardita4.webp"

function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true)
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="about"
      className="min-h-screen w-full py-8 sm:py-10 lg:py-0 px-4 sm:px-6 lg:px-10 scroll-mt-20 relative lg:mt-0 overflow-hidden"
    >
      {/* Background decorative elements - matching Home page */}
      <div className="absolute top-20 left-10 w-48 h-48 lg:w-64 lg:h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-36 h-36 lg:w-48 lg:h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 hidden lg:block" />

      <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center py-6 sm:py-8 lg:py-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h1
            style={{ fontFamily: "Arsenica" }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black relative inline-block"
          >
            Get to know me <span className="text-blue-400">:)</span>
            <span className="absolute bottom-2 left-0 w-full h-2 bg-blue-200/50 -z-10 transform -rotate-1"></span>
          </h1>
          <h2 style={{ fontFamily: "Afacad" }} className="text-blue-800 text-base lg:text-lg mt-2">
            About
          </h2>
        </motion.div>

        {/* Content - matching Home page breakpoints */}
        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-4 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex items-center justify-center relative"
          >
            <div className="absolute w-[80%] h-[80%] rounded-full opacity-50 blur-3xl -z-10" />
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute -top-6 -right-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full bg-blue-200/50 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full bg-blue-300/40 -z-10" />
              <img
                className="w-[90%] sm:w-[85%] lg:w-[500px] xl:w-[550px] mx-auto h-auto object-contain rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
                src={Kardita4 || "/placeholder.svg"}
                alt="Phoebe Kardita"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-3 lg:space-y-5 z-10 mt-6 lg:mt-0"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontFamily: "Afacad" }}
              className="text-base sm:text-lg lg:text-xl xl:text-[1.3em] text-black/80 max-w-xl text-center lg:text-left leading-relaxed px-2 sm:px-4 lg:px-0"
            >
              I am passionate about Hospitality, Tourism, and Hotel Management, seeking to join a dynamic organization
              where I can grow my skills, address challenges, and create sustainable solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ fontFamily: "Afacad" }}
              className="text-base sm:text-lg lg:text-xl xl:text-[1.3em] text-black/80 max-w-xl text-center lg:text-left leading-relaxed px-2 sm:px-4 lg:px-0"
            >
              I'm dedicated to achieving goals with a focus on quality, continuous improvement, and delivering
              exceptional guest experiences.
            </motion.p>

           
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

