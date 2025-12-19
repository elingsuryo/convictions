import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { value: '6900', label: 'The Threshold', symbol: '' },
    { value: '∞', label: 'Potential', symbol: '' },
    { value: '2025', label: 'Vision', symbol: '' }
  ];

  return (
    <section className="stats-section" ref={sectionRef} id="index">
      <div className="stats-container">
        <h2 className="stats-title">
          At 6900, we transcend the index.
        </h2>
        <p className="stats-description">
          SCI6900 represents the synthesis of market logic, computational power, and cultural vision.
          It's not just a number — it's a threshold, a signal,
          a convergence of speculation and science.
        </p>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
