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
  title: 'Fightingrooster Athens - Nemesis Athletic Club',
  description:
    'Το προπονητήριο των μαχητικών αθλημάτων στην Αθήνα. Muay Thai, Kick Boxing, Πυγμαχία.',
  keywords: 'Muay Thai Αθήνα, Kick Boxing, Πυγμαχία, Μαχητικά Αθλήματα',
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
