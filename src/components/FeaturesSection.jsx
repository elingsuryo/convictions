import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Zap, Globe } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const features = [
    {
      icon: <TrendingUp size={40} />,
      title: 'Market Intelligence',
      description: 'As the CTO of the Shanghai Composite 6900, SCI6900 bridges data, design, and destiny.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Innovation Protocol',
      description: 'Our mission: to re-code how financial narratives are built — through intelligence, community, and symbolic capital.'
    },
    {
      icon: <Globe size={40} />,
      title: 'Cultural Vision',
      description: 'Transcending traditional markets through the convergence of Eastern financial wisdom and Western technological innovation.'
    }
  ];

  return (
    <section className="features-section" ref={sectionRef} id="vision">
      <div className="features-container">
        <div className="section-header">
          <div className="logo-showcase">
            <div className="showcase-circle">
              <span className="showcase-text">SCI</span>
            </div>
          </div>
          <h2 className="section-title">Engineering the Future of Value.</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
