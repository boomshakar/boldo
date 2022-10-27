import React from 'react';
import { Inverted } from '../../../models/propTypes';
import ConnCustomerOne from './ConnCustomerOne';
import ConnCustomerTwo from './ConnCustomerTwo';
import HandshakeService from './HandshakeService';

const OurServices = ({ inverted }: Inverted) => {
  return (
    <section className={`our_services_sect${inverted ? ' inverted' : ''}`}>
      <HandshakeService />
      <ConnCustomerOne />
      <ConnCustomerTwo />
    </section>
  );
};

export default OurServices;
