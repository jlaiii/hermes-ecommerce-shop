import { useParams, useNavigate, Link } from 'react-router-dom';
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
      <div className="page-container">
        <p>Product not found.</p>
        <Link to="/products" className="btn btn-primary">Browse products</Link>
      </div>
    );
  }

  const handleAdd = () => {
    if (adding) return;
    setAdding(true);
    addToCart(product, engraving);
    showToast(`Added ${product.name} to cart`);
    setTimeout(() => setAdding(false), 1200);
  };

  return (
    <div className="page-container">
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
            <div className="engrave-section">
              <label htmlFor="engrave-input">
                <Type size={16} /> Custom Engraving
              </label>
              <input
                id="engrave-input"
                type="text"
                maxLength={30}
                placeholder="Enter up to 30 characters..."
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
              />
              <p className="helper-text">
                Preview shown on product image.{engraving && ` ${engraving.length}/30`}
              </p>
            </div>
          )}

          <button
            className={`btn btn-primary btn-large ${adding ? 'adding' : ''}`}
            onClick={handleAdd}
          >
            {adding ? <><Check size={18} /> Added!</> : <><ShoppingCart size={18} /> Add to Cart</>}
          </button>
        </div>
      </div>
    </div>
  );
}
