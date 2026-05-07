import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { useCart } from '../context/CartContext';

export default function Layout() {
  const { cartCount } = useCart();
  const location = useLocation();

  return (
    <div className="layout">
      <Header cartCount={cartCount} />
      <main className="main-content">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
