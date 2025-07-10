"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0)
  const { t } = useLanguage()

  const texts = [
    { line1: t("hero.roles.name").split(" ")[0], line2: t("hero.roles.name").split(" ")[1] },
    {
      line1: t("hero.roles.designer").split(" ")[0],
      line2: t("hero.roles.designer").split(" ")[1] || t("hero.roles.designer").split("/")[1],
    },
    { line1: t("hero.roles.frontend").split(" ")[0], line2: t("hero.roles.frontend").split(" ")[1] },
    {
      line1: t("hero.roles.interface").split(" ")[0],
      line2: t("hero.roles.interface").split(" ")[1] + " " + (t("hero.roles.interface").split(" ")[2] || ""),
    },
    { line1: t("hero.roles.architect").split(" ")[0], line2: t("hero.roles.architect").split(" ")[1] },
    { line1: t("hero.roles.analyst").split(" ")[0], line2: t("hero.roles.analyst").split(" ")[1] },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 md:pt-24 lg:pt-20 bg-white dark:bg-gray-900 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("hero.greeting")}{" "}
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent block mt-2 leading-tight"
            >
              <span className="block">{texts[currentText].line1}</span>
              <span className="block">{texts[currentText].line2}</span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-400 dark:hover:to-purple-400 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-blue-500/25"
            >
              {t("hero.cta.projects")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 transition-all duration-300"
            >
              {t("hero.cta.contact")}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="relative">
            <div className="w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-2xl dark:shadow-blue-500/20">
              <Image
                src="/ghibli.jpg?height=320&width=320"
                alt="Photo de profil"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Animated decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-2xl shadow-lg dark:shadow-blue-500/50"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-300 dark:to-gray-100 rounded-xl shadow-lg"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1.5,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 -left-4 w-6 h-6 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-500 dark:to-purple-500 rounded-full shadow-md dark:shadow-blue-500/30"
              animate={{
                x: [0, -8, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
