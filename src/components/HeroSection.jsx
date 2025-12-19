import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x9edcb93ecbe489d1ff2e4b9a4370d32309474444';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-section" id="about">
      <div className="hero-container">
        <div className="flag-icon">
          <div className="flag-cn"></div>
        </div>
        
        <h1 className="hero-title">
          <span className="title-main">SCI6900</span>
        </h1>
        
        <p className="hero-subtitle">The Future is Indexed.</p>
        
        <p className="hero-description">
          Official CTO of <span className="chinese-text">上证综合指数6900</span>
        </p>
        
        <p className="hero-tagline">
          Reimagining the financial singularity.
        </p>
        
        <a 
          href="https://www.binance.com/en/support/announcement/detail/c6499e95c15e408ca44ca5f6db975d4d" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          <span>FOLLOW MARKET VISION</span>
        </a>
        
        <div className="contract-section">
          <p className="contract-label">CONTRACT ADDRESS</p>
          <div className="contract-box">
            <code className="contract-address">{contractAddress}</code>
            <button 
              onClick={copyToClipboard} 
              className="copy-button"
              aria-label="Copy contract address"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
