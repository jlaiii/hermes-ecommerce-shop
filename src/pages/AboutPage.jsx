import { PenTool, Target, Award, Truck, Shield, Mail, MapPin, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-container about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About RGV ENGRAVELABS</h1>
          <p className="about-subtitle">
            We believe every tool you carry should feel like yours. Premium knives, hand-crafted leather goods, and precision laser engraving — right here in the RGV.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-section">
        <div className="about-grid">
          <div>
            <h2>Our Story</h2>
            <p>
              RGV ENGRAVELABS started with a simple idea: combine world-class craftsmanship with modern personalization. We curate premium knives and leather goods from trusted makers, then add the finishing touch with our in-house laser engraving.
            </p>
            <p>
              Whether it is a Damascus chef knife for your kitchen, a slim leather wallet for everyday carry, or a custom gift for someone special — everything we sell is built to last and made personal.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1586075010923-2dd45eeed8bd?w=800&q=80"
              alt="Laser engraving process"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-section alt-bg">
        <h2 className="about-section-title">Why Choose Us</h2>
        <div className="features-section about-values">
          <div className="feature">
            <Target size={28} className="feature-icon" />
            <h3>Precision Engraving</h3>
            <p>Our fiber laser system delivers crisp, permanent engravings on steel, leather, and more.</p>
          </div>
          <div className="feature">
            <Award size={28} className="feature-icon" />
            <h3>Premium Materials</h3>
            <p>VG10 Damascus steel, full-grain vegetable-tanned leather, and aerospace-grade carbon fiber.</p>
          </div>
          <div className="feature">
            <Shield size={28} className="feature-icon" />
            <h3>Lifetime Warranty</h3>
            <p>Every product is backed by our lifetime craftsmanship guarantee. We stand behind our goods.</p>
          </div>
          <div className="feature">
            <Truck size={28} className="feature-icon" />
            <h3>Free Shipping</h3>
            <p>Complimentary shipping on all orders over $75. Fast, tracked, and insured.</p>
          </div>
          <div className="feature">
            <Clock size={28} className="feature-icon" />
            <h3>Fast Turnaround</h3>
            <p>Most engraved orders ship within 2–3 business days. No long waits for custom work.</p>
          </div>
          <div className="feature">
            <PenTool size={28} className="feature-icon" />
            <h3>Live Preview</h3>
            <p>See your engraving in real time before you buy. Adjust font, placement, and message instantly.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="about-section">
        <h2 className="about-section-title">Get In Touch</h2>
        <div className="about-contact-grid">
          <div className="contact-card">
            <Mail size={24} className="feature-icon" />
            <h4>Email</h4>
            <p>hello@rgvengravelabs.com</p>
          </div>
          <div className="contact-card">
            <MapPin size={24} className="feature-icon" />
            <h4>Location</h4>
            <p>Rio Grande Valley, Texas</p>
          </div>
          <div className="contact-card">
            <Clock size={24} className="feature-icon" />
            <h4>Hours</h4>
            <p>Mon–Fri: 9AM – 6PM CST</p>
          </div>
        </div>
      </section>
    </div>
  );
}
