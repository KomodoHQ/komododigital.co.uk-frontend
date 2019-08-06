/**
 * Side Quote component
 */

/**
 * NPM Dependencies
 */
import React from 'react';
import Img from 'gatsby-image';
import Quoter from '../quoter';
import QuoteText from '../quotetext';

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

  const QuoteDiv = <div>
    { picture && <Img fluid={picture.childImageSharp.fluid} />}
    <QuoteText content={quote} bold={true} />
    <Quoter image={image} name={name} title={qtitle} company={company} />
  </div>

  const ContentDiv = <div>
    <h2>{title}</h2>
    {content}
  </div>

  return (
    <div className="sidequote">
      {left ? [QuoteDiv, ContentDiv] : [ContentDiv, QuoteDiv]}
    </div>
  );
};

export default SideQuote;
