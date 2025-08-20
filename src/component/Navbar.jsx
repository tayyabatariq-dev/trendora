import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Compo.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Trendora</div>

      {/* Hamburger Button */}
      <div 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/categorycards" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Category</NavLink>
        <NavLink to="/ecommerce" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Ecommerce</NavLink>
        <NavLink to="/testimonials" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Testimonials</NavLink>
        
        <NavLink to="/form" onClick={() => setMenuOpen(false)} className="login-btn">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
