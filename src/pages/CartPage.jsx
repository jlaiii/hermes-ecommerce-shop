import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQty, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart — RGV ENGRAVELABS</title>
          <meta name="description" content="Your cart is empty. Shop premium knives, wallets, and custom engraving at RGV ENGRAVELABS." />
        </Helmet>
        <article className="page-container empty-cart">
          <ShoppingBag size={48} />
          <h1>Your cart is empty</h1>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/products" className="btn btn-primary">
            Start Shopping
          </Link>
        </article>
      </>
    );
  }

  const title = `Shopping Cart (${cart.length} item${cart.length === 1 ? '' : 's'}) — RGV ENGRAVELABS`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Review your cart, update quantities, and proceed to checkout at RGV ENGRAVELABS." />
      </Helmet>

      <article className="page-container cart-page">
        <h1>Shopping Cart</h1>

        <div className="cart-layout">
          <section className="cart-items" aria-label="Cart items">
            {cart.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.engraving}`}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <Link to={`/product/${item.id}`}><h2>{item.name}</h2></Link>
                {item.engraving && (
                  <p className="engrave-tag">
                    Engraving: "{item.engraving}"{item.engraveFont && ` (${item.engraveFont.split(',')[0]})`}{item.engraveColor && ` — ${item.engraveColor}`}{item.engraveSize && ` — ${item.engraveSize}px`}
                  </p>
                )}
                  <span className="price">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <div className="cart-item-actions">
                  <div className="qty-controls">
                    <button
                      onClick={() => updateQty(item.id, item.engraving, Math.max(1, item.qty - 1))}
                      aria-label="Decrease quantity"
                      title="Decrease"
                    >
                      <Minus size={14} />
                    </button>
                    <span aria-live="polite">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.engraving, item.qty + 1)}
                      aria-label="Increase quantity"
                      title="Increase"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    className="btn-remove"
                    onClick={() => removeFromCart(item.id, item.engraving)}
                    aria-label={`Remove ${item.name}`}
                    title="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            <button className="btn-text" onClick={clearCart}>Clear Cart</button>
          </section>

          <aside className="cart-summary" aria-label="Order summary">
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
      </article>
    </>
  );
}
