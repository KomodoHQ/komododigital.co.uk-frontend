import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import LargeQuote from '../components/largequote';
import SideQuote from '../components/sidequote';
import Quotes from '../components/quotes';
import QuoteVideoBanner from '../components/quotevideobanner';
import SeeMoreButton from '../components/seemorebutton';
import CenterContent from '../components/centercontent';
import TitleVideo from '../components/titlevideo';

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
  const SideQuoteComponents = props.sideQuoteComponentsProperties.map((sideQuoteComponent, i) => {
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

  const componentTypeMap = {
    'simple': SimpleComponents,
    'sidequote': SideQuoteComponents,
    'quotes': QuotesComponents,
    'largequote': LargeQuotesComponents,
    'quotevideobanner': QuoteVideoBannerComponents
  }

  return (
    <Layout data={props.data} pageMeta={props.pageMeta} background={props.navBackground}>
      <TitleVideo
        title={props.title}
        subtitle={props.subtitle}
        watchText="WATCH CLIENT STORY"
        showreelLinkTransparent={true}
        invert
        className="topPaddingLarge bottomPaddingLarge"
        folderRoute={props.videoFolder}
      />
      
      {props.order.reduce((acc, componentType, i) => {
        const index = props.order.slice(0, i)
          .filter(ct => ct.name === componentType.name)
          .length;
        const component = (
          <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
            {componentTypeMap[componentType.name][index]}
          </CenterContent>
        )
        return acc.concat(component);
      }, [])}

      <CenterContent className="startAConversation topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        <h2 style={{ textAlign: 'center' }}>What can we do for you?</h2>
        <p style={{ textAlign: 'center' }}>“If this story resonates with you, get in contact and let’s explore the opportunities the Komodo team can create for your team.”</p>
        <SeeMoreButton title="START A CONVERSATION →" link="/contact" />
      </CenterContent>
    </Layout>
  );
};
