import React from 'react';

export default function ProblemStatement() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-primary to-primary/95">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
          The Problem
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Problem 1 */}
          <div className="p-8 bg-white/5 rounded-lg border border-accent/30 hover:border-accent/60 transition-all">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-light">Flow State Interruptions</h3>
            <p className="text-light/80">
              Standard keyboards bombard you with autocorrect, notifications, and suggestions. Each interruption breaks your hyperfocus and costs 15+ minutes to regain.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="p-8 bg-white/5 rounded-lg border border-accent/30 hover:border-accent/60 transition-all">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3 text-light">Repetition as Error</h3>
            <p className="text-light/80">
              Your brain recognizes patterns and loops. Keyboards treat repetition as mistakes and try to "correct" you. Your loops are features, not bugs.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="p-8 bg-white/5 rounded-lg border border-accent/30 hover:border-accent/60 transition-all">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-3 text-light">Multilingual Friction</h3>
            <p className="text-light/80">
              Switching between languages requires manual intervention. LoopBoard detects language at the morpheme level—no switching, no friction.
            </p>
          </div>

          {/* Problem 4 */}
          <div className="p-8 bg-white/5 rounded-lg border border-accent/30 hover:border-accent/60 transition-all">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-light">One-Size-Fits-None</h3>
            <p className="text-light/80">
              Your cognitive state changes throughout the day. HYPERFOCUS needs zero interruptions. FATIGUED needs maximum support. Keyboards don't adapt.
            </p>
          </div>
        </div>

        {/* Core Statement */}
        <div className="p-8 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg border-2 border-accent/50 text-center">
          <p className="text-xl md:text-2xl text-light font-semibold">
            Neurodivergent brains aren't broken. <span className="text-accent">Keyboards are.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
