import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro() {
  const [tipoCadastro, setTipoCadastro] = useState('freelancer');

  const handleTipoChange = (event) => {
    setTipoCadastro(event.target.value);
  };

  return (
    <div className="cadastro">
      <h1>Cadastro</h1>
      <div>
        <label>
          <input
            type="radio"
            value="freelancer"
            checked={tipoCadastro === 'freelancer'}
            onChange={handleTipoChange}
          />
          Freelancer
        </label>
        <label>
          <input
            type="radio"
            value="empresa"
            checked={tipoCadastro === 'empresa'}
            onChange={handleTipoChange}
          />
          Empresa
        </label>
      </div>
      <form>
        {tipoCadastro === 'freelancer' ? (
          <>
            <input type="text" placeholder="Nome completo" />
            <input type="date" placeholder="Data de nascimento" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="CPF" />
            <input type="password" placeholder="Senha" />
          </>
        ) : (
          <>
            <input type="text" placeholder="Nome da empresa" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="CNPJ" />
            <input type="text" placeholder="Localização" />
            <input type="password" placeholder="Senha" />
          </>
        )}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;