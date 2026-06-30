import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import { headers } from 'next/headers'
import './globals.css'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import ShynaWidget from '@/src/components/shyna/ShynaWidget'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kovil.ai'),
  title: {
    default: 'Kovil AI — Managed AI Engineering, Zero Delivery Risk',
    template: '%s | Kovil AI',
  },
  description: 'Kovil AI is a managed AI engineering company. We embed vetted AI engineers into product teams, build fixed-price AI projects, and rescue failing AI applications.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') ?? ''
  // Standalone pages (e.g. client discovery questionnaire) opt out of the global chrome
  const isStandalone = pathname.includes('/discovery-questionnaire')

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
        {!isStandalone && <Navbar />}
        {children}
        {!isStandalone && <Footer />}
        {!isStandalone && <ShynaWidget />}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J2TXKBR1L0"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J2TXKBR1L0');
        `}</Script>
      </body>
    </html>
  )
}
