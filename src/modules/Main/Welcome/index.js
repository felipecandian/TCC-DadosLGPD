import React from 'react';
import image from '../../../assets/img/welcome.png'
import LazyImage from '../../../components/LazyImage'
import Svg01 from '../../../assets/icons/01.svg'
import Svg02 from '../../../assets/icons/02.svg'
import Svg03 from '../../../assets/icons/03.svg'
import welcome2 from '../../../assets/img/welcome2.png'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <div className="" style={{ backgroundColor: '#E3D1F8' }}>
        <div className="uk-container">
          <div className="uk-flex ul-flex-center uk-flex-middle uk-grid" uk-grid="">
            <div className="uk-width-expand uk-text-left uk-text-left@s uk-first-column">
              <h1 className="uk-text-bold uk-text-primary-dark uk-title-welcome" uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true">
                DadosLGPD é um framework de conformidade com a LGPD
            </h1>
              <h4 className="uk-text-muted" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
                Ajudaremos sua empresa entrar em compliance e evitar que sofra vazementos e recebam multas.
            </h4>
            </div>
            <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-last@m">
              <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
                <LazyImage image={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container">
        <div style={{ marginTop: '-40px' }} className="uk-grid uk-child-width-1-3@m uk-grid-small uk-grid-match">
          <div>
            <div className="uk-card uk-card-default uk-text-left uk-card-body uk-margin-bottom uk-border-rounded">
              <img src={Svg01} width="25px" alt="" />
              <br />
              <br />
              <div className="uk-text-bold uk-text-secondary uk-text-large">
                Passo a passo
            </div>
              <div className="uk-margin-top">
                Te ajuraderemos em todo o processo de mapeamento de dados e adotação de estratégias para diagnóstico, planejamento e governança.
            </div>
            </div>
          </div>
          <div>
            <Link to="/quiz">
              <div className="uk-card uk-card-default uk-text-left uk-card-hover uk-card-body uk-margin-bottom uk-border-rounded">
                <img src={Svg02} width="25px" alt="" />
                <br />
                <br />
                <div className="uk-text-bold uk-text-secondary uk-text-large">
                 Score de conformidade
               </div>
                <div className="uk-margin-top">
                  Responda algumas perguntas a respeito do processo de segurança de dados da sua empresa.
                </div>
                <br />
                <div className="uk-text-primary uk-text-meta uk-text-bold">
                  Fazer analise de score <span uk-icon="icon: arrow-right"></span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-text-left uk-card-body uk-margin-bottom uk-border-rounded">
              <img src={Svg03} width="25px" alt="" />
              <br />
              <br />
              <div className="uk-text-bold uk-text-secondary uk-text-large">
                Especialistas DPO
            </div>
              <div className="uk-margin-top">
                Encontre pessoas que podem ajudar sua empresa entrar em conformidade.
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container" id="how">
        <div className="uk-flex ul-flex-center uk-flex-middle uk-grid" uk-grid="">
          <div className="uk-width-expand uk-text-left uk-text-left@s uk-first-column">
            <h1 className="uk-text-bold uk-text-primary-dark uk-text-lead" uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true">
              Como funciona o DadosLGPD:
              </h1>
            <div className="uk-text-muted" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
              Você gosta de falar na frente do espelho ou consegue se concentrar no meio da multidão? Essas são algumas perguntas que ajudarão você a descobrir o que te move.
              </div>
            <br />
            <div className="uk-text-muted" uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
              Clique no botão da direita quando se identificar com a situação descrita, e no botão da esquerda quando ela não fizer muito sentido para você. Ao final dessa jornada, vamos apresentar algumas opções de caminhos que você poderá seguir para alcançar o sucesso profissional.
              </div>

            <br />
            <Link to="/quiz" style={{ width: '146px', padding: 0 }} className="uk-button uk-button-primary uk-border-rounded uk-text-bold">Score LGPD</Link>

          </div>
          <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-last@m">
            <div uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
              <LazyImage image={welcome2} />
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Welcome;