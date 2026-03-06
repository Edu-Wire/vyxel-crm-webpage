'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'

const colors = {
  primary: '#0D6493',
  light: '#1E88C0',
  accent: '#34D3E5',
  darkText: '#FFFFFF',
  textSecondary: '#94A3B8',
  footerBg: '#0F172A',
}

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-14 overflow-hidden" style={{ backgroundColor: colors.footerBg }}>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6">
              <img
                src="/vyxel_logo.png"
                alt="Vyxel"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: colors.textSecondary }}>
              AI-powered CRM transforming how study abroad consultancies manage student relationships and drive growth.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="p-2 rounded-lg border transition-all duration-300 hover:scale-110 hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.1)', color: colors.textSecondary }}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg border transition-all duration-300 hover:scale-110 hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.1)', color: colors.textSecondary }}
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg border transition-all duration-300 hover:scale-110 hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.1)', color: colors.textSecondary }}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6" style={{ color: colors.darkText }}>
              Product
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Security
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6" style={{ color: colors.darkText }}>
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6" style={{ color: colors.darkText }}>
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-300 hover:opacity-80" style={{ color: colors.textSecondary }}>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t"
          style={{ borderColor: `${colors.primary}10` }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              © 2024 Vyxel CRM. All rights reserved.
            </p>

          </div>
        </motion.div>
      </div>
    </footer>
  )
}
