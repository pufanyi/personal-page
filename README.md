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

Cloudflare automatically serves pre-compressed `.br` files and provides global CDN.

#### Method 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) and sign in

3. Navigate to **Workers & Pages** > **Create** > **Pages** > **Connect to Git**

4. Select your GitHub repository and configure:

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Build command | `pnpm install && pnpm build` |
| Build output directory | `dist` |

5. Click **Save and Deploy**

6. Your site will be available at `https://<project-name>.pages.dev`

#### Method 2: Direct Upload (Quick Test)

1. Build locally:

```bash
pnpm build
```

2. Go to **Workers & Pages** > **Create** > **Pages** > **Upload assets**

3. Drag and drop the `dist` folder

#### Custom Domain Setup

**Example: `pufanyi.com` for this site, subdomains for GitHub Pages**

1. Make sure your domain is using Cloudflare DNS (nameservers)

2. In Cloudflare Pages project, go to **Custom domains** > **Set up a custom domain**

3. Enter `pufanyi.com` and follow the prompts

4. Configure DNS records in Cloudflare DNS:

```
# Root domain -> Cloudflare Pages
Type: CNAME
Name: @
Target: <project-name>.pages.dev
Proxy: ON (orange cloud)

# Subdomains -> GitHub Pages (example)
Type: CNAME
Name: blog
Target: pufanyi.github.io
Proxy: ON

# Or use a wildcard for all subdomains
Type: CNAME
Name: *
Target: pufanyi.github.io
Proxy: ON
```

5. For GitHub Pages subdomains, add a `CNAME` file in your GitHub repo:

```
blog.pufanyi.com
```

6. Wait for SSL certificate provisioning (usually < 5 minutes)

#### Environment Variables (Optional)

If needed, add in **Settings** > **Environment variables**:

| Variable | Value |
|----------|-------|
| `NODE_VERSION` | `20` |

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
