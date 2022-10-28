import React from 'react';
import { BlogArticle } from '../models/propTypes';
import Button from './button/Button';

type Props = {
  blogData: BlogArticle[];
  maxContent: number;
};

const BlogArticleCard = ({ blogData, maxContent }: Props) => {
  return (
    <>
      <div className="blog_articles_contain">
        {blogData.slice(0, maxContent).map((article, index) => (
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
    </>
  );
};

export default BlogArticleCard;
