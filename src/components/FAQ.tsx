import React, { useState } from 'react';

const faqs = [
  {
    question: 'What devices does LoopBoard support?',
    answer: 'LoopBoard is currently available for Android devices. iOS support is in development. All processing is local to your device.',
  },
  {
    question: 'Is my data transmitted to external servers?',
    answer: 'No. LoopBoard is 100% local. All cognitive state detection, language processing, and loop detection happens on your device. Zero data transmission.',
  },
  {
    question: 'Can I customize the keyboard layout?',
    answer: 'Yes. LoopBoard comes with multiple layout options, and you can create custom layouts. The keyboard adapts to your preferences and cognitive state.',
  },
  {
    question: 'Does LoopBoard work with all languages?',
    answer: 'LoopBoard natively supports German, Spanish, English, and Quechua. Additional languages can be added through community contributions.',
  },
  {
    question: 'How does cognitive state detection work?',
    answer: 'LoopBoard analyzes your typing patterns, speed, and pause duration. Within 100ms, it identifies whether you\'re in HYPERFOCUS, SCANNING, TRANSITIONAL, or FATIGUED state.',
  },
  {
    question: 'Is LoopBoard free?',
    answer: 'Yes, LoopBoard is completely free and open-source. There are no ads, no tracking, and no premium features hidden behind paywalls.',
  },
  {
    question: 'Can I contribute to LoopBoard?',
    answer: 'Absolutely! LoopBoard is open-source and welcomes contributions. Visit our GitHub repository to get involved.',
  },
  {
    question: 'How does loop detection and amplification work?',
    answer: 'LoopBoard recognizes when you repeat typing patterns. Instead of treating this as an error, it amplifies these patterns into shortcuts, making your repetitive sequences faster.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
          Frequently Asked Questions
        </h2>
        <p className="text-center text-light/70 mb-12 max-w-2xl mx-auto">
          Everything you need to know about LoopBoard.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-accent/30 rounded-lg overflow-hidden hover:border-accent/60 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between text-left"
              >
                <h3 className="font-bold text-light text-lg">{faq.question}</h3>
                <span className={`text-accent text-2xl transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-6 bg-gradient-to-br from-accent/5 to-secondary/5 border-t border-accent/30">
                  <p className="text-light/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg border border-accent/30 text-center">
          <h3 className="text-xl font-bold text-light mb-3">Still have questions?</h3>
          <p className="text-light/80 mb-4">Join our community or reach out to us directly.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-6 py-2 bg-accent/20 border border-accent text-accent rounded hover:bg-accent/30 transition-all">
              Join Discord
            </button>
            <button className="px-6 py-2 bg-secondary/20 border border-secondary text-secondary rounded hover:bg-secondary/30 transition-all">
              Email Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
