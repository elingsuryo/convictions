import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['ABOUT', 'VISION', 'INDEX', 'X', 'COMMUNITY'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <span className="logo-text">SCI</span>
          </div>
          <span className="logo-name">SCI6900</span>
        </div>
        
        <div className="navbar-links">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={`#${link.toLowerCase()}`} 
              className="nav-link"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
