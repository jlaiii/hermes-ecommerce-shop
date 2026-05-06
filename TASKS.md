# RGV ENGRAVELABS — Task Board

## Mission
Build a public, mobile-first e-commerce frontend hosted on GitHub Pages for **RGV ENGRAVELABS** (knives, wallets, custom engraving preview).

## Quick Links
- **Repo**: https://github.com/jlaiii/hermes-ecommerce-shop
- **Live Site**: https://jlaiii.github.io/hermes-ecommerce-shop/
- **Branch**: `main` (source), `gh-pages` (deployed `dist/`)

## Active Task
- [ ] **URGENT:** Verify this repo is **public** (Settings → Danger Zone → Change visibility → Public).
- [ ] **URGENT:** Verify GitHub Pages is **enabled** (Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` /(root) or `main`).
- [ ] **URGENT:** Ensure Pages site is accessible at `https://jlaiii.github.io/hermes-ecommerce-shop/` — curl it with cache-buster and check for 200.
- [ ] **URGENT:** Make sure the live site link is in the README.md and repo About section.
- [ ] **URGENT:** Verify every route loads with no 404s and no console errors (homepage, /products, /product/:id, /cart, /about).
- [ ] Run a full **mobile QA** pass on every page. Do NOT try to do all pages in one cycle. Break into sub-tasks and do one per cycle:
  - Sub-task 1: Homepage + navigation (hamburger menu, hero, footer, links)
  - Sub-task 2: Product listing page (grid, cards, filtering, search)
  - Sub-task 3: Product detail page (image, info, add to cart, engraving preview)
  - Sub-task 4: Cart slide-out / modal (items, quantity, remove, total, empty state)
  - Sub-task 5: About page + 404 page + any auxiliary pages
  - Rule: verify on 320px+, no horizontal scroll, tap targets ≥ 44×44px.
- [ ] Run a full **user-friendliness** pass. Break into sub-tasks:
  - Sub-task 1: CTAs and buttons (clear labels, visible states, no dead clicks)
  - Sub-task 2: Typography and readability (font sizes, line height, contrast)
  - Sub-task 3: Navigation and flow (can a user find products, cart, about in ≤2 taps?)
  - Sub-task 4: Feedback states (loading, empty cart, error states, success confirmations)
  - Sub-task 5: Onboarding / first visit (does a new user know what the site sells in 3 seconds?)
- [ ] **SEO / discoverability:** Ensure search engines can see the knives and wallets. Add proper `<title>`/`<meta description>` on every page, JSON-LD Product schema, semantic HTML (`<main>`, `<article>`, `<header>`, etc.), alt text on images, and a `robots.txt` that allows indexing.
- [ ] **Page-load smoke test:** Hard-refresh the live site, check Network tab for 404s, verify `<noscript>` fallback, verify favicon loads.

## Backlog
- [ ] Replace placeholder product images with real knife/wallet product photos or high-quality Unsplash equivalents.
- [ ] Add a Contact / Reach-Out page (simple form UI, no backend).
- [ ] Implement a lightweight dark-mode toggle with `prefers-color-scheme` support.
- [ ] Add subtle page-load / route-transition animations.
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
- [ ] **Final bug hunt** — do NOT do all at once. Break into sub-tasks:
  - Sub-task 1: Cart edge cases (empty cart, remove item, quantity 0, localStorage clear)
  - Sub-task 2: Product pages (missing image fallback, broken product ID, slow image load)
  - Sub-task 3: Navigation & routing (all links, back button, direct URL entry on GitHub Pages)
  - Sub-task 4: Engraving UI edge cases (empty text, special characters, max length, mobile touch)
  - Sub-task 5: Global UI (scrollbar, focus states, modal trap, keyboard nav, print view)
- [ ] **Site audit (Lighthouse)** — break into sub-tasks:
  - Sub-task 1: Performance audit (image sizes, bundle size, lazy loading, caching)
  - Sub-task 2: Accessibility audit (alt text, ARIA labels, color contrast, keyboard nav)
  - Sub-task 3: Best-practices audit (HTTPS, external links, missing meta tags, console errors)
  - Sub-task 4: SEO audit (sitemap, robots.txt, structured data, canonical URLs)

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

## Rules for the Agent
- Read this file first. Pick the top unchecked item under **Active Task**.
- **Sub-task rule:** If a task has sub-bullets (indented list items), treat each sub-bullet as its own mini-task. Move the parent into Backlog, move the first sub-bullet into Active Task, work on it, then move it to Done and bring in the next sub-bullet. Do NOT attempt all sub-bullets in one cycle.
- If nothing is active, move the top **Backlog** item into **Active Task** and start it.
- **Task decomposition rule:** If a single task is too big to finish in one 30-minute increment, the agent MUST break it into smaller sub-tasks BEFORE starting work. Add sub-bullets to the parent task in Backlog, move the first sub-task into Active Task, and work on that. Do NOT try to do everything at once.
- After completing a task (or sub-task), move it to **Done**, commit, push, verify the live site, then pick the next one.
- Every cycle must include: build → commit + push → wait for Pages deploy → verify live URL → report status here → update this TASKS.md → commit the TASKS.md update.
- If stuck, simplify the task instead of halting. No backend, no real payments, mock data only.
- Mobile-first: test at 320px, 375px, 768px, and 1024px. No horizontal scroll. Tap targets ≥ 44×44px.
- **Idle behavior**: If Active Task and Backlog are BOTH empty, do NOT just stop. Autonomously scan the live site for missing features, broken UX, or gaps compared to a real e-commerce store. Generate new Backlog items and work on them.
- **Final README update**: Only update the README with full project info when every other Backlog item is Done.

## Notes
- `npm run deploy` builds `dist/` and pushes it to the `gh-pages` branch.
- The Pages source is `gh-pages` branch, root folder.
- `public/CNAME` file should NOT exist unless we move to a custom domain later.
