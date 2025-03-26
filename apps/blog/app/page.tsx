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
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold">{content.title}</div>
          <div className="flex items-center gap-4">
            <LanguageToggle currentLanguage={language} onLanguageChange={handleLanguageChange} />
            <ThemeToggle />
            <Button>{content.newsletter.button}</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">{content.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {content.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">{content.technology.title}</h2>
              <p className="text-muted-foreground">
                {content.technology.description}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{content.design.title}</h2>
              <p className="text-muted-foreground">
                {content.design.description}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{content.innovation.title}</h2>
              <p className="text-muted-foreground">
                {content.innovation.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{content.newsletter.title}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {content.newsletter.description}
          </p>
          <Button size="lg">{content.newsletter.button}</Button>
        </div>
      </section>
    </main>
  )
} 