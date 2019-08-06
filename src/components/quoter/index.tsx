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
    <div className={`quoter ${large ? 'quoter-large': ''}`}>
      <Img fluid={image.childImageSharp.fluid} />
      <p className="quoter-name">{name}</p>
      <p className="quoter-title">{title}</p>
      <p className="quoter-company">{company}</p>
    </div>
  );
};
  
export default Quoter;
