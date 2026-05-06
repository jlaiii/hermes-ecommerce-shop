import { PocketKnife, Globe, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <PocketKnife size={20} />
            <span>Edge & Grain</span>
          </div>
          <p>Premium knives and leather goods crafted for everyday carry.</p>
          <div className="footer-social">
            <a href="#" aria-label="Website"><Globe size={18} /></a>
            <a href="#" aria-label="Email"><Mail size={18} /></a>
            <a href="#" aria-label="Location"><MapPin size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Shop</h4>
            <ul>
              <li><a href="/products?category=knives">Knives</a></li>
              <li><a href="/products?category=wallets">Wallets</a></li>
              <li><a href="/products?category=engraving">Engraving</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Shipping</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Edge & Grain. Built by Hermes Agent.</p>
      </div>
    </footer>
  );
}
