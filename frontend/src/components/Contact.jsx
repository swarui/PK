"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";
import Mocha from "../assets/Kardita2.jpg";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          title: "Success!",
          text: "Your message was sent successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          background: "#4CAF50",
          customClass: {
            popup: "text-[14px] p-4 font-[Afacad]",
            title: "font-[Afacad]",
            content: "font-[Afacad]",
            confirmButton: "bg-white text-green-600",
          },
          timer: 2500,
          showConfirmButton: false,
        });
        e.target.reset();
      } else {
        Swal.fire({
          position: "top-end",
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
          background: "#4CAF50",
          customClass: {
            popup: "text-[14px] p-4 font-[Afacad]",
            title: "font-[Afacad]",
            content: "font-[Afacad]",
            confirmButton: "bg-white text-red-600",
          },
          timer: 2500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        title: "Error!",
        text: "An unexpected error occurred. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
        background: "#4CAF50",
        customClass: {
          popup: "text-[14px] p-4 font-[Afacad]",
          title: "font-[Afacad]",
          content: "font-[Afacad]",
          confirmButton: "bg-white text-red-600",
        },
        timer: 2500,
        showConfirmButton: false,
      });
      console.error("Error:", error);
    } finally {
      setIsSending(false);
    }
  };


  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex flex-col">
            <h1
              style={{ fontFamily: "Arsenica" }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-gray-900"
            >
              Contact Me
            </h1>

            <p
              style={{ fontFamily: "Afacad" }}
              className="text-black/80 mb-6"
            >
              Let's connect! Reach out through the form or social media.
            </p>

            <div className="flex gap-3 mb-6">
              {[Mail, Phone, Linkedin, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100/80 hover:bg-blue-200 transition-colors duration-300"
                >
                  <Icon size={18} className="text-blue-600" />
                </a>
              ))}
            </div>

            <form
              onSubmit={sendEmail}
              className="w-full space-y-4"
              style={{ fontFamily: "Afacad" }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full h-12 px-4  border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full h-12 px-4  border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address*"
                className="w-full h-12 px-4  border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-12 px-4  border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                />

              <textarea
                placeholder="Your Message*"
                  className="w-full h-32 px-4  border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                required
              />

              <button
                type="submit"
                className="bg-blue-400 text-white px-8 py-3 rounded-md hover:bg-blue-500 transition-all duration-300"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full h-full overflow-hidden rounded-2xl shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={Mocha || "/placeholder.svg?height=600&width=500"}
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
            className="underline ml-1"
          >
            this guy
          </a>
        </span>
      </div>
    </section>
  );
}

export default Contact;
