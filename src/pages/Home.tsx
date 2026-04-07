import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Traditional Taste,<br />Modern Purity</h1>
            <p>Experience the authentic taste of Amman Sweets. Crafted with generations of expertise, pure ghee, and unconditional love.</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                Order Now <ArrowRight size={20} />
              </Link>
              <Link to="/specials" className="btn btn-outline">
                View Specials
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/images/hero.png" alt="Delicious Sweets Assortment" className="hero-image-main" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section highlights">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card card text-center">
              <div className="feature-icon">🌿</div>
              <h3>100% Pure Ingredients</h3>
              <p>We use only the finest quality pure ghee, milk, and nuts for our products.</p>
            </div>
            <div className="feature-card card text-center">
              <div className="feature-icon">✨</div>
              <h3>Traditional Recipes</h3>
              <p>Our recipes have been passed down through generations, preserving the authentic taste.</p>
            </div>
            <div className="feature-card card text-center">
              <div className="feature-icon">🎁</div>
              <h3>Festive Specials</h3>
              <p>Specially curated boxes for every festival to bring joy to your family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="section bg-light">
        <div className="container">
          <div className="flex justify-between items-center mb-4">
            <h2 className="section-title" style={{marginBottom: 0}}>Popular Now</h2>
            <Link to="/products" className="btn btn-secondary">View All Items</Link>
          </div>
          <div className="products-grid mt-4">
            <div className="product-card card">
              <img src="/images/kaju_katli.png" alt="Kaju Katli" className="product-img" />
              <div className="product-info">
                <h3>Kaju Katli</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="price">₹900 <small>/ kg</small></span>
                  <button className="btn btn-primary" style={{padding: '0.5rem 1rem'}}>Add</button>
                </div>
              </div>
            </div>
            <div className="product-card card">
              <img src="/images/laddoo.png" alt="Motichoor Laddoo" className="product-img" />
              <div className="product-info">
                <h3>Motichoor Laddoo</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="price">₹450 <small>/ kg</small></span>
                  <button className="btn btn-primary" style={{padding: '0.5rem 1rem'}}>Add</button>
                </div>
              </div>
            </div>
            <div className="product-card card">
              <img src="/images/mixture.png" alt="Spicy Mixture" className="product-img" />
              <div className="product-info">
                <h3>Spicy Mixture</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="price">₹300 <small>/ kg</small></span>
                  <button className="btn btn-primary" style={{padding: '0.5rem 1rem'}}>Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
