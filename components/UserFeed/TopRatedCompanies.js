import React, { useState } from 'react';
import { FaMicrosoft, FaApple, FaGoogle, FaAmazon, FaFacebook, FaTwitter, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../../styles/UserFeed/TopRatedCompanies.css';

const TopRatedCompanies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const companies = [
    { name: 'Microsoft', rating: '5.0', location: 'Recife, Brasil', jobs: 3, icon: <FaMicrosoft /> },
    { name: 'Apple', rating: '5.0', location: 'Recife, Brasil', jobs: 3, icon: <FaApple /> },
    { name: 'Google Inc.', rating: '5.0', location: 'Recife, Brasil', jobs: 3, icon: <FaGoogle /> },
    { name: 'Amazon', rating: '4.8', location: 'Recife, Brasil', jobs: 5, icon: <FaAmazon /> },
    { name: 'Facebook', rating: '4.9', location: 'Recife, Brasil', jobs: 4, icon: <FaFacebook /> },
    { name: 'Twitter', rating: '4.7', location: 'Recife, Brasil', jobs: 2, icon: <FaTwitter /> },
  ];

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="top-rated-companies-container">
      <h2 className="top-rated-companies-title">Empresas Mais Avaliadas</h2>
      <div className="top-rated-companies-list">
        {companies.map((company, index) => (
          <div key={index} className="top-rated-companies-card">
            <div className="top-rated-companies-badge">DESTAQUE</div>
            <div className="top-rated-companies-card-icon">{company.icon}</div>
            <h3 className="top-rated-companies-card-title">{company.name}</h3>
            <div className="top-rated-companies-rating">
              <span>⭐ {company.rating}</span>
            </div>
            <div className="top-rated-companies-location">
              <p>{company.location}</p>
            </div>
            <div className="top-rated-companies-jobs">
              <p>Vagas Abertas ({company.jobs})</p>
            </div>
          </div>
        ))}
      </div>
      <div className="top-rated-companies-pagination">
        <button
          className="top-rated-companies-pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`top-rated-companies-pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="top-rated-companies-pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TopRatedCompanies;