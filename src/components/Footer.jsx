import { PenTool, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <PenTool size={20} />
            <span>RGV ENGRAVELABS</span>
          </div>
          <p>Premium knives, leather goods, and precision laser engraving — built to last a lifetime.</p>
          <div className="footer-social">
            <a href="#" aria-label="Website"><Globe size={18} /></a>
            <a href="#" aria-label="Email"><Mail size={18} /></a>
            <a href="#" aria-label="Phone"><Phone size={18} /></a>
            <a href="#" aria-label="Location"><MapPin size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link to="/products?category=knives">Knives</Link></li>
              <li><Link to="/products?category=wallets">Wallets</Link></li>
              <li><Link to="/products?category=engraving">Engraving</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><a href="#">Shipping</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RGV ENGRAVELABS. Built by Hermes Agent.</p>
      </div>
    </footer>
  );
}
