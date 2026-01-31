# BrandMuse - AI-Powered Brand Ideation Assistant

A modern React web application that simulates an AI-powered creative assistant for marketing teams. BrandMuse helps generate slogans, social media captions, campaign concepts, and visual mood board suggestions using simulated RAG (Retrieval-Augmented Generation) behavior.

## ✨ Features

- **Brand Profile Input**: Define brand name, industry, tone, keywords, and campaign objectives
- **AI-Powered Generation**: Simulated AI that generates:
  - ✨ Slogan Ideas (3-5 creative slogans)
  - 📱 Social Media Captions (3 engaging captions with emojis)
  - 🧠 Campaign Concepts (detailed campaign briefs)
  - 🎨 Mood Board Suggestions (color palettes, visual styles, imagery hints)
- **Brand History**: Save and reload previous brand generations using localStorage
- **Modern UI**: Gradient design with coral (#FF6F61), deep violet (#4A148C), and beige themes
- **Smooth Animations**: Fade-in effects, hover interactions, and loading states

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Design System

- **Primary Colors**: Coral (#FF6F61), Deep Violet (#4A148C), Beige (#F5F5DC)
- **Typography**: Poppins (headers), Inter (body text)
- **Layout**: Split-view design with responsive grid layout
- **Animations**: Smooth transitions, fade-ins, and hover effects

## 📁 Project Structure

```
Brandmuse/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── BrandInputPanel.jsx
│   │   ├── ResultsPanel.jsx
│   │   ├── BrandHistory.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── brandAI.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🧠 AI Simulation Logic

The app uses a simulated RAG system that:
- Retrieves tone-specific slogan and caption pools
- Generates industry-appropriate mood boards
- Creates campaign concepts based on objectives
- Combines user keywords with pre-built templates
- Stores all generations in localStorage for history

## 💡 Usage

1. Fill out the brand profile form (Brand Name, Industry, and Tone are required)
2. Optionally add keywords/taglines and select a campaign objective
3. Click "Generate Ideas" to see AI-powered suggestions
4. View your generated content in the results panel
5. Access previous generations from the Brand History sidebar

## 🛠️ Technologies

- React 18
- Vite
- CSS3 (with animations and gradients)
- localStorage API

## 💡 Features Summary

- **Full RAG-simulation workflow** (retrieve + generate): Simulates retrieval of brand guidelines, past campaigns, and audience personas, then generates contextual creative content
- **Stores history locally with timestamps**: All brand generations are automatically saved to localStorage with creation timestamps
- **Auto-load past sessions**: Click any saved brand in the history sidebar to instantly reload the brand profile and generated results
- **Clean, creative dashboard interface**: Modern split-view layout with gradient aesthetics and intuitive navigation
- **Animated transitions**: Smooth fade-in animations for results, hover effects, and loading states
- **Fully responsive layout**: Optimized for desktop, tablet, and mobile devices

## 🚀 End State

When the app runs:

1. **User defines a brand** → Fills out the brand profile form with name, industry, tone, keywords, and campaign objective
2. **Clicks "Generate Ideas"** → Loading animation appears with "Analyzing brand memory..." message
3. **AI results appear dynamically** → Results panel displays with animated sections:
   - ✨ Slogan Ideas (3-5 options)
   - 📱 Social Captions (3 creative captions)
   - 🧠 Campaign Concept (detailed brief)
   - 🎨 Mood Board Suggestions (color palette, style, imagery)
4. **Sidebar updates automatically** → New session appears at the top of Brand History with timestamp
5. **Visual style reflects creative tech aesthetic** → Gradient backgrounds, smooth animations, and modern UI elements create an engaging creative workspace experience

The app provides a seamless workflow from brand input to AI-generated creative outputs, with persistent history for easy reference and iteration.

## 📝 License

© 2025 BrandMuse Inc. | Crafted with Creative AI.

---

*"Where creativity meets intelligence."*

