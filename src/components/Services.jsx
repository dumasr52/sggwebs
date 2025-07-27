import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  Shield, 
  Zap, 
  BarChart3, 
  Phone, 
  Users, 
  ArrowRight,
  Code,
  Brain,
  Database
} from 'lucide-react'

const ServiceCard = ({ service, index, isActive, onHover }) => {
  const navigate = useNavigate()
  const icons = {
    globe: Globe,
    shield: Shield,
    lightning: Zap,
    chart: BarChart3,
    phone: Phone,
    users: Users
  }
  
  const Icon = icons[service.icon] || Globe

  const handleLearnMore = () => {
    navigate(`/services/${service.slug}`)
  }
  return (
    <motion.div
      className={`relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer group ${
        isActive 
          ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg' 
          : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ y: -5 }}
    >
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
          : 'bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500'
      }`}>
        <Icon className={`w-8 h-8 transition-colors duration-300 ${
          isActive ? 'text-white' : 'text-gray-600 group-hover:text-white'
        }`} />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <Button 
        variant="ghost" 
        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold group/btn"
        onClick={handleLearnMore}
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  )
}

const Services = () => {
  const navigate = useNavigate()
  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      title: 'AI-Driven Web & App Development',
      icon: 'globe',
      slug: 'ai-web-development',
      description: 'Transform your digital presence with intelligent web applications featuring integrated AI/ML pipelines, automated workflows, and adaptive user interfaces. Our solutions leverage machine learning to personalize user experiences and optimize performance in real-time.',
      benefits: [
        'Personalized user experiences through AI-driven recommendations',
        'Automated content optimization and A/B testing',
        'Predictive analytics for user behavior insights',
        'Scalable cloud architecture with intelligent load balancing'
      ],
      targetAudience: 'E-commerce platforms, SaaS companies, and digital-first businesses seeking competitive advantage through intelligent web solutions'
    },
    {
      title: 'AI-Powered Fintech Solutions',
      icon: 'shield',
      slug: 'ai-fintech-solutions',
      description: 'Revolutionize your financial services with our comprehensive AI-powered fintech platform. From automated risk assessment to intelligent fraud detection, we deliver BSP-compliant solutions that enhance security while streamlining operations.',
      benefits: [
        'Real-time fraud detection with 99.7% accuracy rates',
        'Automated compliance monitoring and reporting',
        'Intelligent credit scoring and risk assessment',
        'Seamless payment processing with smart routing'
      ],
      targetAudience: 'Banks, lending institutions, payment processors, and financial service providers requiring secure, compliant, and intelligent solutions'
    },
    {
      title: 'AI Automation & Workflow',
      icon: 'lightning',
      slug: 'ai-automation-workflow',
      description: 'Eliminate operational inefficiencies with our intelligent automation suite. Our RPA solutions, AI-powered chatbots, and predictive analytics work together to automate complex workflows, reduce manual tasks, and optimize resource allocation.',
      benefits: [
        'Up to 80% reduction in manual processing time',
        'Intelligent document processing and data extraction',
        'Predictive maintenance and resource optimization',
        '24/7 automated customer support with natural language processing'
      ],
      targetAudience: 'Manufacturing companies, service providers, and enterprises with high-volume repetitive processes seeking operational excellence'
    },
    {
      title: 'Data Science & ML Engineering',
      icon: 'chart',
      slug: 'data-science-ml-engineering',
      description: 'Unlock the power of your data with our comprehensive data science and machine learning engineering services. We build custom AI models, robust data pipelines, and intelligent dashboards that transform raw data into actionable business insights.',
      benefits: [
        'Custom machine learning models tailored to your business needs',
        'Real-time data processing and analytics pipelines',
        'Interactive business intelligence dashboards',
        'Predictive modeling for demand forecasting and trend analysis'
      ],
      targetAudience: 'Data-rich organizations, retail chains, healthcare providers, and enterprises seeking to leverage analytics for strategic decision-making'
    },
    {
      title: 'AI-Enhanced Call Centers',
      icon: 'phone',
      slug: 'ai-call-centers',
      description: 'Elevate your customer service with AI-enhanced call center solutions. Our intelligent platforms combine natural language processing, sentiment analysis, and automated routing to deliver exceptional customer experiences while reducing operational costs.',
      benefits: [
        'Intelligent call routing based on customer intent and history',
        'Real-time sentiment analysis and agent coaching',
        'Automated quality assurance and performance monitoring',
        'Multi-channel support integration (voice, chat, email, social)'
      ],
      targetAudience: 'Customer service organizations, telecommunications companies, and businesses with high customer interaction volumes'
    },
    {
      title: 'Cross-Industry Solutions',
      icon: 'users',
      slug: 'enterprise-ai-consulting',
      description: 'Navigate your AI transformation journey with our strategic consulting services. We help enterprises develop comprehensive AI strategies, identify high-impact use cases, and implement scalable solutions that drive measurable business outcomes.',
      benefits: [
        'Comprehensive AI readiness assessment and roadmap development',
        'Custom AI strategy aligned with business objectives',
        'Change management and team training programs',
        'ROI measurement and continuous optimization frameworks'
      ],
      targetAudience: 'Large enterprises, government agencies, and organizations beginning their AI transformation or seeking to optimize existing AI investments'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Intelligent Solutions for Modern Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive suite of AI-driven 
            solutions designed for multiple industries and markets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isActive={activeService === index}
              onHover={setActiveService}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Unlock Your Business Potential?
                </h3>
                <p className="text-gray-600">
                  Partner with us to implement intelligent solutions that deliver measurable results. 
                  Our expert team is ready to help you navigate your digital transformation journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-500"
                  onClick={() => navigate('/contact')}
                >
                  Get Strategic Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/about')}
                >
                  Explore Success Stories
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

