'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Target, Users, TrendingUp, Shield, Star, LucideIcon } from 'lucide-react'

const colors = {
  primary: '#0D6493',
  light: '#1E88C0',
  accent: '#34D3E5',
  dark: '#111827',
  textSecondary: '#4B5563',
}

interface Benefit {
  icon: LucideIcon
  title: string
  desc: string
  highlight: string
}

const benefits: Benefit[] = [
  {
    icon: Target,
    title: 'Higher Conversions',
    desc: 'Boost application completion by 35% with intelligent automation',
    highlight: '+35% completion'
  },
  {
    icon: Users,
    title: 'Team Accountability',
    desc: 'Track counselor performance metrics and optimize team productivity',
    highlight: 'Real-time tracking'
  },
  {
    icon: TrendingUp,
    title: 'Scale Easily',
    desc: 'Handle thousands of students without compromising on quality',
    highlight: 'Unlimited scale'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    desc: 'Enterprise-grade security with GDPR and data protection compliance',
    highlight: 'SOC 2 certified'
  },
]

// Animation Variants typed to resolve IDE errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.8 },
  },
}

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Benefits() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white" id="benefits">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="p-2 rounded-lg" style={{ background: `${colors.primary}10` }}>
              <Star className="w-4 h-4" style={{ color: colors.primary }} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: colors.primary }}>
              Benefits
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-[420] tracking-tighter mb-8 leading-[1.1]"
            style={{ color: colors.dark }}
          >
            Why leading consultancies choose Vyxel.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{ color: colors.textSecondary }}
          >
            Experience the platform that transforms how consultancies manage 
            student relationships and drive growth.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <div className="group relative h-full p-8 bg-white border border-slate-200 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden rounded-3xl text-center flex flex-col items-center">
                  {/* Subtle Hover Gradient Background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                    style={{ background: `radial-gradient(circle at center, ${colors.primary}08, transparent 70%)` }}
                  />

                  <div className="relative z-10 flex flex-col items-center h-full">
                    {/* Icon Container */}
                    <div 
                      className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-transform duration-500 group-hover:scale-110 shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.light})`, color: 'white' }}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 tracking-tight" style={{ color: colors.dark }}>
                      {benefit.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed mb-8" style={{ color: colors.textSecondary }}>
                      {benefit.desc}
                    </p>

                    {/* Highlight Badge */}
                    <div className="mt-auto">
                      <span 
                        className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{ 
                          background: `${colors.primary}10`, 
                          color: colors.primary,
                          border: `1px solid ${colors.primary}20` 
                        }}
                      >
                        {benefit.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex justify-center"
        >
          <button 
            className="group flex items-center gap-2 font-bold transition-all hover:gap-4"
            style={{ color: colors.primary }}
          >
            See success stories 
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}