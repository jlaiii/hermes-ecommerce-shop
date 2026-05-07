import { Helmet } from 'react-helmet-async';
import { PenTool, Target, Award, Truck, Shield, Mail, MapPin, Clock } from 'lucide-react';

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About RGV ENGRAVELABS',
    url: 'https://jlaiii.github.io/hermes-ecommerce-shop/about',
  };

  return (
    <>
      <Helmet>
        <title>About Us — RGV ENGRAVELABS</title>
        <meta
          name="description"
          content="Learn about RGV ENGRAVELABS: premium knives, leather wallets, and precision laser engraving from the Rio Grande Valley, Texas."
        />
        <link rel="canonical" href="https://jlaiii.github.io/hermes-ecommerce-shop/about" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article className="page-container about-page">
        <header className="about-hero">
          <div className="about-hero-content">
            <h1>About RGV ENGRAVELABS</h1>
            <p className="about-subtitle">
              We believe every tool you carry should feel like yours. Premium knives, hand-crafted leather goods, and precision laser engraving — right here in the RGV.
            </p>
          </div>
        </header>

        <section className="about-section" aria-labelledby="story-heading">
          <div className="about-grid">
            <div>
              <h2 id="story-heading">Our Story</h2>
              <p>
                RGV ENGRAVELABS started with a simple idea: combine world-class craftsmanship with modern personalization. We curate premium knives and leather goods from trusted makers, then add the finishing touch with our in-house laser engraving.
              </p>
              <p>
                Whether it is a Damascus chef knife for your kitchen, a slim leather wallet for everyday carry, or a custom gift for someone special — everything we sell is built to last and made personal.
              </p>
            </div>
            <figure className="about-image-wrapper">
          <img
            src="/hermes-ecommerce-shop/images/workshop.jpg"
            alt="Leather workshop tools and custom engraving workspace"
            loading="lazy"
          />
            </figure>
          </div>
        </section>

        <section className="about-section alt-bg" aria-labelledby="values-heading">
          <h2 id="values-heading" className="about-section-title">Why Choose Us</h2>
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

        <section className="about-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="about-section-title">Get In Touch</h2>
          <div className="about-contact-grid">
            <div className="contact-card">
              <Mail size={24} className="feature-icon" />
              <h3>Email</h3>
              <p>hello@rgvengravelabs.com</p>
            </div>
            <div className="contact-card">
              <MapPin size={24} className="feature-icon" />
              <h3>Location</h3>
              <p>Rio Grande Valley, Texas</p>
            </div>
            <div className="contact-card">
              <Clock size={24} className="feature-icon" />
              <h3>Hours</h3>
              <p>Mon–Fri: 9AM – 6PM CST</p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
