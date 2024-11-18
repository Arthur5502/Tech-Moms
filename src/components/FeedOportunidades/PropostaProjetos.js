import React from 'react';
import '../../styles/FeedCssOportunidade/PropostaProjetos.css';
import { FaMapMarkerAlt, FaStar, FaRegBookmark } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaEllipsisH } from "react-icons/fa";

const PropostaProjetos = () => {
  return (
    <body>
        {/*Primeira linha*/ }
      <div className="display-flex">
        <div className="box">
          <h1 id="ux">
            UI/UX Designer
            <FaEllipsisH id="tres-pontos" />
          </h1>

          <div className="bordaFreelancer">
            <h2 id="Freelancer">FREELANCER</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
        </div>

        <div className="box">
          <h1 id="ux">
            UX Designer
            <FaEllipsisH id="tres-pontos1" />
          </h1>

          <div className="tempo-integral">
            <h2 id="integral-texto">TEMPO INTEGRAL</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
        </div>

        <div className="box">
          <h1 id="ux">
        Gerente de Projetos
        <FaEllipsisH id="tres-pontos2" />
          </h1>

          <div className="tempo-integral">
            <h2 id="integral-texto">TEMPO INTEGRAL</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          <div id="quebra">
            {/*Segunda linha*/}  
          <div className="display-flex1">
        <div className="box">
          <h1 id="ux">
            Designer Gráfico
            <FaEllipsisH id="tres-pontos4" />
          </h1>

          <div className="bordaFreelancer">
            <h2 id="Freelancer">FREELANCER</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
        </div>

        <div className="box">
          <h1 id="ux">
            UI/UX Designer
            <FaEllipsisH id="tres-pontos" />
          </h1>

          <div className="bordaFreelancer">
            <h2 id="Freelancer">FREELANCER</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
        </div>
        <div className="box">
          <h1 id="ux">
            Gerente de Projetos
            <FaEllipsisH id="tres-pontos2" />
          </h1>

          <div className="tempo-integral">
            <h2 id="integral-texto">TEMPO INTEGRAL</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          
          <div id="quebra"> 
            {/*Terceira linha*/}
          <div className="display-flex1">
        <div className="box">
          <h1 id="ux">
            Engenheiro de software
            <FaEllipsisH id="tres-pontos5" />
          </h1>

          <div className="tempo-integral">
            <h2 id="integral-texto">TEMPO INTEGRAL</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          
        </div>
        <div className="box">
          <h1 id="ux">
            Engenheiro de software
            <FaEllipsisH id="tres-pontos5" />
          </h1>

          <div className="tempo-integral">
            <h2 id="integral-texto">TEMPO INTEGRAL</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
        </div>
        <div className="box">
          <h1 id="ux">
            Desenvolvedor back-end
            <FaEllipsisH id="tres-pontos6" />
          </h1>

          <div className="meio-periodo">
            <h2 id="periodo-texto">MEIO PERÍODO</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          <div id="quebra">
            {/*Quarta linha*/}  
          <div className="display-flex1">
        <div className="box">
          <h1 id="ux">
            Desenvolvedor back-end
            <FaEllipsisH id="tres-pontos6" />
          </h1>

          <div className="tempo-integral">
            <h2 id="integral-texto">TEMPO INTEGRAL</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          </div>
          <div className="box">
          <h1 id="ux">
            Gerente de Projetos
            <FaEllipsisH id="tres-pontos2" />
          </h1>

          <div className="tempo-integral">
            <h2 id="integral-texto">TEMPO INTEGRAL</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          </div>
          <div className="box">
          <h1 id="ux">
            Desenvolvedor front-end
            <FaEllipsisH id="tres-pontos7" />
          </h1>

          <div className="meio-periodo">
            <h2 id="periodo-texto">MEIO PERÍODO</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          <div id="quebra">
            {/*Quinta linha*/}  
          <div className="display-flex1">
        <div className="box">
          <h1 id="ux">
            Desenvolvedor front-end
            <FaEllipsisH id="tres-pontos7" />
          </h1>

          <div className="bordaFreelancer">
            <h2 id="Freelancer">FREELANCER</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          
          </div>
          <div className="box">
          <h1 id="ux">
            Gerente de Projetos
            <FaEllipsisH id="tres-pontos2" />
          </h1>

          <div className="tempo-integral">
            <h2 id="integral-texto">TEMPO INTEGRAL</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          </div>
          <div className="box">
          <h1 id="ux">
            UI/UX Designer
            <FaEllipsisH id="tres-pontos" />
          </h1>

          <div className="meio-periodo">
            <h2 id="periodo-texto">MEIO PERÍODO</h2>
            <span id="salario">Salário: R$ 20.000 - R$ 25.000</span>
          </div>

          <div className="borda-back">
            <span id="back-end">BACK-END</span>
            <div className="borda-junior">
              <span id="junior">JUNIOR</span>
            </div>
          </div>

          <div className="google-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="logo"
            />
            <span id="google-inc">
              Google Inc.
              <span id="localizacao">
                <FaMapMarkerAlt id="icone" />
                Recife, Brasil
              </span>
            </span>
          </div>

          <div className="rating-bookmark">
            <div className="rating">
              <FaStar id="estrela" />
              <span id="rating-text">5.0 (378)</span>
            </div>
            <FaRegBookmark id="bookmark" />
          </div>
          </div>
          </div>
          <div id="display-seta">
    <button id="seta1"><FiArrowLeft /></button>
    <button id="numero1" class="numero">01</button>
    <button id="numero2" class="numero">02</button>
    <button id="numero3" class="numero">03</button>
    <button id="numero4" class="numero">04</button>
    <button id="seta2"><FiArrowRight /></button>
    </div>

          </div>
          </div>
        </div>
        </div>
            </div>
            </div>
        </div>
        </div>
        </div>
          </div>
        </div>
        </div>
    </body>
  );
};

export default PropostaProjetos;
