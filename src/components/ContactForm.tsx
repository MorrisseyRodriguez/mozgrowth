import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send the main contact form email
      await emailjs.send(
        'service_uvrkx7k',
        'template_giwu14v',
        {
          from_name: formData.name,
          company_name: formData.company,
          from_email: formData.email,
          to_email: 'morrisseyr.rodriguez@gmail.com',
          message: `Discovery Call Request from ${formData.name} at ${formData.company}`
        },
        'YOUR_PUBLIC_KEY'
      );

      // Send auto-reply to the user
      await emailjs.send(
        'service_uvrkx7k',
        'template_bqbjmhk',
        {
          to_name: formData.name,
          to_email: formData.email,
          company_name: formData.company
        },
        'YOUR_PUBLIC_KEY'
      );

      setIsSubmitted(true);
      setFormData({ name: '', company: '', email: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setError('Failed to send message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-500 mb-2">Request Sent!</h3>
          <p className="text-gray-300 mb-4">
            I'll review your request and get back to you within 24 hours to schedule our discovery call.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-blue-500 hover:text-blue-400 transition-colors font-medium"
          >
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-white">Book a Discovery Call</h3>
      
      <form onSubmit={handleSubmit} className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Book Discovery Call
              </>
            )}
          </button>
        </div>
      </form>

      <p className="text-sm text-gray-400 text-center mt-4">
        15-minute strategic assessment. No sales pitch.
      </p>
    </div>
  );
};

export default ContactForm;