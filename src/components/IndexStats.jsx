import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity, BarChart3 } from 'lucide-react';
import './IndexStats.css';

const IndexStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('index-stats');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Mock data for Shanghai Composite Index
  const indexData = {
    name: 'Shanghai Composite (SSEC)',
    value: '3,897.03',
    change: '-36.94',
    changePercent: '-0.94%',
    isPositive: false,
    dayHigh: '3,933.01',
    dayLow: '3,886.31',
    weekHigh: '3,936.88',
    weekLow: '3,040.69',
    volume: '287.8B',
    timestamp: 'Closed · 10/10'
  };

  const chartData = [
    { period: '1D', change: '-0.94%', isPositive: false },
    { period: '1W', change: '+0.37%', isPositive: true },
    { period: '1M', change: '+2.22%', isPositive: true },
    { period: '3M', change: '+11.04%', isPositive: true },
    { period: '6M', change: '+20.89%', isPositive: true },
    { period: '1Y', change: '+18.02%', isPositive: true },
    { period: '5Y', change: '+19.10%', isPositive: true },
    { period: 'Max', change: '+3,857.20%', isPositive: true }
  ];

  return (
    <section className="index-stats-section" id="index-stats">
      <div className="index-stats-container">
        <div className="stats-header">
          <h2 className="stats-main-title">Live Market Data</h2>
          <p className="stats-subtitle">Real-time Shanghai Composite Index Statistics</p>
        </div>

        <div className={`main-stat-card ${isVisible ? 'visible' : ''}`}>
          <div className="stat-header-row">
            <div className="index-name-badge">
              <Activity size={20} />
              <span>{indexData.name}</span>
            </div>
            <div className="timestamp">{indexData.timestamp}</div>
          </div>

          <div className="current-value-row">
            <div className="value-display">
              <span className="current-price">{indexData.value}</span>
              <div className={`change-indicator ${indexData.isPositive ? 'positive' : 'negative'}`}>
                {indexData.isPositive ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
                <span className="change-value">{indexData.change}</span>
                <span className="change-percent">({indexData.changePercent})</span>
              </div>
            </div>
          </div>

          <div className="day-stats-grid">
            <div className="day-stat-item">
              <span className="stat-label">Day's Range</span>
              <div className="stat-range">
                <span>{indexData.dayLow}</span>
                <div className="range-bar">
                  <div className="range-fill" style={{ width: '45%' }}></div>
                  <div className="range-indicator"></div>
                </div>
                <span>{indexData.dayHigh}</span>
              </div>
            </div>
            <div className="day-stat-item">
              <span className="stat-label">52 Week Range</span>
              <div className="stat-range">
                <span>{indexData.weekLow}</span>
                <div className="range-bar">
                  <div className="range-fill" style={{ width: '85%' }}></div>
                  <div className="range-indicator"></div>
                </div>
                <span>{indexData.weekHigh}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`period-performance ${isVisible ? 'visible' : ''}`}>
          <div className="performance-header">
            <BarChart3 size={24} />
            <h3>Historical Performance</h3>
          </div>
          <div className="performance-grid">
            {chartData.map((item, index) => (
              <div
                key={index}
                className="performance-card"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="period-label">{item.period}</div>
                <div className={`period-change ${item.isPositive ? 'positive' : 'negative'}`}>
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`chart-placeholder ${isVisible ? 'visible' : ''}`}>
          <div className="chart-header">
            <h3>Index Chart</h3>
            <a 
              href="https://www.investing.com/indices/shanghai-composite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-full-chart"
            >
              View Full Chart →
            </a>
          </div>
          <div className="chart-visual">
            <svg viewBox="0 0 800 300" className="chart-svg">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              
              {/* Chart path - simulated trending data */}
              <path
                d="M 0 250 L 100 240 L 200 220 L 300 180 L 400 150 L 500 140 L 600 120 L 700 100 L 800 90"
                fill="url(#chartGradient)"
                stroke="#FFD700"
                strokeWidth="3"
                className="chart-path"
              />
              
              {/* Grid lines */}
              <line x1="0" y1="75" x2="800" y2="75" stroke="rgba(255,215,0,0.1)" strokeWidth="1" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(255,215,0,0.1)" strokeWidth="1" />
              <line x1="0" y1="225" x2="800" y2="225" stroke="rgba(255,215,0,0.1)" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="disclaimer">
          <p>* Data is for demonstration purposes. For real-time data, visit <a href="https://www.investing.com/indices/shanghai-composite" target="_blank" rel="noopener noreferrer">Investing.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default IndexStats;
