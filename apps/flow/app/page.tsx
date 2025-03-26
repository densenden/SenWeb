import { Button } from "@studiosenmaster/sen-ui"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold">SenFlow</div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button>Kontakt aufnehmen</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">SenFlow</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Flow beginnt dort, wo Klarheit auf Code trifft. Wir entwickeln Software, die nicht nur funktioniert, sondern auch inspiriert.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Klarheit</h2>
              <p className="text-muted-foreground">
                Wir schaffen Transparenz in der Technologie, damit Sie den Überblick behalten.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Achtsamkeit</h2>
              <p className="text-muted-foreground">
                Jede Zeile Code wird mit Bedacht geschrieben, um nachhaltige Lösungen zu schaffen.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Kraft</h2>
              <p className="text-muted-foreground">
                Unsere Technologie gibt Ihnen die Kraft, Ihre Ziele zu erreichen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Kontaktieren Sie uns für ein unverbindliches Gespräch.
          </p>
          <Button size="lg">Kontakt aufnehmen</Button>
        </div>
      </section>
    </main>
  )
} 