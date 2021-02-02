import React, { useState } from 'react';
import tiktokSvg from '../../../../assets/icons/tiktok.svg'
import instagramSvg from '../../../../assets/icons/instagram.svg'
import facebookSvg from '../../../../assets/icons/facebook.svg'
import radarSvg from '../../../../assets/icons/radar.svg'
import horizontalSvg from '../../../../assets/icons/horizontal.svg'
import { HorizontalBar, Radar } from '@reactchartjs/react-chart.js'
import Svg01 from '../../../../assets/icons/01.svg'
import youtubeSvg from '../../../../assets/icons/youtube.svg'
import luanPng from '../../../../assets/img/luan.png'
import graduacao1Png from '../../../../assets/img/graduacao1.png'
import graduacao2Png from '../../../../assets/img/graduacao2.png'
import graduacao3Png from '../../../../assets/img/graduacao3.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './reactCalendar.css'
import LazyImage from '../../../../components/LazyImage'
import { Link } from 'react-router-dom';

const data = {
  labels: ['Capacidade Analítica', 'Pensamento Critico', 'Sociabilidade', 'Criatividade', 'Tomada de risco', 'Planejamento e organização', 'Influência'],
  datasets: [
    {
      label: 'Perfil',
      data: [2, 3, 3, 5, 2, 3, 4],
      backgroundColor: 'rgba(140, 48, 245, 0.2)',
      borderColor: '#8C30F5',
      borderWidth: 2,
    },
  ],
}
const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
}
const optionsBar = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

function ResultQuiz() {
  const [isRadar, setIsRadar] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState(new Date());

  return (
    <div className="container">
      <div className="uk-text-lead uk-text-center uk-margin-top uk-text-primary-dark uk-text-bold">
        Seu resultado
      </div>
      <br />
     
      <div className="uk-flex uk-flex-center uk-margin-top uk-flex-column uk-flex-middle">
        <div className="uk-card uk-card-body uk-card-default uk-width-1-1 uk-width-1-2@s">
          <div className="uk-card-title uk-flex">
            <a onClick={() => setIsRadar(true)} className="uk-icon-button uk-box-shadow-medium"><img src={radarSvg} alt="" /></a>
            <div className="uk-margin-small-right"></div>
            <a onClick={() => setIsRadar(false)} className="uk-icon-button uk-box-shadow-medium"><img src={horizontalSvg} alt="" /></a>
          </div>
          {isRadar ? <Radar data={data} options={options} /> : <HorizontalBar data={data} options={optionsBar} />}
        </div>
        <br />
      </div>
      <div className="uk-flex uk-flex-center uk-margin-top uk-flex-column uk-flex-middle">
        <div className="uk-width-1-1 uk-width-1-2@s">
          <div className="uk-text-primary-dark uk-text-bold uk-text-large uk-text-left">
            Análise
          </div>
          <div style={{ color: '#666666' }} className="uk-margin-top" >
            Você gosta de se relacionar com o público, e exerce grande influência por onde passa. Sua criatividade aliada ao pensamento crítico e a capacidade analítica fazem de você um grande estrategista. Procure planejar com cuidado seus projetos e organizá-los com atenção, já que prefere evitar correr grandes riscos.
          </div>
          <br />
          <div className="uk-text-primary-dark uk-text-bold uk-text-large uk-text-left">
            Pontos 
          </div>
          <div className="uk-margin-top">
            <ul className="uk-accordion" uk-accordion="collapsible: true">
              <li className="uk-card uk-card-body uk-card-default">
                <a onClick={() => setIsOpen(isOpen == true ? false : true)} className="uk-accordion-title uk-flex uk-flex-between uk-flex-middle">
                  <div className="uk-flex">
                    <img className="uk-margin-right" src={Svg01} alt="" />
                    <div className="uk-text-bold">
                      Influenciador digital
                    </div>
                  </div>
                  <div className="uk-text-meta uk-width-1-2" style={{ color: '#666666', fontSize: '14px' }}>
                    Utiliza os meios de comunicação para compartilhar seus hábitos, buscando inspirar e influenciar pessoas. As oportunidades de negócios podem estar na divulgação de produtos ou serviços, geralmente segmentados a partir do perfil do influenciador .
                  </div>
                  <span className="uk-icon-link uk-text-secondary" uk-icon={isOpen ? `chevron-down` : `chevron-up`}></span>
                </a>
                <div className="uk-accordion-content">
                  <hr />
                  <div style={{ color: '#18191F' }} className="uk-text-bold uk-text-large">
                    Profissionais prontos para te ajudarem
                  </div>
                  <p style={{ fontSize: "18px" }}>Com base em seus interesses, esses são os  mentores que podem te falar tudo sobre a profissão! Marque uma conversa com eles e fique informado ;) </p>
                  <div className="uk-text-bold">Você possui <span className="uk-text-primary">3</span> mentorias online disponívels</div>
                  <div className="uk-card uk-margin-top uk-card-body uk-card-default">
                    <div className="uk-grid">
                      <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                        <div className="uk-flex uk-flex-middle">
                          <LazyImage image={luanPng} width="150px" />
                          <div className="uk-margin-left">
                            <div className="uk-text-bold uk-text-secondary uk-text-large">
                              Carlos Alberto
                        </div>
                            <div style={{ color: '#696969' }}>
                              Cursando 4 período de <span className="uk-text-primary">Comunicação Social</span> na Universidade Cândido Mendes
                        </div>
                          </div>
                        </div>
                        <p>
                          Desde 2013 faço vídeos experimentais dos mais diversos tipos (desde comerciais, experimentos sociais até esquetes de humor) para o Youtube e redes sociais no geral.
                        </p>
                        <p className="uk-margin-remove">
                          Nesse contexto, sempre apresentei facilidade para ter ideias “fora da caixa” e trabalhar em equipe. Atualmente faço estágio na área de audiovisual e marketing. Tenho grande desejo de aprender e ajudar o outro cada vez mais, através da minha paixão.
                        </p>
                        <div className="uk-flex uk-flex-center">
                          <a style={{ width: '50px', height: '50px' }} className="uk-icon-button uk-border-circle uk-button-white uk-box-shadow-medium"><img src={youtubeSvg} width="30px" alt="" /></a>
                          <a style={{ width: '50px', height: '50px' }} className="uk-icon-button uk-margin-small-left uk-margin-small-right uk-border-circle uk-button-white uk-box-shadow-medium"><img src={instagramSvg} alt="" /></a>
                          <a style={{ width: '50px', height: '50px' }} className="uk-icon-button uk-border-circle uk-button-white uk-box-shadow-medium"><img src={facebookSvg} alt="" /></a>
                        </div>
                        <Calendar className="uk-flex uk-flex-center uk-flex-column uk-flex-middle"
                          onChange={setValue}
                          locale="pt-BR"
                          value={value} />
                        <div className="uk-flex uk-margin uk-width-1-2 uk-flex-between">
                          <span class="uk-badge uk-padding-small">19:00</span>
                          <span class="uk-badge uk-padding-small">19:30</span>
                          <span class="uk-badge uk-padding-small">20:30</span>
                        </div>
                        <Link to="/mentoring" className="uk-button uk-button-primary uk-border-rounded uk-text-bold"><span uk-icon="icon: clock; ratio:1.3"></span> Agendar mentoria</Link>
                      </div>
                    </div>
                  </div>
                  <div className="uk-text-large uk-text-bold uk-text-secondary">
                    Graduação e cursos
                  </div>
                  <div className="uk-grid uk-margin uk-child-width-1-3@m uk-grid-small uk-grid-match">
                    <div>
                      <LazyImage image={graduacao1Png} />
                      <div className="uk-text-secondary">
                        Graduação em Comunicação Social na PUC-RS (EAD)
                        </div>
                      <a>Saiba mais <span uk-icon="icon: arrow-right"></span></a>
                    </div>
                    <div>
                      <LazyImage image={graduacao2Png} alt="" />
                      <div className="uk-text-secondary">
                        Curso técnico de Teatro na Rede Daltro
                        </div>
                      <a>Saiba mais <span uk-icon="icon: arrow-right"></span></a>
                    </div>
                    <div>
                      <LazyImage image={graduacao3Png} alt="" />
                      <div className="uk-text-secondary">
                        Curso Influência Digital com Léo Andrade
                      </div>
                      <a>Saiba mais <span uk-icon="icon: arrow-right"></span></a>
                    </div>
                  </div>
                  <div className="uk-text-large uk-text-bold uk-text-secondary">
                    Grupos e ONGs
                  </div>
                  <p>Esses grupos e ONGs podem te ajudar dando apoio socioeconômico</p>
                  <div className="uk-grid-small uk-grid">
                    <span className="uk-badge uk-margin-small-right uk-padding-small">ONG TETO</span>
                    <span className="uk-badge uk-padding-small">GRUPO INFLUENCERS BR (WHATSAPP)</span>
                    <span className="uk-badge uk-margin-small-left uk-padding-small">PROJETO SEMEANDO O AMANHÃ</span>
                  </div>
                </div>
              </li>
              <li className="uk-card uk-card-body uk-card-default">
                <a onClick={() => setIsOpen(isOpen == true ? false : true)} className="uk-accordion-title uk-flex uk-flex-between uk-flex-middle">
                  <div className="uk-flex">
                    <img className="uk-margin-right" src={Svg01} alt="" />
                    <div className="uk-text-bold">
                      Analista de redes sociais
                    </div>
                  </div>
                  <div className="uk-text-meta uk-width-1-2" style={{ color: '#666666', fontSize: '14px' }}>
                    Gerencia o conteúdo online a partir de estratégias de marketing, promovendo marcas, gerando leads, negócios e se relacionando com o público. O monitoramento e análise de performance também são pontos importantes.
                  </div>
                  <span className="uk-icon-link uk-text-secondary" uk-icon={isOpen ? `chevron-down` : `chevron-up`}></span>
                </a>
                <div className="uk-accordion-content">
                  <hr />
                  <div style={{ color: '#18191F' }} className="uk-text-bold uk-text-large">
                    Profissionais prontos para te ajudarem
                  </div>
                  <p style={{ fontSize: "18px" }}>Com base em seus interesses, esses são os  mentores que podem te falar tudo sobre a profissão! Marque uma conversa com eles e fique informado ;) </p>
                  <div className="uk-text-bold">Você possui <span className="uk-text-primary">3</span> mentorias online disponívels</div>
                  <div className="uk-card uk-margin-top uk-card-body uk-card-default">
                    <div className="uk-grid">
                      <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                        <div className="uk-flex uk-flex-middle">
                          <LazyImage image={luanPng} width="150px" />
                          <div className="uk-margin-left">
                            <div className="uk-text-bold uk-text-secondary uk-text-large">
                              Carlos Alberto
                        </div>
                            <div style={{ color: '#696969' }}>
                              Cursando 4 período de <span className="uk-text-primary">Comunicação Social</span> na Universidade Cândido Mendes
                        </div>
                          </div>
                        </div>
                        <p>
                          Desde 2013 faço vídeos experimentais dos mais diversos tipos (desde comerciais, experimentos sociais até esquetes de humor) para o Youtube e redes sociais no geral.
                        </p>
                        <p className="uk-margin-remove">
                          Nesse contexto, sempre apresentei facilidade para ter ideias “fora da caixa” e trabalhar em equipe. Atualmente faço estágio na área de audiovisual e marketing. Tenho grande desejo de aprender e ajudar o outro cada vez mais, através da minha paixão.
                        </p>
                        <div className="uk-flex uk-flex-center">
                          <a style={{ width: '50px', height: '50px' }} className="uk-icon-button uk-border-circle uk-button-white uk-box-shadow-medium"><img src={youtubeSvg} width="30px" alt="" /></a>
                          <a style={{ width: '50px', height: '50px' }} className="uk-icon-button uk-margin-small-left uk-margin-small-right uk-border-circle uk-button-white uk-box-shadow-medium"><img src={instagramSvg} alt="" /></a>
                          <a style={{ width: '50px', height: '50px' }} className="uk-icon-button uk-border-circle uk-button-white uk-box-shadow-medium"><img src={facebookSvg} alt="" /></a>
                        </div>
                        <Calendar
                          onChange={setValue}
                          locale="pt-BR"
                          value={value} />
                        <div className="uk-flex uk-margin uk-width-2-3 uk-flex-between">
                          <span class="uk-badge uk-padding-small">19:00</span>
                          <span class="uk-badge uk-padding-small">19:30</span>
                          <span class="uk-badge uk-padding-small">20:30</span>
                        </div>
                        <Link to="/mentoring" className="uk-button uk-button-primary uk-border-rounded uk-text-bold"><span uk-icon="icon: clock; ratio:1.3"></span> Agendar mentoria</Link>
                      </div>
                    </div>
                  </div>
                  <div className="uk-text-large uk-text-bold uk-text-secondary">
                    Graduação e cursos
                  </div>
                  <div className="uk-grid uk-margin uk-child-width-1-3@m uk-grid-small uk-grid-match">
                    <div>
                      <LazyImage image={graduacao1Png} />
                      <div className="uk-text-secondary">
                        Graduação em Comunicação Social na PUC-RS (EAD)
                        </div>
                      <a>Saiba mais <span uk-icon="icon: arrow-right"></span></a>
                    </div>
                    <div>
                      <LazyImage image={graduacao2Png} alt="" />
                      <div className="uk-text-secondary">
                        Curso técnico de Teatro na Rede Daltro
                        </div>
                      <a>Saiba mais <span uk-icon="icon: arrow-right"></span></a>
                    </div>
                    <div>
                      <LazyImage image={graduacao3Png} alt="" />
                      <div className="uk-text-secondary">
                        Curso Influência Digital com Léo Andrade
                      </div>
                      <a>Saiba mais <span uk-icon="icon: arrow-right"></span></a>
                    </div>
                  </div>
                  <div className="uk-text-large uk-text-bold uk-text-secondary">
                    Grupos e ONGs
                  </div>
                  <p>Esses grupos e ONGs podem te ajudar dando apoio socioeconômico</p>
                  <div className="uk-grid-small uk-grid">
                    <span className="uk-badge uk-margin-small-right uk-padding-small">ONG TETO</span>
                    <span className="uk-badge uk-padding-small">GRUPO INFLUENCERS BR (WHATSAPP)</span>
                    <span className="uk-badge uk-margin-small-left uk-padding-small">PROJETO SEMEANDO O AMANHÃ</span>
                  </div>
                </div>
              </li>
              <li className="uk-card uk-card-body uk-card-default">
                <a onClick={() => setIsOpen(isOpen == true ? false : true)} className="uk-accordion-title uk-flex uk-flex-between uk-flex-middle">
                  <div className="uk-flex">
                    <img className="uk-margin-right" src={Svg01} alt="" />
                    <div className="uk-text-bold">
                      Publicitário
                    </div>
                  </div>
                  <div className="uk-text-meta uk-width-1-2" style={{ color: '#666666', fontSize: '14px' }}>
                    Realiza campanhas de divulgação para produtos, criando estratégias de venda, marcas, logotipos, embalagens, outdoors, etc. Pode atuar como autônomo ou fazer parte de uma equipe em uma agência de publicidade.Mattis et sed nam sem tellus erat.
                  </div>
                  <span className="uk-icon-link uk-text-secondary" uk-icon={isOpen ? `chevron-down` : `chevron-up`}></span>
                </a>
                <div className="uk-accordion-content">
                  <hr />
                  <div style={{ color: '#18191F' }} className="uk-text-bold uk-text-large">
                    Profissionais prontos para te ajudarem
                  </div>
                  <p style={{ fontSize: "18px" }}>Com base em seus interesses, esses são os  mentores que podem te falar tudo sobre a profissão! Marque uma conversa com eles e fique informado ;) </p>
                  <div className="uk-text-bold">Você possui <span className="uk-text-primary">3</span> mentorias online disponívels</div>
                  <div className="uk-card uk-margin-top uk-card-body uk-card-default">
                    <div className="uk-grid">
                      <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                        <div className="uk-flex uk-flex-middle">
                          <LazyImage image={luanPng} width="150px" />
                          <div className="uk-margin-left">
                            <div className="uk-text-bold uk-text-secondary uk-text-large">
                              Carlos Alberto
                        </div>
                            <div style={{ color: '#696969' }}>
                              Cursando 4 período de <span className="uk-text-primary">Comunicação Social</span> na Universidade Cândido Mendes
                        </div>
                          </div>
                        </div>
                        <p>
                          Desde 2013 faço vídeos experimentais dos mais diversos tipos (desde comerciais, experimentos sociais até esquetes de humor) para o Youtube e redes sociais no geral.
                        </p>
                        <p className="uk-margin-remove">
                          Nesse contexto, sempre apresentei facilidade para ter ideias “fora da caixa” e trabalhar em equipe. Atualmente faço estágio na área de audiovisual e marketing. Tenho grande desejo de aprender e ajudar o outro cada vez mais, através da minha paixão.
                        </p>
                        <div className="uk-flex uk-flex-center">
                          <a style={{ width: '50px', height: '50px' }} className="uk-icon-button uk-border-circle uk-button-white uk-box-shadow-medium"><img src={youtubeSvg} width="30px" alt="" /></a>
                          <a style={{ width: '50px', height: '50px' }} className="uk-icon-button uk-margin-small-left uk-margin-small-right uk-border-circle uk-button-white uk-box-shadow-medium"><img src={instagramSvg} alt="" /></a>
                          <a style={{ width: '50px', height: '50px' }} className="uk-icon-button uk-border-circle uk-button-white uk-box-shadow-medium"><img src={facebookSvg} alt="" /></a>
                        </div>
                        <Calendar
                          onChange={setValue}
                          locale="pt-BR"
                          value={value} />
                        <div className="uk-flex uk-margin uk-width-2-3 uk-flex-between">
                          <span class="uk-badge uk-padding-small">19:00</span>
                          <span class="uk-badge uk-padding-small">19:30</span>
                          <span class="uk-badge uk-padding-small">20:30</span>
                        </div>
                        <Link to="/mentoring" className="uk-button uk-button-primary uk-border-rounded uk-text-bold"><span uk-icon="icon: clock; ratio:1.3"></span> Agendar mentoria</Link>
                      </div>
                    </div>
                  </div>
                  <div className="uk-text-large uk-text-bold uk-text-secondary">
                    Graduação e cursos
                  </div>
                  <div className="uk-grid uk-margin uk-child-width-1-3@m uk-grid-small uk-grid-match">
                    <div>
                      <LazyImage image={graduacao1Png} />
                      <div className="uk-text-secondary">
                        Graduação em Comunicação Social na PUC-RS (EAD)
                        </div>
                      <a>Saiba mais <span uk-icon="icon: arrow-right"></span></a>
                    </div>
                    <div>
                      <LazyImage image={graduacao2Png} alt="" />
                      <div className="uk-text-secondary">
                        Curso técnico de Teatro na Rede Daltro
                        </div>
                      <a>Saiba mais <span uk-icon="icon: arrow-right"></span></a>
                    </div>
                    <div>
                      <LazyImage image={graduacao3Png} alt="" />
                      <div className="uk-text-secondary">
                        Curso Influência Digital com Léo Andrade
                      </div>
                      <a>Saiba mais <span uk-icon="icon: arrow-right"></span></a>
                    </div>
                  </div>
                  <div className="uk-text-large uk-text-bold uk-text-secondary">
                    Grupos e ONGs
                  </div>
                  <p>Esses grupos e ONGs podem te ajudar dando apoio socioeconômico</p>
                  <div className="uk-grid-small uk-grid">
                    <span className="uk-badge uk-margin-small-right uk-padding-small">ONG TETO</span>
                    <span className="uk-badge uk-padding-small">GRUPO INFLUENCERS BR (WHATSAPP)</span>
                    <span className="uk-badge uk-margin-small-left uk-padding-small">PROJETO SEMEANDO O AMANHÃ</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ResultQuiz;