/**
 * Quoter component
 */

/**
 * NPM Dependencies
 */
import React from 'react';
import Img from 'gatsby-image';

/**
 * Local dependencies
 */
import './quoter.css';

/**
 * Props for the quoter component
 *
 * data
 */
interface Props {
  image: any;
  name: string;
  title: string;
  company: string;
  large?: boolean;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a quoter component doesn't need to maintain any state of its own.
 *
 * @param data
 */
const Quoter: React.SFC<Props> = ({ image, name, title, company, large = false }) => {
  return (
    <div>
      <Img fluid={image.childImageSharp.fluid} />
      <h2>{name}</h2>
      <h2>{title}</h2>
      <h2>{company}</h2>
    </div>
  );
};
  
  export default Quoter;
