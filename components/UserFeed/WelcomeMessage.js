import React from "react";
import "../../styles/UserFeed/WelcomeMessage.css";

function WelcomeUser() {
  return (
    <div className="welcome-container">
      <h2 className="welcome-title">Bem-vindo, User(nome)</h2>
      <p className="welcome-text">Encontre as melhores oportunidades para você.</p>
      <button className="welcome-button">Postar Projeto</button>
    </div>
  );
}

export default WelcomeUser;
