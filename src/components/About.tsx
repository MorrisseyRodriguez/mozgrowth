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
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 lg:hidden">
              <div className="relative flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
                <img 
                  src="/assets/images/moz-bio-1.jpg"
                  alt="Marketing Strategist"
                  className="w-full h-64 sm:h-48 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Horizontal Connecting Line for Mobile */}
              <div className="hidden sm:flex sm:flex-col justify-center items-center">
                <div className="h-px w-16 sm:w-px sm:h-16 bg-gradient-to-r sm:bg-gradient-to-b from-blue-500 to-blue-300 relative">
                  <div className="absolute left-0 sm:left-1/2 top-1/2 sm:top-0 transform -translate-y-1/2 sm:-translate-x-1/2 sm:translate-y-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="absolute right-0 sm:left-1/2 top-1/2 sm:bottom-0 transform -translate-y-1/2 sm:-translate-x-1/2 sm:translate-y-0 w-3 h-3 bg-blue-300 rounded-full"></div>
                </div>
              </div>
              
              <div className="relative flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
                <img 
                  src="/assets/images/moz-bio-2.jpg"
                  alt="Marketing Results Screenshot"
                  className="w-full h-64 sm:h-48 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            
            {/* Desktop: Vertical Layout */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
                <img 
                  src="/assets/images/moz-bio-1.jpg"
                  alt="Marketing Strategist"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Vertical Connecting Line for Desktop */}
              <div className="flex justify-center my-8">
                <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-blue-300 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-300 rounded-full"></div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
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
              Your <span className="text-gradient-blue">Strategic Partner</span>,
              <br />Not Another Agency
            </h2>
            
            <div className="mb-6">
              <p className="text-lg font-semibold text-blue-500">
                — Morrissey R. Rodriguez
              </p>
            </div>
            
            <div className="text-xl text-gray-300 mb-8 leading-relaxed space-y-4">
              <p>
                I'm not running a factory. I'm not tossing around big promises just to land the deal and disappear when it flops.
              </p>
              <p>
                I work directly with a small group of exotic car rental owners who want real bookings, not pretty reports.
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
                  I take results personally. If your calendar's empty, and you're not making money, I lose sleep.
                </p>
                <p>
                  If you're looking for someone to treat your business like a number and move slowly towards your goals, I'm not the right person to work with.
                </p>
                <p>
                  If you want someone who can work alongside you like a partner and constantly work to deliver killer results…
                </p>
                <p className="font-semibold text-blue-400">
                  Let's chat and see what makes sense for your business.
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
                  <p className="text-gray-400">You work directly with me. No account managers, no middlemen.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Over Quantity</h3>
                  <p className="text-gray-400">I take on fewer clients to deliver exceptional results for each one.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance-Based</h3>
                  <p className="text-gray-400">Your success is my success. I'm invested in your results, not just retainers.</p>
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