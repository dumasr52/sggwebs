import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Slideshow from './components/Slideshow'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import ServicesPage from './components/ServicesPage'
import AIWebDevelopment from './components/services/AIWebDevelopment'
import AIFintechSolutions from './components/services/AIFintechSolutions'
import './App.css'

function HomePage() {
  return (
    <>
      <Slideshow />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/ai-web-development" element={<AIWebDevelopment />} />
            <Route path="/services/ai-fintech-solutions" element={<AIFintechSolutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

