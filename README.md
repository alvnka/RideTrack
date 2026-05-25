# 🚘 GarageMate AI

Your smart vehicle assistant — track maintenance, expenses, and vehicle health across your entire garage, powered by AI.

---

## Overview

GarageMate AI is a React + TypeScript landing page and waitlist application for a smart vehicle management platform. It features a BMW cluster-amber design system built on Material UI v6, dark/light mode toggling, and direct Firebase Firestore integration to capture waitlist sign-ups in real time.

## Features

- **BMW Cluster Amber design system** — custom MUI theme with amber `#F0A800` as the primary colour on a pure black background
- **Dark / Light mode toggle** — full theme switch with warm off-white light palette
- **Waitlist form** — name + email capture with validation, written directly to Firestore
- **Firebase Firestore integration** — real-time write to `waitlist` collection with `serverTimestamp`
- **Fully responsive** — mobile-first layout using MUI `Grid2` breakpoints
- **Hero vehicle card** — animated health bars, AI insight panel, next service indicator
- **Feature cards, How It Works steps, CTA section** — complete landing page structure

---

## Project Structure

```
├── src/
│   ├── GarageMateAI.tsx      # Main landing page component
│   ├── firebaseConfig.js     # Firebase app initialisation
│   └── main.tsx              # React entry point
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js `>= 18`
- npm or yarn
- A Firebase project with Firestore enabled

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/alvnka/RideTrack.git
cd garagemate-ai

# 2. Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Other Scripts

```bash
# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview

# Run the linter
npm run lint
```

## Environment

The Firebase config is currently inlined in `GarageMateAI.tsx`. For production deployments it is recommended to move credentials to environment variables:

```bash
# .env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_PROJECT_ID=your_project_id
# etc.
```

Then reference them as `import.meta.env.VITE_FIREBASE_API_KEY` in your config.

---

## Deployment

```bash
# Build the production bundle
npm run build

# Output is in /dist — deploy to Vercel, Firebase Hosting, or any static host
```