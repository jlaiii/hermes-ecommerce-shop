# RGV ENGRAVELABS — Task Board

## Mission
Build a public, mobile-first e-commerce frontend hosted on GitHub Pages for **RGV ENGRAVELABS** (knives, wallets, custom engraving preview).

## Quick Links
- **Repo**: https://github.com/jlaiii/hermes-ecommerce-shop
- **Live Site**: https://jlaiii.github.io/hermes-ecommerce-shop/
- **Branch**: `main` (source), `gh-pages` (deployed `dist/`)

## Active Task
- [ ] Run a full mobile QA pass on every page (cart, engraving preview, nav, product grid). Fix any layout bugs, horizontal scroll, tiny tap targets, or broken links. Verify on 320px+ width.

## Backlog
- [ ] Replace placeholder product images with real knife/wallet product photos or high-quality Unsplash equivalents.
- [ ] Add a Contact / Reach-Out page (simple form UI, no backend).
- [ ] Implement a lightweight dark-mode toggle with `prefers-color-scheme` support.
- [ ] Add subtle page-load / route-transition animations.
- [ ] Improve engraving preview: font selector, color selector, rotate/position controls.
- [ ] Add search + category filters to the product listing page.
- [ ] Add an order-summary view in the cart slide-out.
- [ ] Social meta tags (OG/Twitter) for link previews.

## Done
- [x] Project scaffold (Vite + React + gh-pages deploy script)
- [x] Basic layout, header, footer, homepage hero with RGV ENGRAVELABS branding
- [x] Product listing + product detail pages with mock data (`products.json`)
- [x] Custom engraving UI with live preview overlay
- [x] Shopping cart with localStorage persistence
- [x] About page
- [x] Responsive hamburger navigation
- [x] GitHub Pages public deployment (live URL in README)

## Rules for the Agent
- Read this file first. Pick the top unchecked item under **Active Task**.
- If nothing is active, move the top **Backlog** item into **Active Task** and start it.
- After completing a task, move it to **Done**, commit, push, verify the live site, then pick the next one.
- Every cycle must include: build → commit + push → wait for Pages deploy → verify live URL → report status here → update this TASKS.md → commit the TASKS.md update.
- If stuck, simplify the task instead of halting. No backend, no real payments, mock data only.
- Mobile-first: test at 320px, 375px, 768px, and 1024px. No horizontal scroll. Tap targets ≥ 44×44px.

## Notes
- `npm run deploy` builds `dist/` and pushes it to the `gh-pages` branch.
- The Pages source is `gh-pages` branch, root folder.
- `public/CNAME` file should NOT exist unless we move to a custom domain later.
