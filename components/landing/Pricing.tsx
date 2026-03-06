'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion, Variants } from 'framer-motion'
import { CheckCircle2, Crown } from 'lucide-react'

const colors = {
  primary: '#2779F0',
  secondary: '#2AA8F3',
  accent: '#4DDCE2',
  light: '#B0E2F6',
  white: '#FDFDFD',
  dark: '#111827',
  textSecondary: '#4B5563',
}

interface Plan {
  name: string
  price: string
  period: string
  desc: string
  features: string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '₹4,999',
    period: '/month',
    desc: 'Perfect for new consultancies getting started',
    features: ['Up to 500 leads', 'Basic reporting', 'Email support', '1 user'],
  },
  {
    name: 'Growth',
    price: '₹8,999',
    period: '/month',
    desc: 'For rapidly scaling consultancies',
    features: [
      'Unlimited leads',
      'Advanced analytics',
      'Priority support',
      '10 user accounts',
      'AI lead scoring',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '₹14,999',
    period: '/month',
    desc: 'For large organizations with custom needs',
    features: [
      'Unlimited everything',
      'Custom integrations',
      'Dedicated manager',
      'Unlimited users',
      'Custom AI features',
      'White label',
    ],
  },
]

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.8 },
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

export default function Pricing() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white" id="pricing">
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
              <Crown className="w-4 h-4" style={{ color: colors.primary }} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: colors.primary }}>
              Pricing
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-[420] tracking-tighter mb-8 leading-[1.1]"
            style={{ color: colors.dark }}
          >
            Simple pricing for growing consultancies.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            Choose the perfect plan that scales with your business. 
            No hidden fees, cancel anytime.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {plans.map((plan, i) => (
            <motion.div key={i} variants={itemVariants} className="h-full">
              <Card 
                className={`group relative h-full p-8 transition-all duration-500 overflow-hidden rounded-3xl ${
                  plan.featured
                    ? 'border-2 shadow-2xl scale-105 z-10'
                    : 'border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl'
                }`}
                style={plan.featured ? { borderColor: colors.primary } : {}}
              >
                {/* Subtle Hover Gradient Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{ background: `radial-gradient(circle at top right, ${colors.primary}08, transparent 70%)` }}
                />

                {/* Featured Badge */}
                {plan.featured && (
                  <div
                    className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-[10px] font-bold uppercase tracking-widest text-white shadow-lg"
                    style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2 tracking-tight" style={{ color: colors.dark }}>
                    {plan.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: colors.textSecondary }}>
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-5xl font-bold tracking-tight" style={{ color: colors.dark }}>
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium" style={{ color: colors.textSecondary }}>
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mb-8 h-12 rounded-xl font-bold transition-all duration-300 ${
                      plan.featured
                        ? 'text-white shadow-md hover:shadow-xl hover:-translate-y-0.5'
                        : 'border-2 hover:bg-slate-50'
                    }`}
                    style={plan.featured ? { 
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      border: 'none'
                    } : { 
                      borderColor: `${colors.primary}30`, 
                      color: colors.primary,
                      backgroundColor: 'transparent' 
                    }}
                    variant={plan.featured ? 'default' : 'outline'}
                    onClick={() => window.open('/inquiry', '_self')}
                  >
                    Get Started
                  </Button>

                  {/* Features */}
                  <ul className="space-y-4 mt-auto">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-3">
                        <CheckCircle2 
                          className="w-5 h-5 flex-shrink-0" 
                          style={{ color: plan.featured ? colors.primary : `${colors.primary}60` }}
                        />
                        <span className="text-sm font-medium" style={{ color: colors.dark }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <button 
            className="group flex items-center gap-2 font-bold transition-all"
            style={{ color: colors.primary }}
          >
            Compare all features 
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </button>
          <p className="text-xs font-medium uppercase tracking-widest opacity-40">
            Secure checkout powered by Stripe
          </p>
        </motion.div>
      </div>
    </section>
  )
}