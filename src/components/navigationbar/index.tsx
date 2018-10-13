import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

import './NavigationBar.css';

interface Props {
  data?: any;
}

const NavigationBar: React.SFC<Props> = ({ data }) => {
  return (
    <div className="navigationBar">
      <h1><Link to="/">Komodo</Link></h1>
      <ul>
        <li>
          <Link to={'about'}>About</Link>
        </li>
        <li>
          <Link to={'case-studies'}>Case Studies</Link>
        </li>
        <li>
          <Link to={'blog-list'}>Insights</Link>
        </li>
        <li>
          <Link to={'contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
