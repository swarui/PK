"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";
import Mocha from "../assets/Kardita2.jpg";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Your message was sent successfully.",
          icon: "success",
          toast: true,
          position: "top-end",
          timer: 2000,
          showConfirmButton: false,
        });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
          toast: true,
          position: "top-end",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        toast: true,
        position: "top-end",
        timer: 2000,
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
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-serif font-medium text-gray-900" style={{ fontFamily: "Arsenica" }}>Contact Me</h1>
            <p className="text-black/80 mb-6" style={{ fontFamily: "Afacad" }}>Let's connect! Reach out through the form or social media.</p>

            <div className="flex gap-3 mb-6">
  {[
    { Icon: Mail, link: "mailto:phoebekardita@gmail.com" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/phoebe-kardita-4342892a7/" },
    { Icon: Instagram, link: "https://www.instagram.com/kardita_phoebe/" },
    { Icon: Twitter, link: "https://twitter.com/yourprofile" },
  ].map(({ Icon, link }, index) => (
    <a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100/80 hover:bg-blue-200 transition-colors duration-300"
    >
      <Icon size={18} className="text-blue-600" />
    </a>
  ))}
</div>


            <form onSubmit={sendEmail} className="w-full space-y-4" style={{ fontFamily: "Afacad" }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  required
                  className="w-full h-12 px-4 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  required
                  className="w-full h-12 px-4 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full h-12 px-4 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full h-12 px-4 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message*"
                required
                className="w-full lg:h-70 md:h-30 sm:h-32 h-32 px-4 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-md transition-all duration-200"
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
    </section>
  );
}

export default Contact;
