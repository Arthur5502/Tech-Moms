import React from 'react';
import { Code, Paintbrush, Database, Megaphone, Video } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  // Array de objetos com as informações das categorias
  const categories = [
    {
      id: 1,
      name: 'Programação',
      icon: <Code className="category-icon" />,
      jobs: 315,
      bgColor: 'bg-primary'
    },
    {
      id: 2,
      name: 'Design',
      icon: <Paintbrush className="category-icon" />,
      jobs: 357,
      bgColor: 'bg-primary'
    },
    {
      id: 3,
      name: 'Ciência de Dados',
      icon: <Database className="category-icon" />,
      jobs: 57,
      bgColor: 'bg-secondary'
    },
    {
      id: 4,
      name: 'Marketing Digital',
      icon: <Megaphone className="category-icon" />,
      jobs: 297,
      bgColor: 'bg-secondary'
    },
    {
      id: 5,
      name: 'Edição de Vídeo',
      icon: <Video className="category-icon" />,
      jobs: 247,
      bgColor: 'bg-secondary'
    }
  ];

  return (
    <div className="sidebar">
      {/* Seção do cabeçalho */}
      <div className="sidebar-header">
        <h1 className="welcome-title">Bem Vindo, User(nome),</h1>
        <p className="welcome-subtitle">
          Encontre as melhores oportunidades para você.
        </p>
        <button className="post-button">
          Postar Projeto
        </button>
      </div>

      {/* Seção das categorias */}
      <div className="categories-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
          >
            <div className="category-content">
              <div className={`icon-container ${category.bgColor}`}>
                {category.icon}
              </div>
              <div className="category-info">
                <h3 className="category-title">
                  {category.name}
                </h3>
                <p className="category-jobs">
                  {category.jobs} Vagas Abertas
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
