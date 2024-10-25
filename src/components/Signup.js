import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [isCompany, setIsCompany] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) {
      navigate('/');
    } else {
      alert("Você deve aceitar os termos de serviço e a política de privacidade.");
    }
  };

  return (
    <div className="signup-container">
      <main className="signup-form">
        <h2>Bem-vinda(o)!</h2>
        <h3>Crie sua Conta</h3>

        <div className="role-buttons">
          <button className="freela-button" onClick={() => setIsCompany(false)}>Sou Freela</button>
          <button className="hire-button" onClick={() => setIsCompany(true)}>Quero Contratar</button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {isCompany ? (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label>Nome da Empresa:</label>
                  <input type="text" placeholder="Nome da empresa" required />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" placeholder="exemplo@gmail.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Senha:</label>
                  <input type="password" placeholder="*********" required />
                </div>
                <div className="form-group">
                  <label>Localização:</label>
                  <input type="text" placeholder="Endereço ou cidade" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>CNPJ:</label>
                  <input type="text" placeholder="00.000.000/0000-00" required />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label>Nome:</label>
                  <input type="text" placeholder="exemplo nome" required />
                </div>
                <div className="form-group">
                  <label>Sobrenome:</label>
                  <input type="text" placeholder="exemplo sobrenome" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>CPF:</label>
                  <input type="text" placeholder="111.111.111-11" required />
                </div>
                <div className="form-group">
                  <label>Data de Aniversário:</label>
                  <input type="text" placeholder="mm/dd" required />
                </div>
              </div>
            </>
          )}

          <div className="form-row">
            <div className="form-group input-password">
              <label>Confirme sua Senha:</label>
              <input type="password" placeholder="*********" required />
            </div>
          </div>

          <div className="terms-container">
            <input 
              type="checkbox" 
              required 
              onChange={(e) => setTermsAccepted(e.target.checked)} 
            />
            <label>
              Aceito os Termos de Serviço e a Política de Privacidade
            </label>
          </div>

          <button type="submit" className="submit-button">Criar conta</button>
        </form>

        <p>Já tem uma conta? <a href="/login">Login</a></p>
      </main>
    </div>
  );
};

export default Signup;
