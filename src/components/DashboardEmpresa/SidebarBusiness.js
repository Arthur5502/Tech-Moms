import React from 'react';
import { MdSettings, MdLogout, MdShoppingCart, MdEmail, MdFavorite, MdDashboard, MdSchool, MdHome } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/DashboardBusiness/SidebarBusiness.css';

function SidebarBusiness({ isExpanded }) {
  const location = useLocation();

  return (
    <nav className={`sidebar-business ${isExpanded ? 'expanded' : ''}`}>
      <ul>
        <li className={location.pathname === '/DashboardUsuario' ? 'active' : ''}>
          <Link to="/DashboardUsuario">
            <MdDashboard className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Dashboard</span>
          </Link>
        </li>
        <li>
          <a href=".">
            <MdHome className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Feed</span>
          </a>
        </li>
        <li>
          <a href=".">
            <MdFavorite className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Favoritos</span>
          </a>
        </li>
        <li>
          <a href=".">
            <MdEmail className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Chats</span>
          </a>
        </li>
        <li>
          <a href=".">
            <MdShoppingCart className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Pedidos</span>
          </a>
        </li>
        <li>
          <a href=".">
            <MdSchool className="react-icon-business"/>
            <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Cursos</span>
          </a>
        </li>
      </ul>
      <div className="bottom-links-business">
        <a href=".">
          <MdSettings className="react-icon-business"/>
          <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Configurações</span>
        </a>
        <a href="/">
          <MdLogout className="react-icon-business"/>
          <span className={`sidebar-business-text ${!isExpanded && 'hidden'}`}>Logout</span>
        </a>
      </div>
    </nav>
  );
}

export default SidebarBusiness;