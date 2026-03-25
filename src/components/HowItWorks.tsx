import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Cognitive State Detection',
    description: 'LoopBoard monitors your typing patterns, speed, and pause duration. Within 100ms, it identifies your current cognitive state.',
  },
  {
    number: '02',
    title: 'Adaptive Response',
    description: 'Based on your state, the keyboard adjusts its behavior. HYPERFOCUS gets zero interruptions. FATIGUED gets maximum assistance.',
  },
  {
    number: '03',
    title: 'Multilingual Processing',
    description: 'Detects language at the morpheme level. German, Spanish, English, Quechua—all processed seamlessly without manual switching.',
  },
  {
    number: '04',
    title: 'Loop Recognition',
    description: 'Your repetitive patterns are recognized as intentional. Recurring sequences become shortcuts. Your loops become power.',
  },
  {
    number: '05',
    title: 'Flow Preservation',
    description: 'Disruptions are blocked based on your cognitive state. Each interruption has a measurable cost. Flow is protected.',
  },
  {
    number: '06',
    title: 'Output Optimization',
    description: 'UTF-8 sanitization ensures clean output. No invisible characters. No encoding errors. Pure, clean text.',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-primary/95 to-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
          How It Works
        </h2>
        <p className="text-center text-light/70 mb-16 max-w-2xl mx-auto">
          A six-step process that turns your keyboard into an intelligent, adaptive tool.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 bg-white/5 rounded-lg border border-accent/30 hover:border-accent/60 transition-all group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                {step.number}
              </div>

              <h3 className="text-xl font-bold mb-3 text-light pt-4">{step.title}</h3>
              <p className="text-light/80">{step.description}</p>

              {/* Connection line */}
              {idx < steps.length - 1 && (
                <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-accent/50 to-transparent hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Visualization */}
        <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg border border-accent/30">
          <h3 className="text-2xl font-bold mb-6 text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            The LoopBoard Pipeline
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-light/80 font-mono text-sm">
            <div className="text-center">
              <div className="text-accent font-bold mb-2">INPUT</div>
              <div>Your typing</div>
            </div>
            <div className="text-accent text-2xl hidden md:block">→</div>
            <div className="text-center">
              <div className="text-accent font-bold mb-2">ANALYSIS</div>
              <div>NCAE + SMMP</div>
            </div>
            <div className="text-accent text-2xl hidden md:block">→</div>
            <div className="text-center">
              <div className="text-accent font-bold mb-2">ADAPTATION</div>
              <div>FSPP + CLDAS</div>
            </div>
            <div className="text-accent text-2xl hidden md:block">→</div>
            <div className="text-center">
              <div className="text-accent font-bold mb-2">OUTPUT</div>
              <div>Clean text</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
