import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Studio Sen Flow',
  description: 'Flow begins where clarity meets code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
          <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-semibold">
                Studio Sen
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/programs" className="nav-link">All Programs</Link>
                <Link href="/about" className="nav-link">Why Studio Sen?</Link>
                <Link href="/next" className="nav-link">Take the Next Step</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="button-secondary hidden sm:block">
                Search
              </button>
              <button className="button-primary">
                Get Started
              </button>
              <button className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 