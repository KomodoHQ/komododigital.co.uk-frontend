/**
 * Quotes component
 */

/**
 * NPM Dependencies
 */
import React from 'react';

/**
 * Local dependencies
 */
import './quotes.css';

/**
 * Props for the quotes component
 *
 * data
 */
interface Props {
  quotes: any;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a quotes component doesn't need to maintain any state of its own.
 *
 * @param data
 */
const Quotes: React.SFC<Props> = ({ quotes }) => {

    return (
      <div>
        {quotes &&
          quotes.map((quote, i) => {
            return (
              <div key={i}>
                <h2>{quote.name}</h2>
                <h2>{quote.title}</h2>
                <h2>{quote.company}</h2>
                <h2>{quote.content}</h2>
                {/* <h2>{quote.image}</h2> */}
              </div>
            );
          })}
      </div>
    );
  };
  
  export default Quotes;
