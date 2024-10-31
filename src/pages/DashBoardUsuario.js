import React from 'react';
import FreelaData from '../components/DashBoard/FreelaData';
import Contractors from '../components/DashBoard/ContractorsAndSells';
import '../stylesDashBoard/DashBoardUsuario.css';

const DashBoardUsuario = () => {
    return (
        <div className="dashboard-section-sells-contractors">
            <FreelaData />
            <Contractors />
        </div>
    );
}

export default DashBoardUsuario;
