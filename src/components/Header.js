import React from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Aqui deve ir a logo */}
      <img src=" /* link da imagem da logo */ " alt="Logo" className="logo" />
      <Navbar />
    </header>
  );
};

export default Header;
