import React from 'react';
import { Inverted } from '../../models/propTypes';
import NavBar from '../navBar/NavBar';

const BlogBanner = ({ inverted }: Inverted) => {
  return (
    <header className={`blog_container container${inverted ? ' inverted' : ''}`}>
      <NavBar inverted={inverted} />
      <section className="lead_container">
        <div className="info">
          <h4>Blog</h4>
          <h1>Thoughts and words</h1>
        </div>
      </section>
      <article className="hero_banner_contain">
        <div className="banner_img">
          <img src="/assets/images/blog_hero_banner.svg" alt="" />
        </div>
        <div className="hero_banner_content">
          <div className="article_info">
            <div className="top">
              <span className="category">Category</span>
              <span className="date">November 22, 2021</span>
            </div>
            <div className="bottom">
              <p className="content">Pitch termsheet backing validation focus release.</p>
            </div>{' '}
          </div>
          <div className="article_owner">
            <span className="owner_img">
              <img src="/assets/images/blog_user1.png" alt="" />
            </span>
            <span className="owner_name">Chandler Bing</span>
          </div>
        </div>
      </article>
    </header>
  );
};

export default BlogBanner;
