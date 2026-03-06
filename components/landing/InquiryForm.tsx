'use client'

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, CheckCircle, MessageSquare } from 'lucide-react'

const colors = {
  primary: '#2779F0',
  secondary: '#2AA8F3',
  accent: '#4DDCE2',
  light: '#B0E2F6',
  white: '#FDFDFD',
  dark: '#111827',
  textSecondary: '#4B5563',
}

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send form data to info@digi-wire.com
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'info@digi-wire.com',
          subject: `New Inquiry from ${formData.name}`,
          text: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service: ${formData.service}
Message: ${formData.message}
          `.trim(),
        }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setIsSubmitting(false)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            service: ''
          })
        }, 3000)
      } else {
        throw new Error('Failed to send inquiry')
      }
    } catch (error) {
      console.error('Error sending inquiry:', error)
      setIsSubmitting(false)
      // You could show an error message here
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: colors.white }}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: colors.primary }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6"
            style={{ color: colors.dark }}
          >
            Ready to transform your consultancy?
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            Fill out the form below and our team will get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="p-8 rounded-xl border-0 shadow-xl h-full text-white" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-6">
                  <ContactItem icon={<Mail />} title="Email" content="info@digi-wire.com" />
                  <ContactItem icon={<Phone />} title="Phone" content="+1 (555) 123-4567" />
                  <ContactItem icon={<MessageSquare />} title="Live Chat" content="Mon-Fri, 9AM-6PM EST" />
                </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="p-8 rounded-xl border-2 shadow-xl" style={{ borderColor: `${colors.light}40`, backgroundColor: colors.white }}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="Full Name *" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required />
                    <FormInput label="Email Address *" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" />
                    <FormInput label="Company Name" name="company" value={formData.company} onChange={handleInputChange} placeholder="ABC Consultancy" />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-4" style={{ color: colors.dark }}>Contact Information</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary }} />
                          <span style={{ color: colors.textSecondary }}>info@digi-wire.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary }} />
                          <span style={{ color: colors.textSecondary }}>+91 70672 08833</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary }} />
                          <span style={{ color: colors.textSecondary }}>Bhopal, India</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                      style={{ borderColor: `${colors.light}40`, backgroundColor: colors.white }}
                    >
                      <option value="">Select a service</option>
                      <option value="lead-management">Lead Management System</option>
                      <option value="full-suite">Complete CRM Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 resize-none"
                      style={{ borderColor: `${colors.light}40`, backgroundColor: colors.white }}
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                    style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              ) : (
                <SuccessView />
              )}
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Sub-components for cleaner code
function ContactItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">{icon}</div>
      <div>
        <p className="font-semibold mb-1">{title}</p>
        <p className="text-white/80 text-sm">{content}</p>
      </div>
    </div>
  )
}

function FormInput({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
        style={{ borderColor: `${colors.light}40`, backgroundColor: colors.white }}
      />
    </div>
  )
}

function SuccessView() {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
        <CheckCircle className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4" style={{ color: colors.dark }}>Thank You!</h3>
      <p style={{ color: colors.textSecondary }}>Your message has been sent successfully. We'll be in touch soon.</p>
    </div>
  )
}
