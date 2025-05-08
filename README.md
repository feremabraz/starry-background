# Starry Background

Showcases a component that renders an interactive starry night sky with animated stars and constellation patterns. Each time the page loads, it displays a random pseudo-constellation.

## Features

- Animated twinkling stars with random sizes and positions
- Procedurally generated constellation patterns
- Random constellation name display
- Fully responsive design
- Built with Next.js 15 and React 19

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Jotai for state management
- Motion (Framer Motion) for animations

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Usage

```tsx
<StarryBackground 
  starCount={200} 
  maxStars={500} 
  constellationCount={1} 
/>
```

### Props

- `starCount`: Number of stars to display (default: 100)
- `maxStars`: Maximum number of stars allowed (default: 1024)
- `constellationCount`: Number of constellations to generate (default: 2)
