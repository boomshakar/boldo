import Homebanner from '../components/pageBanner/Homebanner';
import React from 'react';
import OurServices from '../components/features/OurServices';

const Homepage = () => {
  return (
    <main>
      <Homebanner inverted={false} />
      <OurServices />
    </main>
  );
};

export default Homepage;
