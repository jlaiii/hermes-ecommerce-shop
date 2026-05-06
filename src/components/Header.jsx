import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, PocketKnife } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Knives', path: '/products?category=knives' },
    { name: 'Wallets', path: '/products?category=wallets' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="Home">
          <PocketKnife size={24} />
          <span>Edge & Grain</span>
        </Link>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/cart" className="cart-btn" aria-label="Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
