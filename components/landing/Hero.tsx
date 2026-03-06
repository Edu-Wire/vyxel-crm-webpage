import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'

const colors = {
  primary: '#2779F0',
  secondary: '#2AA8F3',
  accent: '#4DDCE2',
  light: '#B0E2F6',
  white: '#FDFDFD',
  dark: '#111827',
  textSecondary: '#4B5563',
}

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center bg-white px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 mt-30">
        
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500"
        >
          Study Abroad Intelligence
        </motion.div>

        {/* High-Impact Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-[500] tracking-tight leading-[1.05]"
          style={{ color: colors.dark }}
        >
          The <span className="font-bold bg-gradient-to-r bg-clip-text text-transparent " style={{ backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}>CRM</span> foundation <br />
          <span style={{ color: colors.secondary }}>built for growth.</span>
        </motion.h1>

        {/* Clean, wide paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Vyxel provides the permanent home for your student leads, workflows, 
          and consultancy growth—evolving as you do, and built to last.
        </motion.p>

        {/* High Contrast CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <Button 
            variant="outline"
            className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-xl border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
            style={{ color: colors.dark, borderColor: '#B0E2F640' }}
          >
            <PlayCircle className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-all duration-300" style={{ color: 'currentColor' }} />
            <span className="transition-colors duration-300" style={{ color: 'currentColor' }}>See How It Works</span>
          </Button>
          
          <Button 
            className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
            style={{ backgroundColor: colors.primary, color: '#fff' }}
          >
            Get Started for Free
          </Button>
        </motion.div>

        {/* Minimalist Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[11px] text-slate-400 font-medium uppercase tracking-[0.2em] pt-12"
        >
          No credit card required • Trusted by 500+ Consultancies
        </motion.p>
      </div>

      {/* Mockup Image Below Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-6xl mx-auto mt-16 px-6"
      >
        <img 
          src="/mockup.png" 
          alt="Vyxel CRM Dashboard Mockup" 
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  )
}