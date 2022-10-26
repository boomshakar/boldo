import React from 'react';
import { blogPeakArticles, testimonialItems } from '../../../util/constant';
import Button from '../../button/Button';

const BlogPeek = () => {
  return (
    <section className="blog_peek_sect container">
      <div className="title">
        <h4>Our Blog</h4>
      </div>
      <div className="info">
        <h3>Value proposition accelerator product management venture</h3>
      </div>
      <div className="blog_articles_contain">
        {blogPeakArticles.slice(0, 3).map((article, index) => (
          <article className="article_item" key={index}>
            <div className="article_img">
              <img src={article.thumbnail} alt="" />
            </div>
            <div className="article_info">
              <div className="top">
                <span className="category">{article.category}</span>
                <span className="date">{article.date}</span>
              </div>
              <div className="bottom">
                <p className="content">{article.content}</p>
              </div>
            </div>
            <div className="article_owner">
              <span className="owner_img">
                <img src={article.user.img} alt="" />
              </span>
              <span className="owner_name">{article.user.name}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="cta">
        <Button label="Load More" type="pry_white" />
      </div>
    </section>
  );
};

export default BlogPeek;
