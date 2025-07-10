"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 px-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/portfolio_logo.png?height=32&width=100"
              alt="Logo"
              width={100}
              height={32}
              className="h-8 w-auto dark:brightness-0 dark:invert"
            />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 Cadem Adangnitode. {t("footer.rights")}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm dark:shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm dark:shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
