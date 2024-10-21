import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import ServiceCard from './components/ServiceCard';
import './styles/Global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const App = () => {
  const serviceCards = [
    { title: 'Serviço 1', description: 'Descrição 1',  icon: '🔧' },
    { title: 'Serviço 2', description: 'Descrição 2', icon: '💻' },
    { title: 'Serviço 3', description: 'Descrição 3', icon: '🚀' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Router>
      <Navbar />
      <div className="cardCarousel">
  <Slider {...settings}>
    {serviceCards.map((card, index) => (
      <ServiceCard
        key={index}
        title={card.title}
        description={card.description}
        icon={card.icon}
      />
    ))}
  </Slider>
</div>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
