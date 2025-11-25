import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const BackgroundMusic = dynamic(() => import('@/components/audio/BackgroundMusic'), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohammed Kaif Pasha | AI Engineer & Full-Stack Developer',
  description: 'Portfolio of Mohammed Kaif Pasha - AI Engineer, Full-Stack Developer, and Innovator specializing in Machine Learning, Web3, and cutting-edge web technologies.',
  keywords: ['Mohammed Kaif Pasha', 'AI Engineer', 'Full-Stack Developer', 'Machine Learning', 'Web3', 'Blockchain', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Mohammed Kaif Pasha' }],
  creator: 'Mohammed Kaif Pasha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohammedkaifpasha.com',
    title: 'Mohammed Kaif Pasha | AI Engineer & Full-Stack Developer',
    description: 'Building Intelligent Digital Futures with AI, Full-Stack Development, and Web3 Technologies',
    siteName: 'Mohammed Kaif Pasha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Kaif Pasha | AI Engineer & Full-Stack Developer',
    description: 'Building Intelligent Digital Futures with AI, Full-Stack Development, and Web3 Technologies',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <BackgroundMusic />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mohammed Kaif Pasha',
              url: 'https://mohammedkaifpasha.com',
              jobTitle: 'AI Engineer & Full-Stack Developer',
              description: 'AI Engineer, Full-Stack Developer, and Innovator specializing in Machine Learning, Web3, and cutting-edge web technologies',
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Osmania University',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hyderabad',
                addressCountry: 'India',
              },
              email: 'mdkaifpasha2k@gmail.com',
              sameAs: [
                'https://github.com/mohammedkaif056',
                'https://www.linkedin.com/in/mohammed-kaif-pasha-138003255',
                'https://x.com/mdkaifpasha2k',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
