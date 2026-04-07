import { Star } from 'lucide-react';

const Specials = () => {
  return (
    <div className="specials-page" style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="page-title" style={{ color: 'var(--primary)' }}>✨ Sweets & Imovies Specials ✨</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Exclusive traditional recipes handcrafted for special occasions. These are our highly celebrated signatures.
          </p>
        </div>

        <div className="specials-container flex gap-4 mt-4" style={{ flexDirection: 'column' }}>
          {/* Main Special */}
          <div className="card flex items-center gap-4 special-banner" style={{ background: 'linear-gradient(135deg, #fef08a 0%, #fde047 100%)', border: '1px solid #eab308' }}>
            <div className="special-img" style={{ flex: 1, height: '100%', borderRadius: 'var(--radius-md)', display: 'flex', overflow: 'hidden' }}>
              <img src="/images/royal_box.png" alt="Royal Assortment Box" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="special-content" style={{ flex: 1, padding: '2rem' }}>
              <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', background: '#854d0e', color: 'white', borderRadius: '20px', marginBottom: '1rem', fontSize: '0.875rem', fontWeight: 'bold' }}>
                <Star size={16} style={{ marginRight: '0.5rem', display: 'inline-block', verticalAlign: 'text-bottom' }} />
                CHEF'S SPECIAL
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#422006' }}>Amman's Royal Assortment</h2>
              <p style={{ color: '#713f12', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                A royal box containing our finest collection of pure ghee sweets, premium dry fruits, and the exclusive Imovies special creations made purely for traditional celebrations.
              </p>
              <div className="flex items-center gap-4">
                <div style={{ flex: 1 }}>
                  <span style={{ display: 'block', textDecoration: 'line-through', color: '#a16207' }}>₹2500</span>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#422006' }}>₹1999</span>
                </div>
                <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
