import React, { useRef, useState } from 'react';
import '../../stylesHome/Beneficios.css';
import image1 from '../../assetsHome/image1.jpg';
import image2 from '../../assetsHome/image2.png';
import image3 from '../../assetsHome/image3.png';
import image4 from '../../assetsHome/image4.png';
import image5 from '../../assetsHome/image5.png';
const HeaderBeneficios = () => {
  const [isCompany, setIsCompany] = useState(false);

  return (
    <div className="header-beneficios">
      <div className="purple-bar"></div>
      <div className="header-content-beneficios">
        <div>
          <h2>Nossos Benefícios</h2>
          <h3>Contrate e Trabalhe</h3>
        </div>
        <div className="button-group">
          <button 
            className={`freela button ${!isCompany ? 'active' : ''}`} 
            onClick={() => setIsCompany(false)}
          >
            Sou Freela
          </button>
          <button 
            className={`button contratar ${isCompany ? 'active' : ''}`} 
            onClick={() => setIsCompany(true)}
          >
            Quero Contratar
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = ({ imageSrc, text }) => (
  <div className="card">
    <div className="cards">
      <img src={imageSrc} alt="Card" />
    </div>
    <p>{text}</p>
    <button className="card-button">Ver Mais <span className="seta">→</span></button>
  </div>
);

const Carrossel = ({ items }) => {
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
    <div className="carrossel">
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

const Beneficios = () => {
  const carouselItems = [
    { imageSrc: image1, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image2, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image3, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image4, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image5, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image2, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image4, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image1, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image3, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image5, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image2, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image4, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
    { imageSrc: image1, text: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo' },
  ];

  return (
    <div className="beneficios">
      <HeaderBeneficios />
      <Carrossel items={carouselItems} />
    </div>
  );
};

export default Beneficios;
