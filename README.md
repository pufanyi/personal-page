# Fanyi Pu - Personal Page

A personal academic homepage built with Angular 21 and TypeScript.

## Tech Stack

- Angular 21
- TypeScript 5.9
- Angular CLI (esbuild)

## Features

- **Paper-style layout** with subtle shadows on both light and dark themes
- **Dark mode** with localStorage persistence and system preference detection
- **Table of Contents** sidebar with scroll spy (responsive mobile drawer)
- **PDF export** via browser print with optimized print styles

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
pnpm start
```

The site will be available at `http://localhost:4200`.

## Build

Build for production:

```bash
pnpm build
```

The output will be in the `dist/personal-page/` directory.

## Deployment

### Cloudflare Pages (Recommended)

#### Connect GitHub Repository

1. Push your code to GitHub

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create** > **Pages** > **Connect to Git**

3. Select your repository and configure:

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Build command | `pnpm install && pnpm build` |
| Build output directory | `dist/personal-page/browser` |

4. Click **Save and Deploy**

#### Direct Upload

1. Build locally: `pnpm build`
2. Go to **Workers & Pages** > **Create** > **Pages** > **Upload assets**
3. Upload the `dist/personal-page/browser` folder

#### Custom Domain Setup

1. Ensure your domain uses Cloudflare DNS
2. In your Pages project, go to **Custom domains** > **Set up a custom domain**
3. Configure DNS records:

```
Type: CNAME
Name: @
Target: <project-name>.pages.dev
Proxy: ON
```

### Vercel / Netlify

These platforms handle compression and deployment automatically. Set the output directory to `dist/personal-page/browser`.

## Project Structure

```
src/
├── index.html                        # Entry HTML with meta tags and FOUC prevention
├── main.ts                           # Bootstrap
├── styles.css                        # Global styles and CSS variables
└── app/
    ├── app.ts / app.html / app.css   # Root component
    ├── app.config.ts                 # Application config
    ├── components/
    │   ├── icon/                     # Embedded Phosphor SVG icons
    │   ├── section/                  # Reusable section wrapper
    │   ├── entry/                    # Reusable entry with content projection
    │   ├── header/                   # Title, photo, and contact info
    │   ├── abstract/                 # Personal introduction
    │   ├── education/                # Education background
    │   ├── publications/             # Publications and research
    │   ├── experience/               # Work experience
    │   ├── competitions/             # Competition achievements
    │   ├── teaching/                 # Teaching activities
    │   ├── miscellaneous/            # Hobbies and other info
    │   ├── footer/                   # Footer with last updated date
    │   ├── theme-toggle/             # Dark/light mode toggle
    │   ├── table-of-contents/        # ToC sidebar with scroll spy
    │   └── print-button/             # PDF export button
    ├── services/
    │   ├── theme.service.ts          # Theme state management with signals
    │   └── scroll-spy.service.ts     # IntersectionObserver-based scroll spy
    └── constants/
        └── sections.ts              # ToC section definitions
public/
├── me.webp
└── assets/pdf/awards/
```

## License

MIT
