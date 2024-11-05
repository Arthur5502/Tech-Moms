import React from 'react';
import FreelaData from '../components/Dashboard/FreelaData';
import Contractors from '../components/Dashboard/ContractorsAndSells';
import ProjectTable from '../components/Dashboard/ProjectTable';
import Transactions from '../components/Dashboard/Transactions';
import '../styles/Dashboard/DashBoardUsuario.css';


function DashBoardUsuario() {
    return (
        <div className="dashboard-section-sells-contractors">
            <FreelaData />
            <ProjectTable />
            <Contractors />
            <Transactions />
        </div>
    );
}

export default DashBoardUsuario;