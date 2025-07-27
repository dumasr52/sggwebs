import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from 'lucide-react'

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const slides = [
    {
      id: 1,
      title: "AI-Powered Fintech Solutions",
      subtitle: "Transform Your Business with Intelligence",
      description: "Leverage cutting-edge AI technology to revolutionize your financial services and automate complex business processes.",
      cta: "Explore AI Solutions",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      gradient: "from-blue-900 via-blue-800 to-cyan-700"
    },
    {
      id: 2,
      title: "Smart Web Development",
      subtitle: "Intelligent Applications for Modern Business",
      description: "Build responsive, scalable web applications with integrated AI capabilities that adapt to your users' needs.",
      cta: "View Portfolio",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      gradient: "from-emerald-900 via-teal-800 to-cyan-700"
    },
    {
      id: 3,
      title: "Philippine Fintech Leadership",
      subtitle: "BSP-Registered & Compliant",
      description: "Trusted by leading Philippine businesses with full regulatory compliance and world-class security standards.",
      cta: "Learn About Us",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      gradient: "from-purple-900 via-indigo-800 to-blue-700"
    },
    {
      id: 4,
      title: "24/7 AI-Enhanced Support",
      subtitle: "Intelligent Customer Experience",
      description: "Our AI-powered call center solutions provide round-the-clock support with natural language processing.",
      cta: "Contact Support",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      gradient: "from-orange-900 via-red-800 to-pink-700"
    },
    {
      id: 5,
      title: "Data-Driven Insights",
      subtitle: "Machine Learning Analytics",
      description: "Transform raw data into actionable business intelligence with our advanced ML algorithms and predictive analytics.",
      cta: "See Analytics",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      gradient: "from-slate-900 via-gray-800 to-blue-700"
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  // Auto-advance functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPlaying, isHovered, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          prevSlide()
          break
        case 'ArrowRight':
          event.preventDefault()
          nextSlide()
          break
        case ' ':
          event.preventDefault()
          setIsPlaying(!isPlaying)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, isPlaying])

  const currentSlideData = slides[currentSlide]

  return (
    <section 
      className="relative h-screen overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Featured content slideshow"
      aria-live="polite"
    >
      {/* Background Images with Lazy Loading */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={currentSlideData.image}
              alt={`${currentSlideData.title} - ${currentSlideData.subtitle}`}
              className="w-full h-full object-cover"
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient} opacity-80`} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
          <div className="w-full max-w-6xl flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white flex flex-col items-center justify-center text-center w-full"
              >
                {/* Subtitle */}
                <motion.div
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-cyan-200 text-base font-medium mb-8 mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {currentSlideData.subtitle}
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-center w-full max-w-6xl mx-auto"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {currentSlideData.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed text-center px-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ 
                    textAlign: 'center',
                    width: '100%',
                    display: 'block'
                  }}
                >
                  {currentSlideData.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  className="flex justify-center items-center w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 text-lg font-semibold group shadow-xl rounded-lg mx-auto"
                  >
                    {currentSlideData.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
          </button>

          {/* Dots Navigation */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  )
}

export default Slideshow