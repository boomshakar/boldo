import React from 'react';
import { serviceCardArr } from '../../../util/constant';
import ServiceCard from '../../ServiceCard';

const OurServices = () => {
  return (
    <section className="our_services_sect container">
      <section className="handshake_service">
        <div className="title">
          <h4>Our Services</h4>
        </div>
        <div className="info">
          <h3>Handshake infographic mass market crowdfunding iteration.</h3>
        </div>
        <div className="card_feature_contain">
          {serviceCardArr.map((data, index) => (
            <ServiceCard
              key={index}
              img={data.img}
              title={data.title}
              description={data.description}
              link={data.link}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default OurServices;
