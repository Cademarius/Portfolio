"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import ThemeToggle from "./theme-toggle"
import LanguageToggle from "./language-toggle"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: t("nav.home"), id: "hero" },
    { label: t("nav.about"), id: "about" },
    { label: t("nav.skills"), id: "skills" },
    { label: t("nav.projects"), id: "projects" },
    { label: t("nav.contact"), id: "contact" },
  ]

  // Valeurs dynamiques selon le thème et l'état de scroll
  const getHeaderStyles = () => {
    if (isScrolled) {
      // Header scrollé - même style pour les deux modes
      return {
        backgroundColor: theme === "dark" ? "rgba(17, 24, 39, 0.9)" : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(20px)",
        borderRadius: "24px",
        boxShadow: theme === "dark" ? "0 8px 32px rgba(59, 130, 246, 0.15)" : "0 8px 32px rgba(0, 0, 0, 0.1)",
      }
    } else {
      // Header non-scrollé - transparent pour les deux modes
      return {
        backgroundColor: "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(0px)",
        borderRadius: "0px",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "px-4 pt-4" : "px-6 pt-6"
        }`}
      >
        <motion.div
          animate={getHeaderStyles()}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`transition-all duration-400 ${
            isScrolled
              ? "mx-auto max-w-6xl px-8 py-4 border border-white/20 dark:border-gray-700/50"
              : "max-w-6xl mx-auto px-8 py-4"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer" onClick={() => scrollToSection("hero")}>
              <Image
                src="/portfolio_logo.png?height=40&width=120"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto dark:brightness-0 dark:invert"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}

              {/* Theme and Language toggles */}
              <div className="flex items-center gap-3 ml-6">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <LanguageToggle />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 relative z-50"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} className="text-gray-800 dark:text-gray-100" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} className="text-gray-800 dark:text-gray-100" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`fixed z-40 md:hidden ${isScrolled ? "top-20 left-4 right-4" : "top-24 left-6 right-6"}`}
            >
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden dark:shadow-blue-500/10">
                <nav className="p-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ x: 10, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                      className="w-full text-left text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium py-4 px-4 rounded-xl"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
