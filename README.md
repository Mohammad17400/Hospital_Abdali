# Abdali — Hospital & Healthcare

A modern hospital website built with **React**, **Tailwind CSS**, **Framer Motion** and **Lucide icons**.
Multi-page app with smooth page transitions, scroll-reveal animations, hover effects,
department detail modals, an animated FAQ accordion, pricing tables and a contact page.

## Pages
Home · About · Services · Departments · Doctors · Pricing · FAQ · Contact · Privacy Policy · Terms & Conditions · 404

## Run it in VS Code

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure
- `src/components` — Navbar, Footer, shared UI (buttons, page header, reveal animations, counters)
- `src/pages` — one file per route
- `src/data/content.js` — all site content (departments, doctors, pricing, FAQs...)
- `public/images` — site imagery
