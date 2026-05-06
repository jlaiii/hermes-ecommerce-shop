import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Truck, PenTool } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
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
            src="https://images.unsplash.com/photo-1590422668638-60c2fd4d4344?w=900&q=80"
            alt="Premium knife collection"
            className="hero-img"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
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

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <img src="https://images.unsplash.com/photo-1590422668638-60c2fd4d4344?w=600&q=80" alt="Chef Knife" />
            <h4>Damascus Chef Knife</h4>
            <p>$129.99</p>
            <Link to="/product/1" className="btn btn-small">View Details</Link>
          </div>
          <div className="featured-card">
            <img src="https://images.unsplash.com/photo-1627123424574-181ce5171c98?w=600&q=80" alt="Leather Wallet" />
            <h4>Minimalist Leather Wallet</h4>
            <p>$49.99</p>
            <Link to="/product/5" className="btn btn-small">View Details</Link>
          </div>
          <div className="featured-card">
            <img src="https://images.unsplash.com/photo-1586075010923-2dd45eeed8bd?w=600&q=80" alt="Custom Engraving" />
            <h4>Custom Engraving Service</h4>
            <p>$14.99</p>
            <Link to="/product/8" className="btn btn-small">View Details</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
