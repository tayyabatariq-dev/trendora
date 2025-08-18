import React from 'react';
import { NavLink } from 'react-router-dom';
import './Compo.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Trendora</div>
      
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/categorycards" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Category</NavLink>
        <NavLink to="/ecommerce" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Ecommerce</NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Testimonials</NavLink>
        
        {/* Special Login Button */}
        <NavLink to="/form" className="login-btn">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
