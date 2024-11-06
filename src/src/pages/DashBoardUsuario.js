import React from 'react';
import FreelaData from '../components/DashboardUsuario/FreelaData';
import Contractors from '../components/DashboardUsuario/ContractorsAndSells';
import ProjectTable from '../components/DashboardUsuario/ProjectTable';
import Transactions from '../components/DashboardUsuario/Transactions';
import '../styles/DashboardUsuario/DashBoardUsuario.css';


function DashBoardUsuario() {
    return (
        <div className="dashboard-usuario">
            <FreelaData />
            <ProjectTable />
            <Contractors />
            <Transactions />
        </div>
    );
}

export default DashBoardUsuario;