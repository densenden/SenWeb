import { Button } from "@sen/ui/components/Button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold">SenBlog</div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button>Subscribe</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">SenBlog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Insights, thoughts, and discoveries from the world of software development and digital innovation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Technology</h2>
              <p className="text-muted-foreground">
                Deep dives into modern web development, architecture, and best practices.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Design</h2>
              <p className="text-muted-foreground">
                Exploring the intersection of design and technology, from UI/UX to system architecture.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Innovation</h2>
              <p className="text-muted-foreground">
                Thoughts on emerging trends, future technologies, and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and updates from the Sen team.
          </p>
          <Button size="lg">Subscribe to Newsletter</Button>
        </div>
      </section>
    </main>
  )
} 