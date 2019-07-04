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
  coverimageRaw?: any;
  showShowreel?: boolean;
  centered?: boolean;
  imageOverlap?: boolean;
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
  coverimageRaw = null,
  backgroundImage = null,
  showShowreel = true,
  centered = false,
  imageOverlap = false,
}) => {
  const subtitleEl = subtitle ? <span>{subtitle}</span> : null;
  const titleEl = title ? <h2 dangerouslySetInnerHTML={{ __html: title }}></h2> : null;
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

  let imageOverlapClass = imageOverlap ? 'image-overlap' : '';

  let coverImage = null;

  if (coverimage !== null || coverimageRaw !== null) {
    if (coverimage) {
      coverImage = (<Img
        fluid={coverimage.childImageSharp.fluid}
        style={{
          maxWidth: coverimage.childImageSharp.fluid.presentationWidth,
          margin: '0 auto', // Used to center the image
        }}
      />);
    }
    else {
      coverImage = (<img src={coverimageRaw} width="100%" />);
    }
  }

  const showreel = showShowreel ? (
    <div>
      <a href="https://vimeo.com/314800766/fef6932281" className="showreel" target="_blank">
        Watch Showreel
      </a>
    </div>
  ) : null;
  const centeredClass = centered ? 'centered' : '';

  return <div className={`komodoGridWrapper title-wrapper ${invertedClassname} ${centeredClass} ${className}`} style={style}>
      <div className={`Title-Section ${centeredClass}`}>
        {subtitleEl}
        {titleEl}
        <div>{children}</div>
        {showreel}
      </div>
      <div className={`image-wrapper ${imageOverlapClass}`}>{coverImage}</div>
    </div>;
};

export default TitleText;
