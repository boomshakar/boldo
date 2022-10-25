import NavBar from '../navBar/NavBar';
import { Inverted } from '../../models/propTypes';
import React from 'react';
import '../../styles/homepage.scss';
import Button from '../button/Button';

const Homebanner = (props: Inverted) => {
  return (
    <header className={`home_container container${props.inverted ? ' inverted' : ''}`}>
      <NavBar inverted={props.inverted} />
      <section className="hero_container">
        <div className="left_hero_contain">
          <div className="hero_text">
            <h1>Save time by building fast with Boldo Template </h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator
              success deployment non-disclosure.
            </p>
          </div>
          <div className="hero_ctas">
            <Button type="pry_green" label="Buy Template" />
            <Button type="sec_white" label="Explore" />
          </div>
        </div>
        <div className="right_hero_contain">
          <div className="top_analytics">
            <img src="/assets/images/hero_stat_1.svg" alt="analytics_1" />
          </div>
          <div className="bottom_analytics">
            <div className="btl">
              <div className="win_cta">
                <img src="/assets/icons/window_cta.svg" alt="" />
              </div>
              <img src="/assets/images/hero_stat_2.svg" alt="analytics_2" />
            </div>
            <div className="btr">
              <img src="/assets/images/hero_stat_3.svg" alt="analytics_3" />
            </div>
          </div>
        </div>
      </section>
      <div className="partners_logo_contain">
        <div className="partner_mask"></div>
        <div className="logo_box">
          <img src="/assets/images/partner_logo1.svg" alt="partner_logo1" />
        </div>
        <div className="logo_box">
          <img src="/assets/images/partner_logo2.svg" alt="partner_logo2" />
        </div>
        <div className="logo_box">
          <img src="/assets/images/partner_logo1.svg" alt="partner_logo1" />
        </div>
        <div className="logo_box">
          <img src="/assets/images/partner_logo2.svg" alt="partner_logo2" />
        </div>
        <div className="logo_box">
          <img src="/assets/images/partner_logo1.svg" alt="partner_logo1" />
        </div>
        <div className="logo_box">
          <img src="/assets/images/partner_logo2.svg" alt="partner_logo2" />
        </div>
      </div>
    </header>
  );
};

export default Homebanner;
