"use client";
import React, { useState, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from '@emailjs/browser';
import Navbar from "../../components/UI/Navbar/Navbar";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
    setSubmitStatus("idle");

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      console.log('SUCCESS!', result.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-16 mt-20 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-30">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                CONTACT US
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                If you have any questions or concerns about our dental care
                services, we're here to help.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-2">
                Our team will get back to you promptly and provide all the
                answers you need for a healthy, confident smile.
              </p>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}

            {/* Contact Form */}
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-b-2 border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-b-2 border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your dental concerns or questions..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-b-2 border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none transition-colors resize-none text-gray-700 placeholder-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cyan-400 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="lg:pl-8 flex justify-center items-center">
            <div className="w-full max-w-lg">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                <DotLottieReact 
                  src="https://lottie.host/62e8bec2-85de-421e-906c-0b00eea36c69/lpnnThNyrA.lottie" 
                  loop 
                  autoplay 
                  />
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    Let's Get In Touch
                  </h3>
                  <p className="text-gray-600">
                    We're here to answer all your dental questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
