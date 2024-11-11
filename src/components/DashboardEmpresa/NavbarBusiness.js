import React, { useState } from 'react';
import { FiMenu, FiSearch, FiBell, FiMail } from 'react-icons/fi';
import '../../styles/DashboardBusiness/NavbarBusiness.css';
import Sidebar from '../DashboardUsuario/SidebarUsuario';

function NavbarBusiness() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="navbar-business-container">
      <Sidebar isExpanded={isExpanded} />
      <div className="navbar-business">
        <div className="navbar-left-business">
          <FiMenu className="menu-icon-business" onClick={toggleSidebar} />
          <div className="navbar-logo-business"><a href="/">TechMom</a></div>
        </div>
        
        <div className="navbar-center-business">
          <div className="search-bar-business">
            <FiSearch className="search-icon-business" />
            <input type="text" placeholder="Buscar" />
          </div>
        </div>
        
        <div className="navbar-right-business">
          <FiBell className="icon-business" />
          <FiMail className="icon-business" />
          <div className="user-info-business">
            <span>Nome Conta, <span className="user-role-business">Empresa</span></span>
            <div className="user-avatar-business"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarBusiness;