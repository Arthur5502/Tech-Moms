import React from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className={`serviceCard`}>
      <div className="iconWrapper">
        <span>{icon}</span>
      </div>
      <h2 className={`title highlighted`}>{title}</h2>
      <p className={`description`}>{description}</p>
    </div>
  );
};

export default ServiceCard;
