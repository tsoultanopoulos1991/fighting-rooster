import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'greek'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Muay Thai & Kick Boxing στην Κυψέλη – FightingRooster Athens',
  description:
    'Μαθήματα Muay Thai, Kick Boxing και Πυγμαχίας στην Κυψέλη. Ελάτε στο προπονητήριο FightingRooster για επαγγελματική προπόνηση σε μαχητικά αθλήματα.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="el" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
