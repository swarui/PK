"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Swal from "sweetalert2"
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react"
import Mocha from "../assets/Kardita2.jpg"

function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()

    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      message: e.target[4].value,
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        Swal.fire({
          title: "Thank You",
          text: "Your message was sent successfully ",
          icon: "success",
          confirmButtonColor: "#3085d6",
          background: "#000000",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            text: "text-custom",
            confirmButton: "custom-button",
            icon: "icon-custom",
          },
        })

        e.target.reset()
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
          background: "#000000",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-button",
            text: "text-custom",
          },
        })
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
        background: "#f4f4f9",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-button",
          text: "text-custom",
          icon: "custom-icon",
        },
      })
      console.error("Error:", error)
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="flex md:flex-row flex-col w-full max-w-screen-xl px-6 md:px-8 lg:px-10 py-10 md:py-16 gap-8 md:gap-6">
        {/* Left Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center z-10"
        >
          {/* Title */}
          <motion.div className="mb-4">
            <h1
              style={{ fontFamily: "Arsenica", fontWeight: "500" }}
              className="text-4xl md:text-5xl lg:text-6xl text-black"
            >
              Contact Me
            </h1>
            <p style={{ fontFamily: "Afacad" }} className="text-base md:text-lg text-black/80 mt-2">
              Let's connect! Reach out through the form or social media.
            </p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-3 mb-4"
          >
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300"
            >
              <Mail size={18} className="text-blue-600" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300"
            >
              <Phone size={18} className="text-blue-600" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300"
            >
              <Linkedin size={18} className="text-blue-600" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300"
            >
              <Instagram size={18} className="text-blue-600" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300"
            >
              <Twitter size={18} className="text-blue-600" />
            </a>
          </motion.div>

          {/* Contact Form */}
          <form onSubmit={sendEmail} className="w-full space-y-3" style={{ fontFamily: "Afacad" }}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="first_name"
                placeholder="First Name*"
                className="w-full h-10 px-4 text-sm md:text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name*"
                className="w-full h-10 px-4 text-sm md:text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                required
              />
            </div>

            <input
              type="email"
              name="user_email"
              placeholder="Email Address*"
              className="w-full h-10 px-4 text-sm md:text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
              required
            />

            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              className="w-full h-10 px-4 text-sm md:text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
            />

            <textarea
              name="message"
              placeholder="Your Message*"
              className="w-full h-20 px-4 py-2 text-sm md:text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
              required
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              style={{ fontFamily: "Afacad" }}
              className="bg-blue-400 text-white text-sm md:text-base lg:text-lg px-6 py-2.5 md:px-8 lg:px-10 rounded-md hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 flex items-center justify-center md:justify-center mt-4 md:mt-0 relative"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] bg-blue-100 rounded-full opacity-50 blur-3xl -z-10" />
            <div className="relative w-full max-w-[550px] overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-200/50 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-blue-300/40 -z-10" />
              <img
                className="w-full h-auto object-cover"
                src={Mocha || "/placeholder.svg?height=600&width=500"}
                loading="lazy"
                alt="Contact"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div
        style={{ fontFamily: "Afacad" }}
        className="flex justify-center py-2"
      >
        <span className="bg-black px-2 py-1 text-[14px] text-white">
          © Phoebe Kardita, 2025 built by
          <a
            href="https://swarui.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline ml-1"
          >
            this guy
          </a>
        </span>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 hidden lg:block" />
    </section>
    
  )
}

export default Contact

