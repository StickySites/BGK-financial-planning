# Media assets

Site images live in this folder and are referenced from `lib/content/local/media.ts`.

## Folder guide

- `logo/` - brand logo files (SVG/PNG)
- `home/` - homepage visuals (hero, etc.)
- `services/` - service hero images, e.g. `investment-guidance-hero.jpg`
- `about/` - about page imagery
- `resources/` - resources page imagery
- `contact/` - contact page imagery

## Updating images

1. Add or replace files here (keep names lowercase with hyphens).
2. Update paths in `lib/content/local/media.ts` if filenames or locations change.
3. Service hero URLs are wired in `lib/content/local/services.ts` via `localMedia`.

## Notes

- Files in `public/media/` are served at `/media/...` in the site.
- For copy and structured content, edit the TypeScript files under `lib/content/local/`.
