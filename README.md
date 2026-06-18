# BGK Financial Planning

Marketing site for BGK Financial Planning, built with Next.js.

## Development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` (e.g. `http://localhost:3000` for local dev).

## Deploying to Vercel

The project uses default Next.js settings; no custom `vercel.json` is required.

**Environment variable** (Project → Settings → Environment Variables):

| Variable | Example | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.example.com` | Canonical site URL for metadata, sitemap, and Open Graph |

Set this for Production (and Preview if you want correct URLs on preview deployments).

## Editing content

See [docs/content-editing.md](docs/content-editing.md) for how to update copy and images.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |
