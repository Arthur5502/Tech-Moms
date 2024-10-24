import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">TechMom</div>
            <ul className="navbar-menu">
                <li><a href="/">Sobre</a></li>
                <li><a href="/servicos">Serviços</a></li>
                <li><a href="/beneficios">Benefícios</a></li>
                <li><a href="/comunidade">Comunidade</a></li>
                <li><a href="/">Funcionalidades</a></li>
            </ul>
            <a href="/login" className="navbar-login">Login</a>
        </nav>
    );
};

export default Navbar;
