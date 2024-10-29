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
      <section id="servicos">
        <Carousel />
      </section>
      <section id="beneficios">
        <Beneficios />
      </section>
      <section id="comunidade">
        <CommunitySection />
      </section>
      <section id="abordagem">
        <ApproachSection />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
