import React from 'react';
import { Inverted } from '../../models/propTypes';
import NavBar from '../navBar/NavBar';

const AboutBanner = ({ inverted }: Inverted) => {
  return (
    <header className={`about_container container${inverted ? ' inverted' : ''}`}>
      <NavBar inverted={inverted} />
      <section className="lead_container">
        <div className="info">
          <h4>About</h4>
          <h1>We love to make great things, things that matter.</h1>
        </div>
        <div className="desc">
          <p>
            Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator
            success deployment non-disclosure.
          </p>
        </div>
      </section>
    </header>
  );
};

export default AboutBanner;
