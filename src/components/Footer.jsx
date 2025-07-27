import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Award
} from 'lucide-react'
import sggLogo from '../assets/SGGlogo.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'AI-Driven Web Development',
    'AI Automation & Workflow',
    'Data Science & ML Engineering',
    'AI-Enhanced Call Centers'
  ]

  const industries = [
    'AI-Powered Fintech',
    'E-commerce AI Solutions',
    'Healthcare AI Systems',
    'Logistics Automation'
  ]

  const solutions = [
    'AI Web Platforms',
    'AI Agents',
    'AI Consultancy',
    'Custom AI Development'
  ]

  const company = [
    { name: 'About Our AI Practice', href: '/about' },
    { name: 'Leadership Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' }
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src={sggLogo} 
                  alt="SGG Webs" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with AI-driven web development and intelligent automation solutions. 
                We deliver cutting-edge AI applications across multiple industries.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>info@sggwebs.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span>+63 (2) 8100-6733</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Makati City, Philippines</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400">AI & Development Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Industry Solutions</h3>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400">AI Solutions</h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-cyan-400">Company</h3>
              <ul className="space-y-3 mb-6">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Legal Links */}
              <ul className="space-y-2">
                {legal.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
              <div className="flex items-center text-gray-300">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm">BSP Registered</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm">ISO 27001</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 mr-2 text-purple-400" />
                <span className="text-sm">PCI DSS</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} SGG Webs Fintech, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

