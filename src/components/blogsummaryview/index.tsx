/**
 * blog post summary component (duplicate of blog post link?)
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import moment from 'moment';

/**
 * Local dependencies
 */

/**
 * Props for the blog post summary component
 * 
 * data
 */
interface Props {
  children?: ReactNode;
  data: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a blog post summary doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const BlogSummaryView: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
      <div>
        <img src={data.imageSource} width="300" height="150" />
      </div>
      <h1>{data.title}</h1>
      <span>{moment(data.date).format('DD MMMM YYYY')}</span>
    </div>
  );
};

export default BlogSummaryView;
