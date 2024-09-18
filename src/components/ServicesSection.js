import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    return (
        <section id="services" className="services-section">
            <h2>Nossos Serviços</h2>
            <div className="services-list">
                <div className="service-item">
                    <h3>Design Gráfico</h3>
                    <p>Criação de logotipos, banners e material promocional.</p>
                </div>
                <div className="service-item">
                    <h3>Desenvolvimento Web</h3>
                    <p>Sites modernos, responsivos e funcionais.</p>
                </div>
                <div className="service-item">
                    <h3>Marketing Digital</h3>
                    <p>SEO, campanhas de mídia social e mais.</p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;