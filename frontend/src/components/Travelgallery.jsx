"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import One from "../assets/one.jpeg";
import Two from "../assets/two.jpeg";
import Four from "../assets/four.jpeg";
import Five from "../assets/five.jpg";

function TravelGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const images = [
    {
      src: One,
      alt: "Sarova Maiyan",
      location: "Sarova Maiyan, Nanyuki",
      url: "https://www.sarovahotels.com/maiyan-nanyuki/",
      description: "With my friends at work in Sarova Maiyan, Nanyuki",
    },
    {
      src: Two,
      alt: "Wildlife Research & Training Institute",
      location: "Wildlife Research & Training Institute",
      url: "https://www.wrti.go.ke",
      description:
        "Wildlife Research & Training Institute with Dr. Alfred Mutua and colleagues.",
    },
    {
      src: Four,
      alt: "Maasai Mara National Park",
      location: "Maasai Mara National Park",
      url: "https://www.masaimara.com/",
      description: "Maasai Mara National Park for a school research project",
    },
    {
      src: Five,
      alt: "Mount Kenya",
      location: "Mount Kenya",
      url: "https://en.wikipedia.org/wiki/Mount_Kenya",
      description: "At the peak of Mount Kenya",
    },
  ];

  return (
    <section
      id="travelgallery"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden  py-16"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 hidden lg:block" />

      <div className="w-full max-w-screen-xl px-6 md:px-8 lg:px-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h1
            style={{ fontFamily: "Arsenica" }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium  text-black relative inline-block"
          >
            Travel Gallery <span className="text-blue-400">:)</span>
            <span className="absolute bottom-2 left-0 w-full h-2 bg-blue-200/50 -z-10 transform -rotate-1"></span>
          </h1>
          <h2 style={{ fontFamily: "Afacad" }} className="text-blue-800 text-base lg:text-lg mt-2">
Work Visits          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-col-1 sm:grid-cols-2 gap-8 md:gap-10">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Location Badge with Link */}
                  {/* Location Badge with Link */}
                  <div className="absolute bottom-3 left-3 z-20 flex items-center">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-l-full shadow-sm">
                      <MapPin size={14} className="text-blue-600 mr-1" />
                      <p
                        style={{ fontFamily: "Afacad" }}
                        className="text-xs font-medium text-gray-800"
                      >
                        {image.location}
                      </p>
                    </div>

                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-400/80 backdrop-blur-sm p-1 rounded-full shadow-sm hover:bg-blue-500/80 transition-colors duration-300"
                    >
                      <ExternalLink size={12} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <div className="p-3 bg-white rounded-md shadow-sm">
                  <p
                    style={{ fontFamily: "Afacad" }}
                    className="text-sm md:text-base text-gray-700"
                  >
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-blue-100/50 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              className="max-h-[90vh] max-w-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default TravelGallery;
