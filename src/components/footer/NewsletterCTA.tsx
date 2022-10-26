import React from 'react';
import Button from '../button/Button';

const NewsletterCTA = () => {
  return (
    <section className="newsletter_cta">
      <h2 className="lead_text">An enterprise template to ramp up your company website</h2>
      <form action="" className="newsletter_form">
        <input type="text" placeholder="Your email address" />
        <Button type="pry_green" label="Start now" />
      </form>
    </section>
  );
};

export default NewsletterCTA;
