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
