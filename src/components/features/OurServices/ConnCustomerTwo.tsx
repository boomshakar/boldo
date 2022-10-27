import React from 'react';
import { connCustomer1Items2 } from '../../../util/constant';

const ConnCustomerTwo = () => {
  return (
    <section className="conn_customer svc_two container">
      <section className="rt_sect">
        <h2 className="sect_title">We connect our customers with the best, and help them keep up-and stay open.</h2>
        <div className="info_list_items">
          {connCustomer1Items2.map(({ desc, img, active }, index) => (
            <div className={`list_item${active ? ' active' : ''}`} key={index}>
              <span>
                <img src={img} alt="opt_checked" />
              </span>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="lt_sect">
        <div className="sect_illustration">
          <img src="/assets/images/customer_conn2.png" alt="customer_conn2" />
          <div className="overlay_analytics">
            <div className="analytics_illustration">
              <img src="/assets/images/pie_analytics.svg" alt="pie_analytics" />
            </div>
            <ul className="analytics_info">
              <li className="info_list_items">35% - Agile Development</li>
              <li className="info_list_items">30% - Investor bandwidth</li>
              <li className="info_list_items">35% - A/B testing </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnCustomerTwo;
