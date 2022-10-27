import Homebanner from '../components/pageBanner/Homebanner';
import React from 'react';
import OurServices from '../components/features/OurServices';
import Testimonials from '../components/features/Testimonials';
import FAQs from '../components/features/FAQs';
import BlogPeek from '../components/features/BlogPeek';

const Homepage = () => {
  return (
    <main>
      <Homebanner inverted={false} />
      <OurServices inverted={false} />
      <Testimonials />
      <FAQs />
      <BlogPeek />
    </main>
  );
};

export default Homepage;
