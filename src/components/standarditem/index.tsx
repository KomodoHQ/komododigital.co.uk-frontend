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
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a item doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const StandardItem: React.SFC<Props> = ({ imgsrc, link }) => {
  const img = link ? <Link to={link}><img src={imgsrc} /></Link>  : <img src={imgsrc} />; 
  return (
    <div className="StandardItem">
      {img}
    </div>
  );
};

export default StandardItem;
