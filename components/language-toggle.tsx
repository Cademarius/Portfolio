"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-sm border border-gray-200 dark:border-gray-600 shadow-sm dark:shadow-lg"
      aria-label="Toggle language"
    >
      <motion.span
        initial={false}
        animate={{ scale: [0.9, 1.1, 1] }}
        transition={{ duration: 0.4 }}
        key={language}
        className="text-blue-600 dark:text-blue-400"
      >
        {language.toUpperCase()}
      </motion.span>
    </motion.button>
  )
}

export default LanguageToggle
