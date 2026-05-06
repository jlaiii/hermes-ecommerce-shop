import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQty, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="page-container empty-cart">
        <ShoppingBag size={48} />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={`${item.id}-${item.engraving}`}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <Link to={`/product/${item.id}`}><h3>{item.name}</h3></Link>
                {item.engraving && (
                  <p className="engrave-tag">Engraving: "{item.engraving}"</p>
                )}
                <span className="price">${item.price.toFixed(2)}</span>
              </div>
              <div className="cart-item-actions">
                <div className="qty-controls">
                  <button
                    onClick={() => updateQty(item.id, item.engraving, item.qty - 1)}
                    aria-label="Decrease"
                  >
                    <Minus size={14} />
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.engraving, item.qty + 1)}
                    aria-label="Increase"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id, item.engraving)}
                  aria-label="Remove"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
          <button className="btn-text" onClick={clearCart}>Clear Cart</button>
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{cartTotal >= 75 ? 'Free' : '$5.00'}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${(cartTotal >= 75 ? cartTotal : cartTotal + 5).toFixed(2)}</span>
          </div>
          <button className="btn btn-primary btn-large btn-checkout">
            Proceed to Checkout
          </button>
          <p className="helper-text">Checkout is not yet available. This is a frontend demo.</p>
        </aside>
      </div>
    </div>
  );
}
