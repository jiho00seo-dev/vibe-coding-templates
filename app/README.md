# AI Portfolio Premium Template

A state-of-the-art portfolio template designed for AI researchers, engineers, and designers. Built with Next.js 15, Tailwind CSS 4, and Framer Motion.

## Features

- **Premium Aesthetics**: Dark mode by default with glassmorphism and neon accents.
- **Bento Grid Layout**: Responsive and modern grid system for showcasing projects.
- **Dynamic Interactions**: Custom smooth cursor and micro-animations.
- **Optimized Performance**: Built with Next.js App Router for minimal client-side JavaScript.
- **Design Tokens**: Centralized design system in `vibe-tokens.json`.

## Getting Started

### 1. Prerequisites

- Node.js 20+ 
- npm / yarn / pnpm

### 2. Installation

```bash
cd projects/vibe-templates/ai-portfolio/app
npm install
```

### 3. Environment Setup

Copy the `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

The following variables are supported:
- `NEXT_PUBLIC_COUPANG_PARTNERS_ID`: Your Coupang Partners ID for affiliate integration.
- `COUPANG_PARTNERS_SECRET`: Your Coupang Partners Secret.
- `CLOUDFLARE_PAGES_ID`: For deployment tracking.

### 4. Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the template.

## Design Customization

You can customize the theme by editing `vibe-tokens.json` in the project root. The styles are automatically mapped to CSS variables in `app/globals.css`.

## Accessibility

This template follows Web Content Accessibility Guidelines (WCAG) basics:
- Semantic HTML tags (`nav`, `main`, `section`, `article`).
- ARIA labels for interactive elements.
- Proper heading hierarchy.
- Color contrast optimized for dark mode.

## License

MIT
