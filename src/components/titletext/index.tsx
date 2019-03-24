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

  let style = {
    backgroundImage: backgroundImage
      ? `url(${backgroundImage.childImageSharp.fluidFull.src})`
      : null,
  };

  if (!backgroundImage) {
    style = {
      background,
    };
  }

  const coverImage = coverimage !== null ? <Img fluid={coverimage.childImageSharp.fluid} /> : null;
  const showreel = showShowreel ? (
    <div>
      <a href="https://www.youtube.com/watch?v=8TSE-zTGd4Q&app=desktop" className="showreel">
        Watch Showreel
      </a>
    </div>
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
        {showreel}
      </div>
      {coverImage}
    </div>
  );
};

export default TitleText;
