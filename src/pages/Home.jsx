import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import PrivacySection from '../components/PrivacySection';

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <PrivacySection />
    </>
  );
};

export default Home;
