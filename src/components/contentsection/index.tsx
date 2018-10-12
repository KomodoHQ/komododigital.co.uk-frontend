import React, { ReactNode } from 'react';
import './content-section.css';

interface Props {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

const ContentSection: React.SFC<Props> = ({ title = 'TITLE HERE', subtitle= null, children }) => {

  const subtitleEl = subtitle ? (<span>{subtitle}</span>) : null;
  const titleEl = title ? (<h2>{title}</h2>) : null;

  return (
    <div className="Content-Section">
        {subtitleEl}
        {titleEl}
        <div>{children}</div>
    </div>
  );
};

export default ContentSection;
