"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";
import Mocha from "../assets/Kardita2.jpg";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      message: e.target[4].value,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
        });

        e.target.reset();
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
        });
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
      });
      console.error("Error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50/30"
    >
      {/* Header/Navigation would go here */}

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Form Section */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h1
              style={{ fontFamily: "Arsenica" }}
className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-gray-900"              
            >
              Contact Me
            </h1>

            <p style={{ fontFamily: "Afacad" }} className="text-black/80 mb-6">
              Let's connect! Reach out through the form or social media.
            </p>

            {/* Social Media Icons - Styled like the reference */}
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100/80 hover:bg-blue-200 transition-colors duration-300"
              >
                <Mail size={18} className="text-blue-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100/80 hover:bg-blue-200 transition-colors duration-300"
              >
                <Phone size={18} className="text-blue-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100/80 hover:bg-blue-200 transition-colors duration-300"
              >
                <Linkedin size={18} className="text-blue-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100/80 hover:bg-blue-200 transition-colors duration-300"
              >
                <Instagram size={18} className="text-blue-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100/80 hover:bg-blue-200 transition-colors duration-300"
              >
                <Twitter size={18} className="text-blue-600" />
              </a>
            </div>

            {/* Contact Form - Styled like the reference */}
            <form
              onSubmit={sendEmail}
              className="w-full space-y-4"
              style={{ fontFamily: "Afacad" }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name*"
                  className="w-full h-12 px-4 text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name*"
                  className="w-full h-12 px-4 text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                  required
                />
              </div>

              <input
                type="email"
                name="user_email"
                placeholder="Email Address*"
                className="w-full h-12 px-4 text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                required
              />

              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="w-full h-12 px-4 text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
              />

              <textarea
                name="message"
                placeholder="Your Message*"
                className="w-full h-32 px-4 py-3 text-base border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                required
              />

              <button
                type="submit"
                className="bg-blue-400 text-white text-base px-8 py-3 rounded-md hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full h-full overflow-hidden rounded-2xl shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={Mocha || "/placeholder.svg?height=600&width=500"}
                loading="lazy"
                alt="Contact"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Afacad" }}
        className="flex justify-center py-2 mt-auto"
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
    </section>
  );
}

export default Contact;
