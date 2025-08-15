'use client';
import React, { useState, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/UI/Navbar/Navbar';
import { SendHorizontal } from 'lucide-react';
import GoToTop from '@/components/UI/GoToTop';

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      console.log('SUCCESS!', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-30 lg:mt-30 mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-gray-700 mb-4 sm:mb-6 text-center">
          CONTACT US
        </h1>
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-gray-600 text-base sm:text-lg lg:text-lg   leading-relaxed mb-2">
            If you have any questions or concerns about our dental care
            services, we&apos;re here to help.
          </p>
          <p className="text-gray-600 text-base sm:text-lg lg:text-lg leading-relaxed">
            Our team will get back to you promptly and provide all the answers
            you need for a healthy, confident smile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-sm sm:text-base">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm sm:text-base">
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}

            {/* Contact Form */}
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4 sm:space-y-6 bg-gray-100 shadow-xl px-4 sm:px-6 py-6 sm:py-8 rounded-2xl">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 sm:px-4 py-3 sm:py-4 border-b-2 border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none transition-colors text-gray-700 placeholder-gray-500 text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 sm:px-4 py-3 sm:py-4 border-b-2 border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none transition-colors text-gray-700 placeholder-gray-500 text-sm sm:text-base"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your dental concerns or questions..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 sm:px-4 py-3 sm:py-4 border-b-2 border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none transition-colors resize-none text-gray-700 placeholder-gray-500 text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cyan-400 flex gap-2 sm:gap-3 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-medium hover:bg-cyan-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <SendHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <div className="aspect-square max-w-xs sm:max-w-sm mx-auto">
                  <DotLottieReact
                    src="https://lottie.host/62e8bec2-85de-421e-906c-0b00eea36c69/lpnnThNyrA.lottie"
                    loop
                    autoplay
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2">
                    Let&apos;s Get In Touch
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We&apos;re here to answer all your dental questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default ContactUs;