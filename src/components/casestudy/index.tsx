/**
 * Case study link component - used in content sections to link to a case study
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

/**
 * Local dependencies
 */
import "./casestudy.css";

/**
 * Props for the case study link component
 * 
 * image - the url of an image to display with the case study. Should be 400x400
 * subtitle - a string that appears at the top of the content section, eg a category
 * title - the case study title, usually the client and project name
 * link - an internal page address within the site
 */
interface Props {
  title: string;
  subtitle?: string;
  image?: string;
  link?: string;
  children?: ReactNode
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a case study link doesn't need to maintain any state of its own.
 * 
 * @param subtitle 
 * @param title 
 * @param image 
 * @param link 
 * @param children  
 */
const CaseStudyLink: React.SFC<Props> = ({ subtitle, title, children, link="#" }) => {
  return (
    <div>
      <img />
      <div>
        <span>{subtitle}</span>
        <h2>{title}</h2>
        {children}
        <Link to={link}>Read Case Study</Link>
      </div>
    </div>
  );
};

export default CaseStudyLink;
