import React from 'react';
import { testimonialItems } from '../../../util/constant';

const Testimonials = () => {
  return (
    <section className="testimonial_sect container">
      <div className="testimonial_header">
        <h2 className="title">An enterprise template to ramp up your company website</h2>
        <div className="testimonial_card_navigation">
          <span>
            <img src="/assets/icons/arrow-left.svg" alt="" />
          </span>
          <span>
            <img src="/assets/icons/arrow-right.svg" alt="" />
          </span>
        </div>
      </div>
      <section className="testimonial_card_contain">
        {testimonialItems.map((partner, index) => (
          <div className="testimonial_card_item" key={index}>
            <div className="content">
              <p>“{partner.content}”</p>
            </div>
            <div className="profile">
              <div className="profile_img">
                <img src={partner.profile.img} alt="" />
              </div>
              <div className="profile_info">
                <h4>{partner.profile.name}</h4>
                <p>{`${partner.profile.position} @ ${partner.profile.company}`}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Testimonials;
