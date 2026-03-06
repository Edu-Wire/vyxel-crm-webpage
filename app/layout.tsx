import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import LocomotiveScrollProvider from '@/components/providers/LocomotiveScrollProvider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vyxel - AI-Powered Student Relationship Management',
  description: 'Transform your study abroad consultancy with Vyxel - AI-powered lead management, student tracking, and workflow automation.',
  generator: 'Vyxel',
  icons: {
    icon: [
      {
        url: '/v.png',
        type: 'image/png',
      },
    ],
    apple: '/v.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_montserrat.className} antialiased`}>
        <LocomotiveScrollProvider>
          {children}
        </LocomotiveScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
