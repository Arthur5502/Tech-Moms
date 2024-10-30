import React from 'react';
import HomeContent from '../components/HomeContent';
import '../styles/Home.css';
import CommunitySection from '../components/CommunitySection';
import '../styles/CommunitySection.css';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Beneficios from '../components/Beneficios';
import ApproachSection from '../components/ApproachSection';

const Home = () => {
  return (
    <div className="home-page">
      <HomeContent/>
      <Carousel />
      <Beneficios />
      <CommunitySection />
      <ApproachSection />
      <Footer />
    </div>
  );
}

export default Home;
