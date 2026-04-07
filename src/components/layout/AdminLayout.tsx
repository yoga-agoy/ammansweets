import { Outlet, Link } from 'react-router-dom';
import { Home, Package, ShoppingCart, Users, LogOut } from 'lucide-react';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#1e293b', color: 'white', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '3rem', cursor: 'pointer' }}>
          <Link to="/" style={{ color: 'white' }}>
            <h2 style={{ color: 'white', fontSize: '1.5rem' }}>Amman<span style={{ color: 'var(--primary)' }}>Admin</span></h2>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Bakery Management</p>
          </Link>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <Link to="/admin" style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', alignItems: 'center' }}>
            <Home size={20} /> Dashboard
          </Link>
          <a href="#" style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px', color: '#cbd5e1', alignItems: 'center' }}>
            <Package size={20} /> Products
          </a>
          <a href="#" style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px', color: '#cbd5e1', alignItems: 'center' }}>
            <ShoppingCart size={20} /> Orders
          </a>
          <a href="#" style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px', color: '#cbd5e1', alignItems: 'center' }}>
            <Users size={20} /> Customers
          </a>
        </nav>

        <Link to="/" style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px', color: '#ef4444', alignItems: 'center', marginTop: 'auto' }}>
          <LogOut size={20} /> Back to Store
        </Link>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ backgroundColor: 'white', padding: '1rem 2rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: '500' }}>Admin User</span>
            <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
          </div>
        </header>
        <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
