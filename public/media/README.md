# Media Upload Staging

Drop brand and content assets into these folders before final wiring.

## Folder guide

- `logo/`
  - Main brand logo files (SVG/PNG)
  - Suggested: `bgk-logo.svg`, `bgk-logo-dark.png`

- `home/`
  - Homepage visuals
  - Hero placeholder replacement
  - Testimonial avatars (if used later)

- `services/`
  - Service-related images
  - Use clear names for each service, for example:
    - `investment-guidance-hero.jpg`
    - `retirement-planning-hero.jpg`
    - `protection-hero.jpg`
    - `mortgage-advice-hero.jpg`

- `about/`
  - About page supporting imagery

- `resources/`
  - Resource listing thumbnails/featured images (future-ready)

- `seo/`
  - Open Graph images (social sharing)
  - Suggested size: 1200x630

## Sanity mapping (current schemas)

- Service image files -> `Service.heroImage`
- SEO social images -> `seo.ogImage` on:
  - `Site Settings`
  - each `Service`
  - `Resource List Settings`

## Notes

- These files are local staging assets in the codebase.
- They still need to be uploaded into Sanity media fields through Studio.
- Keep file names lowercase with hyphens for consistency.
