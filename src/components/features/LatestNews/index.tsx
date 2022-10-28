import React from 'react';
import { blogPeakArticles } from '../../../util/constant';
import BlogArticleCard from '../../BlogArticleCard';

const LatestNews = () => {
  return (
    <section className="latest_news_contain container">
      <h1 className="title">Latest news</h1>
      <BlogArticleCard blogData={blogPeakArticles} maxContent={6} />
    </section>
  );
};

export default LatestNews;
