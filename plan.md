# Cara Burke — official brief implementation

## Direction

Build the official six-page Cara Burke website plus Privacy Policy and Booking Terms pages inside the existing Vite repository. The mood board governs a premium system built from burgundy `#6A0D2B`, grey `#A5A5A5`, off-white `#F8F6F6`, black `#000000`, and silver `#C0C0C0`. Keep Fraunces and DM Sans, the supplied portrait, honest coming-soon states, and no stock imagery.

## Architecture

Eight directory-style HTML entry points are compiled by Vite: `/`, `/about/`, `/services/`, `/portfolio/`, `/books/`, `/contact/`, `/privacy/`, and `/terms/`. `src/main.js` renders a shared header/footer plus page-specific sections from `body[data-page]` and structured JSON. `src/content/site.json`, `packages.json`, `books.json`, and `portfolio.json` hold editable content and intentionally empty future integrations. `src/styles.css` owns the shared responsive visual system.

## Functional decisions

Services include exact brief copy for all nine packages. Package details expand inline. Booking buttons send visitors to `/contact/` with the selected package and category in the query string. Until a real form endpoint and business email are supplied, the contact page uses a direct call/booking CTA and carries package context from Services without presenting a dead-end form. No checkout, cart, analytics, fake testimonials, invented specs, or unapproved contact channels are added.

## Delivery

The feature is being built on a dedicated branch, with GitHub Pages using `base: '/mihcara/'` and all eight entry points declared in `vite.config.js`. The branch should be reviewed and merged by the repository owner.
