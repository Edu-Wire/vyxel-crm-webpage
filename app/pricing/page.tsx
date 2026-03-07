'use client'

import React from 'react'
import Navigation from '@/components/landing/Navigation'
import Footer from '@/components/landing/Footer'
import { motion, Variants } from 'framer-motion'
import { Check, ArrowRight, Star, Minus } from 'lucide-react'

const colors = {
  primary: '#2779F0',
  secondary: '#2AA8F3',
  accent: '#4DDCE2',
  light: '#B0E2F6',
  white: '#FDFDFD',
  dark: '#111827',
  textSecondary: '#4B5563',
}

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for individual consultants getting started',
    price: '₹4,999',
    period: '/month',
    features: ['3 Users', 'Lead Management', 'Student Pipeline', 'Mobile App', 'Email Support'],
    featured: false
  },
  {
    name: 'Growth',
    description: 'For rapidly scaling agencies and teams',
    price: '₹8,999',
    period: '/month',
    features: [
      '8 Users',
      'WhatsApp Integration',
      'Call Logging & Recording',
      'Performance Dashboard',
      'Priority Support',
    ],
    featured: true
  },
  {
    name: 'Elite',
    description: 'The ultimate powerhouse for large agencies',
    price: '₹14,999',
    period: '/month',
    features: [
      'Unlimited Users',
      'Finance & Accounts Module', // Added here
      'AI Call Summaries',
      'Multi Branch Management',
      'Dedicated Manager',
    ],
    featured: false
  }
]

const tableFeatures = [
  { name: 'Users Included', starter: '3 Users', growth: '8 Users', elite: 'Unlimited' },
  { name: 'Lead Management', starter: true, growth: true, elite: true },
  { name: 'Student Pipeline', starter: true, growth: true, elite: true },
  { name: 'Follow-up Reminders', starter: true, growth: true, elite: true },
  { name: 'Task Management', starter: true, growth: true, elite: true },
  { name: 'Document Management', starter: true, growth: true, elite: true },
  { name: 'Email Integration', starter: true, growth: true, elite: true },
  { name: 'WhatsApp Integration', starter: false, growth: true, elite: true },
  { name: 'Call Logging', starter: false, growth: true, elite: true },
  { name: 'Call Recording', starter: false, growth: true, elite: true },
  { name: 'Counselor Performance', starter: false, growth: true, elite: true },
  { name: 'Team Activity Tracking', starter: false, growth: true, elite: true },
  { name: 'Finance & Accounts', starter: false, growth: false, elite: true }, // Added here
  { name: 'AI Call Summary', starter: false, growth: false, elite: true },
  { name: 'AI Lead Scoring', starter: false, growth: false, elite: true },
  { name: 'Advanced Analytics', starter: false, growth: false, elite: true },
  { name: 'Automation Workflows', starter: false, growth: false, elite: true },
  { name: 'Multi Branch Management', starter: false, growth: false, elite: true },
  { name: 'Custom Reports', starter: false, growth: false, elite: true },
  { name: 'Mobile App', starter: true, growth: true, elite: true },
  { name: 'Support', starter: 'Email', growth: 'Priority', elite: 'Dedicated' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.8 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function PricingPage() {
  const renderTableCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className="w-5 h-5 mx-auto" style={{ color: colors.primary }} />
      ) : (
        <Minus className="w-4 h-4 mx-auto opacity-20" />
      )
    }
    return <span className="text-sm font-medium" style={{ color: colors.textSecondary }}>{val}</span>
  }

  return (
    <div className="bg-white">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-[420] mb-6 tracking-tight" style={{ color: colors.dark }}>
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              Choose the perfect plan for your consultancy. All plans include our core CRM features with scalable options as you grow.
            </p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 mb-32"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative rounded-[2.5rem] p-10 transition-all duration-500 ${
                  plan.featured ? 'border-2 shadow-2xl scale-105 z-10' : 'border border-slate-200 shadow-xl'
                }`}
                style={{
                  backgroundColor: colors.white,
                  borderColor: plan.featured ? colors.primary : '#E2E8F0'
                }}
              >
                {plan.featured && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: colors.dark }}>{plan.name}</h3>
                  <p className="text-sm h-10 overflow-hidden" style={{ color: colors.textSecondary }}>{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold" style={{ color: colors.dark }}>{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                        <Check className="w-3 h-3" style={{ color: colors.primary }} />
                      </div>
                      <span className="text-sm font-medium" style={{ color: colors.textSecondary }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => window.location.href = '/inquiry'}
                  className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: plan.featured ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` : 'transparent',
                    border: plan.featured ? 'none' : `2px solid ${colors.primary}`,
                    color: plan.featured ? 'white' : colors.primary
                  }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Comparison Table Section */}
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.dark }}>Comparison Table</h2>
            <p style={{ color: colors.textSecondary }}>A detailed breakdown of every feature across our three tiers.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-sm mb-32"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="p-6 text-left text-xs font-bold uppercase tracking-widest text-slate-500">Features</th>
                    <th className="p-6 text-center text-xs font-bold uppercase tracking-widest text-slate-500">Starter</th>
                    <th className="p-6 text-center text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50/30">Growth</th>
                    <th className="p-6 text-center text-xs font-bold uppercase tracking-widest text-slate-500">Elite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tableFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-5 pl-8 text-sm font-semibold" style={{ color: colors.dark }}>
                        {row.name}
                        {row.name === 'Finance & Accounts' && (
                          <span className="ml-2 text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase tracking-tighter">New</span>
                        )}
                      </td>
                      <td className="p-5 text-center">{renderTableCell(row.starter)}</td>
                      <td className="p-5 text-center bg-blue-50/10">{renderTableCell(row.growth)}</td>
                      <td className="p-5 text-center">{renderTableCell(row.elite)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Custom Solution CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] p-12 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`, border: `1px solid ${colors.primary}20` }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: colors.dark }}>Need a Custom Solution?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
              We offer tailored solutions for large-scale enterprise clients. Let's build something specific to your workflow.
            </p>
            <div className="text-center mb-4">
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                Call us: <span className="font-semibold">+91 70672 08833</span>
              </p>
            </div>
            <button 
              onClick={() => window.location.href = '/inquiry'}
              className="px-10 py-4 rounded-2xl font-bold text-white shadow-xl hover:shadow-2xl transition-all"
              style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
            >
              Contact Sales Team
            </button>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}