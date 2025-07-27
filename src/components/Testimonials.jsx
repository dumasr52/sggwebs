import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 ${
        isActive ? 'border-blue-200 shadow-xl' : 'border-gray-200'
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="w-8 h-8 text-blue-500" />
      </div>

      {/* Stars */}
      <div className="flex mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
          <span className="text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-gray-600 text-sm">{testimonial.position}</div>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: 'Maria Santos',
      position: 'CEO, PayForward Inc.',
      quote: 'SGG Webs transformed our payment infrastructure with their cutting-edge AI solutions. Their fintech expertise is truly unmatched in the Philippines, and the results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'John Reyes',
      position: 'CTO, Digital Bank PH',
      quote: 'Outstanding development team with deep technical knowledge. They delivered our mobile banking app ahead of schedule with exceptional quality and innovative AI features that set us apart.',
      rating: 5
    },
    {
      name: 'Anna Cruz',
      position: 'Operations Director, RemitGlobal',
      quote: 'Their AI-powered call center solution reduced our response time by 70% and improved customer satisfaction significantly. The ROI was evident within the first month of implementation.',
      rating: 5
    },
    {
      name: 'Carlos Mendoza',
      position: 'Founder, TechStart PH',
      quote: 'SGG Webs helped us scale our fintech startup with intelligent automation. Their AI solutions streamlined our operations and enabled us to serve 10x more customers efficiently.',
      rating: 5
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading fintech companies across the Philippines for delivering 
            exceptional AI-powered solutions.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:border-blue-300"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:border-blue-300"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonial Content */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={currentIndex}
                testimonial={testimonials[currentIndex]}
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700 mb-1">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700 mb-1">99%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700 mb-1">8+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

