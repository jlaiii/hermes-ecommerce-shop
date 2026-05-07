import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { useCart } from '../context/CartContext';

export default function Layout() {
  const { cartCount } = useCart();
  return (
    <div className="layout">
      <Header cartCount={cartCount} />
      <main className="main-content page-transition">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
