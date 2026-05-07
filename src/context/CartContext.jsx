import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, engraving = '', engraveFont = '', engraveColor = '', engraveRotate = 0, engravePosX = 50, engravePosY = 85) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.engraving === engraving
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.engraving === engraving
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1, engraving, engraveFont, engraveColor, engraveRotate, engravePosX, engravePosY }];
    });
  };

  const removeFromCart = (id, engraving = '') => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.engraving === engraving))
    );
  };

  const updateQty = (id, engraving, qty) => {
    if (qty <= 0) {
      removeFromCart(id, engraving);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.engraving === engraving ? { ...item, qty } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
