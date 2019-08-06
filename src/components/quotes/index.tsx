/**
 * Quotes component
 */

/**
 * NPM Dependencies
 */
import React from 'react';
import Quoter from '../quoter';
import QuoteText from '../quotetext';

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
      <div className="quotes">
        {quotes &&
          quotes.map((quote, i) => {
            return (
              <div key={i}>
                <Quoter image={quote.image} name={quote.name} title={quote.title} company={quote.company} large={true} />
                <QuoteText content={quote.content} />
              </div>
            );
          })}
      </div>
    );
  };
  
  export default Quotes;
