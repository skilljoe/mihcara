# Cara Burke website

This package contains the source files and assets for Cara Burke’s personal website draft.

## Run locally

1. Install Node.js 18 or newer.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev` to preview locally.
5. Run `npm run build` to create the production files in `dist/`.

## Host it

This is a static Vite site. It can be hosted on Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any standard static web host. The usual configuration is:

- Build command: `npm run build`
- Output directory: `dist`

For a simple upload-only host, run `npm run build` and upload the contents of `dist/`.

## Before launch

Replace the placeholder children’s-book title, cover, description, purchase link, and age range. Confirm the lighting-pack names, inclusions, pricing, service area, and booking workflow. Replace `hello@caraburke.com` in `src/main.js` with Cara’s preferred contact address. The current contact form validates in the browser and opens a pre-addressed email draft; it does not store submissions in a database.
