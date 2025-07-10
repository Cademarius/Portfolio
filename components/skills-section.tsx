"use client"

import { motion } from "framer-motion"
import { MessageCircle, Users, Target, Clock, Lightbulb, Brain } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const SkillsSection = () => {
  const { t } = useLanguage()

  const technologies = [
    { name: "React", image: "/react.svg?height=60&width=60" },
    { name: "Next.js", image: "/nextdotjs.svg?height=60&width=60" },
    { name: "React Native", image: "/react.svg?height=60&width=60" },
    { name: "TypeScript", image: "/typescript-color.svg?height=60&width=60" },
    { name: "Tailwind", image: "/tailwindcss-color.svg?height=60&width=60" },
    { name: "Python", image: "/python-color.svg?height=60&width=60" },
    { name: "Fast Api", image: "/fastapi-color.svg?height=60&width=60" },
    { name: "Git", image: "/git-color.svg?height=60&width=60" },
    { name: "Figma", image: "/figma-color.svg?height=60&width=60" },
    { name: "MongoDB", image: "/mongodb-color.svg?height=60&width=60" },
    { name: "PostgreSQL", image: "/postgresql-color.svg?height=60&width=60" },
    { name: "Docker", image: "/docker-color.svg?height=60&width=60" },

  ]

  const softSkills = [
    {
      title: t("skills.communication"),
      description: t("skills.communication.desc"),
      icon: MessageCircle,
      color: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
    },
    {
      title: t("skills.leadership"),
      description: t("skills.leadership.desc"),
      icon: Users,
      color: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
    },
    {
      title: t("skills.problem"),
      description: t("skills.problem.desc"),
      icon: Brain,
      color: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
    },
    {
      title: t("skills.adaptability"),
      description: t("skills.adaptability.desc"),
      icon: Target,
      color: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
    },
    {
      title: t("skills.time"),
      description: t("skills.time.desc"),
      icon: Clock,
      color: "from-red-500 to-red-600 dark:from-red-400 dark:to-red-500",
    },
    {
      title: t("skills.innovation"),
      description: t("skills.innovation.desc"),
      icon: Lightbulb,
      color: "from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500",
    },
  ]

  return (
    <section
      id="skills"
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
            {t("skills.title")}
          </h2>
          <motion.div
            className="w-20 sm:w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Technologies & Outils */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-gray-100"
          >
            {t("skills.technologies")}
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
           {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl dark:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 group min-w-[100px] sm:min-w-[120px]"
            >
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                  <img 
                    src={tech.image} 
                    alt={tech.name}
                    className="w-8 sm:w-12 h-8 sm:h-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'block';
                      }
                    }}
                  />
                  <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gray-300 dark:bg-gray-600 rounded-lg hidden"></div>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {tech.name}
                </h4>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-gray-100"
          >
            {t("skills.soft")}
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl dark:shadow-xl dark:hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-800 dark:text-gray-100">
                      {skill.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
