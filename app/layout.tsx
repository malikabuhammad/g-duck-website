import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'G.Duck Jordan - Toys. Style. Childhood magic.',
  description: 'G.Duck Jordan - بطبوط يقود المرح. Retail company offering toys, style, and childhood magic.',
  viewport: 'width=device-width, initial-scale=1',
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

