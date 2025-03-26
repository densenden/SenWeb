import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
