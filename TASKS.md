# RGV ENGRAVELABS — Task Board

## Mission
Build a public, mobile-first e-commerce frontend hosted on GitHub Pages for **RGV ENGRAVELABS** (knives, wallets, custom engraving preview).

## Quick Links
- **Repo**: https://github.com/jlaiii/hermes-ecommerce-shop
- **Live Site**: https://jlaiii.github.io/hermes-ecommerce-shop/
- **Branch**: `main` (source), `gh-pages` (deployed `dist/`)

## Active Task
- [ ] Run a full **mobile QA** pass on every page (cart, engraving preview, nav, product grid). Fix any layout bugs, horizontal scroll, tiny tap targets, or broken links. Verify on 320px+ width.
- Sub-task: ✅ Header / nav (mobile menu toggle ≥44×44, nav link tap targets)
- Sub-task: ✅ Product listing grid (prevent overflow, proper grid, tap targets)
- Sub-task: ✅ Product detail (engraving input 16px to prevent iOS zoom)
- Sub-task: ✅ Cart page (item layout, quantity controls, tap targets)
- Sub-task: ✅ Footer (social icons ≥44×44, link tap targets, responsive)
- Sub-task: ✅ Global image overflow fix, all buttons ≥44×44, extra-narrow padding
- Next: Test live site on all routes

## Backlog
- [ ] Run a full **user-friendliness** pass — clear CTAs, readable fonts/colors, intuitive flow, no confusing dead-ends. Fix anything that feels clunky.
- [ ] **SEO / discoverability:** Ensure search engines can see the knives and wallets. Add proper `<title>`/`<meta description>` on every page, JSON-LD Product schema, semantic HTML (`<main>`, `<article>`, `<header>`, etc.), alt text on images, and a `robots.txt` that allows indexing.
- [ ] **Page-load smoke test:** Hard-refresh the live site, check Network tab for 404s, verify `<noscript>` fallback, verify favicon loads.
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
