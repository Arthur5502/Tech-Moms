import React from 'react';
import { FiTrendingUp, FiTrendingDown, FiUsers, FiPackage, FiBarChart2, FiStar,  } from 'react-icons/fi';
import '../../styles/DashboardUsuario/FreelaData.css';

function PercentDisplay({ isIncreasing }) {
  return (
    <div className="percent-display">
      {isIncreasing ? (
        <FiTrendingUp className="icon icon-up" />
      ) : (
        <FiTrendingDown className="icon icon-down" />
      )}
    </div>
  );
}

function BusinessData() {
  return (
    <section className='container-business'>
      <div className='freela-header'>
        <h1>Dashboard</h1>
      </div>
      <div className='business-filho'>
        <div className='business-data'>
          <div className='business-data-item'>
            <p>Visualizações</p>
            <h2>40,689</h2>
            <div className="percent-display-business">
              <PercentDisplay isIncreasing={true} />
              <span className="valueUp">8.5%</span>
              <span className="text-value">mensal</span>
            </div>
          </div>
          <div className='business-data-img'>
            <FiUsers className='data-icon'/>
          </div>
        </div>

        <div className='business-data'>
          <div className='business-data-item'>
            <p>Projetos</p>
            <h2>29</h2>
            <div className="percent-display-business">
              <PercentDisplay isIncreasing={true} />
              <span className="valueUp">1.3%</span>
              <span className="text-value">mensal</span>
            </div>
          </div>
          <div className='business-data-img'>
            <FiPackage className='data-icon'/>
          </div>
        </div>

        <div className='business-data'>
          <div className='business-data-item'>
            <p>Renda</p>
            <h2>$890,00</h2>
            <div className="percent-display-business">
              <PercentDisplay isIncreasing={false} />
              <span className="valueDown">4.3%</span>
              <span className="text-value">mensal</span>
            </div>
          </div>
          <div className='business-data-img'>
            <FiBarChart2 className='data-icon'/>
          </div>
        </div>

        <div className='business-data'>
          <div className='business-data-item'>
            <p>Avaliações</p>
            <h2>4.9 (17)</h2>
            <div className="percent-display-business">
              <PercentDisplay isIncreasing={true} />
              <span className="valueUp">1.8%</span>
              <span className="text-value">mensal</span>
            </div>
          </div>
          <div className='business-data-img'>
            <FiStar className='data-icon'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessData;
