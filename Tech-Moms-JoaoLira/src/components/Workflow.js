import React from 'react';
import '../styles/passoapasso.css';

const Workflow = () => {
  return (
    <section className="workflow">
      <h1>
        Como os Freelas <br />
        <strong>na Techmom Trabalham</strong>
      </h1>
      <div className="top-line"></div>

      <div className="timeline">
        <div className="step-container">
          <div className="step">
            <h2>
              <span className="step-number">#1</span> Matching do Projeto
            </h2>
            <p>Texto Exemplo Texto Exemplo Texto Exemplo</p>
          </div>
          <div className="divider-line"></div>
        </div>

        <div className="step-container">
          <div className="step">
            <h2>
              <span className="step-number">#2</span> Comunicação Cliente
            </h2>
            <p>Texto Exemplo Texto Exemplo Texto Exemplo</p>
          </div>
          <div className="divider-line"></div>
        </div>

        <div className="step-container">
          <div className="step">
            <h2>
              <span className="step-number">#3</span> Desenvolvimento
            </h2>
            <p>Texto Exemplo Texto Exemplo Texto Exemplo</p>
          </div>
          <div className="divider-line"></div>
        </div>

        <div className="step-container">
          <div className="step">
            <h2>
              <span className="step-number">#4</span> Revisão da Entrega
            </h2>
            <p>Texto Exemplo Texto Exemplo Texto Exemplo</p>
          </div>
          <div className="divider-line"></div>
        </div>

        <div className="step-container">
          <div className="step">
            <h2>
              <span className="step-number">#5</span> Entrega do Projeto
            </h2>
            <p>Texto Exemplo Texto Exemplo Texto Exemplo</p>
          </div>
          <div className="divider-line"></div>
        </div>

        <div className="step-container">
          <div className="step">
            <h2>
              <span className="step-number">#6</span> Feedback e Avaliação
            </h2>
            <p>Texto Exemplo Texto Exemplo Texto Exemplo</p>
          </div>
        </div>
      </div>

      <div className="trophy-icon">
        <img src="../assets/trofeu.png" alt="Troféu" />
      </div>
    </section>
  );
};

export default Workflow;

