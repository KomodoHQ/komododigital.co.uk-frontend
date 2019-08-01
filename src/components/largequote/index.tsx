/**
 * Large Quote component
 */

/**
 * NPM Dependencies
 */
import React from 'react';

/**
 * Local dependencies
 */
import './largequote.css';

/**
 * Props for the large quote component
 *
 * data
 */
interface Props {
  name: string;
  title: string;
  company: string;
  image: any;
  quote: any;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a large quote component doesn't need to maintain any state of its own.
 *
 * @param data
 */
const LargeQuote: React.SFC<Props> = ({ name, title, company, image, quote }) => {

    return (
      <div>
        <h2>{name}</h2>
        <h2>{title}</h2>
        <h2>{company}</h2>
        {/* <h2>{image}</h2> */}
        {quote}
      </div>
    );
  };
  
  export default LargeQuote;
