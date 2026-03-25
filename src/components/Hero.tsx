import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            LOOPBOARD
          </h1>
          <p className="text-2xl md:text-3xl text-light mb-6">
            The Keyboard That Understands Your Brain
          </p>
        </div>

        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-light/80 max-w-2xl mx-auto mb-8">
            An adaptive, neurodivergent-optimized keyboard that preserves your flow state, detects cognitive loops, and supports seamless multilingual input. Designed for ADHD brains. Built for freedom.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105">
            Download Now
          </button>
          <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all">
            Learn More
          </button>
        </div>

        {/* Hero Image */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663111998939/USxuf8gh6yLibPRMWZUKk2/loopboard-hero-RL7YQWKWYmLByALb4Keyot.webp"
            alt="LoopBoard Keyboard"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl shadow-accent/30 animate-glow"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="p-4 bg-white/5 rounded-lg border border-accent/30">
            <p className="text-3xl font-bold text-accent">4</p>
            <p className="text-sm text-light/70">Languages Supported</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-accent/30">
            <p className="text-3xl font-bold text-accent">100ms</p>
            <p className="text-sm text-light/70">Cognitive State Sampling</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-accent/30">
            <p className="text-3xl font-bold text-accent">0</p>
            <p className="text-sm text-light/70">Data Transmission</p>
          </div>
        </div>
      </div>
    </section>
  );
}
