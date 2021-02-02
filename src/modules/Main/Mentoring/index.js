import React from 'react';
import { Link } from 'react-router-dom';
import luanPng from '../../../assets/img/luan.png'
import LazyImage from '../../../components/LazyImage';

function Mentoring() {
    return (
        <div className="uk-container">
            <div className="uk-flex uk-flex-center uk-flex-column uk-flex-middle">
                <div className="uk-text-lead uk-text-center uk-margin-top uk-text-primary-dark uk-text-bold">
                    Suas Mentorias
                </div>
                <div className="uk-text-bold uk-margin-top" style={{ color: '#404040' }}>Você possui <span className="uk-text-primary">2</span> mentorias online disponívels</div>

                <Link to="/streaming" className="uk-card uk-card-default uk-width-1-2 uk-margin-medium-top uk-flex uk-flex-middle">
                    <div className="uk-card-body">
                        <div className="uk-grid uk-flex uk-flex-middle">
                            <div className="uk-flex uk-flex-middle uk-flex-between uk-width-1-2">
                                <LazyImage image={luanPng} width="80px" />
                                <div className="uk-margin-left">
                                    <div className="uk-text-bold uk-text-secondary uk-text-large">
                                        Carlos Alberto
                                </div>
                                    <div style={{ color: '#696969' }}>
                                        Mentoria sobre <span className="uk-text-primary uk-text-bold">Influenciador Digital</span>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-width-1-2">
                                <div className="uk-text-bold">
                                    18 de Fevereiro
                                </div>
                                <div>
                                    19:00
                                </div>
                                Saiba mais <span uk-icon="icon: arrow-right"></span>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="uk-margin-top">
                    <button style={{ padding: '0 15px' }} className="uk-button uk-button-primary uk-border-rounded uk-margin-left uk-text-bold">Quero mais mentorias</button>
                </div>
            </div>
        </div>
    );
}

export default Mentoring;