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
import './quotevideobanner.css';

/**
 * Props for the side quote component
 *
 * data
 */
interface Props {
  name: string;
  title: string;
  company: string;
  left: boolean;
  image: any;
  quote: string;
  video: any;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a side quote component doesn't need to maintain any state of its own.
 *
 * @param data
 */
const QuoteVideoBanner: React.SFC<Props> = ({ name, title, company, left, image, quote, video }) => {

    const QuoteDiv = <div>
      <QuoteText content={quote} bold={true} />
      <Quoter image={image} name={name} title={title} company={company} />
    </div>

    const VideoDiv = <div>
      <Img fluid={video.childImageSharp.fluid} />
    </div>

    return (
      <div className="quotevideobanner">
        {left ? [QuoteDiv, VideoDiv] : [VideoDiv, QuoteDiv]}
      </div>
    );
  };
  
  export default QuoteVideoBanner;
