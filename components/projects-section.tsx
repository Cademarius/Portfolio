"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const ProjectsSection = () => {
  const { t } = useLanguage()

  const projects = [
    {
       title: t("project.portfolio.title"),
      description: t("project.portfolio.desc"),
      image: "/articoin.png?height=300&width=400",
      technologies: ["Next.js", "Framer Motion", "Tailwind"],
      liveUrl: "https://catalogue.arti-coin.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: t("project.dashboard.title"),
      description: t("project.dashboard.desc"),
      image: "/trc.png?height=300&width=400",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://trc.tekbot.io/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: t("project.mobile.title"),
      description: t("project.mobile.desc"),
      image: "/wholikeme.png?height=300&width=400",
      technologies: ["React Native", "Expo", "Firebase"],
      liveUrl: "https://wlm-two.vercel.app/",
      githubUrl: "https://github.com/Cademarius/wlm",
      featured: false,
    },
    {
      title: t("project.ecommerce.title"),
      description: t("project.ecommerce.desc"),
      image: "/easy.png?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      liveUrl: "https://easy-travel-web-companies.vercel.app/",
      githubUrl: "https://github.com/easytravelio/easy_travel_web",
      featured: false,
    },
    {
      title: t("project.dataviz.title"),
      description: t("project.dataviz.desc"),
      image: "/smartscop.png?height=300&width=400",
      technologies: ["Python", "Plotly", "Pandas", "Streamlit"],
      liveUrl: "https://smart-repo.vercel.app/",
      githubUrl: "https://dev.azure.com/emackio/SMART/_git/SMART",
      featured: false,
    },
    {
      title: t("project.taskmanager.title"),
      description: t("project.taskmanager.desc"),
      image: "/freecine.png?height=300&width=400",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
      liveUrl: "https://freecine-two.vercel.app/",
      githubUrl: "https://github.com/Cademarius/freecine",
      featured: false,
    },
  ]

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-all duration-500"
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
            {t("projects.title")}
          </h2>
          <motion.div
            className="w-20 sm:w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-500 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 sm:p-4 rounded-2xl hover:bg-white transition-colors shadow-lg"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-900/90 backdrop-blur-sm text-white p-3 sm:p-4 rounded-2xl hover:bg-gray-900 transition-colors shadow-lg"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {t("projects.featured")}
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex-1 pr-2">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                    size={20}
                  />
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white px-4 sm:px-5 py-3 rounded-2xl text-sm font-medium hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 transition-colors shadow-md hover:shadow-lg flex-1"
                  >
                    <ExternalLink size={16} />
                    {t("projects.view")}
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 sm:px-5 py-3 rounded-2xl text-sm font-medium hover:border-gray-800 hover:text-gray-800 dark:hover:border-gray-400 dark:hover:text-gray-100 transition-colors flex-1"
                  >
                    <Github size={16} />
                    {t("projects.code")}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
