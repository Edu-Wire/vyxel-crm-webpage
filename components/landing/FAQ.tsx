'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

const colors = {
  primary: '#2779F0',
  secondary: '#2AA8F3',
  accent: '#4DDCE2',
  light: '#B0E2F6',
  white: '#FDFDFD',
  dark: '#111827',
  textSecondary: '#4B5563',
}

const faqs = [
  {
    question: 'How quickly can we get started?',
    answer:
      'Most teams are up and running within 24 hours. Our onboarding team will guide you through setup and ensure your team is trained on all features.',
  },
  {
    question: 'Can Vyxel integrate with our existing systems?',
    answer:
      'Yes! We offer integrations with email providers, communication tools, and custom API integrations. Our technical team can help with complex setups.',
  },
  {
    question: 'What support do you provide?',
    answer:
      'We offer 24/7 email support for all plans, priority support for Growth and Enterprise plans, and dedicated account managers for Enterprise customers.',
  },
  {
    question: 'Is our data secure?',
    answer:
      'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR and data protection regulations.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 14-day free trial of all features. Book a demo if you want a personalized walkthrough.',
  },
]

export default function FAQ() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white" id="faq">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="p-2 rounded-lg" style={{ background: `${colors.primary}10` }}>
              <HelpCircle className="w-4 h-4" style={{ color: colors.primary }} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: colors.primary }}>
              FAQ
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-[420] tracking-tighter mb-8 leading-[1.1]"
            style={{ color: colors.dark }}
          >
            Got questions? We've got answers.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            Everything you need to know about Vyxel and how it can transform your consultancy.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="group border border-slate-200 rounded-2xl px-8 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger 
                    className="text-base font-semibold py-6 hover:no-underline transition-colors duration-300"
                    style={{ color: colors.dark }}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="text-base leading-relaxed pb-6"
                    style={{ color: colors.textSecondary }}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Simple Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex justify-center"
        >
          <button 
            className="flex items-center gap-2 font-bold transition-all hover:gap-4"
            style={{ color: colors.primary }}
          >
            Still have questions? Contact us →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
