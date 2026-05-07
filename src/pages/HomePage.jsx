import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sparkles, Shield, Truck, PenTool } from 'lucide-react';
import products from '../data/products.json';

export default function HomePage() {
  // pick 3 featured products deterministically
  const featured = products.filter((p) => [1, 5, 8].includes(p.id));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RGV ENGRAVELABS',
    url: 'https://jlaiii.github.io/hermes-ecommerce-shop/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://jlaiii.github.io/hermes-ecommerce-shop/products?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="home-page">
      <Helmet>
        <title>RGV ENGRAVELABS — Premium Custom Engraving, Knives &amp; Wallets</title>
        <meta
          name="description"
          content="Premium knives, leather wallets, and custom laser engraving from RGV ENGRAVELABS. Built to last, made personal."
        />
        <link rel="canonical" href="https://jlaiii.github.io/hermes-ecommerce-shop/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Premium Knives, Leather Goods &amp; Custom Engraving</h1>
          <p className="hero-subtitle">
            RGV ENGRAVELABS curates the finest everyday carry essentials and makes them yours with precision laser engraving.
          </p>
          <div className="hero-cta">
            <Link to="/products" className="btn btn-primary">
              Shop Now <ArrowRight size={18} />
            </Link>
            <Link to="/products?category=engraving" className="btn btn-secondary">
              Custom Engraving
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
            alt="Hand-forged Damascus chef knife on a dark cutting board"
            className="hero-img"
          />
        </div>
      </section>

      <section className="features-section" aria-labelledby="features-title">
        <h2 id="features-title" className="sr-only">Why choose us</h2>
        <div className="feature">
          <PenTool size={28} className="feature-icon" />
          <h3>Custom Engraving</h3>
          <p>Live preview your design before checkout. Names, initials, dates — permanently etched.</p>
        </div>
        <div className="feature">
          <Sparkles size={28} className="feature-icon" />
          <h3>Premium Materials</h3>
          <p>VG10 Damascus steel, full-grain leather, and carbon fiber — only the best.</p>
        </div>
        <div className="feature">
          <Shield size={28} className="feature-icon" />
          <h3>Lifetime Warranty</h3>
          <p>Every product is backed by our lifetime craftsmanship guarantee.</p>
        </div>
        <div className="feature">
          <Truck size={28} className="feature-icon" />
          <h3>Free Shipping</h3>
          <p>Complimentary shipping on all orders over $75.</p>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-title">
        <h2 id="featured-title">Featured Products</h2>
        <div className="featured-grid">
          {featured.map((product) => (
            <article key={product.id} className="featured-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} loading="lazy" />
              </Link>
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`} className="btn btn-small">View Details</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
