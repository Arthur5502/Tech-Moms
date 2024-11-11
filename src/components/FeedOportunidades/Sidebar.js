import React from 'react';
import { FaCode, FaPalette, FaDatabase, FaBullhorn, FaVideo } from 'react-icons/fa';
import '../../styles/FeedCssOportunidade/SidebarOportunidades.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="box1">
        <div className="welcome">Bem Vindo, User(nome),</div>
        <div className="text">Encontre as melhores oportunidades para você.</div>
        <button id="postar">Postar projeto</button>
      </div>
      <div className="opportunities">
        <div className="opportunity-box">
          <FaCode className="icon" />
          <div className="opportunity-title">Programação</div>
          <div className="opportunity-count">312 Vagas Abertas</div>
        </div>
        <div className="opportunity-box">
          <FaPalette className="icon" />
          <div className="opportunity-title">Design</div>
          <div className="opportunity-count">357 Vagas Abertas</div>
        </div>
        <div className="opportunity-box">
          <FaDatabase className="icon" />
          <div className="opportunity-title">Ciência de Dados</div>
          <div className="opportunity-count">57 Vagas Abertas</div>
        </div>
        <div className="opportunity-box">
          <FaBullhorn className="icon" />
          <div className="opportunity-title">Marketing Digital</div>
          <div className="opportunity-count">297 Vagas Abertas</div>
        </div>
        <div className="opportunity-box">
          <FaVideo className="icon" />
          <div className="opportunity-title">Edição de Vídeo</div>
          <div className="opportunity-count">247 Vagas Abertas</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
