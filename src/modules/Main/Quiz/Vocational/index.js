import React, { useState, useEffect } from 'react';
import quiz1 from '../../../../assets/img/quiz1.png'
import quiz2 from '../../../../assets/img/quiz2.png'
import quiz3 from '../../../../assets/img/quiz3.png'
import quiz4 from '../../../../assets/img/quiz4.png'
import closeSvg from '../../../../assets/icons/close.svg'
import heartSvg from '../../../../assets/icons/heart.svg'
import { useDispatch } from 'react-redux';
import LazyImage from '../../../../components/LazyImage'

function Vocational() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(1);

  function onNext() {
    if(index +1 != 5)
    {
      setIndex(index + 1);
    }
    else{
      dispatch(togglePage())
    }
  }

  function togglePage(){
    return {
      type: "TOGGLE_PAGE",
      pageQuiz: 1
    }
  }
  
  return (
    <div className="uk-flex uk-flex-center uk-flex-column uk-flex-middle">
      <div className="uk-text-lead uk-margin-top uk-text-primary-dark uk-text-bold">
        Quiz interativo
    </div>
      <div className="uk-grid uk-grid-small uk-flex uk-flex-center">
        <div className="uk-flex uk-width-1-2@m">
          <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true;finite: true">
            <ul className="uk-slider-items uk-grid">
              <li className="uk-width-1-1">
                <div className="uk-panel">
                  <LazyImage image={quiz1} />
                </div>
              </li>
              <li className="uk-width-1-1">
                <div className="uk-panel">
                <LazyImage image={quiz2} />
                </div>
              </li>
              <li className="uk-width-1-1">
                <div className="uk-panel">
                <LazyImage image={quiz3} />
                </div>
              </li>
              <li className="uk-width-1-1">
                <div className="uk-panel">
                <LazyImage image={quiz4} />
                </div>
              </li>
              <li className="uk-width-1-1">
              </li>
            </ul>
            <div className="uk-text-secondary" style={{ fontSize: '17px' }}>
              <span className="uk-text-bold">{index}</span> de 4
          </div>
            <div className="uk-flex uk-flex-center">
              <a href="#" onClick={() => onNext()} className="uk-padding-small uk-button uk-border-circle uk-button-white uk-box-shadow-medium" uk-slidenav-next uk-slider-item="next"><img src={closeSvg} alt="" /></a>
              <div className="uk-margin-left"></div>
              <a href="#" onClick={() => onNext()} className="uk-padding-small uk-button uk-border-circle uk-button-white uk-box-shadow-medium" uk-slidenav-next uk-slider-item="next"><img src={heartSvg} alt="" /></a>
            </div>
            <br />
          </div>
        </div>
        <div className="uk-card uk-card-default uk-card-small uk-card-body uk-margin-left uk-border-rounded uk-width-1-1 uk-width-1-4@s" style={{ height: '380px' }}>
          <div className="uk-card-title" style={{ color: '#4E4E4E' }}>
            Instruções:
        </div>
          <div className="">
            <div className="uk-margin-top uk-flex">
              <img src={heartSvg} width="60px" className="uk-padding-small uk-margin-right" alt="" />
              <div className="uk-text-description">
                Clique no ícone de coração quando encontrar uma afirmativa que você se identifique.
            </div>
            </div>
            <div className="uk-margin-top uk-flex">
              <img src={closeSvg} width="60px" className="uk-padding-small uk-margin-right" alt="" />
              <div className="uk-text-description">
                Clique no X, caso ache que a informação não se adequa a você.
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vocational;