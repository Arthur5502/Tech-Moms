import React from 'react';
import '../../stylesDashBoard/FreelaData.css';

function FreelaData() {
  return (
    <section className='container-freela'>
        <div className='freela-header'>
            <h1>Dashboard</h1>
        </div>
        <div className='freela-data'>
            <div className='freela-data-item'>
                <p>Visualizações</p>
                <h2>40,689</h2>
            </div>
            <div className='freela-data-img'>
                <img src='' alt='Visualizações'/>
            </div>
        </div>
        <div className='freela-data'>
            <div className='freela-data-item'>
                <p>Pedidos</p>
                <h2>29</h2>
            </div>
            <div className='freela-data-img'>
                <img src='' alt='Visualizações'/>
            </div>
        </div>
        <div className='freela-data'>
            <div className='freela-data-item'>
                <p>Renda</p>
                <h2>$890,00</h2>
            </div>
            <div className='freela-data-img'>
                <img src='' alt='Visualizações'/>
            </div>
        </div>
        <div className='freela-data'>
            <div className='freela-data-item'>
                <p>Avaliações</p>
                <h2>4.9 (17)</h2>
            </div>
            <div className='freela-data-img'>
                <img src='' alt='Visualizações'/>
            </div>
        </div>
    </section>
  );
}

export default FreelaData;