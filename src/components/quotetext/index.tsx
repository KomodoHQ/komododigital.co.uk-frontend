/**
 * Quoter component
 */

/**
 * NPM Dependencies
 */
import React from 'react';

/**
 * Local dependencies
 */
import './quotetext.css';

/**
 * Props for the quotetext component
 *
 * data
 */
interface Props {
  quotes: any;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a quotetext component doesn't need to maintain any state of its own.
 *
 * @param data
 */
const QuoteText: React.SFC<Props> = ({ quotes }) => {

    return (
      <div>
        QuoteText
      </div>
    );
  };
  
  export default QuoteText;
