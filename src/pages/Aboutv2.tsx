import React from 'react';
import OurBlog from '../components/features/OurBlog';
import OurNumbers from '../components/features/OurNumbers';
import OurStory from '../components/features/OurStory';
import OurTeam from '../components/features/OurTeam';
import AboutBanner from '../components/pageBanner/AboutBanner';

import '../styles/aboutpage.scss';

const Aboutv2 = () => {
  return (
    <main>
      <AboutBanner inverted={true} />
      <OurNumbers inverted={true} />
      <OurStory inverted={true} />
      <OurTeam inverted={true} />
      <OurBlog />
    </main>
  );
};

export default Aboutv2;
