import React from 'react';
import ConnCustomerOne from './ConnCustomerOne';
import ConnCustomerTwo from './ConnCustomerTwo';
import HandshakeService from './HandshakeService';

const OurServices = () => {
  return (
    <section className="our_services_sect container">
      <HandshakeService />
      <ConnCustomerOne />
      <ConnCustomerTwo />
    </section>
  );
};

export default OurServices;
