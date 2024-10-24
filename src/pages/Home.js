import React from 'react';
import HomeContent from '../components/HomeContent';
import '../styles/Home.css';
import CommunitySection from '../components/CommunitySection';
import '../styles/CommunitySection.css';

const Home = () => {
  return (
    <div className="home-page">
      <HomeContent/>
      <CommunitySection />
    </div>
  );
}

export default Home;
