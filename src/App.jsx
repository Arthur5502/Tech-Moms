import React, { useRef } from 'react';
import './App.css';

const Header = () => (
  <div className="header">
    <div className="purple-bar"></div>
    <div className="header-content">
      <div>
        <h2>Nossos Benefícios</h2>
        <h3>Contrate e Trabalhe</h3>
      </div>
      <div className="button-group">
        <button className="button freela">Sou Freela</button>
        <button className="button contratar">Quero Contratar</button>
      </div>
    </div>
  </div>
);

const Card = ({ imageSrc, text }) => (
  <div className="card">
    <img src={imageSrc} alt="Card" />
    <p>{text}</p>
    <button className="card-button">Ver Mais <span>→</span></button>
  </div>
);

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carousel">
      <div className="card-list" ref={carouselRef}>
        {items.map((item, index) => (
          <Card key={index} imageSrc={item.imageSrc} text={item.text} />
        ))}
      </div>
      <div className="controls-container">
        <button className="control control-left" onClick={scrollLeft}>←</button>
        <button className="control control-right" onClick={scrollRight}>→</button>
      </div>
    </div>
  );
};

const App = () => {
  const carouselItems = [
    { imageSrc: 'image1.jpg', text: 'Texto Exemplo 1' },
    { imageSrc: 'image2.png', text: 'Texto Exemplo 2' },
    { imageSrc: 'image3.png', text: 'Texto Exemplo 3' },
    { imageSrc: 'image4.png', text: 'Texto Exemplo 4' },
    { imageSrc: 'image5.png', text: 'Texto Exemplo 5' },
    { imageSrc: 'image5.png', text: 'Texto Exemplo 5' },
    { imageSrc: 'image5.png', text: 'Texto Exemplo 5' },
    { imageSrc: 'image5.png', text: 'Texto Exemplo 5' },
  ];

  return (
    <div className="app">
      <Header />
      <Carousel items={carouselItems} />
    </div>
  );
};

export default App;
