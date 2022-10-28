import React from 'react';
import { Inverted } from '../../../models/propTypes';

const OurNumbers = ({ inverted }: Inverted) => {
  return (
    <section className={`our_numbers_container container${inverted ? ' inverted' : ''}`}>
      <div className="lead_container">
        <div className="info">
          <h4>Our numbers</h4>
          <h2>Handshake infographic mass market crowdfunding iteration.</h2>
        </div>
        <div className="company_stats_contain">
          <div className="stats_item">
            <h3>120m</h3>
            <p>Cool feature title</p>
          </div>
          <div className="stats_item">
            <h3>10.000</h3>
            <p>Cool feature title</p>
          </div>
          <div className="stats_item">
            <h3>240</h3>
            <p>Cool feature title</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
