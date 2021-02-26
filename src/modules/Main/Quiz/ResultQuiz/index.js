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
  labels: ['Plano de ação', 'Conhecimento da LGPD', 'Plano de emergência', 'Segurança'],
  datasets: [
    {
      label: 'Pontos de analise',
      data: [2, 3, 3, 4],
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
        Seu score de conformidade:
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
            Análise:
          </div>
          <div style={{ color: '#666666' }} className="uk-margin-top" >
            Quando o assunto é proteger dados pessoais e se adequar à Lei Geral de Proteção de Dados (LGPD), conhecer as informações de posse da empresa, saber como elas são coletadas e tratadas, além de organizá-las, é fundamental.
            Nesse sentido, o Mapeamento de Dados é uma das etapas mais importantes no compliance às leis de proteção de dados e privacidade. Também chamado de Data Mapping, esse recurso permite visualizar o ciclo de vida dos dados para identificar possíveis inconformidades.
          </div>
          <br />
          <div className="uk-text-primary-dark uk-text-bold uk-text-large uk-text-left">
            Pontos importante a serem realizados: 
          </div>
          <div className="uk-margin-top">
            <ul className="uk-accordion" uk-accordion="collapsible: true">
              <li className="uk-card uk-card-body uk-card-default">
                <a onClick={() => setIsOpen(isOpen == true ? false : true)} className="uk-accordion-title uk-flex uk-flex-between uk-flex-middle">
                  <div className="uk-flex">
                    <img className="uk-margin-right" src={Svg01} alt="" />
                    <div className="uk-text-bold">
                      Programa de governança
                    </div>
                  </div>
                  <div className="uk-text-meta uk-width-1-2" style={{ color: '#666666', fontSize: '14px' }}>
                    Fornece um overview do cenário atual da sua empresa quanto ao plano de adequação à LGPD e equipe dedicada para o assunto.
                  </div>
                  <span className="uk-icon-link uk-text-secondary" uk-icon={isOpen ? `chevron-down` : `chevron-up`}></span>
                </a>
                <div className="uk-accordion-content">
                  <hr />
                  <div style={{ color: '#18191F' }} className="uk-text-bold uk-text-large">
                    Esses são os encarregados em proteção de dados disponíveis:
                  </div>
                  <p style={{ fontSize: "18px" }}>Com base sua necessidade, esses são os  encarregados que podem te ajudar no processo de compliance! Marque uma conversa com eles e fique informado ;)</p>
                  <div className="uk-text-bold">Você possui <span className="uk-text-primary">2</span> mentorias online disponíveis</div>
                  <div className="uk-card uk-margin-top uk-card-body uk-card-default">
                    <div className="uk-grid">
                      <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                        <div className="uk-flex uk-flex-middle">
                          <LazyImage image={luanPng} width="150px" />
                          <div className="uk-margin-left">
                            <div className="uk-text-bold uk-text-secondary uk-text-large">
                              Felipe
                        </div>
                            <div style={{ color: '#696969' }}>
                              Bacharel em  <span className="uk-text-primary">Direito</span> na Unifagoc
                        </div>
                          </div>
                        </div>
                        <p>
                          Estudante de Ciência da Computação:
                          Conhecimentos em gestão e compliance.
                        </p>
                        <p className="uk-margin-remove">
                          Estou aqui para ajudar sua empresa a mapear todos os dados externos e internos, adotar boas políticas de privacidade e proteção de dados.
                          Entre em contato para saber mais:
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
                        <Link to="/mentoring" className="uk-button uk-button-primary uk-border-rounded uk-text-bold"><span uk-icon="icon: clock; ratio:1.3"></span> Agendar reunião</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="uk-card uk-card-body uk-card-default">
                <a onClick={() => setIsOpen(isOpen == true ? false : true)} className="uk-accordion-title uk-flex uk-flex-between uk-flex-middle">
                  <div className="uk-flex">
                    <img className="uk-margin-right" src={Svg01} alt="" />
                    <div className="uk-text-bold">
                        Mapeamento de Controles
                    </div>
                  </div>
                  <div className="uk-text-meta uk-width-1-2" style={{ color: '#666666', fontSize: '14px' }}>
                    O objetivo dessa etapa é avaliar, de forma geral, os controles já implementados para aumentar a segurança das informações e processos operacionais.
                  </div>
                  <span className="uk-icon-link uk-text-secondary" uk-icon={isOpen ? `chevron-down` : `chevron-up`}></span>
                </a>
                <div className="uk-accordion-content">
                  <hr />
                  <div style={{ color: '#18191F' }} className="uk-text-bold uk-text-large">
                    Esses são os encarregados em proteção de dados disponíveis:
                  </div>
                  <p style={{ fontSize: "18px" }}>Com base sua necessidade, esses são os  encarregados que podem te ajudar no processo de compliance! Marque uma conversa com eles e fique informado ;) </p>
                  <div className="uk-text-bold">Você possui <span className="uk-text-primary">2</span> mentorias online disponíveis</div>
                  <div className="uk-card uk-margin-top uk-card-body uk-card-default">
                    <div className="uk-grid">
                      <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                        <div className="uk-flex uk-flex-middle">
                          <LazyImage image={luanPng} width="150px" />
                          <div className="uk-margin-left">
                            <div className="uk-text-bold uk-text-secondary uk-text-large">
                              Felipe
                        </div>
                            <div style={{ color: '#696969' }}>
                             Bacharel em  <span className="uk-text-primary">Direito</span> na Unifagoc
                        </div>
                          </div>
                        </div>
                        <p>
                          Estudante de Ciência da Computação:
                          Conhecimentos em gestão e compliance.
                        </p>
                        <p className="uk-margin-remove">
                          Estou aqui para ajudar sua empresa a mapear todos os dados externos e internos, adotar boas políticas de privacidade e proteção de dados.
                          Entre em contato para saber mais:
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
                        <Link to="/mentoring" className="uk-button uk-button-primary uk-border-rounded uk-text-bold"><span uk-icon="icon: clock; ratio:1.3"></span> Agendar reunião</Link>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </li>
              <li className="uk-card uk-card-body uk-card-default">
                <a onClick={() => setIsOpen(isOpen == true ? false : true)} className="uk-accordion-title uk-flex uk-flex-between uk-flex-middle">
                  <div className="uk-flex">
                    <img className="uk-margin-right" src={Svg01} alt="" />
                    <div className="uk-text-bold">    
                          Plano de Ação
                    </div>
                  </div>
                  <div className="uk-text-meta uk-width-1-2" style={{ color: '#666666', fontSize: '14px' }}>
                    Visa avaliar o plano de implementação e acompanhamento das iniciativas ligadas à LGPD para melhoria contínua.
                  </div>
                  <span className="uk-icon-link uk-text-secondary" uk-icon={isOpen ? `chevron-down` : `chevron-up`}></span>
                </a>
                <div className="uk-accordion-content">
                  <hr />
                  <div style={{ color: '#18191F' }} className="uk-text-bold uk-text-large">
                    Esses são os encarregados em proteção de dados disponíveis:
                  </div>
                  <p style={{ fontSize: "18px" }}>Com base sua necessidade, esses são os  encarregados que podem te ajudar no processo de compliance! Marque uma conversa com eles e fique informado ;) </p>
                  <div className="uk-text-bold">Você possui <span className="uk-text-primary">2</span> mentorias online disponíveis</div>
                  <div className="uk-card uk-margin-top uk-card-body uk-card-default">
                    <div className="uk-grid">
                      <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                        <div className="uk-flex uk-flex-middle">
                          <LazyImage image={luanPng} width="150px" />
                          <div className="uk-margin-left">
                            <div className="uk-text-bold uk-text-secondary uk-text-large">
                              Felipe
                        </div>
                            <div style={{ color: '#696969' }}>
                              Bacharel em  <span className="uk-text-primary">Direito</span> na Unifagoc
                        </div>
                          </div>
                        </div>
                        <p>
                          Estudante de Ciência da Computação:
                          Conhecimentos em gestão e compliance.
                        </p>
                        <p className="uk-margin-remove">
                          Estou aqui para ajudar sua empresa a mapear todos os dados externos e internos, adotar boas políticas de privacidade e proteção de dados.
                          Entre em contato para saber mais:
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
                        <Link to="/mentoring" className="uk-button uk-button-primary uk-border-rounded uk-text-bold"><span uk-icon="icon: clock; ratio:1.3"></span> Agendar reunião</Link>
                      </div>
                    </div>
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