"use client"

import { motion } from "framer-motion"
import { Download, Award, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const AboutSection = () => {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Enhanced Title Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl border border-blue-100 dark:border-gray-700 relative overflow-hidden dark:shadow-blue-500/10"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {t("about.title")}
              </motion.h2>
              <motion.div
                className="w-20 sm:w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />

              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-500/10 dark:from-blue-400/20 to-transparent rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16" />
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-purple-500/5 dark:from-purple-400/10 to-transparent rounded-full translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12" />
            </motion.div>

            {/* Enhanced Animated decorative elements */}
            <motion.div
              className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-2xl shadow-lg dark:shadow-blue-500/50"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-300 dark:to-gray-100 rounded-xl shadow-lg"
              animate={{
                rotate: [0, -360],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right Column - Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.p
                className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t("about.description1")}
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t("about.description2")}
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-md dark:shadow-lg border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-3">
                  <Award className="text-blue-500 dark:text-blue-400 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">3+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("about.experience")}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-md dark:shadow-lg border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-3">
                  <Target className="text-purple-500 dark:text-purple-400 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("about.projects")}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-200 dark:hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center sm:justify-start"
            >
              <Download size={20} />
              {t("about.download")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
