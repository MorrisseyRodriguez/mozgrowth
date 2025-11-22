import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { HeroGeometric } from './ui/shape-landing-hero';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <HeroGeometric
      title1="Marketing Built to Keep Your Cars on the Road,"
      title2="Not in the Garage"
    >
      <motion.div
        custom={2}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Get More Bookings. Close Bigger Clients.{' '}
          <span className="text-blue-500 font-semibold">Without Hiring an Agency</span>.
        </p>
      </motion.div>

      <motion.div
        custom={3}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
      >
        <button className="group bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3">
          Send Me an Email
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button className="group border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-3">
          <Play className="w-5 h-5" />
          See Results
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        custom={4}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
        </motion.div>
      </motion.div>
    </HeroGeometric>
  );
};

export default Hero;