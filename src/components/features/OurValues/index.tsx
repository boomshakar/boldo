import React from 'react';
import { getCompanyValues } from '../../../util/constant';

const OurValues = () => {
  return (
    <section className={`our_values_container container`}>
      <div className="lead_contain">
        <h4>Our values</h4>
        <h2>Things in we believe</h2>
        <p>
          Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
          iteration. Traction stock user experience deployment beta innovator incubator focus.{' '}
        </p>
      </div>
      <div className="value_insight_contain">
        {getCompanyValues.map((item, index) => (
          <div className="value_item" key={index}>
            <div className="value_illustration">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="value_content">
              <h3>{item.label}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
