import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="community">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span>SCI</span>
              </div>
              <span className="footer-logo-text">SCI6900</span>
            </div>
            <p className="footer-tagline">The Future is Indexed</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <a href="#about">About</a>
              <a href="#vision">Vision</a>
              <a href="#index">Index</a>
            </div>
            <div className="footer-column">
              <h4>Community</h4>
              <a href="#community">Join Us</a>
              <a href="#community">Documentation</a>
              <a href="#community">Support</a>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#community">Whitepaper</a>
              <a href="#community">Roadmap</a>
              <a href="#community">Blog</a>
            </div>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Telegram">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 SCI6900. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
