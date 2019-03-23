/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import Img from 'gatsby-image';
import './titletext.css';

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
  backgroundImage?: any;
  className?: string;
  children: ReactNode;
  coverimage?: any;
  showShowreel?: boolean;
}

/**
 * Using SFC (Stateless Functional Component) because a content section
 * doesn't need to maintain any state of its own.
 *
 * @param data
 */
const TitleText: React.SFC<Props> = ({
  title = 'TITLE HERE',
  subtitle = null,
  invert,
  background = 'none',
  className = '',
  children,
  coverimage = null,
  backgroundImage = null,
  showShowreel = true,
}) => {
  const subtitleEl = subtitle ? <span>{subtitle}</span> : null;
  const titleEl = title ? <h2>{title}</h2> : null;
  const invertedClassname = invert ? 'invert' : '';

  const style = {
    backgroundColor: backgroundImage ? null : background,
    backgroundImage: backgroundImage
      ? `url(${backgroundImage.childImageSharp.fluidFull.src})`
      : null,
  };

  const coverImage = coverimage !== null ? <Img fluid={coverimage.childImageSharp.fluid} /> : null;
  const showreel = showShowreel ? (
    <a href="https://www.youtube.com/watch?v=8TSE-zTGd4Q&app=desktop" className="showreel">Watch Showreel</a>
  ) : null;

  return (
    <div
      className={`komodoGridWrapper title-wrapper ${invertedClassname} ${className}`}
      style={style}
    >
      <div className={`Title-Section`}>
        {subtitleEl}
        {titleEl}
        <div>{children}</div>
        <div>{showreel}</div>
      </div>
      {coverImage}
    </div>
  );
};

export default TitleText;
