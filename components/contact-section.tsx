"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: "", email: "", message: "" })
        }, 4000)
      } else {
        console.error("Erreur:", data.error)
        // Vous pouvez ajouter une gestion d'erreur ici
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
      // Vous pouvez ajouter une gestion d'erreur ici
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100">
            {t("contact.title")}
          </h2>
          <motion.div
            className="w-20 sm:w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100">
                {t("contact.subtitle")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                {t("contact.intro")}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-blue-800/50 shadow-sm dark:shadow-lg"
              >
                <div className="bg-blue-500 dark:bg-blue-400 p-3 sm:p-4 rounded-2xl text-white shadow-lg flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-100">
                    {t("contact.email")}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base truncate">
                    procodeur4@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-white dark:from-green-900/20 dark:to-gray-800 rounded-2xl border border-green-100 dark:border-green-800/50 shadow-sm dark:shadow-lg"
              >
                <div className="bg-green-500 dark:bg-green-400 p-3 sm:p-4 rounded-2xl text-white shadow-lg flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-100">
                    {t("contact.phone")}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">+229 01 62 39 57 61</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 rounded-2xl border border-purple-100 dark:border-purple-800/50 shadow-sm dark:shadow-lg"
              >
                <div className="bg-purple-500 dark:bg-purple-400 p-3 sm:p-4 rounded-2xl text-white shadow-lg flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-100">
                    {t("contact.location")}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Cotonou, Benin</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 p-6 sm:p-8 rounded-3xl text-white shadow-xl dark:shadow-blue-500/25"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-2xl flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <h4 className="font-bold text-lg sm:text-xl">{t("contact.available")}</h4>
              </div>
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">{t("contact.position")}</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                      placeholder={t("contact.form.placeholder.name")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300"
                    >
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                      placeholder={t("contact.form.placeholder.email")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                    placeholder={t("contact.form.placeholder.message")}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted || isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 dark:hover:from-blue-500 dark:hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg hover:shadow-xl dark:shadow-blue-500/25 text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      {t("contact.form.sending")}
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      {t("contact.form.sent")}
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t("contact.form.send")}
                    </>
                  )}
                </motion.button>
              </form>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mt-6 p-4 sm:p-6 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-2xl text-green-700 dark:text-green-300 text-center"
                >
                  <CheckCircle className="mx-auto mb-2" size={24} />
                  <p className="font-semibold text-sm sm:text-base">{t("contact.form.success")}</p>
                  <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 mt-1">
                    {t("contact.form.success.desc")}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
