import React from 'react';
import { Link } from 'react-router-dom';
import { getCompanySubLinks } from '../../util/constant';

const MainFooter = () => {
  return (
    <section className="main_footer">
      <div className="company_info_contain">
        <div className="company_info">
          <div className="footer_logo">
            <img src="/assets/logo-inverted.svg" alt="" />
          </div>
          <p>
            Social media validation business model canvas graphical user interface launch party creative facebook iPad
            twitter.
          </p>
        </div>
        <p className="rights">All rights reserved</p>
      </div>
      <div className="sublink_contain">
        {getCompanySubLinks.map((data, index) => {
          const { title, subLink } = data;
          return (
            <div className="sublink_item_list" key={index}>
              <h4 className="title">{title}</h4>
              {subLink.map((inData, indx) => (
                <div key={indx}>
                  <Link to={inData.linkTo}>
                    <span className="sublink_item">{inData.label}</span>
                  </Link>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainFooter;
