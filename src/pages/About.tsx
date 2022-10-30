import React from 'react';
import Aboutv1HeroSec from '../components/features/Aboutv1HeroSec';
import OurNumbers from '../components/features/OurNumbers';
import OurStory from '../components/features/OurStory';
import OurTeam from '../components/features/OurTeam';
import OurValues from '../components/features/OurValues';
import AboutBanner from '../components/pageBanner/AboutBanner';

import '../styles/aboutpage.scss';

const About = () => {
  return (
    <main>
      <AboutBanner inverted={false} />
      <Aboutv1HeroSec />
      <OurStory inverted={false} />
      <OurNumbers inverted={false} />
      <OurTeam inverted={false} />
      <OurValues />
    </main>
  );
};

export default About;
