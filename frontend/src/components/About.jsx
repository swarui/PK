"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
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
      <div className="absolute top-20 left-10 w-36 sm:w-48 lg:w-64 h-36 sm:h-48 lg:h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 hidden sm:block" />
      <div className="absolute bottom-20 right-10 w-28 sm:w-36 lg:w-48 h-28 sm:h-36 lg:h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 hidden sm:block" />

      <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center py-6 sm:py-8 lg:py-0">
        {/* Header - styled like Home page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="relative inline-block">
            <h1
              style={{ fontFamily: "Arsenica", fontWeight: "500" }}
              className="text-3xl lg:mt-10 sm:text-4xl lg:text-5xl xl:text-5xl text-black relative inline-block"
            >
              Get to know me <span className="text-blue-400">:)</span>
            </h1>
            <div className="absolute -top-4 -left-6 w-12 h-12 rounded-full bg-blue-100 -z-10 hidden sm:block" />
            <span className="absolute bottom-2 left-0 w-full h-2 bg-blue-200/50 -z-10 transform -rotate-1"></span>
          </div>
          <h2 style={{ fontFamily: "Afacad" }} className="text-blue-800 text-base lg:text-lg lg:mt-2">
            About
          </h2>
        </motion.div>

        {/* Content - matching Home page layout */}
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-4 items-center">
          {/* Text Section - on left like Home page */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-3 lg:space-y-5 z-10 order-1 lg:order-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontFamily: "Afacad" }}
              className="text-base sm:text-lg lg:text-xl xl:text-[1.3em] text-black/80 max-w-xl text-center lg:text-left leading-relaxed px-2 sm:px-0"
            >
              I am passionate about Hospitality, Tourism, and Hotel Management, seeking to join a dynamic organization
              where I can grow my skills, address challenges, and create sustainable solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ fontFamily: "Afacad" }}
              className="text-base sm:text-lg lg:text-xl xl:text-[1.3em] text-black/80 max-w-xl text-center lg:text-left leading-relaxed px-2 sm:px-0"
            >
              I'm dedicated to achieving goals with a focus on quality, continuous improvement, and delivering
              exceptional guest experiences.
            </motion.p>

            {/* Decorative elements from Home page */}
            <div className="hidden sm:flex gap-6 mt-4 sm:mt-6 lg:mt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 0.7 : 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-16 h-1 bg-blue-300 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 0.4 : 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-8 h-1 bg-blue-200 rounded-full"
              />
            </div>
            
            {/* Additional decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full flex flex-col space-y-3 mt-4 sm:mt-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <div className="h-0.5 flex-grow bg-blue-100"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                <div className="h-0.5 flex-grow bg-blue-50"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section - on right like Home page */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0 relative order-2 lg:order-1"
          >
            {/* Background glow - like Home page */}
            <div className="absolute w-[80%] h-[80%] rounded-full opacity-50 blur-3xl -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />

            {/* Image container - like Home page */}
            <div className="flex justify-center items-center w-full">
              {/* Decorative elements - like Home page */}
              <div className="relative">
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 rounded-full bg-blue-200/50 -z-10" />
                <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 rounded-full bg-blue-300/40 -z-10" />

                {/* Image - like Home page */}
                <img
                  className="w-[90%] sm:w-[85%] lg:w-[500px] xl:w-[550px] mx-auto h-auto object-contain rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
                  src={Kardita4 || "/placeholder.svg?height=600&width=500"}
                  loading="lazy"
                  alt="Phoebe Kardita"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About