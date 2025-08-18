import React from 'react'
import './Compo.css';

const Footer = () => {
  return (
       <footer className="footer">
      <div className="footer-container">

      
        <div className="footer-section about">
          <h2 className="footer-logo">Tendora</h2>
          <p>Your one-stop destination for fashion that defines you.  </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}Tendora by Taiba❤️. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;