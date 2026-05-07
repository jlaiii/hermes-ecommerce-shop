import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

  const pageTitle =
    category === 'all'
      ? 'Shop All Products'
      : `Shop ${categories.find((c) => c.key === category)?.label || 'Products'}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle} — RGV ENGRAVELABS</title>
        <meta
          name="description"
          content="Browse premium knives, leather wallets, and custom laser engraving services from RGV ENGRAVELABS."
        />
        <link
          rel="canonical"
          href={`https://jlaiii.github.io/hermes-ecommerce-shop/products${category !== 'all' ? `?category=${category}` : ''}`}
        />
      </Helmet>

      <div className="product-listing-page">
        <header className="page-header">
          <h1>Our Products</h1>
          <div className="filter-bar">
            <Filter size={18} />
            <nav className="filter-tabs" aria-label="Product category filter">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={category === cat.key ? 'active' : ''}
                  onClick={() =>
                    setSearchParams(cat.key === 'all' ? {} : { category: cat.key })
                  }
                  aria-pressed={category === cat.key}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {filtered.length === 0 ? (
          <div className="empty-state">No products found.</div>
        ) : (
          <section
            className="product-grid"
            aria-label={`${pageTitle} results`}
          >
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickAdd={handleQuickAdd}
              />
            ))}
          </section>
        )}
      </div>
    </>
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
    <article className="product-card">
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
    </article>
  );
}
