import React from 'react';
import HomeContent from '../components/HomeContent';
import '../styles/Home.css';
import CommunitySection from '../components/CommunitySection';
import '../styles/CommunitySection.css';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="home-page">
      <HomeContent/>
      <Carousel />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default Home;
