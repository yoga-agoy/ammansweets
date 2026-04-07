import { Link } from 'react-router-dom';
import { ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Amman<span>Sweets</span>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/specials" className="nav-special">Specials</Link>
          </li>
        </ul>
        <div className="navbar-actions">
          <Link to="/admin" className="icon-btn" title="Admin Login">
            <User size={24} />
          </Link>
          <Link to="/checkout" className="icon-btn cart-btn" title="Cart">
            <ShoppingBag size={24} />
            <span className="cart-badge">2</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
