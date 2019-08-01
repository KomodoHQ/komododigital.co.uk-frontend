/**
 * Side Quote component
 */

/**
 * NPM Dependencies
 */
import React from 'react';

/**
 * Local dependencies
 */
import './sidequote.css';

/**
 * Props for the side quote component
 *
 * data
 */
interface Props {
  title: string;
  name: string;
  qtitle: string;
  company: string;
  left: boolean;
  image: any;
  quote: string;
  picture?: any;
  content: any;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a side quote component doesn't need to maintain any state of its own.
 *
 * @param data
 */
const SideQuote: React.SFC<Props> = ({ title, name, qtitle, company, left, image, quote, picture, content }) => {

    return (
      <div>
        <h2>{title}</h2>
        <h2>{name}</h2>
        <h2>{qtitle}</h2>
        <h2>{company}</h2>
        <h2>{left.toString()}</h2>
        {/* <h2>{image}</h2> */}
        {quote}
        {/* <h2>{picture}</h2> */}
        {content}
      </div>
    );
  };
  
  export default SideQuote;
