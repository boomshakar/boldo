import React from 'react';
import { connCustomer1Items1 } from '../../../util/constant';
import Button from '../../button/Button';

const ConnCustomerOne = () => {
  return (
    <section className="conn_customer svc_one">
      <div className="lt_sect">
        <div className="sect_illustration">
          <img src="/assets/images/customer_conn1.png" alt="customer_conn1" />
          <div className="overlay_analytics">
            <div className="analytics_illustration">
              <img src="/assets/images/stroke_analytics.svg" alt="stroke_analytics" />
            </div>
            <div className="analytics_info">
              <span className="centage">30%</span>
              <div className="details">More income in June</div>
            </div>
          </div>
        </div>
      </div>
      <section className="rt_sect">
        <h2 className="sect_title">We connect our customers with the best, and help them keep up-and stay open.</h2>
        <div className="info_list_items">
          {connCustomer1Items1.map(({ desc }, index) => (
            <div className="list_item" key={index}>
              <span>
                <img src="/assets/icons/opt_checked.svg" alt="opt_checked" />
              </span>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div className="cta">
          <Button label="Start now" type="primary" />
        </div>
      </section>
    </section>
  );
};

export default ConnCustomerOne;
