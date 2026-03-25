import React, { useState } from 'react';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-light">
      <Hero />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
