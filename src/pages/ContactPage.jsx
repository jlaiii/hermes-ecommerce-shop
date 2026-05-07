import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend — show confirmation UI
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact RGV ENGRAVELABS',
    url: 'https://jlaiii.github.io/hermes-ecommerce-shop/contact',
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — RGV ENGRAVELABS</title>
        <meta
          name="description"
          content="Get in touch with RGV ENGRAVELABS for custom engraving, knives, and leather goods."
        />
        <link rel="canonical" href="https://jlaiii.github.io/hermes-ecommerce-shop/contact" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article className="page-container contact-page">
        <header className="contact-hero">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p className="contact-subtitle">
              Questions about custom engraving, a product, or an order? We would love to hear from you.
            </p>
          </div>
        </header>

        <section className="contact-section" aria-labelledby="contact-form-heading">
          <div className="contact-layout">
            <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-heading">
              <h2 id="contact-form-heading">Send a Message</h2>

              <label htmlFor="contact-name">
                Name
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </label>

              <label htmlFor="contact-email">
                Email
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </label>

              <label htmlFor="contact-subject">
                Subject
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </label>

              <label htmlFor="contact-message">
                Message
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more..."
                />
              </label>

              {sent ? (
                <div className="contact-success" role="status">
                  <CheckCircle size={20} />
                  <span>Message sent — we will get back to you soon!</span>
                </div>
              ) : (
                <button type="submit" className="btn btn-primary btn-large">
                  <Send size={18} />
                  Send Message
                </button>
              )}
            </form>

            <aside className="contact-info" aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading">Contact Info</h2>
              <div className="contact-info-card">
                <Mail size={22} className="feature-icon" />
                <div>
                  <h3>Email</h3>
                  <p>hello@rgvengravelabs.com</p>
                </div>
              </div>
              <div className="contact-info-card">
                <MapPin size={22} className="feature-icon" />
                <div>
                  <h3>Location</h3>
                  <p>Rio Grande Valley, Texas</p>
                </div>
              </div>
              <div className="contact-info-card">
                <Clock size={22} className="feature-icon" />
                <div>
                  <h3>Hours</h3>
                  <p>Mon–Fri: 9AM – 6PM CST</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </>
  );
}
