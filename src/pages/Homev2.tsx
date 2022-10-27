import React from 'react';
import BlogPeek from '../components/features/BlogPeek';
import FAQs from '../components/features/FAQs';
import OurServices from '../components/features/OurServices';
import Testimonials from '../components/features/Testimonials';
import Homebanner from '../components/pageBanner/Homebanner';

const Homev2 = () => {
  return (
    <main>
      <Homebanner inverted={true} />
      <OurServices inverted={true} />
      <Testimonials />
      <FAQs />
      <BlogPeek />
    </main>
  );
};

export default Homev2;
