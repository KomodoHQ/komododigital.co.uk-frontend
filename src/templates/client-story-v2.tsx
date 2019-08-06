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
