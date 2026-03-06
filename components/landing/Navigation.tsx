'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollInstance, setScrollInstance] = useState<any>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    // Get Locomotive Scroll instance
    const scrollEl = document.querySelector('[data-scroll-container]')
    if (scrollEl && (scrollEl as any).locomotive) {
      setScrollInstance((scrollEl as any).locomotive)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    if (targetElement && scrollInstance) {
      scrollInstance.scrollTo(targetElement)
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleNavClick = (item: 'Features' | 'Pricing' | 'FAQ') => {
    if (item === 'Features') {
      router.push('/features')
      setMobileMenuOpen(false)
      return
    }

    if (item === 'Pricing') {
      router.push('/pricing')
      setMobileMenuOpen(false)
      return
    }

    const id = item.toLowerCase()

    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      handleSmoothScroll(id)
      return
    }

    router.push(`/#${id}`)
    setMobileMenuOpen(false)
  }

  return (
    <nav 
      className="fixed top-6 left-0 right-0 z-[100] transition-all duration-500 font-inter px-6"
    >
      <div 
        className={`max-w-7xl mx-auto px-6 rounded-3xl transition-all duration-500 border border-white/40 shadow-lg ${
          scrolled 
            ? 'py-2.5 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]' 
            : 'py-4 bg-white/30 backdrop-blur-md border-white/20 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]'
        }`}
      >
        <div className="flex justify-between items-center h-6">
          
          {/* --- LOGO --- */}
          <div className="flex items-center gap-2.5 group">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <img 
                src="/vyxel_logo.png" 
                alt="Vyxel" 
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </button>
          </div>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden md:flex items-center gap-10">
            {['Features', 'Pricing', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item as 'Features' | 'Pricing' | 'FAQ')}
                className="text-xs font-medium text-[#1A202C]/60 hover:text-[#1A202C] transition-colors tracking-wide cursor-pointer"
              >
                {item}
              </button>
            ))}
            
            <Button 
              className="px-6 rounded-full text-xs font-semibold h-9 shadow-sm transition-all hover:shadow-md hover:brightness-110 active:scale-95"
              style={{ backgroundColor: '#2779F0', color: '#FFFFFF' }}
              onClick={() => window.open('/inquiry', '_self')}
            >
              Book Demo
            </Button>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            className="md:hidden p-2 text-[#1A202C] opacity-70 hover:opacity-100 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* --- MOBILE MENU (Cloudy Island) --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="md:hidden absolute top-20 left-0 right-0 p-5 rounded-[2.5rem] bg-white border border-white/40 shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {['Features', 'Pricing', 'FAQ'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item as 'Features' | 'Pricing' | 'FAQ')}
                    className="px-6 py-3.5 rounded-full text-sm font-medium text-[#1A202C]/70 hover:bg-black/5 hover:text-[#1A202C] cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-3">
                  <Button 
                    className="w-full h-12 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: '#2779F0', color: '#FFFFFF' }}
                    onClick={() => window.open('/inquiry', '_self')}
                  >
                    Book Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}