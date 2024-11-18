import React from 'react';
import FreelaData from '../components/DashboardUsuario/FreelaData';
import Contractors from '../components/DashboardUsuario/ContractorsAndSells';
import ProjectTable from '../components/DashboardUsuario/ProjectTable';
import Transactions from '../components/DashboardUsuario/Transactions';
import FooterDashboardusuario from '../components/DashboardUsuario/FooterDashboardUsuario';
import '../styles/DashboardUsuario/DashBoardUsuario.css';


function DashBoardUsuario() {
    return (
        <div className="dashboard-usuario">
            <FreelaData />
            <ProjectTable />
            <Contractors />
            <Transactions />
            <FooterDashboardusuario />
        </div>
    );
}

export default DashBoardUsuario;