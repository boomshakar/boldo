import React from 'react';
import Aboutv1HeroSec from '../components/features/Aboutv1HeroSec';
import AboutBanner from '../components/pageBanner/AboutBanner';

import '../styles/aboutpage.scss';

const About = () => {
  return (
    <main>
      <AboutBanner inverted={false} />
      <Aboutv1HeroSec />
    </main>
  );
};

export default About;
