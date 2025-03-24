"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Calendar, Briefcase, ChevronDown, ChevronUp } from "lucide-react"

// Experience data
const experiences = [
  {
    company: "Sarova Maiyan, Nanyuki",
    position: "Attachment Intern",
    date: "April 15, 2024 – July 15, 2024",
    responsibilities: [
      "Specialized in bar service, preparing and serving cocktails, coffee, and other beverages.",
      "Provided excellent customer service in both the bar and restaurant areas.",
      "Assisted in daily service operations, improving time management and problem-solving skills.",
      "Familiarized with the operational structure and workflow of a 4-star hotel.",
    ],
  },
  {
    company: "Enashipai Resort and Spa",
    position: "Waitress",
    date: "Nov 13, 2023 – Dec 20, 2023",
    responsibilities: [
      "Greeted customers, handed out menus, and took meal and beverage orders.",
      "Delivered meals and beverages to tables, ensuring timely service.",
      "Addressed customer preferences and ensured overall satisfaction.",
    ],
  },
  {
    company: "Astorian Grand Hotel",
    position: "Room attendant",
    date: "Dec 12, 2022 – Dec 30, 2022",
    responsibilities: [
      "Cleaned and maintained guest rooms to high standards.",
      "Made beds, changed linens, and sanitized bathrooms.",
      "Inspected rooms for damages and reported issues.",
      "Ensured all room appliances and amenities were in working order.",
    ],
  },
  {
    company: "Wehai Construction Company",
    position: "Road Construction",
    date: "May 2020 – Nov 2020",
    responsibilities: [
      "Conducted land surveys for road construction projects.",
      "Prepared detailed survey reports for road infrastructure.",
      "Operated surveying instruments to ensure precise measurements.",
      "Collaborated with project teams for accurate mapping and planning.",
    ],
  },
  {
    company: "Mt Kenya National Park",
    position: "Tourist Intern",
    date: "Jan 2020 – March 2020",
    responsibilities: [
      "Collected data and assisted in report writing.",
      "Monitored wildlife and led bird-watching tours.",
      "Conducted community awareness and sensitization programs.",
      "Assisted with equipment maintenance and servicing.",
      "Volunteered during special events organized by the park management.",
    ],
  },
]

function ExperienceCard({ experience, index, isVisible }) {
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 * index },
    },
  }

  const maxVisibleItems = 2
  const hasMoreItems = experience.responsibilities.length > maxVisibleItems

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative w-full md:w-3/4 mx-auto mb-12 md:mb-1" // Adjusted bottom margin
    >
      {/* Card */}
      <div
        style={{ fontFamily: "Afacad" }}
        className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 relative mx-2 md:mx-0 mt-8" // Added top margin for spacing
      >
        {/* Highlight effect on the card */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl -z-10"></div>

        <div className="mb-5">
          <div className="flex items-start">
            {/* <Briefcase className="mr-3 text-blue-500 mt-1 flex-shrink-0" size={22} /> */}
            {/* Reduced heading size */}
            <h3 className="text-lg md:text-lg sm:text-base font-medium text-gray-800">
            {experience.company}</h3>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
            <p className="text-blue-600 font-regular text-base md:text-lg">{experience.position}</p>
            <div className="flex items-center text-gray-500 text-sm mt-2 sm:mt-0">
              <Calendar size={16} className="mr-2" />
              {experience.date}
            </div>
          </div>
        </div>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          {experience.responsibilities.slice(0, expanded ? undefined : maxVisibleItems).map((resp, i) => (
            <li key={i} className="text-base md:text-lg">
              {resp}
            </li>
          ))}
        </ul>

        {hasMoreItems && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-blue-600 hover:text-blue-800 flex items-center text-base font-regular bg-transparent border-none cursor-pointer px-2 py-1"
          >
            {expanded ? (
              <>
                Show less <ChevronUp size={18} className="ml-1" />
              </>
            ) : (
              <>
                Show more <ChevronDown size={18} className="ml-1" />
              </>
            )}
          </button>
        )}

        {/* Decorative Elements */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-blue-100 -z-10"></div>
        <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-blue-100/70 -z-10"></div>
      </div>
    </motion.div>
  )
}

function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-16"
    >
      {/* Background decorative elements with parallax effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 hidden lg:block"
        style={{
          transform: isVisible ? "translateY(0px)" : "translateY(-20px)",
          transition: "transform 2s ease-out",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 hidden lg:block"
        style={{
          transform: isVisible ? "translateY(0px)" : "translateY(20px)",
          transition: "transform 2s ease-out",
        }}
      />

<div className="w-full max-w-screen-xl px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isHeaderInView ? 1 : 0,
            y: isHeaderInView ? 0 : -20,
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="lg:mt-10 relative inline-block">
            <h1
              style={{ fontFamily: "Arsenica", fontWeight: "500" }}
              className="text-4xl md:text-5xl lg:text-5xl text-black"
            >
              Work Journey{" "}
            </h1>
            <div className="absolute -top-4 -right-6 w-12 h-12 rounded-full bg-blue-100 -z-10 hidden md:block" />
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: "Afacad" }}
            className="text-blue-800 text-base lg:text-lg  lg:mt-2"
          >
            <span className="relative inline-block">
              Experience{" "}
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200/50 -z-10 transform -rotate-1"></span>
            </span>
          </motion.h2>
        </motion.div>

        {/* Experience Cards - Added spacing between cards */}
        <div className="relative">
          <div className="space-y-8 md:space-y-12">
            {" "}
            {/* Added vertical spacing between cards */}
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

