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
  })
  const QuotesComponents = [<div>Quotes</div>]
  const LargeQuotesComponents = [<div>LargeQuotes</div>]
  const QuoteVideoBannerComponents = [<div>QuoteVideoBanner</div>]
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
      
      {props.order.reduce((acc, componentType) => {
        const component = (componentType => {
          switch(componentType.name) {
            case 'simple':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {SimpleComponents[0]}
                </CenterContent>
              )
            case 'sidequote':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {SideQuoteComponents[0]}
                </CenterContent>
              )
            case 'quotes':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {QuotesComponents[0]}
                </CenterContent>
              )
            case 'largequote':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {LargeQuotesComponents[0]}
                </CenterContent>
              )
            case 'quotevideobanner':
              return (
                <CenterContent className="topPaddingLarge bottomPaddingSmall" background={componentType.background}>
                  {QuoteVideoBannerComponents[0]}
                </CenterContent>
              )
            default:
              return null;
          }
        })(componentType);
        return acc.concat(component);
      }, [])}
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        <h2>{props.oneTitle}</h2>
        {renderAst(props.one)}
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#F5F5F5">
        <SideQuote
          title={props.twoTitle}
          name={props.twoQuoteName}
          qtitle={props.twoQuoteTitle}
          company={props.twoQuoteCompany}
          quote={props.twoQuoteContent}
          left={props.twoQuoteLeft}
          image={props.twoQuoteImage}
          content={renderAst(props.two)}
        />
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        <h2>{props.threeTitle}</h2>
        {renderAst(props.three)}
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#F5F5F5">
        <SideQuote
          title={props.fourTitle}
          name={props.fourQuoteName}
          qtitle={props.fourQuoteTitle}
          company={props.fourQuoteCompany}
          quote={props.fourQuoteContent}
          left={props.fourQuoteLeft}
          image={props.fourQuoteImage}
          picture={props.fourQuotePicture}
          content={renderAst(props.four)}
        />
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
      <h2>{props.fiveTitle}</h2>
        <QuoteVideoBanner
          name={props.fiveQuoteName}
          title={props.fiveQuoteTitle}
          company={props.fiveQuoteCompany}
          quote={props.fiveQuoteContent}
          left={props.fiveQuoteLeft}
          image={props.fiveQuoteImage}
          video={props.fiveVideo}
        />
        {renderAst(props.five)}
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#F5F5F5">
        <Quotes quotes={props.sixQuotes} />
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        <LargeQuote name={props.sevenQuoteName} title={props.sevenQuoteTitle} company={props.sevenQuoteCompany} image={props.sevenQuoteImage} quote={renderAst(props.seven)}/>
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#F0F0F0">
      <SideQuote
          title={props.eightTitle}
          name={props.eightQuoteName}
          qtitle={props.eightQuoteTitle}
          company={props.eightQuoteCompany}
          quote={props.eightQuoteContent}
          left={props.eightQuoteLeft}
          image={props.eightQuoteImage}
          content={renderAst(props.eight)}
        />
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        <h2>What can we do for you?</h2>
        <p>“If this story resonates with you, get in contact and let’s explore the opportunities the Komodo team can create for your team.”</p>
        <SeeMoreButton title="START A CONVERSATION →" link="/contact" />
      </CenterContent>
    </Layout>
  );
};
