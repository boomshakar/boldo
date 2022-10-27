import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCardDetails } from '../models/propTypes';

const ServiceCard = (prop: ServiceCardDetails) => {
  const { img, title, description, link } = prop;
  return (
    <div className="service_card">
      <div className="img_contain">
        <img src={img} alt="service_card" />
      </div>
      <div className="infoDesc">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
      <div className="explore_page">
        <Link to={link}>
          <span className="link_title">Explore Page</span>
          <span className="arrow_right">
            <img src="/assets/icons/arrow-right.svg" alt="arrow-right" />
            <img src="/assets/icons/arrow-right_inverted.svg" className="invert_icn" alt="arrow-right" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
