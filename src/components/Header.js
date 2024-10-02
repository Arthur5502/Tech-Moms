import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1>TechMoms</h1>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/cadastro" onClick={toggleMenu}>Cadastre-se</Link>
        <Link to="/login" onClick={toggleMenu}>Login</Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;