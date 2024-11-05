import React from 'react';
import '../../styles/Dashboard/Transactions.css';

const Transactions = () => {
  const transactions = [
    { project: "Pagamento de Nome Conta", date: "12/09/2024 - 12:53", price: "$2300", status: "Concluido" },
    { project: "Pagamento de Nome Conta", date: "12/09/2024 - 12:53", price: "$670", status: "Concluido" },
    { project: "Pagamento de Nome Conta", date: "12/09/2024 - 12:53", price: "$234", status: "Cancelado" },
    { project: "Pagamento de Nome Conta", date: "12/09/2024 - 12:53", price: "$5000", status: "Andamento" },
    { project: "Pagamento de Nome Conta", date: "12/09/2024 - 12:53", price: "$2300", status: "Andamento" },
    { project: "Pagamento de Nome Conta", date: "12/09/2024 - 12:53", price: "$280", status: "Concluido" },
  ];

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h2>Transações</h2>
        <p>Lista das transações mais recentes.</p>
      </div>
      
      <div className="transactions-table">
        <div className="transactions-table-header">
          <div>PROJETO</div>
          <div>DATA & HORA</div>
          <div>PREÇO</div>
          <div>STATUS</div>
        </div>
        
        {transactions.map((transaction, index) => (
          <div className="transactions-table-row" key={index}>
            <div>{transaction.project}</div>
            <div>{transaction.date}</div>
            <div>{transaction.price}</div>
            <div>
              <span className={`transactions-status ${transaction.status.toLowerCase()}`}>
                {transaction.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;