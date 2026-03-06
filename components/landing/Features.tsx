'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import {
  Users,
  Sparkles,
  Phone,
  TrendingUp,
  Mail,
  BarChart3,
  ArrowRight,
  Zap,
  LucideIcon,
} from 'lucide-react'

const colors = {
  primary: '#2779F0',
  secondary: '#2AA8F3',
  accent: '#4DDCE2',
  light: '#B0E2F6',
  white: '#FDFDFD',
  dark: '#111827',
  textSecondary: '#4B5563',
  bgSection: '#FDFDFD',
  cardBorder: '#B0E2F640',
}

interface Feature {
  icon: LucideIcon
  title: string
  desc: string
  highlight: string
}

const features: Feature[] = [
  { 
    icon: Sparkles, 
    title: 'AI Lead Scoring', 
    desc: 'Identify high-intent students instantly using predictive behavioral modeling with 95% accuracy.',
    highlight: 'AI-Powered',
  },
  { 
    icon: Users, 
    title: 'Lead Management', 
    desc: 'Centralize inquiries in a searchable database with smart routing.',
    highlight: 'Centralized',
  },
  { 
    icon: Phone, 
    title: 'Call Intelligence', 
    desc: 'Auto-transcribe and analyze counselor interactions in real-time.',
    highlight: 'Analytics',
  },
  { 
    icon: TrendingUp, 
    title: 'Pipeline Tracking', 
    desc: "A bird's-eye view of the student journey from first click to successful enrollment.",
    highlight: 'Visual Funnel',
  },
  { 
    icon: Mail, 
    title: 'Unified Comms', 
    desc: 'Manage Email, SMS, and WhatsApp threads within a single interface.',
    highlight: 'Omnichannel',
  },
  { 
    icon: BarChart3, 
    title: 'Real-time Analytics', 
    desc: 'Track conversion rates and team performance with dynamic dashboards.',
    highlight: 'Forecasting',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants: Variants = {
  hidden: { 
    y: 40, 
    opacity: 0,
    filter: 'blur(8px)' 
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
}

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: colors.bgSection }} id="features" suppressHydrationWarning>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D649308_1px,transparent_1px),linear-gradient(to_bottom,#0D649308_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="p-1.5 rounded-md shadow-sm bg-white border border-slate-200">
              <Zap className="w-4 h-4" style={{ color: colors.primary }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: colors.primary }}>
              Features
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-[420] tracking-tighter leading-[1.1] mb-6"
            style={{ color: colors.dark }}
          >
            Built for the next generation of admissions.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: colors.textSecondary }}
          >
            Automate your student recruitment cycle with our specialized toolkit designed for modern consultancies.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            
            // Staggered logic: Row 1 (L-S), Row 2 (S-L), Row 3 (L-S)
            const isLarge = Math.floor(i / 2) % 2 === 0 ? i % 2 === 0 : i % 2 !== 0;

            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className={`${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <div 
                  className="group relative h-full overflow-hidden rounded-[2.5rem] bg-white p-8 transition-all duration-700 hover:-translate-y-2 
                             border-2 border-slate-200/80 hover:border-[${colors.light}80]
                             shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(39,121,240,0.2)]"
                  onClick={() => window.open('/features', '_self')}
                >
                  {/* Subtle Gradient Hover Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                    style={{ background: `linear-gradient(135deg, ${colors.primary}05 0%, transparent 100%)` }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container with Border */}
                    <div 
                      className="w-14 h-14 flex items-center justify-center rounded-2xl mb-8 transition-all duration-500 group-hover:scale-110 border-2 border-transparent group-hover:border-white/20 shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, 
                        color: 'white' 
                      }}
                    >
                      <Icon className="w-7 h-7 stroke-[1.5]" />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-semibold tracking-tight" style={{ color: colors.dark }}>
                        {feature.title}
                      </h3>
                      <span 
                        className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border-2"
                        style={{ 
                          background: `${colors.primary}08`, 
                          color: colors.primary,
                          borderColor: `${colors.primary}20`
                        }}
                      >
                        {feature.highlight}
                      </span>
                    </div>
                    
                    <p className="text-base leading-relaxed mb-10 max-w-[550px]" style={{ color: colors.textSecondary }}>
                      {feature.desc}
                    </p>

                    <div className="mt-auto flex items-center font-bold text-sm transition-all duration-300 group-hover:gap-3 cursor-pointer" style={{ color: colors.primary }}>
                      Explore feature 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Aesthetic Background Shape for Large Cards */}
                  {isLarge && (
                    <div 
                      className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 pointer-events-none blur-3xl"
                      style={{ backgroundColor: colors.primary }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex justify-center"
        >
          <button 
            className="group flex items-center gap-4 px-10 py-5 rounded-full font-bold transition-all bg-white border-2 border-slate-200 shadow-md hover:shadow-2xl hover:border-[rgba(13,100,147,0.3)] hover:-translate-y-1"
            style={{ color: colors.dark }}
          >
            Full Product Tour
            <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{ background: colors.primary, color: 'white' }}>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </motion.div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">No credit card required</p>
      </div>
    </section>
  )
}