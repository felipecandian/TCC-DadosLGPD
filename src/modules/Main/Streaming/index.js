import React from 'react';
import streamSvg from '../../../assets/icons/stream.svg'
import LazyImage from '../../../components/LazyImage';


function Streaming() {
  return (
    <div className="uk-flex uk-flex-center uk-flex-column uk-flex-middle uk-position-center">
    <LazyImage image={streamSvg} width="120px" height="92px" alt="" />

    <div className="uk-text-lead uk-text-center uk-margin-top uk-text-primary uk-text-bold">
          Chamando mentor 
          <br />
    </div>
    <div style={{color:"#717171"}} className="uk-text-large uk-text-center uk-margin-top">
           Você entrará na chamada assim que houver resposta 
    </div>
  </div>
  );
}

export default Streaming;
