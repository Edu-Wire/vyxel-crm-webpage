export interface Plan {
  name: string
  price: string
  period: string
  desc: string
  description?: string // for compatibility with PricingPage
  features: string[]
  featured?: boolean
}

export const getPlans = (countryCode: string | undefined): Plan[] => {
  const isIndia = countryCode === 'IN'
  
  return [
    {
      name: 'Starter',
      price: isIndia ? '₹4,999' : '$59',
      period: '/month',
      desc: 'Perfect for small consultancies',
      description: 'Perfect for small consultancies',
      features: [
        '3 users included', 
        'Lead management', 
        'Student pipeline', 
        'Follow-up reminders', 
        'Document management', 
        'Mobile app', 
        `Extra users @ ${isIndia ? '₹999' : '$12'}/user/month`
      ],
    },
    {
      name: 'Growth',
      price: isIndia ? '₹9,999' : '$119',
      period: '/month',
      desc: 'For growing agencies',
      description: 'For growing agencies',
      features: [
        '10 users included',
        'Call logging',
        'Call recording',
        'WhatsApp integration',
        'Counselor dashboards',
        `Extra users @ ${isIndia ? '₹799' : '$10'}/user/month`
      ],
      featured: true,
    },
    {
      name: 'Elite',
      price: isIndia ? '₹19,999' : '$239',
      period: '/month',
      desc: 'For large agencies',
      description: 'For large agencies',
      features: [
        '25 users included',
        'AI call summaries',
        'AI lead scoring',
        'Automation workflows',
        'Advanced analytics',
        'Multi-branch support',
        `Extra users @ ${isIndia ? '₹699' : '$9'}/user/month`
      ],
    },
  ]
}
