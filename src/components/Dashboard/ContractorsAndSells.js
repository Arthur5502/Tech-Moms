import React from 'react';
import '../../styles/Dashboard/ContractorsAndSells.css';

const SellsAndContractors = () => {
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
        <div className="sells-and-contractors-container">
            <div className="contractors-card">
                <h3>Últimos Contratantes</h3>
                <ul>
                    {contractors.map((contractor, index) => (
                        <li key={index} className="contractor-item">
                            <div className="contractor-info">
                                <img src={contractor.imagem} alt="Profile" className="contractor-profile-image" />
                                <div>
                                    <span className="contractor-name">{contractor.nome}</span>
                                    <span className="contractor-email">{contractor.email}</span>
                                </div>
                            </div>
                            <span className="contractor-value">{contractor.valor}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sells-card">
                <h3>Mais Vendidos</h3>
                <ul>
                    {products.map((product, index) => (
                        <li key={index} className="product-item">
                            <div className="product-info">
                                <span className="product-name">{product.nome}</span>
                                <span className="product-description">{product.descricao}</span>
                            </div>
                            <span className="product-sales">{product.vendas} vendas</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SellsAndContractors;