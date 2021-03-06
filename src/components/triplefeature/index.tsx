/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import Img from 'gatsby-image';
import './triplefeature.css';

/**
 * Local dependencies
 */

/**
 * Props for the content section component
 *
 * data
 */
interface Props {
  className?: string;
  children?: ReactNode;
  title?: string;
  imgsrc?: any;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a content section doesn't need to maintain any state of its own.
 *
 * @param data
 */
const TripleFeature: React.SFC<Props> = (props: Props) => {
  return <div className={`TripleFeature`}>
    <Img fixed={props.imgsrc.childImageSharp.fixed} />
    <h3>{props.title}</h3>
    {props.children}
  </div>;
};

export default TripleFeature;
