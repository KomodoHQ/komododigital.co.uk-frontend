/**
 * Case study link component - used in content sections to link to a case study
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import Img from 'gatsby-image';
import { Link } from '@reach/router';

/**
 * Local dependencies
 */
import './casestudy.css';

/**
 * Props for the case study link component
 *
 * image - the url of an image to display with the case study. Should be 400x400
 * subtitle - a string that appears at the top of the content section, eg a category
 * title - the case study title, usually the client and project name
 * link - an internal page address within the site
 */
interface Props {
  image?: any;
  title: string;
  subtitle?: string;
  link?: string;
  children?: ReactNode;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a
 * case study link doesn't need to maintain any state of its own.
 *
 * @param image
 * @param subtitle
 * @param title
 * @param link
 * @param children
 */
const CaseStudyLink: React.SFC<Props> = ({ image, subtitle, title, children, link = '#' }) => {
  return (
    <Link to={link} className="case-study-link-element">
      <div className="komodoGridWrapper case-study-link-wrapper">
        <div className="case-study-link">
          <div
            className="img"
            style={{
              backgroundImage: `url(${image.childImageSharp.fluid.src})`,
            }}
          />
          <div className="content">
            <span>{subtitle}</span>
            <h2>{title}</h2>
            {children}
            <span className="linktext">Read Case Study</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyLink;
