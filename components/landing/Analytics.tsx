'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { motion, Variants } from 'framer-motion'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { TrendingUp, BarChart3 } from 'lucide-react'

const colors = {
  primary: '#2779F0',
  secondary: '#2AA8F3',
  accent: '#4DDCE2',
  light: '#B0E2F6',
  white: '#FDFDFD',
  dark: '#111827',
  textSecondary: '#4B5563',
}

interface AnalyticsPoint {
  name: string
  leads: number
  conversions: number
}

const analyticsData: AnalyticsPoint[] = [
  { name: 'Jan', leads: 400, conversions: 120 },
  { name: 'Feb', leads: 500, conversions: 180 },
  { name: 'Mar', leads: 650, conversions: 250 },
  { name: 'Apr', leads: 800, conversions: 320 },
  { name: 'May', leads: 920, conversions: 420 },
]

// Explicitly typing variants to resolve IDE errors
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

export default function Analytics() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white" id="analytics">
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
              <BarChart3 className="w-4 h-4" style={{ color: colors.primary }} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: colors.primary }}>
              Analytics
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-[420] tracking-tighter mb-8 leading-[1.1]"
            style={{ color: colors.dark }}
          >
            Real-time insights that drive decisions.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            Track performance, identify trends, and optimize your recruitment strategy 
            with data that matters most to your consultancy's growth.
          </motion.p>
        </div>

        {/* Analytics Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="relative overflow-hidden border-0 shadow-2xl rounded-3xl bg-slate-100 inline-block">
            <img 
              src="/ss.png" 
              alt="Dashboard Interface Preview" 
              className="block rounded-3xl"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </motion.div>

        {/* Charts Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Lead Conversion Trends */}
          <motion.div variants={itemVariants} className="h-full">
            <Card className="group relative h-full p-8 bg-white border border-slate-200 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden rounded-3xl">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ background: `radial-gradient(circle at top right, ${colors.primary}08, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div 
                    className="p-2 rounded-lg transition-transform duration-500 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, color: 'white' }}
                  >
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight" style={{ color: colors.dark }}>
                    Lead Conversion Trends
                  </h3>
                </div>
                
                <div className="w-full h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#9ca3af', fontSize: 12 }} 
                        dy={10}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#9ca3af', fontSize: 12 }} 
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          border: `1px solid ${colors.primary}20`,
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        }}
                      />
                      <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                      <Line
                        type="monotone"
                        dataKey="leads"
                        name="New Leads"
                        stroke={colors.primary}
                        strokeWidth={3}
                        dot={{ fill: colors.primary, strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="conversions"
                        name="Conversions"
                        stroke={colors.light}
                        strokeWidth={3}
                        dot={{ fill: colors.light, strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Source Distribution */}
          <motion.div variants={itemVariants} className="h-full">
            <Card className="group relative h-full p-8 bg-white border border-slate-200 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden rounded-3xl">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ background: `radial-gradient(circle at top right, ${colors.primary}08, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div 
                    className="p-2 rounded-lg transition-transform duration-500 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, color: 'white' }}
                  >
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight" style={{ color: colors.dark }}>
                    Monthly Growth
                  </h3>
                </div>
                
                <div className="w-full h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                        dy={10}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#9ca3af', fontSize: 12 }} 
                      />
                      <Tooltip
                        cursor={{ fill: '#f8fafc' }}
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          border: `1px solid ${colors.primary}20`,
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        }}
                      />
                      <Bar 
                        dataKey="leads" 
                        name="Total Leads"
                        fill={colors.primary}
                        radius={[6, 6, 0, 0]}
                        barSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex justify-center"
        >
          <button 
            className="group flex items-center gap-2 font-bold transition-all"
            style={{ color: colors.primary }}
          >
            View Full Dashboard 
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}