/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import Img from 'gatsby-image';
import './content-section.css';

/**
 * Local dependencies
 */

/**
 * Props for the content section component
 * 
 * data
 */
interface Props {
  title?: string;
  subtitle?: string;
  invert?: boolean;
  background?: string;
  className?: string;
  children: ReactNode;
  coverimage?: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a content section doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const ContentSection: React.SFC<Props> = ({ title = 'TITLE HERE', subtitle= null, invert, background='none', className=null, children, coverimage=null }) => {

  const subtitleEl = subtitle ? (<span>{subtitle}</span>) : null;
  const titleEl = title ? (<h2>{title}</h2>) : null;
  const invertedClassname = invert ? "invert" : "";

  const style = {
    background: background
  }

  let coverImage;
    if (coverimage!==null) {
    coverImage = <Img fluid={coverimage.childImageSharp.fluid} />;
    style.paddingBottom = "0";
  } else {
    coverImage = null;
  }

  return (
    <div className={`komodoGridWrapper cs-wrapper ${invertedClassname} ${className}`} style={style}>
      <div className={`Content-Section`}>
        {subtitleEl}
        {titleEl}
        <div>{children}</div>
      </div>
      {coverImage}
    </div>

  );
};

export default ContentSection;
