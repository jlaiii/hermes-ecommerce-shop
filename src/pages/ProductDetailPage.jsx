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
  const [engraveFont, setEngraveFont] = useState('ui-serif, Georgia, Cambria, "Times New Roman", serif');
  const [engraveColor, setEngraveColor] = useState('#ffffff');
  const [engraveRotate, setEngraveRotate] = useState(0);
  const [engravePosX, setEngravePosX] = useState(50);
  const [engravePosY, setEngravePosY] = useState(85);
  const [engraveSize, setEngraveSize] = useState(18);
  const colorPresets = ['#ffffff', '#000000', '#fbbf24', '#94a3b8', '#ef4444', '#3b82f6', '#22c55e'];

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
    addToCart(product, engraving, engraveFont, engraveColor, engraveRotate, engravePosX, engravePosY, engraveSize);
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
                <span
                  className="engrave-text"
                  style={{
                    fontFamily: engraveFont,
                    color: engraveColor,
                    fontSize: `${engraveSize}px`,
                    transform: `translate(-50%, -50%) rotate(${engraveRotate}deg)`,
                    left: `${engravePosX}%`,
                    top: `${engravePosY}%`,
                  }}
                >
                  {engraving}
                </span>
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
                <div className="engrave-controls">
                  <div className="engrave-field">
                    <label htmlFor="engrave-font">Font</label>
                    <select
                      id="engrave-font"
                      value={engraveFont}
                      onChange={(e) => setEngraveFont(e.target.value)}
                    >
                      <option value="ui-serif, Georgia, Cambria, 'Times New Roman', serif">Serif</option>
                      <option value="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">Sans</option>
                      <option value="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace">Mono</option>
                      <option value="'Courier New', Courier, monospace">Typewriter</option>
                    </select>
                  </div>
                  <div className="engrave-field engrave-field-wide">
                    <label>Color</label>
                    <div className="color-presets">
                      {colorPresets.map((c) => (
                        <button
                          key={c}
                          className={`color-swatch ${engraveColor === c ? 'active' : ''}`}
                          style={{ background: c }}
                          onClick={() => setEngraveColor(c)}
                          aria-label={`Set engraving color ${c}`}
                          title={c}
                        />
                      ))}
                      <input
                        id="engrave-color"
                        type="color"
                        value={engraveColor}
                        onChange={(e) => setEngraveColor(e.target.value)}
                        aria-label="Custom engraving color picker"
                        title="Custom color"
                      />
                    </div>
                  </div>
                  <div className="engrave-field">
                    <label htmlFor="engrave-rotate">Rotate</label>
                    <input
                      id="engrave-rotate"
                      type="range"
                      min={-45}
                      max={45}
                      value={engraveRotate}
                      onChange={(e) => setEngraveRotate(Number(e.target.value))}
                    />
                    <span className="engrave-value">{engraveRotate}°</span>
                  </div>
                  <div className="engrave-field">
                    <label htmlFor="engrave-x">X Position</label>
                    <input
                      id="engrave-x"
                      type="range"
                      min={10}
                      max={90}
                      value={engravePosX}
                      onChange={(e) => setEngravePosX(Number(e.target.value))}
                    />
                    <span className="engrave-value">{engravePosX}%</span>
                  </div>
                  <div className="engrave-field">
                    <label htmlFor="engrave-y">Y Position</label>
                    <input
                      id="engrave-y"
                      type="range"
                      min={10}
                      max={90}
                      value={engravePosY}
                      onChange={(e) => setEngravePosY(Number(e.target.value))}
                    />
                    <span className="engrave-value">{engravePosY}%</span>
                  </div>
                  <div className="engrave-field">
                    <label htmlFor="engrave-size">Size</label>
                    <input
                      id="engrave-size"
                      type="range"
                      min={10}
                      max={48}
                      value={engraveSize}
                      onChange={(e) => setEngraveSize(Number(e.target.value))}
                    />
                    <span className="engrave-value">{engraveSize}px</span>
                  </div>
                </div>
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
