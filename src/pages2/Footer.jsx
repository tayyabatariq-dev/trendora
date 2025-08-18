import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Eventify</h2>
          <p className="text-sm text-white/80">Making your celebrations memorable.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline transition-all duration-300 hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="/categories" className="hover:underline transition-all duration-300 hover:text-yellow-300">
                Services
              </a>
            </li>
            <li>
              <a href="/testimonial" className="hover:underline transition-all duration-300 hover:text-yellow-300">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/contactform" className="hover:underline transition-all duration-300 hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="#"
              className="hover:bg-white hover:text-pink-600 p-2 rounded-full transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:bg-white hover:text-pink-600 p-2 rounded-full transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:bg-white hover:text-pink-600 p-2 rounded-full transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:bg-white hover:text-pink-600 p-2 rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-white/30 pt-4 text-white/80">
        &copy; {new Date().getFullYear()} Eventify by Taiba🤍. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
