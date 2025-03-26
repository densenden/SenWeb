"use client"

import { Button } from "@sen/ui/components/Button"
import { ThemeToggle } from "@sen/ui/components/theme-toggle"
import { LanguageToggle } from "@sen/ui/components/language-toggle"
import { useState } from "react"
import { Language, translate } from "@sen/ui/lib/i18n"

export default function Home() {
  const [language, setLanguage] = useState<Language>('en')
  const [content, setContent] = useState({
    title: "SenBlog",
    subtitle: "Insights, thoughts, and discoveries from the world of software development and digital innovation.",
    technology: {
      title: "Technology",
      description: "Deep dives into modern web development, architecture, and best practices."
    },
    design: {
      title: "Design",
      description: "Exploring the intersection of design and technology, from UI/UX to system architecture."
    },
    innovation: {
      title: "Innovation",
      description: "Thoughts on emerging trends, future technologies, and digital transformation."
    },
    newsletter: {
      title: "Stay Updated",
      description: "Subscribe to our newsletter for the latest insights and updates from the Sen team.",
      button: "Subscribe to Newsletter"
    }
  })

  const handleLanguageChange = async (newLanguage: Language) => {
    setLanguage(newLanguage)
    if (newLanguage === 'en') {
      setContent({
        title: "SenBlog",
        subtitle: "Insights, thoughts, and discoveries from the world of software development and digital innovation.",
        technology: {
          title: "Technology",
          description: "Deep dives into modern web development, architecture, and best practices."
        },
        design: {
          title: "Design",
          description: "Exploring the intersection of design and technology, from UI/UX to system architecture."
        },
        innovation: {
          title: "Innovation",
          description: "Thoughts on emerging trends, future technologies, and digital transformation."
        },
        newsletter: {
          title: "Stay Updated",
          description: "Subscribe to our newsletter for the latest insights and updates from the Sen team.",
          button: "Subscribe to Newsletter"
        }
      })
    } else {
      const translatedContent = await Promise.all([
        translate({ text: content.title, targetLanguage: newLanguage }),
        translate({ text: content.subtitle, targetLanguage: newLanguage }),
        translate({ text: content.technology.title, targetLanguage: newLanguage }),
        translate({ text: content.technology.description, targetLanguage: newLanguage }),
        translate({ text: content.design.title, targetLanguage: newLanguage }),
        translate({ text: content.design.description, targetLanguage: newLanguage }),
        translate({ text: content.innovation.title, targetLanguage: newLanguage }),
        translate({ text: content.innovation.description, targetLanguage: newLanguage }),
        translate({ text: content.newsletter.title, targetLanguage: newLanguage }),
        translate({ text: content.newsletter.description, targetLanguage: newLanguage }),
        translate({ text: content.newsletter.button, targetLanguage: newLanguage })
      ])

      setContent({
        title: translatedContent[0],
        subtitle: translatedContent[1],
        technology: {
          title: translatedContent[2],
          description: translatedContent[3]
        },
        design: {
          title: translatedContent[4],
          description: translatedContent[5]
        },
        innovation: {
          title: translatedContent[6],
          description: translatedContent[7]
        },
        newsletter: {
          title: translatedContent[8],
          description: translatedContent[9],
          button: translatedContent[10]
        }
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Willkommen beim Sen Blog</h1>
        <p className="text-xl mb-4">
          Hier finden Sie interessante Artikel über Softwareentwicklung und Technologie.
        </p>
      </div>
    </main>
  )
} 