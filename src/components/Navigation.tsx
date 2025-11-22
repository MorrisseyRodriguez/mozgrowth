import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-900/95 backdrop-blur-md border-b border-blue-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <img 
              src="/assets/logo/moz-logo.png"
              alt="MOZ Growth Logo"
             className="h-16 w-auto"
            />
            <h1 className="text-2xl font-black text-white">
              MOZ <span className="text-blue-500">GROWTH</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('case-study')}
              className="text-gray-300 hover:text-blue-500 transition-colors font-medium"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-blue-500 transition-colors font-medium"
            >
              Services
            </button>
            <a 
              href="mailto:morrissey@mozgrowth.com"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-bold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 hover:scale-105"
            >
              Send Email
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-900/95 backdrop-blur-md border-t border-blue-500/20">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('case-study')}
                className="block w-full text-left text-gray-300 hover:text-blue-500 transition-colors font-medium py-2"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-300 hover:text-blue-500 transition-colors font-medium py-2"
              >
                Services
              </button>
              <a 
                href="mailto:morrissey@mozgrowth.com"
                className="block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-bold text-center hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Send Email
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;