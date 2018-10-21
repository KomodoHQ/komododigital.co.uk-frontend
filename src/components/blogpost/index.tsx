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
  date?: string;
  image?: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a blog post link doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const BlogPost: React.SFC<Props> = ({ slug, title, date, image }) => {
  return (
    <Link className="blogpost" to={slug}>
        <img src={image} width={370} alt={title} />
        <div>
          <h1>{title}</h1>
          <span>{date}</span>
          <p>Read More</p>
        </div>
    </Link>
  );
};

export default BlogPost;
