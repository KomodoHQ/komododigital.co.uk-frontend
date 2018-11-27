/**
 * item that sits in the services layout component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';

/**
 * Local dependencies
 */
import './standarditem.css';

/**
 * Props for the item component
 * 
 * data
 */
interface Props {
  imgsrc?: any;
  title?: string;
  link?: string;
  children?: ReactNode;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a item doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const StandardItem: React.SFC<Props> = ({ imgsrc, title, link, children }) => {

  const logo = children ? <div>{children}</div> : <Img fixed={imgsrc.childImageSharp.fixed} title={title} />;
  const el = link ? <a href={link}>{logo}</a> : logo;

  return (
    <div className="StandardItem">
      {el}
    </div>
  );
};

export default StandardItem;
