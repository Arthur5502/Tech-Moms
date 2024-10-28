import React from 'react';
import HomeContent from '../components/HomeContent';
import CommunitySection from '../components/CommunitySection';
import Carousel from '../components/Carousel';
import ApproachSection from '../components/ApproachSection';
import Footer from '../components/Footer';
import '../styles/Home.css';
import '../styles/CommunitySection.css';

const Home = () => {
  return (
    <div className="home-page">
      <HomeContent />
      <Carousel />
      <CommunitySection />
      <ApproachSection />
      <Footer />
    </div>
  );
}

export default Home;