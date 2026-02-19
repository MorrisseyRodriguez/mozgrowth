import React from 'react';
import { Search, Target, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Attention vs Monetization',
      description: 'Diagnose whether your problem is getting attention or converting that attention into revenue.',
      features: ['Traffic analysis', 'Conversion pathway review', 'Demand qualification']
    },
    {
      icon: Zap,
      title: 'Growth Bottleneck Identification',
      description: 'Identify weak points in traffic, conversion, or offer that are limiting your next stage of growth.',
      features: ['Business capacity analysis', 'Market positioning review', 'Competitive advantage mapping']
    },
    {
      icon: Target,
      title: 'Demand System Execution',
      description: 'Design and execute focused growth initiatives that turn demand into consistent booked revenue.',
      features: ['Paid acquisition systems', 'Conversion optimization', 'Scalable demand engines']
    }
  ];

  return (
    <section data-section="services" className="py-24 px-6 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up">
            How I <span className="text-gradient-blue">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I don't just run ads. I build demand systems aligned with your business capacity and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isStrategicFocus = service.title === 'Demand System Execution';
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