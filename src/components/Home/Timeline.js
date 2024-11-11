import React from 'react';
import '../../styles/Home/Timeline.css';

const Timeline = () => {
  const steps = [
    { id: 1, title: "Matching do Projeto", text: "Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo" },
    { id: 2, title: "Comunicação Cliente", text: "Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo" },
    { id: 3, title: "Desenvolvimento", text: "Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo" },
    { id: 4, title: "Revisão da Entrega", text: "Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo" },
    { id: 5, title: "Entrega do Projeto", text: "Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo" },
    { id: 6, title: "Feedback e Avaliação", text: "Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo" },
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <h2>Fluxo <br /><strong>de Trabalho</strong></h2>
      </div>
      <div className="timeline-content">
        <div className="timeline-line">
          <div className="timeline-espaco">
            <div className="divider-up"></div>
            <div className="divider-down"></div>
          </div>
          <div className="timeline-espaco">
            <div className="divider-up"></div>
            <div className="divider-down"></div>
          </div>
          <div className="timeline-espaco">
            <div className="divider-up"></div>
            <div className="divider-down"></div>
          </div>
        </div>
        <div className="timeline-box">
        {steps.map((step, index) => (
          <div
            key={step.id} 
            className={`timeline-step ${index % 2 === 0 ? 'top' : 'bottom'}`}
          >
            <h3 className="step-title">#{step.id} {step.title}</h3>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
        </div>
        <div className="timeline-trophy">🏆</div>
      </div>
    </section>
  );
};

export default Timeline;