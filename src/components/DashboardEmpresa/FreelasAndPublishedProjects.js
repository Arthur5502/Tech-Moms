import React from 'react';
import '../../styles/DashboardBusiness/FreelasAndPublishedProjects.css';

const FreelasAndPublishedProjects = () => {
    const contractors = [
        { nome: 'Nome Conta', email: 'email@exemplo.com', valor: 'R$367', imagem: 'path/to/profile1.jpg' },
        { nome: 'Nome Conta', email: 'email@exemplo.com', valor: 'R$67', imagem: 'path/to/profile2.jpg' },
        { nome: 'Nome Conta', email: 'email@exemplo.com', valor: 'R$367', imagem: 'path/to/profile3.jpg' }
    ];

    const products = [
        { nome: 'Restaurante App', descricao: 'React & Bootstrap Framework', vendas: 7 },
        { nome: 'UI Kit', descricao: 'React & Bootstrap Framework', vendas: 4 },
        { nome: 'Design System Pro', descricao: 'Bootstrap Framework', vendas: 4 }
    ];

    return (
        <div className="freelas-and-projects-container">
            <div className="freelas-card">
                <h3>Últimos Contratantes</h3>
                <ul>
                    {contractors.map((contractor, index) => (
                        <li key={index} className="freelas-item">
                            <div className="freelas-info">
                                <img src={contractor.imagem} alt="Profile" className="freelas-profile-image" />
                                <div>
                                    <span className="freelas-name">{contractor.nome}</span>
                                    <span className="freelas-email">{contractor.email}</span>
                                </div>
                            </div>
                            <span className="freelas-value">{contractor.valor}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="projects-card">
                <h3>Mais Vendidos</h3>
                <ul>
                    {products.map((product, index) => (
                        <li key={index} className="projects-item">
                            <div className="projects-info">
                                <span className="projects-name">{product.nome}</span>
                                <span className="projects-description">{product.descricao}</span>
                            </div>
                            <span className="projects-sales">{product.vendas} vendas</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FreelasAndPublishedProjects;