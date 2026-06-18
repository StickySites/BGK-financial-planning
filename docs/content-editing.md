# Content editing

Site content is stored in TypeScript files under `lib/content/local/`. There is no CMS; edit these files directly and redeploy.

## Copy and structured content

| File | What it controls |
|------|------------------|
| `settings.ts` | Site title, contact details, global SEO |
| `pages.ts` | Home, about, contact, services index, resources: section headings, intros, CTAs |
| `services.ts` | Individual service pages (headings, bullet lists, FAQs, summaries) |
| `resources.ts` | Resource listing items |
| `testimonials.ts` | Homepage testimonial quotes |

Shared helpers for parsing section text live in `lib/content/helpers.ts`. Types are in `lib/content/types.ts`.

Pages load content via async functions in `lib/content.ts` (e.g. `getPageContent`, `getServices`).

## Images

1. Place files in `public/media/` (see `public/media/README.md` for folder layout).
2. Register paths in `lib/content/local/media.ts`.
3. Reference `localMedia` from `pages.ts` or `services.ts` where images are used.

Images are served from `/media/...`; no remote CDN configuration is needed.

## Hardcoded page sections

Some layout and marketing copy is still defined directly in `app/(site)/*.tsx` rather than in the local content files. When updating the site, check both the local content modules and the page components if a change does not appear where you expect.

Policy pages (`privacy-policy`, `cookie-policy`, etc.) are fully hardcoded in their respective route files.

## Workflow

1. Edit `lib/content/local/*.ts` and/or add images under `public/media/`.
2. Run `npm run typecheck` and `npm run build` locally.
3. Commit and deploy (e.g. push to Vercel-connected branch).
