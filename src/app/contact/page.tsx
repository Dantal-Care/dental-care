'use client'
import React, { useState } from 'react'
import Navbar from '../../components/UI/Navbar/Navbar'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      
      <div className="container mx-auto px-4 py-16 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">CONTACT US</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                If you have any questions or concerns about our dental care services, we're here to help.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-2">
                Our team will get back to you promptly and provide all the answers you need for a healthy, confident smile.
              </p>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            {/* Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cyan-400 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
          
          {/* Right Side - Dental Office Image */}
          <div className="lg:pl-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/api/placeholder/600/400"
                alt="Modern dental office interior with dental chair and equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs