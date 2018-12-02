/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import './content-section.css';
import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';

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
  verticalPadding?: number;
  marginTop?: number;
  paddingTop?: number;
  paddingBottom?: number;
  children: ReactNode;
  cover?: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a content section doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const ContentSection: React.SFC<Props> = ({ title = 'TITLE HERE', subtitle= null, invert, background='none', verticalPadding=0, marginTop=0, paddingTop=180, paddingBottom=80, children, cover=null }) => {

  const subtitleEl = subtitle ? (<span>{subtitle}</span>) : null;
  const titleEl = title ? (<h2>{title}</h2>) : null;
  const invertedClassname = invert ? "invert" : "";

  const style = {
    background: background,
    marginTop: marginTop ? marginTop+'px' : 'inherit',
    paddingTop: verticalPadding ? verticalPadding+'px' : paddingTop+'px',
    paddingBottom: verticalPadding ? verticalPadding+'px' : paddingBottom+'px',
  }

  let coverImage;
  if (cover!==null) {
    coverImage = <img src={cover} />;
    style.paddingBottom = "0";
  } else {
    coverImage = null;
  }

  return (
    <div className={`komodoGridWrapper cs-wrapper ${invertedClassname}`} style={style}>
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
