import React, { useState } from 'react';
import '../styles/ApproachSection.css';
import UX_UI_icon from '../assets/UX_UI.png';
import Desenvolvimento_icon from '../assets/Desenvolvimento.png';
import Interatividade_icon from '../assets/Interitividade.png';
import Segurança_icon from '../assets/Seguranca.png';
import Revisao_icon from '../assets/Revisao.png';
import Garantia_icon from '../assets/Garantia.png';
import NodeJS_icon from '../assets/NodeJS.png';
import PHP_icon from '../assets/PHP.png';
import MySQL_icon from '../assets/MySQL.png';
import Java_icon from '../assets/Java.png';
import DotNet_icon from '../assets/NETCore.png';
import Python_icon from '../assets/Python.png';
import Cplusplus_icon from '../assets/RubyOnRails.png';
import Go_icon from '../assets/Go.png';
import MongoDB_icon from '../assets/mongoDB.png';

const Card = ({ icon, title, description }) => (
  <div className="approach-card">
    <img src={icon} alt={title} className="card-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ApproachSection = () => {
  const [activeCategory, setActiveCategory] = useState('Backend');

  const cardsGroup1 = [
    { icon: UX_UI_icon, title: 'UX/UI', description: 'Transforme suas ideias em experiências digitais incríveis. Serviços de design UX/UI com foco em criar interfaces intuitivas e atrativas.' },
    { icon: Desenvolvimento_icon, title: 'Desenvolvimento de Software', description: 'Transforme suas ideias em soluções digitais. Serviços de Desenvolvimento de Software para atender as necessidades das freelancers.' },
    { icon: Interatividade_icon, title: 'Interatividade & Comunidade', description: 'Junte-se à comunidade de mães freelancers. Compartilhe experiências, dicas e oportunidades.' }
  ];

  const cardsGroup2 = [
    { icon: Segurança_icon, title: 'Segurança & Integridade', description: 'Garantimos segurança e integridade para seus projetos e dados.' },
    { icon: Revisao_icon, title: 'Revisão de Entregas', description: 'Garantimos a revisão de entregas para que atendam aos mais altos padrões.' },
    { icon: Garantia_icon, title: 'Garantia de Qualidade & Teste', description: 'Oferecemos serviços de Garantia de Qualidade e Testes para garantir o melhor resultado.' }
  ];

  const technologies = {
    Backend: [
      { icon: NodeJS_icon, title: 'Node.js' },
      { icon: PHP_icon, title: 'PHP' },
      { icon: MySQL_icon, title: 'MySQL' },
      { icon: Java_icon, title: 'Java' },
      { icon: DotNet_icon, title: '.NET Core' },
      { icon: Python_icon, title: 'Python' },
      { icon: Cplusplus_icon, title: 'C++' },
      { icon: Go_icon, title: 'Go' },
      { icon: MongoDB_icon, title: 'MongoDB' }
    ],
    Frontend: [
        { icon: Go_icon, title: 'Go' },
    ],
    Dados: [
        { icon: Go_icon, title: 'Go' },
    ],
    QA: [
        { icon: Go_icon, title: 'Go' },
    ],
    Marketing: [
        { icon: Go_icon, title: 'Go' },
    ],
    DevOps: [
        { icon: Go_icon, title: 'Go' },
    ]
  };

  return (
    <section className="approach-section">
      <h2 className="section-title">Nossa Abordagem</h2>
      <h3 className="section-subtitle">Desenvolvimento</h3>

      <div className="cards-container">
        {cardsGroup1.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="cards-container cards-group-separator">
        {cardsGroup2.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <section className="technologies-section">
        <div className="technologies-menu">
          {Object.keys(technologies).map((category) => (
            <span
              key={category}
              className={category === activeCategory ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="technologies-grid">
          {technologies[activeCategory].map((tech, index) => (
            <img key={index} src={tech.icon} alt={tech.title} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default ApproachSection;
