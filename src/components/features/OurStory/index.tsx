import React from 'react';
import { Inverted } from '../../../models/propTypes';

const OurStory = ({ inverted }: Inverted) => {
  return (
    <section className={`our_story_container container${inverted ? ' inverted' : ''}`}>
      <div className="lead_container">
        <div className="info">
          <h4>Our story</h4>
          <h2>Handshake infographic mass market crowdfunding iteration.</h2>
        </div>
        <div className="desc">
          <p>
            Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
            iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience
            branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve
            network effects return on investment bootstrapping business-to-consumer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
