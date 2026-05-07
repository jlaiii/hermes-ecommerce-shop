import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Filter, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../context/ToastContext';
import products from '../data/products.json';

export default function ProductListingPage({ addToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const { showToast } = useToast();

  const filtered =
    category === 'all'
      ? products.filter((p) => !p.isService)
      : products.filter((p) => p.category === category);

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'knives', label: 'Knives' },
    { key: 'wallets', label: 'Wallets' },
    { key: 'engraving', label: 'Engraving' },
  ];

  const handleQuickAdd = (product) => {
    addToCart(product);
    showToast(`Added ${product.name} to cart`);
  };

  return (
    <div className="product-listing-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <div className="filter-bar">
          <Filter size={18} />
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={category === cat.key ? 'active' : ''}
                onClick={() =>
                  setSearchParams(cat.key === 'all' ? {} : { category: cat.key })
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">No products found.</div>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickAdd={handleQuickAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, onQuickAdd }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onQuickAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="card-image-link">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="badge">{product.badge}</span>}
      </Link>
      <div className="card-body">
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="card-desc">{product.shortDesc}</p>
        <div className="card-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <button
            className={`btn btn-icon ${added ? 'added' : ''}`}
            onClick={handleClick}
            aria-label={added ? 'Added to cart' : 'Quick add to cart'}
            title={added ? 'Added!' : 'Quick add to cart'}
          >
            {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
