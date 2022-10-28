import React from 'react';
import LatestNews from '../components/features/LatestNews';
import BlogBanner from '../components/pageBanner/BlogBanner';

import '../styles/blogpage.scss';

const Blog = () => {
  return (
    <main>
      <BlogBanner inverted={true} />
      <LatestNews />
    </main>
  );
};

export default Blog;
