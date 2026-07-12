# Insightful Defense

The source for the Insightful Defense landing page, built on the Sites vinext
runtime.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
npm run build
npm test
```

The public site is intentionally a single landing page. Legacy GoDaddy article
namespaces under `/blog-1` and `/f` return HTTP `410 Gone`; they must not be
redirected to the homepage or added back to the sitemap.
