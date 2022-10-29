import React from 'react';
import { blogPeakArticles } from '../../../util/constant';
import BlogArticleCard from '../../BlogArticleCard';

const BlogPeek = () => {
  return (
    <section className="blog_peek_sect container">
      <div className="title">
        <h4>Our Blog</h4>
      </div>
      <div className="info">
        <h3>Value proposition accelerator product management venture</h3>
      </div>
      <BlogArticleCard blogData={blogPeakArticles} maxContent={3} />
    </section>
  );
};

export default BlogPeek;
