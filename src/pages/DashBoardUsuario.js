import React from 'react';
import FreelaData from '../components/Dashboard/FreelaData';
import Contractors from '../components/Dashboard/ContractorsAndSells';
import '../styles/Dashboard/DashBoardUsuario.css';
import NavbarDashboard from '../components/Dashboard/NavbarDashboard';

function DashBoardUsuario() {
    return (
        <div className="dashboard-section-sells-contractors">
            <FreelaData />
            <Contractors />
        </div>
    );
}

export default DashBoardUsuario;