import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

import './NavigationBar.css';

interface Props {
  data: any;
}

const NavigationBar: React.SFC<Props> = ({ data }) => {
  return (
    <div className="navigationBar">
      <h1>Komodo</h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Case Studies</Link>
        </li>
        <li>
          <Link to="/">Insights</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
