import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Lock, 
  Brain, 
  Zap,
  Users,
  TrendingUp,
  AlertTriangle,
  Clock,
  Award,
  Globe
} from 'lucide-react'

const AIFintechSolutions = () => {
  const keyFeatures = [
    {
      icon: Shield,
      title: 'Real-time Fraud Detection',
      description: 'AI-powered fraud detection with 99.7% accuracy rates and instant transaction monitoring'
    },
    {
      icon: Brain,
      title: 'Intelligent Risk Assessment',
      description: 'Advanced machine learning models for credit scoring and automated risk evaluation'
    },
    {
      icon: Lock,
      title: 'BSP Compliance Automation',
      description: 'Automated compliance monitoring and reporting for Philippine financial regulations'
    },
    {
      icon: Zap,
      title: 'Smart Payment Processing',
      description: 'Intelligent payment routing with optimized transaction success rates'
    }
  ]

  const complianceFeatures = [
    'BSP Registration & Compliance',
    'Anti-Money Laundering (AML) Integration',
    'Know Your Customer (KYC) Automation',
    'Data Privacy Act (DPA) Compliance',
    'PCI DSS Security Standards',
    'ISO 27001 Information Security'
  ]

  const solutions = [
    {
      title: 'Digital Banking Platform',
      description: 'Complete digital banking solution with AI-powered features',
      features: [
        'Mobile-first banking interface',
        'AI-driven financial insights',
        'Automated loan processing',
        'Real-time fraud monitoring'
      ]
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Secure, intelligent payment processing with multiple channels',
      features: [
        'Multi-channel payment support',
        'Smart routing optimization',
        'Instant settlement processing',
        'Advanced security protocols'
      ]
    },
    {
      title: 'Lending & Credit Platform',
      description: 'AI-powered lending solutions with automated decision making',
      features: [
        'Automated credit scoring',
        'Risk-based pricing models',
        'Digital loan origination',
        'Portfolio management tools'
      ]
    }
  ]

  const metrics = [
    { value: '99.7%', label: 'Fraud Detection Accuracy' },
    { value: '85%', label: 'Faster Loan Processing' },
    { value: '60%', label: 'Reduced Operational Costs' },
    { value: '24/7', label: 'Continuous Monitoring' }
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              BSP Registered & Compliant
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Fintech Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Revolutionize your financial services with our comprehensive AI-powered fintech platform. 
              From automated risk assessment to intelligent fraud detection, we deliver BSP-compliant solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Compliance Docs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
              Advanced AI Security & Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered fintech solutions provide enterprise-grade security with intelligent 
              automation that scales with your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Fully Compliant & Secure
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our fintech solutions are built with compliance at their core, ensuring your business 
                meets all Philippine financial regulations and international security standards.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600">
                Download Compliance Guide
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Portfolio */}
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
              Comprehensive Fintech Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From digital banking to payment processing, our AI-powered solutions cover 
              the full spectrum of financial technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
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
              Proven Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered fintech solutions deliver measurable results that drive business growth 
              and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
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
              Transform Your Financial Services Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join leading financial institutions who trust SGG Webs for their AI-powered 
              fintech transformation. Let's discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                Request Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AIFintechSolutions