import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>MomCode</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastre-se</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;