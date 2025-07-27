import React from 'react'
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
  Brain,
  CheckCircle,
  Star
} from 'lucide-react'

const ServiceCard = ({ service, index }) => {
  const icons = {
    globe: Globe,
    shield: Shield,
    lightning: Zap,
    chart: BarChart3,
    phone: Phone,
    users: Users
  }
  
  const Icon = icons[service.icon] || Globe

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
        <ul className="space-y-2">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 mb-2">Ideal For:</h4>
        <p className="text-blue-700 text-sm">{service.targetAudience}</p>
      </div>
      
      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 group/btn">
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  )
}

const ServicesPage = () => {
  const services = [
    {
      title: 'AI-Driven Web & App Development',
      icon: 'globe',
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
      title: 'Enterprise AI Consulting & Strategy',
      icon: 'users',
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Intelligent Solutions for <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Modern Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with our comprehensive suite of AI-driven 
              solutions designed to amplify human potential and drive measurable results across multiple industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is designed to address specific business challenges while integrating 
              seamlessly with your existing operations and strategic objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose SGG Webs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven track record and comprehensive approach ensure your success in the digital transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: '1199+ Projects', description: 'Successfully delivered across 25+ countries' },
              { icon: Shield, title: 'BSP Registered', description: 'Fully compliant with Philippine financial regulations' },
              { icon: Users, title: '99% Satisfaction', description: 'Client satisfaction rate with ongoing support' },
              { icon: Brain, title: '8+ Years AI', description: 'Deep expertise in artificial intelligence solutions' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our intelligent solutions can drive measurable results for your organization. 
              Our expert team is ready to help you navigate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage