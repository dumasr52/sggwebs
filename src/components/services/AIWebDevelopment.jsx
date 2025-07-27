import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Brain, 
  Zap,
  Users,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'

const AIWebDevelopment = () => {
  const keyFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Dynamic content adaptation based on user behavior and preferences'
    },
    {
      icon: Zap,
      title: 'Intelligent Performance Optimization',
      description: 'Automated caching, compression, and resource optimization'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics Integration',
      description: 'Real-time insights and forecasting capabilities built-in'
    },
    {
      icon: Shield,
      title: 'Advanced Security Features',
      description: 'AI-driven threat detection and automated security responses'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'AI Strategy & Discovery',
      description: 'We analyze your business requirements and identify AI integration opportunities that will deliver maximum impact.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Intelligent Architecture Design',
      description: 'Design scalable architecture with integrated AI/ML pipelines and automated workflow systems.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'AI-Enhanced Development',
      description: 'Build your application with integrated machine learning models and intelligent automation features.',
      duration: '6-12 weeks'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing including AI model validation, performance optimization, and user experience testing.',
      duration: '2-3 weeks'
    },
    {
      step: '05',
      title: 'Deployment & Monitoring',
      description: 'Deploy with continuous monitoring, AI model performance tracking, and automated optimization.',
      duration: '1-2 weeks'
    }
  ]

  const caseStudies = [
    {
      title: 'E-commerce Platform Transformation',
      client: 'Leading Philippine Retailer',
      challenge: 'Needed personalized shopping experiences and inventory optimization',
      solution: 'AI-powered recommendation engine with predictive inventory management',
      results: [
        '45% increase in conversion rates',
        '30% reduction in inventory costs',
        '60% improvement in customer satisfaction'
      ]
    },
    {
      title: 'SaaS Platform Intelligence',
      client: 'B2B Software Company',
      challenge: 'Required intelligent user onboarding and churn prediction',
      solution: 'ML-driven user behavior analysis with automated engagement workflows',
      results: [
        '50% reduction in churn rate',
        '35% faster user onboarding',
        '25% increase in feature adoption'
      ]
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
              <Globe className="w-4 h-4 mr-2" />
              AI-Driven Development
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Driven Web & <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">App Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your digital presence with intelligent web applications featuring integrated AI/ML pipelines, 
              automated workflows, and adaptive user interfaces that evolve with your users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500">
                Start Your AI Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
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
              Intelligent Features That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-driven development approach integrates cutting-edge machine learning capabilities 
              directly into your web applications for superior performance and user experience.
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI integration and optimal performance 
              from concept to deployment.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-start bg-white rounded-2xl p-8 shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <div className="flex items-center text-blue-600 mt-2 md:mt-0">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our AI-driven web development projects across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{study.client}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm mb-4">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              Ready to Build Your AI-Powered Application?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI-driven development approach can transform your digital presence 
              and deliver measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                View More Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AIWebDevelopment