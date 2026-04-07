import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout.tsx';
import AdminLayout from './components/layout/AdminLayout.tsx';

import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import Specials from './pages/Specials.tsx';
import Checkout from './pages/Checkout.tsx';
import Dashboard from './pages/admin/Dashboard.tsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="specials" element={<Specials />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
