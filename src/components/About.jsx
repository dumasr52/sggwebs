import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Users, Globe, Award, TrendingUp } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: '8+', label: 'Years of Experience' },
    { icon: Users, value: '150+', label: 'Team Members' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Award, value: '99%', label: 'Client Satisfaction' }
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">SGG Webs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a BSP-registered fintech company dedicated to transforming the Philippine 
              financial landscape through innovative technology solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize access to financial technology in the Philippines by providing 
                innovative, secure, and user-friendly solutions that empower businesses and 
                individuals to thrive in the digital economy.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading fintech company in Southeast Asia, recognized for our innovation, 
                reliability, and commitment to financial inclusion across all segments of society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to innovation and client service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 rounded-2xl bg-blue-50 border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible with AI and fintech, 
                delivering cutting-edge solutions that drive real business value.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-green-50 border border-green-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric</h3>
              <p className="text-gray-600">
                Our clients' success is our success. We build long-term partnerships based on 
                trust, transparency, and exceptional service delivery.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-2xl bg-purple-50 border border-purple-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from code quality to 
                customer service, ensuring exceptional outcomes every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey in AI & Fintech
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to democratize financial technology in the Philippines, 
                  SGG Webs has grown from a small startup to a leading AI-powered fintech company 
                  serving clients across 25+ countries.
                </p>
                <p>
                  Our journey began with a simple belief: that artificial intelligence and machine 
                  learning could transform how businesses operate, making them more efficient, 
                  secure, and customer-focused.
                </p>
                <p>
                  Today, we're proud to be BSP-registered and trusted by industry leaders, having 
                  delivered over 1,199 successful projects that have transformed businesses and 
                  improved lives across Southeast Asia.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">1199+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Users className="w-8 h-8 text-green-600 mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">499+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Globe className="w-8 h-8 text-purple-600 mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">25+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Award className="w-8 h-8 text-orange-600 mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">99%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

