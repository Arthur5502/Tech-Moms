import React from 'react';
import '../../styles/BusinessFeed/BusinessFreelasList.css';

const freelancers = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  title: index % 2 === 0 ? 'UI/UX Designer' : 'Engenheiro de Software',
  name: index % 2 === 0 ? 'Freela Mom' : 'Mom Freela',
  location: 'Recife, Brasil',
  type: index % 3 === 0 ? 'Freelancer' : 'Freelancer',
  rate: index % 2 === 0 ? 'R$ 100/hora' : 'R$ 150/hora',
  tags: ['Back-End', 'Júnior'],
  rating: '5.0',
  reviews: 8,
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
          <div className="freelancer-info">
            <i className="fas fa-user freelancer-icon"></i>
            <span className="freelancer-name">{freelancer.name}</span>
            <span className="freelancer-location">
              <i className="fas fa-map-marker-alt"></i> {freelancer.location}
            </span>
          </div>
          <div className="freelancer-rating">
            <i className="fas fa-star"></i> {freelancer.rating} <span>({freelancer.reviews})</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessFreelasList;