import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Eye, Sparkles } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Harness AI for Your Business?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join hundreds of companies who trust SGG Webs for their AI-powered digital 
            transformation. Let's build intelligent solutions that drive your business forward.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold group shadow-lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule AI Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold group"
            >
              <Eye className="mr-2 w-5 h-5" />
              View AI Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
              <span className="text-lg">+63 (2) 8123-4567</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
              <span className="text-lg">info@sggwebs.com</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
              <span className="text-lg">Makati City, Philippines</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1199+</div>
            <div className="text-blue-200">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">499+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24+</div>
            <div className="text-blue-200">Countries Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

