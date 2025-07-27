import React from 'react'
import { motion } from 'framer-motion'
import { Target, Code, Rocket, ArrowRight } from 'lucide-react'

const ProcessStep = ({ step, index, isLast }) => {
  const icons = {
    target: Target,
    code: Code,
    rocket: Rocket
  }
  
  const Icon = icons[step.icon] || Target

  return (
    <div className="relative">
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Step Number and Icon */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-100">
              <span className="text-sm font-bold text-blue-600">{step.step}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {step.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {step.description}
          </p>
          
          {/* Features List */}
          <div className="space-y-2">
            {step.features?.map((feature, idx) => (
              <div key={idx} className="flex items-center justify-center md:justify-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Connector Arrow */}
      {!isLast && (
        <motion.div
          className="hidden md:flex justify-center my-12"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (index + 1) * 0.2 }}
        >
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-gray-400" />
          </div>
        </motion.div>
      )}
    </div>
  )
}

const Process = () => {
  const processSteps = [
    {
      step: '01',
      title: 'AI Strategy & Discovery',
      icon: 'target',
      description: 'We begin by analyzing your business processes and identifying AI automation opportunities that will deliver the highest impact and ROI.',
      features: [
        'Business process analysis',
        'AI opportunity assessment',
        'ROI calculation and planning',
        'Technology stack evaluation'
      ]
    },
    {
      step: '02',
      title: 'Intelligent Development',
      icon: 'code',
      description: 'Our AI specialists build smart solutions with machine learning integration, ensuring scalable and maintainable code architecture.',
      features: [
        'Custom AI model development',
        'Machine learning integration',
        'Scalable architecture design',
        'Quality assurance testing'
      ]
    },
    {
      step: '03',
      title: 'Deploy & Optimize',
      icon: 'rocket',
      description: 'We deploy your AI-powered solution and continuously optimize performance through monitoring, analytics, and iterative improvements.',
      features: [
        'Production deployment',
        'Performance monitoring',
        'Continuous optimization',
        'Ongoing support & maintenance'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">SGG Webs AI?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our deep AI expertise and proven development process ensure your digital 
            transformation success with measurable results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-8 md:space-y-0">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
            <div className="text-gray-600">Years of AI Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600">Client Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Support & Monitoring</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

