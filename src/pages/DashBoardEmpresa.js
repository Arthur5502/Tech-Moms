import React from 'react';
import SidebarBusiness from '../components/DashboardEmpresa/SidebarBusiness';
import BusinessData from '../components/DashboardEmpresa/BusinessData';
import Projects from '../components/DashboardEmpresa/Projects';
import FreelasAndPublishedProjects from '../components/DashboardEmpresa/FreelasAndPublishedProjects';
import FooterDashboardEmpresa from '../components/DashboardEmpresa/FooterDashboardEmpresa';
import '../styles/DashboardBusiness/DashboardBusiness.css';

function DashBoardEmpresa() {
    return (
        <div className="dashboard-empresa">
            <SidebarBusiness /> 
            <BusinessData />
            <Projects />
            <FreelasAndPublishedProjects />
            <FooterDashboardEmpresa />
        </div>
    );
}

export default DashBoardEmpresa;