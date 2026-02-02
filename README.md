# Fanyi Pu - Personal Page

A personal academic homepage built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript
- Vite 7
- ESLint

## Prerequisites

- Node.js (v18 or higher recommended)
- pnpm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/pufanyi/personal-page.git
cd personal-page
```

2. Install dependencies:

```bash
pnpm install
```

## Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`.

## Build

Build for production:

```bash
pnpm build
```

The output will be in the `dist` directory.

### Production Optimizations

The build includes aggressive compression:

- **Terser** minification with `drop_console`, multi-pass compression
- **Brotli** (level 11) - generates `.br` files, ~14% smaller than Gzip
- **Gzip** (level 9) - generates `.gz` files as fallback
- **LightningCSS** for CSS minification

## Deployment

### Cloudflare Pages (Recommended)

Cloudflare automatically serves `.br` files when available.

### Nginx

Add to your config to serve pre-compressed files:

```nginx
brotli_static on;
gzip_static on;
```

### Vercel / Netlify

These platforms handle compression automatically.

## Preview

Preview the production build locally:

```bash
pnpm preview
```

## Linting

Run ESLint to check code quality:

```bash
pnpm lint
```

## Project Structure

```
src/
├── App.tsx              # Main application component
├── App.css              # Styles
├── main.tsx             # Entry point
├── index.css            # Global styles
└── components/
    ├── index.ts         # Component exports
    ├── Section.tsx      # Reusable section wrapper
    ├── Entry.tsx        # Reusable entry component
    ├── Header.tsx       # Title, photo, and contact info
    ├── Abstract.tsx     # Personal introduction
    ├── Education.tsx    # Education background
    ├── Publications.tsx # Publications and research
    ├── Experience.tsx   # Work experience
    ├── Competitions.tsx # Competition achievements
    ├── Teaching.tsx     # Teaching activities
    ├── Miscellaneous.tsx# Hobbies and other info
    └── Footer.tsx       # Footer with last updated date
```

## License

MIT
