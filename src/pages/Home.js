import React from 'react';
import HomeContent from '../components/HomeContent';
import '../styles/Home.css';
import CommunitySection from '../components/CommunitySection';
import '../styles/CommunitySection.css';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className="home-page">
      <HomeContent/>
      <Carousel />
      <CommunitySection />
    </div>
  );
}

export default Home;
