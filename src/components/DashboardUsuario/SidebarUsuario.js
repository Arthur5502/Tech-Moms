import React from 'react';
import { MdSettings, MdLogout, MdEmail, MdDashboard, MdSchool, MdHome } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/DashboardUsuario/SidebarUsuario.css';

function Sidebar({ isExpanded }) {
  const location = useLocation();

  return (
    <nav className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <ul>
        <li className={location.pathname === '/DashboardUsuario' ? 'active' : ''}>
          <Link to="/DashboardUsuario">
            <MdDashboard className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Dashboard</span>
          </Link>
        </li>
        <li>
          <a href="/userFeed">
            <MdHome className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Feed</span>
          </a>
        </li>
        <li>
          <a href="/chatUser">
            <MdEmail className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Chats</span>
          </a>
        </li>
        <li>
          <a href="/courses">
            <MdSchool className="react-icon"/>
            <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Cursos</span>
          </a>
        </li>
      </ul>
      <div className="bottom-links">
        <a href=".">
          <MdSettings className="react-icon"/>
          <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Configurações</span>
        </a>
        <a href="/">
          <MdLogout className="react-icon"/>
          <span className={`sidebar-text ${!isExpanded && 'hidden'}`}>Logout</span>
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;