import React from 'react';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section data-section="case-study" className="py-24 px-6 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up">
            Real <span className="text-gradient-blue">Results</span> for Real Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            See how exotic car rental businesses are transforming their marketing and booking more premium clients.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 md:p-12 mb-16 animate-fade-in-up" 
             style={{ animationDelay: '0.3s' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
              <img 
                src="/assets/images/20250926_132206(1).jpg"
                alt="Client success story with exotic cars"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Right: Results */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Miami Luxury Rentals</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                "Working with Morrissey completely transformed our business. We went from struggling to fill our calendar to having a consistent flow of high-value bookings. The strategies he implemented didn't just increase our revenue - they attracted the right kind of clients who appreciate luxury experiences."
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-500">300%</div>
                  <p className="text-gray-400 text-sm">Revenue Increase</p>
                </div>
                
                <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-500">85%</div>
                  <p className="text-gray-400 text-sm">Booking Rate</p>
                </div>
                
                <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                  <DollarSign className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-500">$2.5K</div>
                  <p className="text-gray-400 text-sm">Avg. Booking Value</p>
                </div>
                
                <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                  <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-500">90</div>
                  <p className="text-gray-400 text-sm">Days to Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Results Summary */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold mb-8">The Results Speak for Themselves</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-black text-blue-500 mb-2">3x</div>
              <p className="text-gray-300">More qualified leads per month</p>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-500 mb-2">50%</div>
              <p className="text-gray-300">Higher average booking value</p>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-500 mb-2">24/7</div>
              <p className="text-gray-300">Automated booking system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;