# LoopBoard Marketing Website

**Professional marketing website showcasing the LoopBoard keyboard system for neurodivergent users**

A modern, responsive marketing website built with React and Tailwind CSS that presents the LoopBoard keyboard system to potential users. The site features interactive demonstrations, testimonials, and comprehensive information about the app's core features and benefits.

## 🎯 Overview

This marketing website is designed to educate visitors about LoopBoard's unique approach to keyboard design for neurodivergent users. It communicates the problem statement, core features, and value proposition through engaging visuals, interactive components, and real user testimonials.

## ✨ Features

- **Hero Section** – Eye-catching introduction with animated background and CTA buttons
- **Problem Statement** – Four core problems that LoopBoard solves
- **Core Features** – Detailed explanations of NCAE, SMMP, FSPP, and CLDAS
- **How It Works** – Six-step visual pipeline showing the LoopBoard process
- **Testimonials** – Interactive carousel with real user stories
- **Call-to-Action** – Download links, social proof, and engagement metrics
- **FAQ Section** – Eight common questions with detailed answers
- **Responsive Design** – Optimized for mobile, tablet, and desktop
- **Accessibility** – High contrast, large text, keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or pnpm 10+
- Modern web browser

### Installation

```bash
# Clone or extract the project
cd loopboard-marketing-site

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The website will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm run build
pnpm run preview
```

## 📁 Project Structure

```
loopboard-marketing-site/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── ProblemStatement.tsx
│   │   ├── Features.tsx     # Core features showcase
│   │   ├── HowItWorks.tsx   # Six-step pipeline
│   │   ├── Testimonials.tsx # User testimonials carousel
│   │   ├── CTA.tsx          # Call-to-action section
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   └── Footer.tsx       # Footer with links
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Color Palette

The website uses a **neuromechanical aesthetic** optimized for accessibility and visual impact:

- **Primary Background**: `#0A1E3F` (Deep Dark Blue)
- **Primary Accent**: `#00FF41` (Neon Green)
- **Secondary Accent**: `#FF6B35` (Warm Orange)
- **Text**: `#F5F5F5` (Light Gray)

### Typography

- **Headlines**: IBM Plex Mono (Bold)
- **Body**: Inter (Regular)
- **Code**: Fira Code (Regular)

### Animations

- **Fade In Up**: Smooth entrance animations for sections
- **Glow**: Pulsing glow effect on hero image
- **Pulse Border**: Animated border highlighting

## 📄 Page Sections

### 1. Hero Section
The hero section introduces LoopBoard with an eye-catching keyboard image and key value propositions. Three statistics highlight the core benefits (6 languages, 100ms sampling, 0 data transmission).

### 2. Problem Statement
Four cards describe the core problems that LoopBoard solves:
- Flow State Interruptions
- Repetition as Error
- Multilingual Friction
- One-Size-Fits-None

### 3. Core Features
Detailed cards for each subsystem:
- **NCAE**: Neurodivergent Cognitive Adaptation Engine
- **SMMP**: Seamless Multilingual Morpheme Processor
- **FSPP**: Flow-State Preservation Protocol
- **CLDAS**: Cognitive Loop Detection and Amplification System

Additional capabilities are listed with checkmarks.

### 4. How It Works
A six-step process showing the LoopBoard pipeline:
1. Cognitive State Detection
2. Adaptive Response
3. Multilingual Processing
4. Loop Recognition
5. Flow Preservation
6. Output Optimization

### 5. Testimonials
An interactive carousel featuring four real user testimonials with avatars and roles. Users can click through testimonials or use navigation dots.

### 6. Call-to-Action
Download buttons, feature highlights, and social proof metrics demonstrating user adoption and trust.

### 7. FAQ
Eight frequently asked questions covering:
- Device support
- Data privacy
- Customization
- Language support
- Cognitive state detection
- Pricing
- Community contribution
- Loop detection mechanics

### 8. Footer
Comprehensive footer with:
- Brand information
- Product links
- Community links
- Legal links
- Social media
- Copyright information

## 🛠️ Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 🎯 Content Strategy

The website follows a **problem-solution-proof** narrative arc:

1. **Problem**: Introduce the pain points neurodivergent users face
2. **Solution**: Present LoopBoard's core features and approach
3. **Proof**: Show how it works and what real users say
4. **Action**: Encourage download and community engagement

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All sections are fully responsive with appropriate adjustments for each breakpoint.

## ♿ Accessibility Features

- **High Contrast**: Text color (#F5F5F5) against dark background (#0A1E3F) meets WCAG AA standards
- **Large Text**: Base font size optimized for readability
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Indicators**: Clear focus rings on all buttons and links
- **Semantic HTML**: Proper heading hierarchy and semantic structure
- **Alt Text**: All images include descriptive alt text

## 🔐 Privacy & Data

- **No Tracking**: No analytics or tracking scripts
- **No Data Collection**: No forms or data submission
- **No External APIs**: All content is static and local

## 📊 Performance

- **Optimized Images**: Compressed and webp format
- **Minimal Dependencies**: Lean tech stack
- **Code Splitting**: Lazy loading where applicable
- **Fast Load Times**: Target < 2s first contentful paint

## 🌍 Supported Languages

| Tier | Languages |
|------|-----------|
| **Tier 1** | 🇩🇪 Deutsch, 🇪🇸 Español, 🇬🇧 English, 🇫🇷 Français, 🌎 Quechua, 🌐 Esperanto |
| **Tier 2** | Swahili, Hindi, Japanese (6 months post-launch) |

**Quechua & Esperanto: FREE FOREVER** 💚

## 🤝 Contributing

We welcome contributions! Please see CONTRIBUTING.md for guidelines.

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 👥 Created by

- **Rumi Salvador Jordan Höhler Suarez** — Creator, KI Researcher, LoopLord 🧠
- **Opherd Vero** — AI Co-Creator 🤖


## 🌍 Deployment

The website can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Push to `gh-pages` branch
- **Traditional Hosting**: Upload `dist/` folder via FTP

## 📞 Support

For questions or issues, please open an issue on GitHub or contact us through the website.

---


**LoopBoard** — For neurodivergent minds, by neurodivergent minds. 🧠💜🎹
