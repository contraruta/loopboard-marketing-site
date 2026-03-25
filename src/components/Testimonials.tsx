import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Software Developer, ADHD',
    text: 'LoopBoard saved my productivity. No more interruptions breaking my flow. I went from 3 hours of focused work to 6+ hours. Game changer.',
    avatar: '👨‍💻',
  },
  {
    name: 'Maria Santos',
    role: 'Multilingual Writer, Neurodivergent',
    text: 'I write in German, Spanish, and English. Before LoopBoard, I had to manually switch languages constantly. Now it just works. Seamlessly.',
    avatar: '✍️',
  },
  {
    name: 'Jordan Smith',
    role: 'Student, ADHD + Dyslexia',
    text: 'The loop detection feature is incredible. My repetitive patterns are now shortcuts. It feels like the keyboard understands how my brain works.',
    avatar: '🎓',
  },
  {
    name: 'Ravi Patel',
    role: 'Content Creator, ADHD',
    text: 'Zero data transmission means I can type freely without privacy concerns. And the cognitive state adaptation is mind-blowing. Finally, a keyboard for neurodivergent people.',
    avatar: '🎬',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-20 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
          What Users Say
        </h2>
        <p className="text-center text-light/70 mb-16 max-w-2xl mx-auto">
          Real voices from neurodivergent users who've experienced the LoopBoard difference.
        </p>

        {/* Testimonial Carousel */}
        <div className="mb-8">
          <div className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg border-2 border-accent/50 min-h-64 flex flex-col justify-between">
            <div>
              <p className="text-2xl text-light mb-6 italic">"{testimonials[activeIndex].text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl">{testimonials[activeIndex].avatar}</div>
              <div>
                <p className="text-lg font-bold text-accent">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-light/70">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === activeIndex ? 'bg-accent w-8' : 'bg-accent/30 hover:bg-accent/60'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                idx === activeIndex
                  ? 'border-accent bg-accent/10'
                  : 'border-accent/30 bg-white/5 hover:border-accent/60'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-light">{testimonial.name}</p>
                  <p className="text-xs text-light/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-light/80 line-clamp-3">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
