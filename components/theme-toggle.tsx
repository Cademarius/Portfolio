"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-600 shadow-sm dark:shadow-lg"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 180 : 0,
          scale: theme === "dark" ? 0.9 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        {theme === "light" ? (
          <Sun size={20} className="text-yellow-600" />
        ) : (
          <Moon size={20} className="text-blue-400" />
        )}
      </motion.div>

      {/* Glow effect for dark mode */}
      {theme === "dark" && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}

export default ThemeToggle
