# Insightful Defense

**Independent defense technology analysis for clearer, mission-focused decisions.**

[Production site](https://insightfuldefense.com/) ·
[Direct deployment](https://insightful-defense.drjester.chatgpt.site/) ·
[Contact](mailto:contact@insightfuldefense.com)

## About the site

Insightful Defense examines how emerging technology moves from technical
promise to operational value. The site is intentionally a focused, single-page
publication front door covering mission integration, testing, acquisition, and
fielding.

The current release includes:

- A responsive editorial landing page with clear positioning and contact paths
- Search, canonical, Open Graph, and social-sharing metadata
- A homepage-only sitemap and crawler rules
- A branded not-found experience
- Permanent retirement responses for the previous article archive
- Rendered-page tests for the public experience and retired URL behavior

## Technology

- [Next.js](https://nextjs.org/) routing and metadata APIs
- [React](https://react.dev/) 19 and TypeScript
- [vinext](https://github.com/cloudflare/vinext) with Vite for the
  Cloudflare-compatible runtime
- OpenAI Sites for source-backed hosting and deployment
- Plain CSS for the visual system and responsive layout

Node.js `22.13.0` or newer is required.

## Project structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Landing-page content and structure |
| `app/globals.css` | Design system, layout, and responsive styling |
| `app/layout.tsx` | Site metadata, canonical URL, and viewport settings |
| `app/robots.ts` | Search-crawler policy |
| `app/sitemap.ts` | Homepage-only sitemap |
| `app/not-found.tsx` | Branded 404 experience |
| `app/_lib/retired-content.ts` | Shared HTTP 410 response for retired articles |
| `app/blog-1/[[...slug]]/route.ts` | Retires the legacy `/blog-1/*` namespace |
| `app/f/[[...slug]]/route.ts` | Retires the legacy `/f/*` namespace |
| `tests/rendered-html.test.mjs` | Production-output behavior tests |
| `.openai/hosting.json` | Connection to the existing Sites project |

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Use the local address printed by the development server.

## Validation commands

```bash
npm run lint
npm run build
npm test
```

`npm test` creates a production build before checking the rendered site. The
test suite verifies that:

1. The finished landing page renders on the server.
2. Every URL under `/blog-1` and `/f` returns `410 Gone`.
3. Only the homepage is exposed to search engines.
4. Other invalid URLs continue to return ordinary `404 Not Found` responses.

## Retired-content policy

The previous GoDaddy article archive has been intentionally removed. Requests
under `/blog-1/*` and `/f/*` return HTTP `410 Gone` with `noindex, noarchive`
instructions.

Do not redirect those URLs to the homepage, restore them to the sitemap, or
reuse those namespaces without revisiting the retirement strategy. A `410`
response tells visitors and search engines that the material was deliberately
withdrawn rather than moved.

## Deployment

This repository is connected to an existing OpenAI Sites project through
`.openai/hosting.json`. Production releases should be built, validated, saved
as a Sites version, and then deployed from the exact source commit.

The current landing page does not require a D1 database or R2 storage bucket.

Do not create a replacement Sites project for routine updates. Domain routing
is managed separately through GoDaddy DNS and the custom-domain configuration
attached to the existing site.

## Content updates

- Edit the public message and sections in `app/page.tsx`.
- Make visual changes in `app/globals.css`.
- Keep metadata in `app/layout.tsx` aligned with the public copy.
- Update the sitemap date when a meaningful public release is deployed.
- Preserve the retired-route behavior unless a deliberate migration plan
  replaces it.

## Contact

Briefing requests, media inquiries, and collaboration ideas can be sent to
[contact@insightfuldefense.com](mailto:contact@insightfuldefense.com).

Do not send classified, controlled, export-controlled, proprietary, or
otherwise sensitive information.

## Ownership

Insightful Defense is an independent publication. This repository does not
currently include an open-source license; all rights are reserved by the site
owner.
