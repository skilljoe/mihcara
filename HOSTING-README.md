# Cara Burke website

This is a Vite + vanilla JavaScript multi-page site for GitHub Pages. It builds eight directory-style pages: Home, About, Services, Portfolio, Books, Contact, Privacy, and Terms.

## Build locally

```bash
npm ci
npm run build
npx vite preview --port 4173
```

The production output is `dist/` and is deployed by the existing GitHub Actions workflow.

## Edit content

Structured content lives in `src/content/`:

- `site.json` — phone, Amazon link, and future business email/Formspree endpoint.
- `packages.json` — the nine production packages, taglines, descriptions, and categories.
- `books.json` — publication names, descriptions, and links.
- `portfolio.json` — gallery categories and the honest coming-soon state.

Add official book covers and production photos only after Cara supplies approved assets. The site intentionally does not invent technical specifications, prices, testimonials, social handles, or a business email.

## Form delivery

The current contact form uses a honeypot and progressive disclosure. Until `formEndpoint` and `businessEmail` are supplied in `src/content/site.json`, submissions show an honest phone-confirmation message rather than claiming delivery or opening a blank mail draft. A hosted form endpoint can be connected later without adding a payment flow.
