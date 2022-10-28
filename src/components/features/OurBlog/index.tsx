import React from 'react';
import { getOurBlogContrast } from '../../../util/constant';

const OurBlog = () => {
  return (
    <section className={`our_blog_container container`}>
      <div className="lead_contain">
        <h4>Our blog</h4>
        <h2>Value proposition accelerator product management venture</h2>
      </div>
      <div className="blog_insight_contain">
        {getOurBlogContrast.map((blog, index) => (
          <div className="blog_insight_item" key={index}>
            <div className="blog_insight_item-key">
              <h3>
                {blog.label}&nbsp;<span>{blog.context}</span>
              </h3>
            </div>
            <div className="blog_insight_item-value">
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlog;
