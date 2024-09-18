import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Encontre o Freelancer Perfeito</h1>
                <p>Conectando freelancers talentosos com clientes de todo o mundo.</p>
                <a href="#contact" className="cta-button">Entre em Contato</a>
            </div>
        </section>
    );
};

export default HeroSection;
