import React from 'react';

export default function CTA() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-primary to-primary/95">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
          Ready to Reclaim Your Flow?
        </h2>
        <p className="text-xl text-light/80 mb-12 max-w-2xl mx-auto">
          LoopBoard is free, open-source, and available for Android. Your keyboard should work for your brain, not against it.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <button className="px-10 py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105">
            Download for Android
          </button>
          <button className="px-10 py-4 border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent/10 transition-all">
            View on GitHub
          </button>
        </div>

        {/* Features List */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white/5 rounded-lg border border-accent/30">
            <div className="text-3xl mb-3">🆓</div>
            <h3 className="font-bold text-light mb-2">Free & Open Source</h3>
            <p className="text-sm text-light/70">No ads, no tracking, no premium paywalls.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-accent/30">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-light mb-2">100% Local</h3>
            <p className="text-sm text-light/70">All processing happens on your device. Zero data transmission.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-accent/30">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-light mb-2">Neurodivergent-First</h3>
            <p className="text-sm text-light/70">Designed by and for neurodivergent people.</p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="p-8 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg border border-accent/30">
          <p className="text-light/80 mb-4">Trusted by neurodivergent users worldwide</p>
          <div className="flex justify-center gap-8 text-light/70 font-mono text-sm">
            <div>
              <p className="text-2xl font-bold text-accent">1000+</p>
              <p>Active Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">4</p>
              <p>Languages</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">∞</p>
              <p>Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
