import { Outlet } from 'react-router-dom';
import Footer from '../../organisms/Footer';
import Navigation from '../../organisms/Navigation';

const Layout = () => (
  <>
    <Navigation />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
