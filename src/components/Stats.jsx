import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Briefcase, Globe, Award } from 'lucide-react'

const StatCard = ({ icon: Icon, value, label, suffix = '+', delay = 0 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = parseInt(value) / steps
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= parseInt(value)) {
            setCount(parseInt(value))
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  )
}

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '499',
      label: 'Active Clients',
      delay: 0
    },
    {
      icon: Briefcase,
      value: '1199',
      label: 'Projects Delivered',
      delay: 200
    },
    {
      icon: Users,
      value: '149',
      label: 'Team Members',
      delay: 400
    },
    {
      icon: Globe,
      value: '24',
      label: 'Countries Served',
      delay: 600
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself - delivering exceptional results 
            across multiple industries and markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">BSP Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">PCI DSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">AWS Partner</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

