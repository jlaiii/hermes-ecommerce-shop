# RGV ENGRAVELABS — Task Board

## Mission
Build a public, mobile-first e-commerce frontend hosted on GitHub Pages for **RGV ENGRAVELABS** (knives, wallets, custom engraving preview).

## Quick Links
- **Repo**: https://github.com/jlaiii/hermes-ecommerce-shop
- **Live Site**: https://jlaiii.github.io/hermes-ecommerce-shop/
- **Branch**: `main` (source), `gh-pages` (deployed `dist/`)

## Active Task
- [ ] Improve engraving preview: font selector, color selector, rotate/position controls.

## Backlog
- [ ] Improve engraving preview: font selector, color selector, rotate/position controls.
- [ ] Add search + category filters to the product listing page.
- [ ] Add an order-summary view in the cart slide-out.
- [ ] Social meta tags (OG/Twitter) for link previews.
- [ ] Add a scroll-to-top button for long pages.
- [ ] Implement image lazy-loading for faster page loads.
- [ ] Add a "Compare Products" feature.
- [ ] Add FAQ page (shipping, engraving turnaround, care instructions).
- [ ] Add Testimonials/Reviews section.
- [ ] Add a "Recently Viewed" section.
- [ ] Add **404 Not Found** page — show a random cute dog photo (Unsplash dogs), a playful "Paw not found" or "Looks like this page ran away" message, and a link home. Do NOT use a generic boring 404.
- [ ] Add legal pages: Privacy Policy, Terms of Service.
- [ ] Add a Newsletter signup form (UI only, no backend).
- [ ] **README update**: When all phases above are complete, rewrite README.md with full project description, features list, screenshots, tech stack, and brand info for RGV ENGRAVELABS.
- [ ] **Final bug hunt**: Go through every page, every interaction, every edge case (empty cart, missing images, slow network) and fix any remaining bugs.
- [ ] **Site audit**: Lighthouse performance/accessibility/best-practices/SEO scores. Fix anything under 90.

## Done
- [x] Project scaffold (Vite + React + gh-pages deploy script)
- [x] Basic layout, header, footer, homepage hero with RGV ENGRAVELABS branding
- [x] Product listing + product detail pages with mock data (`products.json`)
- [x] Custom engraving UI with live preview overlay
- [x] Shopping cart with localStorage persistence
- [x] About page
- [x] Responsive hamburger navigation
- [x] GitHub Pages public deployment (live URL in README)
- [x] TASKS.md created and pushed
- [x] **Fix SPA routing** — `BrowserRouter` basename set, `404.html` redirect handler, index.html client-side redirect script. All routes now work on GH Pages.
- [x] **README updated** with full project description, live site link, features list, tech stack, and brand info.
- [x] **404.html improved** with brand styling, noscript fallback, and "Looks Like This Page Ran Away" messaging.
- [x] **Deploy script** (`npm run deploy`) added to package.json.
- [x] **Full mobile QA** — header/nav, product listing grid, product detail, cart page, footer. Layout bugs fixed, horizontal scroll eliminated, all tap targets ≥44×44, iOS input zoom prevented, extra-narrow screen padding added.
- [x] **User-friendliness pass** — toast notifications on add-to-cart, quick-add checkmark feedback on cards, scroll-to-top button, focus/hover states, aria-labels on icon buttons, product-not-found CTA, 404 dog image + CTA, consolidated CSS, added scrollbar-gutter, nav active states, reduced motion support.
- [x] **SEO / discoverability** — per-page `<title>`/`<meta description>` via react-helmet-async, JSON-LD Product/WebSite/AboutPage schema, canonical links, OG/Twitter tags, semantic HTML, alt text, noscript fallback, expanded sitemap.xml with product URLs, verified robots.txt allows indexing.

## Rules for the Agent
- Read this file first. Pick the top unchecked item under **Active Task**.
- If nothing is active, move the top **Backlog** item into **Active Task** and start it.
- After completing a task, move it to **Done**, commit, push, verify the live site, then pick the next one.
- Every cycle must include: build → commit + push → wait for Pages deploy → verify live URL → report status here → update this TASKS.md → commit the TASKS.md update.
- If stuck, simplify the task instead of halting. No backend, no real payments, mock data only.
- Mobile-first: test at 320px, 375px, 768px, and 1024px. No horizontal scroll. Tap targets ≥ 44×44px.
- **Idle behavior**: If Active Task and Backlog are BOTH empty, do NOT just stop. Autonomously scan the live site for missing features, broken UX, or gaps compared to a real e-commerce store. Generate new Backlog items and work on them.
- **Final README update**: Only update the README with full project info when every other Backlog item is Done.

## Notes
- `npm run deploy` builds `dist/` and pushes it to the `gh-pages` branch.
- The Pages source is `gh-pages` branch, root folder.
- `public/CNAME` file should NOT exist unless we move to a custom domain later.
