import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../../styles/BusinessFeed/BusinessTopRatedFreelas.css';

const BusinessTopRatedFreelas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const freelancers = [
    { name: 'Mãe Freelancer', rating: '5.0', location: 'Recife, Brasil' },
    { name: 'Freelancer Mom', rating: '5.0', location: 'Recife, Brasil' },
    { name: 'Mom Freela', rating: '5.0', location: 'Recife, Brasil' },
    { name: 'Mãe Freela', rating: '4.8', location: 'Recife, Brasil' },
    { name: 'Mamãe Freelancer', rating: '4.9', location: 'Recife, Brasil' },
    { name: 'Freela Mom', rating: '4.7', location: 'Recife, Brasil' },
  ];

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="freelancers-list-container">
      <h2 className="freelancers-title">Freelancers Mais Avaliados</h2>
      <div className="freelancers-list">
        {freelancers.map((freelancer, index) => (
          <div key={index} className="freelancer-card">
            <div className="freelancer-badge">DESTAQUE</div>
            <div className="freelancer-card-icon">
              <div className="profile-icon">
                <span className="online-indicator"></span>
              </div>
            </div>
            <h3 className="freelancer-card-title">{freelancer.name}</h3>
            <div className="freelancer-rating">
              <span>⭐ {freelancer.rating}</span>
            </div>
            <div className="freelancer-location">
              <p>{freelancer.location}</p>
            </div>
            <div className="freelancer-jobs">
              <p>Contratar</p>
            </div>
          </div>
        ))}
      </div>
      <div className="freelancers-pagination">
        <button
          className="freelancers-pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`freelancers-pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="freelancers-pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BusinessTopRatedFreelas;