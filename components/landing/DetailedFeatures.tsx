'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  GraduationCap,
  IdCard,
  Mail,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Wallet,
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
}

const featureCategories = [
  {
    title: 'Lead Management System',
    icon: Target,
    tag: 'Core Engine',
    features: [
      'Lead Capture Form',
      'Website Lead Integration',
      'Facebook Lead Ads Integration',
      'Google Ads Lead Integration',
      'Manual Lead Entry',
      'Lead Source Tracking',
      'Lead Assignment to Counselor',
      'Lead Status Pipeline',
      'Lead Notes & Comments',
      'Lead Follow-up Reminder',
    ],
  },
  {
    title: 'Advanced Call Intelligence',
    icon: Phone,
    tag: 'Voice',
    features: [
      'Automatic Call Logging',
      'Call Recording',
      'Call Playback',
      'Missed Call Tracking',
      'Call Duration Analytics',
      'Call History Timeline',
      'Counselor Call Monitoring',
      'Call Tagging (Inquiry/Follow-up/Closing)',
    ],
  },
  {
    title: 'AI Call Analysis',
    icon: Sparkles,
    tag: 'Premium',
    features: [
      'AI Call Summary',
      'Conversation Insights',
      'Auto Lead Scoring',
      'Intent Detection (Interested/Not)',
      'Keyword Detection (Visa/Budget)',
      'AI Follow-up Suggestions',
    ],
  },
  {
    title: 'Student Lifecycle Management',
    icon: GraduationCap,
    tag: 'Admissions',
    features: [
      'Inquiry to Admission Tracking',
      'Student Profile Dashboard',
      'Country Preference Tracking',
      'Intake Management',
      'Course Selection Tracking',
      'University Shortlisting',
      'Application Submission Tracker',
      'Offer Letter Tracking',
    ],
  },
  {
    title: 'Document & Visa Process',
    icon: IdCard,
    tag: 'Operations',
    features: [
      'Student Document Upload',
      'Document Checklist',
      'Verification Status',
      'Passport Storage',
      'Academic Document Storage',
      'Visa File Creation',
      'Visa Document Checklist',
      'Interview Prep Notes',
      'Visa Decision Status',
    ],
  },
  {
    title: 'Counselor & Business Analytics',
    icon: BarChart3,
    tag: 'Management',
    features: [
      'Counselor Dashboard',
      'Lead Assignment Logic',
      'Performance Tracking',
      'Conversion Rate Tracking',
      'Monthly Enrollment Report',
      'Country-wise Reports',
      'Revenue Dashboard',
      'Activity Logs',
    ],
  },
  {
    title: 'Finance & Commissions',
    icon: Wallet,
    tag: 'Revenue',
    features: [
      'Student Fee Tracking',
      'University Commission Tracking',
      'Agent Commission Tracking',
      'Payment Status Tracking',
    ],
  },
  {
    title: 'Automation & Security',
    icon: ShieldCheck,
    tag: 'Infrastructure',
    features: [
      'WhatsApp Reminders',
      'Follow-up Alerts',
      'Task Notifications',
      'Role Based Access',
      'Multi User Login',
      'Data Backup System',
      'Secure Cloud Storage',
    ],
  },
]

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function DetailedFeatures() {
  return (
    <section className="relative py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D649305_1px,transparent_1px),linear-gradient(to_bottom,#0D649305_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: colors.primary }}
          >
            The Complete Toolkit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold tracking-tighter mt-4 mb-8"
            style={{ color: colors.dark }}
          >
            Everything you need <br /> to scale your consultancy.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12">
          {featureCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="group relative bg-white rounded-[3rem] p-8 md:p-12 border-2 border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(13,100,147,0.1)] transition-all duration-700"
              >
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        color: 'white',
                      }}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight mb-4" style={{ color: colors.dark }}>
                      {category.title}
                    </h3>
                    <span
                      className="inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border-2"
                      style={{
                        color: colors.primary,
                        borderColor: `${colors.primary}20`,
                        background: `${colors.primary}05`,
                      }}
                    >
                      {category.tag}
                    </span>
                  </div>

                  <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {category.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 group/item">
                        <div
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform group-hover/item:scale-150"
                          style={{ backgroundColor: colors.primary }}
                        />
                        <span
                          className="text-base font-medium transition-colors group-hover/item:text-slate-900"
                          style={{ color: colors.textSecondary }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="p-12 rounded-[3rem] bg-white border-2 border-slate-200 shadow-xl overflow-hidden relative group"
          >
            <Smartphone
              className="absolute -right-4 -top-4 w-32 h-32 opacity-[0.03] rotate-12"
              style={{ color: colors.primary }}
            />
            <h4 className="text-2xl font-bold mb-4" style={{ color: colors.dark }}>
              Bonus Expansion
            </h4>
            <p className="text-slate-500 mb-8">
              Vytrix is constantly evolving. Get ready for integrated Student & Agent portals.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Mobile App', 'WhatsApp CRM', 'Email Automation'].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-600 border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="p-12 rounded-[3rem] text-white shadow-2xl flex flex-col justify-between"
            style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
          >
            <div className="flex justify-between items-start">
              <ShieldCheck className="w-12 h-12" />
              <div className="text-right">
                <p className="text-xs font-bold uppercase tracking-widest opacity-70">Security Status</p>
                <p className="text-xl font-bold">SOC 2 Compliant</p>
              </div>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-4">Ready to optimize?</h4>
              <button
                className="flex items-center gap-2 px-8 py-4 bg-white rounded-2xl font-bold text-sm transition-transform hover:scale-105"
                style={{ color: colors.primary }}
              >
                Schedule Onboarding <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
