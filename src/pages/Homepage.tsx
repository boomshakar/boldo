import Homebanner from '../components/pageBanner/Homebanner';
import React from 'react';
import OurServices from '../components/features/OurServices';
import Testimonials from '../components/features/Testimonials';
import FAQs from '../components/features/FAQs';

const Homepage = () => {
  return (
    <main>
      <Homebanner inverted={false} />
      <OurServices />
      <Testimonials />
      <FAQs />
    </main>
  );
};

export default Homepage;
