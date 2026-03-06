'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/landing/Navigation'
import Hero from '@/components/landing/Hero'
import Trust from '@/components/landing/Trust'
import Features from '@/components/landing/Features'
import Analytics from '@/components/landing/Analytics'
import Pricing from '@/components/landing/Pricing'
import Benefits from '@/components/landing/Benefits'
import CTA from '@/components/landing/CTA'
import FAQ from '@/components/landing/FAQ'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-hidden" data-scroll-container>
      <Navigation />
      <Hero data-scroll-section />
      <Trust data-scroll-section />
      <Features data-scroll-section />
      <Analytics data-scroll-section />
      <Pricing data-scroll-section />
      <Benefits data-scroll-section />
      <CTA data-scroll-section />
      <FAQ data-scroll-section />
      <Footer data-scroll-section />

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(124, 58, 237, 0.5);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
