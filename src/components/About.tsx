import React from 'react';
import { useState } from 'react';
import { User, Target, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section data-section="about" className="py-24 px-6 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="animate-slide-in-left">
            {/* Mobile: Horizontal Layout */}
            <div className="lg:hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
                <img 
                  src="/assets/images/moz-bio-2.jpg"
                  alt="Marketing Results Screenshot"
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            
            {/* Desktop: Vertical Layout */}
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="/assets/images/moz-bio-2.jpg"
                  alt="Marketing Results Screenshot"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient-blue">Creative Performance Marketing</span>
              <br />for Luxury Mobility
            </h2>
            
            <div className="mb-6">
              <p className="text-lg font-semibold text-blue-500">
                — Morrissey R. Rodriguez
              </p>
            </div>
            
            <div className="text-xl text-gray-300 mb-8 leading-relaxed space-y-4">
              <p>
                I work with exotic car rentals, chauffeur services, and luxury transportation brands who need more than just ad management.
              </p>
              <p>
                I diagnose what's actually blocking growth, design the strategic move, and execute demand systems that scale with your capacity.
              </p>
              
              {/* Read More Button for all devices */}
              <div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-center gap-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors mx-auto"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Expandable content for all devices */}
              <div className={`${isExpanded ? 'block' : 'hidden'} space-y-4`}>
                <p>
                  Most marketing fails because it treats symptoms, not root causes. Traffic without conversion strategy. Ads without demand alignment. Campaigns without business context.
                </p>
                <p>
                  I review what's currently holding your business back from the next stage of growth, then design and execute the project that removes that bottleneck.
                </p>
                <p>
                  If you want strategic thinking combined with execution that moves the needle...
                </p>
                <p className="font-semibold text-blue-400">
                  Let's discuss what makes sense for your business.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <User className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Direct Access</h3>
                  <p className="text-gray-400">Direct access to strategic thinking and execution. No account managers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategic Focus</h3>
                  <p className="text-gray-400">Focused growth initiatives designed around your specific bottlenecks.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Demand Systems</h3>
                  <p className="text-gray-400">Build scalable systems that turn attention into consistent booked revenue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;