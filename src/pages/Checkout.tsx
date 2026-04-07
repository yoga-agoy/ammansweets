import { useState } from 'react';
import { CreditCard, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const [status, setStatus] = useState('idle'); // idle, processing, success

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');
    
    // Simulate Razorpay mock payment
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className="container section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <CheckCircle size={80} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
        <h1 className="page-title">Order Placed Successfully!</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Your payment via Razorpay mock has been received. Your sweets are on their way!
        </p>
        <button onClick={() => window.location.href = '/'} className="btn btn-primary">Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 className="page-title text-center">Checkout</h1>
      <p className="text-center text-muted mb-4">Complete your order securely.</p>
      
      <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
        <div className="card" style={{ flex: 2 }}>
          <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Billing Details</h2>
          <form onSubmit={handlePayment}>
            <div className="flex gap-4">
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" required placeholder="John" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" required placeholder="Doe" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" required placeholder="+91 98765 43210" />
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea className="form-control" rows={3} required placeholder="Full shipping address"></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1rem', fontSize: '1.1rem' }}
              disabled={status === 'processing'}
            >
              <CreditCard size={20} />
              {status === 'processing' ? 'Processing Payment...' : 'Pay with Razorpay (Mock)'}
            </button>
          </form>
        </div>

        <div className="card" style={{ flex: 1, backgroundColor: '#fff', border: '2px solid var(--primary)' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Order Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="flex justify-between">
              <span>Premium Kaju Katli (1kg)</span>
              <span>₹900</span>
            </div>
            <div className="flex justify-between">
              <span>Amman's Royal Assortment</span>
              <span>₹1999</span>
            </div>
            <hr style={{ borderColor: 'var(--border-color)', margin: '0.5rem 0' }} />
            <div className="flex justify-between" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              <span>Total</span>
              <span color="var(--primary)">₹2899</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
