import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import LargeQuote from '../components/largequote';
import SideQuote from '../components/sidequote';
import Quotes from '../components/quotes';
import QuoteVideoBanner from '../components/quotevideobanner';
import SeeMoreButton from '../components/seemorebutton';
import CenterContent from '../components/centercontent';
import TitleText from '../components/titletext';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  const SimpleComponents = props.simpleComponentsProperties.map(simpleComponent => {
    return (
      <>
        <h2>{simpleComponent.title}</h2>
        {renderAst(simpleComponent.htmlContent)}
      </>
    );
  });
  const SideQuoteComponents = props.sideQuoteComponentsProperties.map(sideQuoteComponent => {
    return (
      <SideQuote
        title={sideQuoteComponent.title}
        name={sideQuoteComponent.quote.name}
        qtitle={sideQuoteComponent.quote.title}
        company={sideQuoteComponent.quote.company}
        quote={sideQuoteComponent.quote.content}
        left={sideQuoteComponent.quote.left}
        image={sideQuoteComponent.quote.image}
        picture={sideQuoteComponent.picture}
        content={renderAst(sideQuoteComponent.htmlContent)}
      />
    );
  });
  const QuotesComponents = props.quotesComponentsProperties.map(quotesComponent => {
    return <Quotes quotes={quotesComponent.quotes} />
  });
  const LargeQuotesComponents = props.largeQuoteComponentsProperties.map(largeQuoteComponent => {
    return <LargeQuote
      name={largeQuoteComponent.name}
      title={largeQuoteComponent.title}
      company={largeQuoteComponent.company}
      image={largeQuoteComponent.image}
      quote={renderAst(largeQuoteComponent.content)}
    />
  });
  const QuoteVideoBannerComponents = props.quoteVideoBannerComponentsProperties.map(quoteVideoBannerComponent => {
    return (
      <>
        <h2>{quoteVideoBannerComponent.title}</h2>
        <QuoteVideoBanner
          name={quoteVideoBannerComponent.quote.name}
          title={quoteVideoBannerComponent.quote.title}
          company={quoteVideoBannerComponent.quote.company}
          image={quoteVideoBannerComponent.quote.image}
          left={quoteVideoBannerComponent.quote.left}
          quote={quoteVideoBannerComponent.quote.content}
          video={quoteVideoBannerComponent.video}
        />
        {renderAst(quoteVideoBannerComponent.htmlContent)}
      </>
    );
  });
  console.log(props)

  return (
    <Layout data={props.data} pageMeta={props.pageMeta} background={props.navBackground}>
      <TitleText
        subtitle={props.subtitle}
        title={props.title}
        background={props.background}
        invert={props.invert}
        className="topPaddingLarge bottomPaddingNone"
        coverimage={props.coverimage}
        centered={true}
      >
        {renderAst(props.intro)}
      </TitleText>
      
      {props.order.reduce((acc, componentType, i) => {
        const index = props.order.slice(0, i)
          .filter(ct => ct.name === componentType.name)
          .length;
        const component = (componentType => {
          switch(componentType.name) {
            case 'simple':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {SimpleComponents[index]}
                </CenterContent>
              )
            case 'sidequote':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {SideQuoteComponents[index]}
                </CenterContent>
              )
            case 'quotes':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {QuotesComponents[index]}
                </CenterContent>
              )
            case 'largequote':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {LargeQuotesComponents[index]}
                </CenterContent>
              )
            case 'quotevideobanner':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {QuoteVideoBannerComponents[index]}
                </CenterContent>
              )
            default:
              return null;
          }
        })(componentType);
        return acc.concat(component);
      }, [])}

      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        <h2>What can we do for you?</h2>
        <p>“If this story resonates with you, get in contact and let’s explore the opportunities the Komodo team can create for your team.”</p>
        <SeeMoreButton title="START A CONVERSATION →" link="/contact" />
      </CenterContent>
    </Layout>
  );
};
