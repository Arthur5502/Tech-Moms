import React, { useState } from 'react';
import '../../styles/DashboardBusiness/Projects.css';

const Projects = () => {
  const [selectedMonth, setSelectedMonth] = useState("Outubro");

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const projects = [
    { name: "Nome Conta", project: "Landing Page", date: "12/09/2024 - 12:53", tech: "FullStack", revenue: "R$342,95", status: "Concluido" },
    { name: "Nome Conta", project: "Landing Page", date: "12/09/2024 - 12:53", tech: "FullStack", revenue: "R$100,95", status: "Cancelado" },
    { name: "Nome Conta", project: "Landing Page", date: "12/09/2024 - 12:53", tech: "FullStack", revenue: "R$34,295", status: "Andamento" },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projetos</h2>
        <span className="projects-view-all">Ver Todos</span>
        <div className="projects-month-selector">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="projects-table-headers">
        <div>CONTRATANTE</div>
        <div>PROJETO</div>
        <div>DATA - HORA</div>
        <div>TECNOLOGIA</div>
        <div>RENDA</div>
        <div>STATUS</div>
      </div>

      <div className="projects-table-content">
        {projects.map((project, index) => (
          <div className="projects-table-row" key={index}>
            <div className="projects-cell">
              <div className="projects-account-info">
                <span className="projects-avatar" />
                {project.name}
              </div>
            </div>
            <div className="projects-cell">{project.project}</div>
            <div className="projects-cell">{project.date}</div>
            <div className="projects-cell">{project.tech}</div>
            <div className="projects-cell">{project.revenue}</div>
            <div className="projects-cell">
              <span className={`projects-status ${project.status.toLowerCase()}`}>{project.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;