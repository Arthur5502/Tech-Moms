import React from 'react';
import { FiMenu, FiSearch, FiBell, FiMail } from 'react-icons/fi';
import '../../styles/Dashboard/NavbarDashboard.css';

function NavbarDashboard() {
  return (
    <nav className="navbar-dash">
      <div className="navbar-left-dash">
        <FiMenu className="menu-icon-nav" />
        <div className="navbar-logo"><a href="/">TechMom</a></div>
      </div>
      
      <div className="navbar-center-dash">
        <div className="search-bar-dash">
          <FiSearch className="search-icon-dash" />
          <input type="text" placeholder="Buscar" />
        </div>
      </div>
      
      <div className="navbar-right-dash">
        <FiBell className="icon-dash" />
        <FiMail className="icon-dash    " />
        <div className="user-info-dash">
          <span>Nome Conta, <span className="user-role">Freela</span></span>
          <div className="user-avatar-dash"></div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDashboard;
