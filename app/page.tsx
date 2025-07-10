"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="space-y-0">
        <motion.div style={{ opacity }}>
          <HeroSection />
        </motion.div>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
