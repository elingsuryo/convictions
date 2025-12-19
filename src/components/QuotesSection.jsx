import React from 'react';
import './QuotesSection.css';

const QuotesSection = () => {
  const quotes = [
    'Every market peak is a message. SCI6900 is the language.',
    'Numbers become prophecy. Data becomes destiny.',
    'At 6900, speculation meets singularity.'
  ];

  return (
    <section className="quotes-section">
      <div className="quotes-container">
        <h2 className="quotes-title">The Index Beyond Numbers</h2>
        
        <div className="quotes-grid">
          {quotes.map((quote, index) => (
            <div key={index} className="quote-card">
              <div className="quote-mark">“</div>
              <p className="quote-text">{quote}</p>
              <div className="quote-mark quote-mark-end">”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
