import React from 'react';
import { Calendar, Mail, ArrowRight, Instagram } from 'lucide-react';
import ContactForm from './ContactForm';

const FinalCTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(/assets/images/file_00000000a24c71f7bfc0be442ae1e507.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in-up">
          Ready to Scale Your <span className="text-gradient-blue">Luxury Fleet</span>?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" 
           style={{ animationDelay: '0.2s' }}>
          Let's identify what's blocking your growth and design the strategic move that removes it.
        </p>

        {/* Contact Form Section */}
        <div data-section="contact" className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <ContactForm />
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-500 mb-2">15 min</div>
            <p className="text-gray-400 text-sm md:text-base">Discovery call duration</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-500 mb-2">No</div>
            <p className="text-gray-400 text-sm md:text-base">High-pressure tactics</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-500 mb-2">100%</div>
            <p className="text-gray-400 text-sm md:text-base">Strategic assessment</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 pt-12 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="/assets/logo/moz-logo.png"
              alt="MOZ Growth Logo"
             className="h-20 w-auto"
            />
            <h3 className="text-2xl font-black text-white">
              MOZ <span className="text-blue-500">GROWTH</span>
            </h3>
          </div>
          
          <p className="text-lg font-semibold text-blue-500 mb-4">
            Morrissey R. Rodriguez
          </p>
          <p className="text-lg text-gray-400 mb-4">
            <a href="mailto:morrisseyr@moz-growth.com" className="hover:text-blue-500 transition-colors">
              morrisseyr@moz-growth.com
            </a>
          </p>
          <div className="flex justify-center mb-4">
            <a
              href="https://www.instagram.com/moz.rodriguez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              @moz.rodriguez
            </a>
          </div>
          <p className="text-gray-500 mb-4">
            © 2025 MOZ Growth. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Creative Performance Marketing for Luxury Mobility Brands
          </p>
        </div>
      </footer>
    </section>
  );
};

export default FinalCTA;