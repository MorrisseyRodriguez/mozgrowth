import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const comparisons = [
    {
      feature: 'Direct access to strategist',
      me: true,
      agency: false
    },
    {
      feature: 'Custom strategy for your market',
      me: true,
      agency: false
    },
    {
      feature: 'Performance-based pricing options',
      me: true,
      agency: false
    },
    {
      feature: 'Quick decision making and application',
      me: true,
      agency: false
    },
    {
      feature: 'Dedicated focus on your results',
      me: true,
      agency: false
    },
    {
      feature: 'No long-term contract traps',
      me: true,
      agency: false
    },
    {
      feature: 'Industry specialization',
      me: true,
      agency: false
    },
    {
      feature: 'Transparent communication',
      me: true,
      agency: false
    }
  ];

  return (
    <section className="py-16 px-6 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up">
            Why <span className="text-gradient-blue">Me</span> vs Agencies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Stop paying agency premiums for junior-level work. Get expert strategy directly.
          </p>
        </div>

        <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 overflow-hidden animate-fade-in-up" 
             style={{ animationDelay: '0.3s' }}>
          {/* Header */}
          <div className="grid grid-cols-3 bg-dark-700/50 p-4 border-b border-blue-500/20">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-400">Feature</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-500">Me</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-400">Traditional Agency</h3>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-3 p-4 border-b border-dark-600/50 hover:bg-dark-700/30 transition-colors"
            >
              <div className="text-gray-300 font-medium text-sm md:text-base">{item.feature}</div>
              <div className="text-center">
                {item.me ? (
                  <Check className="w-5 h-5 text-blue-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                )}
              </div>
              <div className="text-center">
                {item.agency ? (
                  <Check className="w-5 h-5 text-blue-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-2xl font-bold text-blue-500 mb-4">
            The Choice is Clear
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get the strategy and execution of a senior-level expert without the agency overhead and junior staff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;