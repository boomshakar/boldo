import React from 'react';
import ConnCustomerOne from './ConnCustomerOne';
import HandshakeService from './HandshakeService';

const OurServices = () => {
  return (
    <section className="our_services_sect container">
      <HandshakeService />
      <ConnCustomerOne />
    </section>
  );
};

export default OurServices;
