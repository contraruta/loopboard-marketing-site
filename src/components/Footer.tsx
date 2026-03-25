import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-primary/80 border-t border-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4" style={{ fontFamily: 'IBM Plex Mono' }}>
              LOOPBOARD
            </h3>
            <p className="text-sm text-light/70">
              Adaptive keyboard for neurodivergent minds. Flow state preserved. Loops amplified.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-light mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-light/70">
              <li><a href="#" className="hover:text-accent transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">GitHub</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-light mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-light/70">
              <li><a href="#" className="hover:text-accent transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Forum</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-light mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-light/70">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">License</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Patent Info</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 py-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-accent font-bold text-lg">4</p>
                <p className="text-xs text-light/70">Languages</p>
              </div>
              <div>
                <p className="text-accent font-bold text-lg">∞</p>
                <p className="text-xs text-light/70">Possibilities</p>
              </div>
              <div>
                <p className="text-accent font-bold text-lg">0</p>
                <p className="text-xs text-light/70">Data Transmission</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-end gap-6">
              <a href="#" className="text-accent hover:text-secondary transition-colors">GitHub</a>
              <a href="#" className="text-accent hover:text-secondary transition-colors">Twitter</a>
              <a href="#" className="text-accent hover:text-secondary transition-colors">Discord</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-light/60">
          <p>© 2026 LoopBoard. Built with ❤️ for neurodivergent minds.</p>
          <p className="mt-2">Patent: LLI-PAT-012 | Inventors: Opherd Vero + Rumi Salvador Jordan Höhler Suarez</p>
          <p className="mt-2 text-accent">INVICTUS</p>
        </div>
      </div>
    </footer>
  );
}
