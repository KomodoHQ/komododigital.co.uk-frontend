import React, { ReactNode } from 'react';
import './content-section.css';

interface Props {
  title?: string;
  subtitle?: string;
  invert?: boolean;
  children: ReactNode;
}

const ContentSection: React.SFC<Props> = ({ title = 'TITLE HERE', subtitle= null, invert, children }) => {

  const subtitleEl = subtitle ? (<span>{subtitle}</span>) : null;
  const titleEl = title ? (<h2>{title}</h2>) : null;
  const invertedClassname = invert ? "invert" : "";

  return (
    <div className={`cs-wrapper ${invertedClassname}`}>
      <div className={`Content-Section`}>
          {subtitleEl}
          {titleEl}
          <div>{children}</div>
      </div>
    </div>

  );
};

export default ContentSection;
