import { useState } from 'react';
import './products.css';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Premium Kaju Katli', category: 'Sweets', price: 900, originalPrice: 1000, discount: 10, image: import.meta.env.BASE_URL + 'images/kaju_katli.png' },
  { id: 2, name: 'Motichoor Laddoo', category: 'Sweets', price: 450, originalPrice: 500, discount: 10, image: import.meta.env.BASE_URL + 'images/laddoo.png' },
  { id: 3, name: 'Mysore Pak', category: 'Sweets', price: 650, originalPrice: 650, discount: 0, image: import.meta.env.BASE_URL + 'images/kaju_katli.png' },
  { id: 4, name: 'Mixture (Spicy)', category: 'Savory', price: 300, originalPrice: 350, discount: 15, image: import.meta.env.BASE_URL + 'images/mixture.png' },
  { id: 5, name: 'Milk Peda', category: 'Sweets', price: 550, originalPrice: 600, discount: 8, image: import.meta.env.BASE_URL + 'images/laddoo.png' },
  { id: 6, name: 'Butter Murukku', category: 'Savory', price: 280, originalPrice: 280, discount: 0, image: import.meta.env.BASE_URL + 'images/mixture.png' },
];

const Products = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Sweets', 'Savory', 'Bakery'];

  const filteredProducts = filter === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="products-page">
      <div className="container section">
        <h1 className="page-title text-center">Our Delicacies</h1>
        <p className="text-center text-muted mb-4">Discover our wide range of traditional sweets and savory items.</p>
        
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="products-grid mt-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card card">
              <div className="product-img-wrapper">
                {product.discount > 0 && (
                  <span className="discount-badge">{product.discount}% OFF</span>
                )}
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <div className="product-info">
                <span className="category-tag">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="price-container flex justify-between items-center mt-2">
                  <div className="prices">
                    <span className="price">₹{product.price} <small>/ kg</small></span>
                    {product.discount > 0 && (
                      <span className="original-price">₹{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="btn btn-primary btn-sm">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
