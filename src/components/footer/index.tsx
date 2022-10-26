import React from 'react';
import MainFooter from './MainFooter';
import NewsletterCTA from './NewsletterCTA';

const FooterCTA = () => {
  return (
    <footer className="footer_cta_sect container">
      <NewsletterCTA />
      <MainFooter />
    </footer>
  );
};

export default FooterCTA;
