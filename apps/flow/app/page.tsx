import { Button } from '@sen/ui'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-display tracking-tight leading-tight mb-8 animate-variable-text">
              SenFlow
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
              Flow beginnt dort, wo Klarheit auf Code trifft.
            </p>
            <div className="flex gap-4">
              <Button>Erkunden</Button>
              <Button variant="outline">Mehr erfahren</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid-layout">
            <div className="space-y-4">
              <h2 className="text-2xl font-display">Klarheit</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Wir schaffen Transparenz in der digitalen Welt.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-display">Achtsamkeit</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Jede Zeile Code wird mit Bedacht geschrieben.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-display">Kraft</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Technologie als Werkzeug für positive Veränderung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display mb-6">Bereit für den nächsten Schritt?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Lassen Sie uns gemeinsam Ihre Vision verwirklichen.
            </p>
            <Button>Kontakt aufnehmen</Button>
          </div>
        </div>
      </section>
    </main>
  )
} 