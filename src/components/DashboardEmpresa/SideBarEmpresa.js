import React from 'react';
import { MdSettings, MdLogout, MdShoppingCart, MdChat, MdFavorite, MdDashboard, MdLibraryBooks } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Dashboard/Sidebar.css';

function SideBarEmpresa({ isExpanded }) {
  const location = useLocation();

  return (
    <nav className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <ul>
        <li className={location.pathname === '/dashboardEmpresa' ? 'active' : ''}>
          <Link to="/dashboardEmpresa">
            <MdDashboard className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Dashboard</span>
          </Link>
        </li>
        <li>
          <a href="#">
            <MdDashboard className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Feed</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdFavorite className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Favoritos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdChat className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Chats</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdShoppingCart className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Pedidos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdLibraryBooks className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Cursos</span>
          </a>
        </li>
      </ul>
      <div className="bottom-links">
        <a href="#">
          <MdSettings className="react-icon"/>
          <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Configurações</span>
        </a>
        <a href="#">
          <MdLogout className="react-icon"/>
          <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Logout</span>
        </a>
      </div>
    </nav>
  );
}

export default SideBarEmpresa;
