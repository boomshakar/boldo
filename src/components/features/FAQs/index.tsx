import React from 'react';

const FAQs = () => {
  return (
    <section className="faqs_sect container">
      <div className="header_banner">
        <img src="/assets/images/faq_head_banner.png" alt="faq_head_banner" />
      </div>
      <section className="points_contain">
        <h2 className="lead_text">We connect our customers with the best, and help them keep up-and stay open.</h2>
        <div className="faq_points_items_contain">
          <div className="faq_points_item">
            <p>We connect our customers with the best?</p>
            <span>
              <img src="/assets/icons/drop_down_arrow.svg" alt="" />
            </span>
          </div>
          <div className="faq_points_item">
            <p>Android research & development rockstar?</p>
            <span>
              <img src="/assets/icons/drop_down_arrow.svg" alt="" />
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FAQs;
