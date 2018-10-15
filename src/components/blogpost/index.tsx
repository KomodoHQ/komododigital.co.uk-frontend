/**
 * blog post link component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */

/**
 * Props for the blog post link component
 * 
 * data
 */
interface Props {
  data?: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a blog post link doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const BlogPost: React.SFC<Props> = ({ data }) => {
  return (
    <div>
        BlogPost
    </div>
  );
};

export default BlogPost;
