import React from 'react';
import { Calendar, Mail, ArrowRight } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(/assets/images/20250926_132206(1).jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in-up">
          Ready to Get Your Fleet <span className="text-gradient-blue">Booked Out</span>?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" 
           style={{ animationDelay: '0.2s' }}>
          Start attracting premium clients who value luxury experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" 
             style={{ animationDelay: '0.4s' }}>
          <button className="group bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-lg font-bold text-xl hover:from-blue-700 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            Book a Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-3">
            <Mail className="w-6 h-6" />
            Reply to My Email Instead
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-500 mb-2">15 min</div>
            <p className="text-gray-400 text-sm md:text-base">Strategy call duration</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-500 mb-2">No</div>
            <p className="text-gray-400 text-sm md:text-base">High-pressure sales tactics</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-500 mb-2">100%</div>
            <p className="text-gray-400 text-sm md:text-base">Honest assessment</p>
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
          <p className="text-gray-500 mb-4">
            © 2025 Elite Car Rental Marketing. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Specialized marketing strategies for luxury and exotic car rental businesses.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default CaseStudy;