"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello ! Je suis",
    "hero.roles.name": "Cadem Adangnitode",
    "hero.roles.designer": "Designer UI/UX",
    "hero.roles.frontend": "Développeur Front-end",
    "hero.roles.interface": "Concepteur D'interface web",
    "hero.roles.architect": "Architecte Logiciel",
    "hero.roles.analyst": "Data Analyst",
    "hero.description":
      "Passionné par la création d'expériences numériques exceptionnelles et l'analyse de données pour des insights pertinents.",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Me contacter",

    // About
    "about.title": "About Me",
    "about.description1":
      "Développeur passionné avec une solide expérience en développement front-end et une curiosité grandissante pour l'analyse de données. Je crée des interfaces utilisateur intuitives et performantes tout en explorant les insights cachés dans les données.",
    "about.description2":
      "Mon approche combine créativité technique et rigueur analytique pour livrer des solutions qui répondent aux besoins utilisateurs tout en apportant de la valeur business.",
    "about.experience": "Années d'expérience",
    "about.projects": "Projets réalisés",
    "about.download": "Télécharger mon CV",

    // Skills
    "skills.title": "Mes Compétences",
    "skills.technologies": "Technologies & Outils",
    "skills.soft": "Soft Skills",
    "skills.communication": "Communication",
    "skills.communication.desc": "Capacité à expliquer des concepts techniques de manière claire et accessible",
    "skills.leadership": "Leadership",
    "skills.leadership.desc": "Gestion d'équipe et coordination de projets complexes",
    "skills.problem": "Résolution de problèmes",
    "skills.problem.desc": "Approche analytique pour identifier et résoudre les défis techniques",
    "skills.adaptability": "Adaptabilité",
    "skills.adaptability.desc": "Apprentissage rapide de nouvelles technologies et méthodologies",
    "skills.time": "Gestion du temps",
    "skills.time.desc": "Respect des délais et priorisation efficace des tâches",
    "skills.innovation": "Innovation",
    "skills.innovation.desc": "Recherche constante de solutions créatives et optimisées",

    // Projects
    "projects.title": "Mes Projets",
    "projects.description":
      "Découvrez une sélection de mes réalisations qui démontrent mes compétences techniques et ma créativité.",
    "projects.featured": "Projet phare",
    "projects.view": "Voir le projet",
    "projects.code": "Code",

    // Project descriptions
    "project.ecommerce.title": "Easy Travel",
    "project.ecommerce.desc":
      "Easy Travel est une plateforme numérique conçue pour rendre le transport de passagers et de marchandises par bus plus simple, rapide et accessible.",
    "project.dashboard.title": "Tekbot Robotics",
    "project.dashboard.desc":
      "Tableau de bord interactif pour visualiser et analyser les données business avec graphiques dynamiques.",
    "project.mobile.title": "WhoLIkeMe",
    "project.mobile.desc": "Interface utilisateur moderne pour application mobile de fitness avec suivi d'activités.",
    "project.portfolio.title": "Articoin",
    "project.portfolio.desc": "Site portfolio responsive avec animations fluides et design moderne.",
    "project.dataviz.title": "SmartScop",
    "project.dataviz.desc": "Outil de visualisation de données avec graphiques interactifs et export PDF.",
    "project.taskmanager.title": "Free Cine",
    "project.taskmanager.desc": "Application de gestion de tâches collaborative avec notifications temps réel.",

    // Contact
    "contact.title": "Me Contacter",
    "contact.description": "Prêt à collaborer sur votre prochain projet ? Contactez-moi et discutons de vos idées !",
    "contact.subtitle": "Restons en contact",
    "contact.intro":
      "Je suis actuellement à la recherche de nouvelles opportunités passionnantes. N'hésitez pas à me contacter pour discuter de vos projets !",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.available": "Disponible pour un poste",
    "contact.position": "Développeur front-end, fullstack ou data analyst junior",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.placeholder.name": "Votre nom",
    "contact.form.placeholder.email": "votre@email.com",
    "contact.form.placeholder.message": "Parlez-moi de votre projet...",
    "contact.form.send": "Envoyer le message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.sent": "Message envoyé !",
    "contact.form.success": "Merci pour votre message !",
    "contact.form.success.desc": "Je vous répondrai dans les plus brefs délais.",

    // Footer
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello! I'm",
    "hero.roles.name": "Cadem Adangnitode",
    "hero.roles.designer": "UI/UX Designer",
    "hero.roles.frontend": "Front-end Developer",
    "hero.roles.interface": "Web Interface Designer",
    "hero.roles.architect": "Software Architect",
    "hero.roles.analyst": "Data Analyst",
    "hero.description":
      "Passionate about creating exceptional digital experiences and analyzing data for meaningful insights.",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Contact me",

    // About
    "about.title": "About Me",
    "about.description1":
      "Passionate developer with solid experience in front-end development and growing curiosity for data analysis. I create intuitive and performant user interfaces while exploring hidden insights in data.",
    "about.description2":
      "My approach combines technical creativity and analytical rigor to deliver solutions that meet user needs while bringing business value.",
    "about.experience": "Years of experience",
    "about.projects": "Completed projects",
    "about.download": "Download my CV",

    // Skills
    "skills.title": "My Skills",
    "skills.technologies": "Technologies & Tools",
    "skills.soft": "Soft Skills",
    "skills.communication": "Communication",
    "skills.communication.desc": "Ability to explain technical concepts clearly and accessibly",
    "skills.leadership": "Leadership",
    "skills.leadership.desc": "Team management and complex project coordination",
    "skills.problem": "Problem Solving",
    "skills.problem.desc": "Analytical approach to identify and solve technical challenges",
    "skills.adaptability": "Adaptability",
    "skills.adaptability.desc": "Quick learning of new technologies and methodologies",
    "skills.time": "Time Management",
    "skills.time.desc": "Meeting deadlines and effective task prioritization",
    "skills.innovation": "Innovation",
    "skills.innovation.desc": "Constant search for creative and optimized solutions",

    // Projects
    "projects.title": "My Projects",
    "projects.description":
      "Discover a selection of my achievements that demonstrate my technical skills and creativity.",
    "projects.featured": "Featured project",
    "projects.view": "View project",
    "projects.code": "Code",

    // Project descriptions
    "project.ecommerce.title": "Easy Travel",
    "project.ecommerce.desc":
      "Easy Travel is a digital platform designed to make passenger and goods transportation by bus simpler, faster, and more accessible.",
    "project.dashboard.title": "Tekbot Robotics",
    "project.dashboard.desc": "Interactive dashboard to visualize and analyze business data with dynamic charts.",
    "project.mobile.title": "WhoLikeMe",
    "project.mobile.desc": "Modern user interface for fitness mobile application with activity tracking.",
    "project.portfolio.title": "Articoin",
    "project.portfolio.desc": "Responsive portfolio website with smooth animations and modern design.",
    "project.dataviz.title": "SmartScop",
    "project.dataviz.desc": "Data visualization tool with interactive charts and PDF export.",
    "project.taskmanager.title": "Free Cine",
    "project.taskmanager.desc": "Collaborative task management application with real-time notifications.",

    // Contact
    "contact.title": "Contact Me",
    "contact.description": "Ready to collaborate on your next project? Contact me and let's discuss your ideas!",
    "contact.subtitle": "Let's stay in touch",
    "contact.intro":
      "I'm currently looking for exciting new opportunities. Feel free to contact me to discuss your projects!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.available": "Available for a position",
    "contact.position": "Front-end, fullstack developer or junior data analyst",
    "contact.form.name": "Full name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.placeholder.name": "Your name",
    "contact.form.placeholder.email": "your@email.com",
    "contact.form.placeholder.message": "Tell me about your project...",
    "contact.form.send": "Send message",
    "contact.form.sending": "Sending...",
    "contact.form.sent": "Message sent!",
    "contact.form.success": "Thank you for your message!",
    "contact.form.success.desc": "I will reply to you as soon as possible.",

    // Footer
    "footer.rights": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    // Detect browser language or use saved preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      const browserLanguage = navigator.language.toLowerCase()
      const detectedLanguage = browserLanguage.startsWith("en") ? "en" : "fr"
      setLanguage(detectedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
