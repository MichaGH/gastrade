import { IBM_Plex_Sans, IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/UI/Navbar'
import Footer from '@/components/UI/Footer'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'GAS Trade — Meracia a regulačná technika',
  description:
    'Dovoz, predaj a zastúpenie meracej a regulačnej techniky pre plynárenstvo, energetiku a priemysel. Slovenský dodávateľ od roku 2000.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sk" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-ibm-plex-sans)] text-ink-900 bg-card text-base leading-normal">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
