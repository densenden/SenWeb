import type { Metadata } from 'next'
import { Rubik, Bodoni_Moda } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni-moda',
})

export const metadata: Metadata = {
  title: 'SenFlow - Studio Sen',
  description: 'Flow beginnt dort, wo Klarheit auf Code trifft.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${rubik.variable} ${bodoniModa.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 