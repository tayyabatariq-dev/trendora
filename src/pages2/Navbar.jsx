// src/pages2/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can install lucide icons or use HeroIcons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-pink-600 tracking-wide">🎉 Eventify</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          <li><Link to="/" className="hover:text-pink-600 transition">Home</Link></li>
          <li><Link to="/products" className="hover:text-pink-600 transition">Packages</Link></li>
          <li><Link to="/categories" className="hover:text-pink-600 transition">Categories</Link></li>
          <li><Link to="/testimonial" className="hover:text-pink-600 transition">Testimonials</Link></li>
          <li><Link to="/contactform" className="hover:text-pink-600 transition">Contact</Link></li>
         <li><Link to="/footer" className="hover:text-pink-600 transition">Footer</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 px-6 text-gray-800 font-medium">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link></li>
          <li><Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
          <li><Link to="/contactform" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
