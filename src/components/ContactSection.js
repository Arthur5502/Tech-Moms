import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contato</h2>
            <p>Interessado em nossos serviços? Entre em contato!</p>
            <form className="contact-form">
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Sua mensagem" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default ContactSection;
