import React from 'react';
import '../../styles/BusinessFeed/BusinessFreelasList.css';

const freelancers = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  title: index % 6 === 0 ? 'UI/UX Designer' : index % 6 === 1 ? 'Engenheira de Software' 
   : index % 6 === 2 ? 'Desenvolvedora Front-End' : index % 6 === 3 ? 'Desenvolvedora Back-End'
   : index % 6 === 4 ? 'Marketing Digital' : 'Edição',
  name: index % 6 === 0 ? 'Fernanda' : index % 6 === 1 ? 'Roberta'
   : index % 6 === 2 ? 'Júlia' : index % 6 === 3 ? 'brunna'
   : index % 6 === 4 ? 'Maria' : 'Luana',
  location: index % 5 === 0 ? 'Natal, Brasil' : index % 5 === 1 ? 'Recife, Brasil'
   : index % 5 === 2 ? 'Minas Gerais, Brasil' : index % 5 === 3 ? 'Rio de Janeiro, Brasil' 
   : 'São Paulo, Brasil',
  type: index % 3 === 0 ? 'Freelancer' : 'Freelancer',
  rate: index % 4 === 0 ? 'R$ 100/hora' : index % 4 === 1 ? 'R$ 150/hora' : index % 4 === 2 ? 'R$ 80/hora' : 'R$ 120/hora',
  tags: index % 6 === 0 ? ['Designer', 'Pleno'] : index % 6 === 1 ? ['Engenheira de Software', 'Sênior']
   : index % 6 === 2 ? ['Front-End', 'Pleno'] : index % 6 === 3 ? ['Back-End', 'Júnior']
   : index % 6 === 4 ? ['Marketing Digital', 'Júnior'] : ['Edição', 'Pleno'],
  rating: index % 2 === 0 ? '5.0' : '4.8',
  reviews: index % 4 === 0 ? 8 : index % 4 === 1 ? 12 : index % 4 === 2 ? 5 : 6,
}));

const BusinessFreelasList = () => {
  return (
    <div className="freelancer-list-container">
      {freelancers.map((freelancer) => (
        <div key={freelancer.id} className="freelancer-card">
          <div className="freelancer-header">
            <h3 className="freelancer-title">{freelancer.title}</h3>
            <div className="freelancer-menu">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="freelancer-type-container">
            <span className={`freelancer-type ${freelancer.type.replace(' ', '-').toLowerCase()}`}>
              {freelancer.type}
            </span>
            <span className="freelancer-rate">{freelancer.rate}</span>
          </div>
          <div className="freelancer-tags">
            {freelancer.tags.map((tag, index) => (
              <span key={index} className="freelancer-tag">{tag}</span>
            ))}
          </div>
          <div className="freelancer-company-info">
            <div className="freelancer-card-icon">
              <div className="profile-icon">
                <span className="online-indicator"></span>
              </div>
            </div>
            <div className="freelancer-informacoes">
              <i className="fas fa-user freelancer-icon"></i>
              <span className="freelancer-name">{freelancer.name}</span>
              <span className="freelancer-location">
                <i className="fas fa-map-marker-alt"></i> {freelancer.location}
              </span>
              <div className="freelancer-rating-list">
                <i className="fas fa-star"></i> {freelancer.rating} <span>({freelancer.reviews})</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessFreelasList;