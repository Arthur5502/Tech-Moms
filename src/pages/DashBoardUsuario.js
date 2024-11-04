import React from 'react';
import FreelaData from '../components/Dashboard/FreelaData';
import ProjectTable from '../components/Dashboard/ProjectTable';
import Contractors from '../components/Dashboard/ContractorsAndSells';
import '../styles/Dashboard/DashBoardUsuario.css';
import NavbarDashboard from '../components/Dashboard/NavbarDashboard';

function DashBoardUsuario() {
    return (
        <div className="dashboard-section-sells-contractors">
            <NavbarDashboard />
            <FreelaData />
            <ProjectTable />
            <Contractors />
        </div>
    );
}

export default DashBoardUsuario;