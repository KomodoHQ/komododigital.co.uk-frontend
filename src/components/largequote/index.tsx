/**
 * Large Quote component
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
  quote: string;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a large quote component doesn't need to maintain any state of its own.
 *
 * @param data
 */
const LargeQuote: React.SFC<Props> = ({ name, title, company, image, quote }) => {
  return (
    <div className="largequote">
      <QuoteText content={quote} bold={true} />
      <Quoter image={image} name={name} title={title} company={company} large={true} />
    </div>
  );
};

export default LargeQuote;
