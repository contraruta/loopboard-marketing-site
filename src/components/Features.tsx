import React from 'react';

const features = [
  {
    title: 'NCAE',
    subtitle: 'Neurodivergent Cognitive Adaptation Engine',
    description: 'Real-time cognitive state detection (HYPERFOCUS, SCANNING, TRANSITIONAL, FATIGUED) with 100ms sampling. Keyboard behavior adapts to your current mental state.',
    icon: '🧠',
    color: 'from-accent/20 to-accent/5',
  },
  {
    title: 'SMMP',
    subtitle: 'Seamless Multilingual Morpheme Processor',
    description: 'Morpheme-level language detection supporting German, Spanish, English, and Quechua simultaneously. No manual switching. No friction.',
    icon: '🌍',
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    title: 'FSPP',
    subtitle: 'Flow-State Preservation Protocol',
    description: 'Disruption cost model with adaptive budgets. HYPERFOCUS = zero interruptions. FATIGUED = maximum assistance. Flow is sacred.',
    icon: '⚡',
    color: 'from-accent/20 to-secondary/5',
  },
  {
    title: 'CLDAS',
    subtitle: 'Cognitive Loop Detection & Amplification',
    description: 'Recognizes your cognitive loops and amplifies them into shortcuts. Repetition is intentional. Your patterns become power.',
    icon: '🔄',
    color: 'from-secondary/20 to-accent/5',
  },
];

export default function Features() {
  return (
    <section className="w-full py-20 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
          Core Features
        </h2>
        <p className="text-center text-light/70 mb-16 max-w-2xl mx-auto">
          Four interconnected systems working together to create the most neurodivergent-friendly keyboard ever built.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-lg border border-accent/30 hover:border-accent/60 transition-all bg-gradient-to-br ${feature.color} group hover:shadow-lg hover:shadow-accent/20`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
                {feature.title}
              </h3>
              <p className="text-sm text-light/70 mb-4">{feature.subtitle}</p>
              <p className="text-light/80">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 p-8 bg-white/5 rounded-lg border border-accent/30">
          <h3 className="text-2xl font-bold mb-6 text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            Additional Capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-light/80">
            <div className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>UTF-8 Sanitization – Clean output, no invisible Unicode</span>
            </div>
            <div className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Local Processing – All data stays on your device</span>
            </div>
            <div className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>User Sovereignty – Zero filtering, zero censorship</span>
            </div>
            <div className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>LoopOperation – Task execution optimized for hyperfocus</span>
            </div>
            <div className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Customizable Layouts – Design your perfect keyboard</span>
            </div>
            <div className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Accessibility First – High contrast, large text options</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
