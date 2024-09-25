import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Bem-vinda à Plataforma de Freelancers para Mães</h1>
        <p>Conectando mães freelancers com empresas que valorizam o trabalho remoto.</p>
      </header>
      <section className="benefits">
        <h2>Benefícios</h2>
        <div className="benefit">
          <h3>Para Freelancers</h3>
          <p>Encontre oportunidades de trabalho flexíveis que se encaixam na sua rotina.</p>
        </div>
        <div className="benefit">
          <h3>Para Empresas</h3>
          <p>Acesse uma rede de profissionais talentosos e dedicados.</p>
        </div>
      </section>
      <section className="testimonials">
        <h2>Depoimentos</h2>
        <div className="testimonial">
          <p>"A plataforma me ajudou a encontrar trabalhos que posso fazer de casa, permitindo que eu passe mais tempo com meus filhos."</p>
          <p>- Maria, Freelancer</p>
        </div>
        <div className="testimonial">
          <p>"Conseguimos contratar profissionais qualificados rapidamente e com flexibilidade."</p>
          <p>- João, Empresa</p>
        </div>
      </section>
    </div>
  );
}

export default Home;