/**
 * blog post link component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

/**
 * Local dependencies
 */
import './blogpost.css';

/**
 * Props for the blog post link component
 * 
 * data
 */
interface Props {
  slug?: string;
  title?: any;
  subtitle?: string;
  readingtime?: number;
  image?: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a blog post link doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const BlogPost: React.SFC<Props> = ({ slug, title, subtitle="INSIGHTS", readingtime=5, image }) => {

  return (
    <Link className="blogpostLink" to={`blog/${slug}`}>
        <img src={image} width={370} alt={title} />
        <p>{subtitle}</p>
        <h1>{title}</h1>
        <div className="read">
          <div className="readingTime">{readingtime} min read</div>
          <div className="readmore">Read</div>
        </div>
    </Link>
  );
};

export default BlogPost;
