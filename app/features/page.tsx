'use client'

import Navigation from '@/components/landing/Navigation'
import DetailedFeatures from '@/components/landing/DetailedFeatures'
import Footer from '@/components/landing/Footer'

export default function FeaturesPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <main className="pt-28">
        <DetailedFeatures />
      </main>
      <Footer />
    </div>
  )
}
