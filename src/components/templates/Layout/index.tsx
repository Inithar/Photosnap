import { Outlet } from 'react-router-dom';
import Footer from '../../organisms/Footer';
import Navigation from '../../organisms/Navigation';

const navigationHeight = '7.2rem';

const Layout = () => (
  <div style={{ marginTop: navigationHeight }}>
    <Navigation />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
