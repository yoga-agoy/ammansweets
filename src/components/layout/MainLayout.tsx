import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import './layout.css';

const MainLayout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
