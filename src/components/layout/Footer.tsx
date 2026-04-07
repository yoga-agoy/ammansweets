const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Amman<span>Sweets</span></h3>
          <p>Traditional sweets and bakery items crafted with love and pure ingredients.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/specials">Specials</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Bakery Street, Sweet City</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Amman Sweets & Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
