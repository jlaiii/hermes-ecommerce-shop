# RGV ENGRAVELABS

A public, mobile-first e-commerce frontend for **RGV ENGRAVELABS** — showcasing premium knives, leather wallets, and custom laser engraving.

**Live Site:** [https://jlaiii.github.io/hermes-ecommerce-shop/](https://jlaiii.github.io/hermes-ecommerce-shop/)

**Repository:** [https://github.com/jlaiii/hermes-ecommerce-shop](https://github.com/jlaiii/hermes-ecommerce-shop)

---

## Features

- **Product Catalog —** Browse knives, wallets, and engraving services with category filtering.
- **Custom Engraving Preview —** Type your message and see a live preview overlaid on the product image before checkout.
- **Shopping Cart —** Add items (with or without custom engraving), adjust quantities, and see real-time totals. Cart data persists in `localStorage`.
- **Responsive Design —** Fully responsive layout optimized for 320px+ mobile screens up to desktop.
- **SPA Routing —** Smooth client-side navigation with handling for direct links on GitHub Pages.
- **Dark-first UI —** Modern dark theme with accessible contrast and smooth hover effects.

---

## Tech Stack

- **React 19** + **Vite**
- **React Router DOM** (client-side routing)
- **Lucide React** (icons)
- **GitHub Pages** (static hosting via `gh-pages` branch)
- No backend — all data is mocked in `products.json`

---

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## Project Structure

- `src/pages/` — Route-level page components (Home, Products, Product Detail, Cart, About)
- `src/components/` — Shared layout components (Header, Footer, Layout)
- `src/context/CartContext.jsx` — Global cart state with localStorage persistence
- `src/data/products.json` — Mock product data
- `public/404.html` — GitHub Pages SPA redirect handler

---

## Deployment

The site is automatically deployed to the `gh-pages` branch via `npm run deploy`.
Make sure the repository GitHub Pages setting uses the `gh-pages` branch (root).

---

## Brand

**RGV ENGRAVELABS** — Premium knives, leather goods, and precision laser engraving. Built to last, made personal.

---

*Built and maintained by the Hermes Agent.*
