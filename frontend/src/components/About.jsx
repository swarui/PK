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
      className="h-screen w-full py-16 md:py-4 px-6 md:px-6 lg:px-10 scroll-mt-20 relative lg:mt-0 overflow-hidden md:mt-0"
    >
      {/* Background decorative elements - matching home */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 hidden lg:block" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 hidden lg:block" />

      <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h1
            style={{ fontFamily: "Arsenica" }}
            className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-black relative inline-block"
          >
            Get to know me <span className="text-blue-400">:)</span>
            <span className="absolute bottom-2 left-0 w-full h-2 bg-blue-200/50 -z-10 transform -rotate-1"></span>
          </h1>
          <h2 style={{ fontFamily: "Afacad" }} className="text-blue-800 text-base md:text-lg mt-2">
            About
          </h2>
        </motion.div>

        <div className="flex md:flex-row flex-col w-full gap-8 md:gap-2">
          {/* Image Section - matching home's responsive approach */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex items-center justify-center relative"
          >
            <div className="absolute w-[80%] h-[80%] rounded-full opacity-50 blur-3xl -z-10" />
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-200/50 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-blue-300/40 -z-10" />
              <img
                className="w-[95%] md:w-[340px] lg:w-[500px] h-auto object-contain rounded-2xl shadow-xl"
                src={Kardita4 || "/placeholder.svg"}
                alt="Phoebe"
              />
            </div>
          </motion.div>

          {/* Text Section - matching home's responsive approach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-3 md:space-y-3 z-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontFamily: "Afacad" }}
              className="text-base md:text-base lg:text-xl xl:text-[1.3em] text-black/80 max-w-xl text-center md:text-left leading-snug md:leading-snug"
            >
              I am passionate about Hospitality, Tourism, and Hotel Management, seeking to join a dynamic organization
              where I can grow my skills, address challenges, and create sustainable solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ fontFamily: "Afacad" }}
              className="text-base md:text-base lg:text-xl xl:text-[1.3em] text-black/80 max-w-xl text-center md:text-left leading-snug md:leading-snug"
            >
              I'm dedicated to achieving goals with a focus on quality, continuous improvement, and delivering
              exceptional guest experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col items-center md:items-start mt-2 md:mt-3"
            >
              <h3
                style={{ fontFamily: "Afacad" }}
                className="text-base md:text-lg lg:text-xl text-black mb-2 text-center md:text-left"
              >
                My socials 👇🏾
              </h3>

              <div className="flex gap-4 md:gap-5">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </motion.div>

            <div className="hidden md:flex gap-6 mt-4">
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
        </div>
      </div>
    </section>
  )
}

export default About

