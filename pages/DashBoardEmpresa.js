import React from 'react';
import SidebarBusiness from '../components/DashboardEmpresa/SidebarBusiness';
import BusinessData from '../components/DashboardEmpresa/BusinessData';
import Projects from '../components/DashboardEmpresa/Projects';
import FreelasAndPublishedProjects from '../components/DashboardEmpresa/FreelasAndPublishedProjects';
import '../styles/DashboardBusiness/DashboardBusiness.css';

function DashBoardEmpresa() {
    return (
        <div className="dashboard-empresa">
            <SidebarBusiness /> 
            <BusinessData />
            <Projects />
            <FreelasAndPublishedProjects />
        </div>
    );
}

export default DashBoardEmpresa;