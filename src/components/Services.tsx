import React from 'react';
import { Search, Globe, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Google Ads',
      description: 'Capture high-intent customers actively searching for exotic car rentals in your area.',
      features: ['Search campaign optimization', 'Local targeting mastery', 'Keyword research & bidding']
    },
    {
      icon: Globe,
      title: 'High-Converting Websites',
      description: 'Custom websites built specifically for exotic car rentals that turn visitors into bookings.',
      features: ['Mobile-optimized design', 'Fast loading speeds', 'Booking-focused layouts']
    },
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'I take your specific goals and create a custom plan to achieve them with marketing that connects your fleet to the high-intent customers looking for exactly what you offer.',
      features: ['Goal-oriented planning', 'Custom strategy development', 'Results-focused execution']
    }
  ];

  return (
    <section data-section="services" className="py-24 px-6 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up">
            How I <span className="text-gradient-blue">Help</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Everything you need to dominate your market and book out your fleet with premium clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isStrategicFocus = service.title === 'Strategic Focus';
            return (
              <div 
                key={service.title}
                className={`bg-dark-700/50 backdrop-blur-sm p-8 rounded-2xl border ${
                  isStrategicFocus 
                    ? 'border-gold-500/30 shadow-lg shadow-gold-500/10 hover:shadow-xl hover:shadow-gold-500/20' 
                    : 'border-blue-500/20'
                } hover-lift animate-fade-in-up`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`${
                  isStrategicFocus 
                    ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/20' 
                    : 'bg-blue-500/20'
                } p-4 rounded-xl w-fit mb-6`}>
                  <IconComponent className={`w-8 h-8 ${
                    isStrategicFocus ? 'text-gold-400' : 'text-blue-500'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-400">
                      <div className={`w-2 h-2 ${
                        isStrategicFocus ? 'bg-gold-400' : 'bg-blue-500'
                      } rounded-full`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;