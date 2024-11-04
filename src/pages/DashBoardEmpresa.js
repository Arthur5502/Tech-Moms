import React from 'react';
import EmpresaData from '../components/DashboardEmpresa/EmpresaData.js';
import FreelaAndProjects from '../components/DashboardEmpresa/FreelaAndProjects';
import '../styles/DashboardEmpresa/DashboardEmpresa.css';

function DashBoardEmpresa() {
    return (
            <div>
                <EmpresaData />
                <FreelaAndProjects />
        </div>
    );
}

export default DashBoardEmpresa;
