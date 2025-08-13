import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Tidjani Frontend',
  description: 'Portfolio website',
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
