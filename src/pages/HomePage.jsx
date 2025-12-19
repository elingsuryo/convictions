import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import QuotesSection from '../components/QuotesSection';
import IndexStats from '../components/IndexStats';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <QuotesSection />
      <IndexStats />
      <Footer />
    </div>
  );
};

export default HomePage;
