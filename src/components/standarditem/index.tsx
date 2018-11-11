/**
 * item that sits in the services layout component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

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
  imgsrc?: string;
  link?: string;
  children?: ReactNode;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a item doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const StandardItem: React.SFC<Props> = ({ imgsrc, link, children }) => {

  const logo = imgsrc ? <img src={imgsrc} /> : <div>{children}</div>;
  const el = link ? <a href={link}><img src={imgsrc} /></a>  : logo;

  return (
    <div className="StandardItem">
      {el}
    </div>
  );
};

export default StandardItem;
