import React from 'react';
import { TrendingUp, DollarSign, Calendar } from 'lucide-react';
import CountingNumber from './ui/CountingNumber';

const CaseStudy = () => {
  return (
    <section data-section="case-study" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 parallax-bg opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-dark-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 animate-fade-in-up">
          The Numbers Don't Lie
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Real results from a luxury car rental client in Los Angeles
        </p>

        {/* Main Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover-lift animate-fade-in-up" 
               style={{ animationDelay: '0.3s' }}>
            <DollarSign className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <CountingNumber 
              value={500}
              prefix="$"
              duration={1.5}
              className="text-5xl md:text-6xl font-black text-blue-500 mb-2"
            />
            <p className="text-gray-400 text-lg">Ad Spend</p>
          </div>

          <div className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover-lift animate-fade-in-up" 
               style={{ animationDelay: '0.4s' }}>
            <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <CountingNumber 
              value={2025}
              prefix="$"
              duration={2}
              className="text-5xl md:text-6xl font-black text-blue-500 mb-2"
            />
            <p className="text-gray-400 text-lg">Revenue Generated</p>
          </div>

          <div className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover-lift animate-fade-in-up" 
               style={{ animationDelay: '0.5s' }}>
            <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <CountingNumber 
              value={30}
              duration={1}
              className="text-5xl md:text-6xl font-black text-blue-500 mb-2"
            />
            <p className="text-gray-400 text-lg">Days</p>
          </div>
        </div>

        {/* Client Image */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.65s' }}>
          <div className="max-w-xl mx-auto">
            <img 
              src="/assets/images/client-success.jpg"
              alt="Client Success Story"
              className="w-full h-auto rounded-2xl shadow-2xl border border-blue-500/20"
            />
          </div>
        </div>

        {/* ROI Highlight */}
        <div className="bg-dark-800/80 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 animate-fade-in-up text-left" 
             style={{ animationDelay: '0.6s' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-8 text-center">
              Client Story
            </h3>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
              Before launching the campaign, the client was averaging 3 to 4 inquiries per month with no consistency.
            </p>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 font-semibold">
              We launched paid ads with a $500 budget.
            </p>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
              Over the course of 3 weeks:
            </p>
            <div className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 space-y-2">
              <p className="flex items-center justify-start gap-3">
                <span className="text-green-500 font-bold">✅</span>
                <span>10 Bookings</span>
              </p>
              <p className="flex items-center justify-start gap-3">
                <span className="text-green-500 font-bold">✅</span>
                <span>3 Confirmed Trips</span>
              </p>
              <p className="flex items-center justify-start gap-3">
                <span className="text-green-500 font-bold">✅</span>
                <span>$2,025 in Revenue</span>
              </p>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
              After that initial batch, results continued and demand stayed consistent.
            </p>
            <p className="text-xl md:text-2xl text-blue-400 leading-relaxed font-semibold">
              Just 3 vehicles. Proof of demand generation, not hype.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;