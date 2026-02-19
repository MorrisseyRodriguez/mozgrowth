import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudy from './components/CaseStudy';
import Services from './components/Services';
import Comparison from './components/Comparison';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="bg-dark-900 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <CaseStudy />
      <Services />
      <FinalCTA />
    </div>
  );
}

export default App;