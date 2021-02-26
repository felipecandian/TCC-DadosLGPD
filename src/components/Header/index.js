import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/icons/logo.svg'

function Header() {
  return (
    <header style={{ backgroundColor: '#D2B1F7' }}>
      <div className="uk-container">
        <nav className="uk-navbar uk-navbar">
          <div className="uk-navbar-left">
            <Link to="/"><img src={logoSvg} alt=""/></Link>
            <ul className="uk-navbar-nav uk-visible@m">
              <li ><Link to="/" style={{ color: '#3C3543', fontSize: '14px', fontWeight: 600 }} href="#">Home</Link></li>
              <li ><a href="/#how" style={{ color: '#3C3543', fontSize: '14px', fontWeight: 600 }} >Como funciona</a></li>
              <li ><Link to="/quiz" style={{ color: '#3C3543', fontSize: '14px', fontWeight: 600 }} href="/quiz">Score</Link></li>
              <li ><Link to="/mentoring" style={{ color: '#3C3543', fontSize: '14px', fontWeight: 600 }} href="/quiz">DPO</Link></li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <button className="uk-icon-button uk-hidden@m uk-icon" uk-icon="menu" uk-toggle="target: #side-menu"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="menu"><rect x="2" y="4" width="16" height="1"></rect><rect x="2" y="9" width="16" height="1"></rect><rect x="2" y="14" width="16" height="1"></rect></svg></button>
            <div className="uk-navbar-item uk-visible@m">
                <button style={{width:'100px', padding: 0}} className="uk-button uk-text-primary uk-border-rounded uk-text-bold">Login</button>
                <button style={{width:'100px', padding: 0}} className="uk-button uk-button-primary uk-border-rounded uk-margin-left uk-text-bold">Criar conta</button>
            </div>
          </div>
        </nav>
        <div id="side-menu" className="uk-offcanvas" uk-offcanvas="flip: true;mode: push; overlay: true">
          <div className="uk-offcanvas-bar">
            <button className="uk-offcanvas-close uk-icon uk-close" type="button" uk-close="">
            </button>

            <div className="uk-flex uk-flex-column uk-height-1-1">
              <div>
                <br />
                <br />
                <ul className="uk-nav">
                  <li ><Link to="/" className="uk-text-secondary uk-text-bold" href="#">Home</Link></li>
                  <li ><a className="uk-text-secondary uk-text-bold" href="/#how">Como funciona o score</a></li>
                  <li ><Link to="/quiz" className="uk-text-secondary uk-text-bold" href="/quiz">Score</Link></li>
                  <li ><Link to="/quiz" className="uk-text-secondary uk-text-bold" href="/mentoring">Especialistas</Link></li>
                </ul>
                <div className="uk-navbar-item">
                <button style={{width:'100px', padding: 0}} className="uk-button uk-text-primary uk-border-rounded uk-text-bold">Login</button>
                <button style={{width:'100px', padding: 0}} className="uk-button uk-button-primary uk-border-rounded uk-margin-left uk-text-bold">Criar conta</button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;