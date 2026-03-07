'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

const colors = {
  primary: '#2779F0',
  secondary: '#2AA8F3',
  accent: '#4DDCE2',
  light: '#B0E2F6',
  white: '#FDFDFD',
  dark: '#111827',
  textSecondary: '#4B5563',
}

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20" id="cta">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.primary}15, ${colors.secondary}10)` }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${colors.secondary}15, ${colors.primary}10)` }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 
            className="text-4xl md:text-6xl font-[420] tracking-tighter mb-8 leading-[1.1]"
            style={{ color: colors.dark }}
          >
            Ready to transform your consultancy?
          </h2>
          
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            Get a personalized walkthrough and discover how Vyxel can revolutionize 
            your lead management, boost conversions, and scale your operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            className="group h-14 px-10 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
            onClick={() => window.open('/inquiry', '_self')}
          >
            Book a Free Demo
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            className="h-14 px-10 rounded-xl font-semibold border-2 transition-all duration-300 hover:bg-white hover:shadow-lg group"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            <PlayCircle className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm"
          style={{ color: colors.textSecondary }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
            <span>Start your free trial today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
            <span>30-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
