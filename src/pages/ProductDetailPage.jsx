import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, ArrowLeft, Type, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../context/ToastContext';
import products from '../data/products.json';

export default function ProductDetailPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const { showToast } = useToast();

  const [engraving, setEngraving] = useState('');
  const [adding, setAdding] = useState(false);

  if (!product) {
    return (
      <article className="page-container">
        <Helmet>
          <title>Product Not Found — RGV ENGRAVELABS</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1>Product not found.</h1>
        <Link to="/products" className="btn btn-primary">Browse products</Link>
      </article>
    );
  }

  const handleAdd = () => {
    if (adding) return;
    setAdding(true);
    addToCart(product, engraving);
    showToast(`Added ${product.name} to cart`);
    setTimeout(() => setAdding(false), 1200);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    brand: { '@type': 'Brand', name: 'RGV ENGRAVELABS' },
    offers: {
      '@type': 'Offer',
      url: `https://jlaiii.github.io/hermes-ecommerce-shop/product/${product.id}`,
      priceCurrency: 'USD',
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: product.price >= 75 ? '0.00' : '5.00',
          currency: 'USD',
        },
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{product.name} — RGV ENGRAVELABS</title>
        <meta
          name="description"
          content={product.shortDesc || product.description.slice(0, 155)}
        />
        <link
          rel="canonical"
          href={`https://jlaiii.github.io/hermes-ecommerce-shop/product/${product.id}`}
        />
        <meta property="og:title" content={product.name} />
        <meta
          property="og:description"
          content={product.shortDesc || product.description.slice(0, 155)}
        />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.image} />
        <meta
          property="og:url"
          content={`https://jlaiii.github.io/hermes-ecommerce-shop/product/${product.id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta
          name="twitter:description"
          content={product.shortDesc || product.description.slice(0, 155)}
        />
        <meta name="twitter:image" content={product.image} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article className="page-container">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back
        </button>

        <div className="product-detail">
          <div className="detail-image-wrapper">
            <img src={product.image} alt={product.name} />
            {product.engravable && engraving && (
              <div className="engrave-preview-overlay">
                <span className="engrave-text">{engraving}</span>
              </div>
            )}
          </div>

          <div className="detail-info">
            <h1>{product.name}</h1>
            <p className="detail-price">${product.price.toFixed(2)}</p>
            <p className="detail-desc">{product.description}</p>

            {product.engravable && (
              <section className="engrave-section" aria-labelledby="engrave-label">
                <label htmlFor="engrave-input" id="engrave-label">
                  <Type size={16} /> Custom Engraving
                </label>
                <input
                  id="engrave-input"
                  type="text"
                  maxLength={30}
                  placeholder="Enter up to 30 characters..."
                  value={engraving}
                  onChange={(e) => setEngraving(e.target.value)}
                  aria-describedby="engrave-help"
                />
                <p id="engrave-help" className="helper-text">
                  {engraving
                    ? `${engraving.length}/30 characters`
                    : 'Preview shown on product image.'}
                </p>
              </section>
            )}

            <button
              className={`btn btn-primary btn-large ${adding ? 'adding' : ''}`}
              onClick={handleAdd}
              disabled={adding}
              aria-live="polite"
            >
              {adding ? <><Check size={18} /> Added!</> : <><ShoppingCart size={18} /> Add to Cart</>}
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
