import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import SvgCard from '../SvgCard';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import App from '../App';

function Home() {
  return (
    <>
      <HeroSection />
      <SvgCard />
      <Cards />
      <App />
      <Footer />
    </>
  );
}

export default Home;
