import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import LargeQuote from '../components/largequote';
import Metric from '../components/metric';
import Testimonial from '../components/testimonial';
import SeeMoreButton from '../components/seemorebutton';
import CenterContent from '../components/centercontent';
import TitleText from '../components/titletext';
import ContactSection from '../components/contactsection';
import CaseStudy from '../components/casestudy';
import VCard from '../components/vcard';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
    console.log(props);
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
      <CenterContent className="topPaddingLarge bottomPaddingSmall">
        <h2>{props.twoTitle}</h2>
        <h2>{props.twoQuoteName}</h2>
        <h2>{props.twoQuoteTitle}</h2>
        <h2>{props.twoQuoteCompany}</h2>
        <h2>{props.twoQuoteContent}</h2>
        <h2>{props.twoQuoteLeft.toString()}</h2>
        {/* <h2>{props.twoQuoteImage}</h2> */}
        {renderAst(props.two)}
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        <h2>{props.threeTitle}</h2>
        {renderAst(props.three)}
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall">
        <h2>{props.fourTitle}</h2>
        <h2>{props.fourQuoteName}</h2>
        <h2>{props.fourQuoteTitle}</h2>
        <h2>{props.fourQuoteCompany}</h2>
        <h2>{props.fourQuoteContent}</h2>
        <h2>{props.fourQuoteLeft.toString()}</h2>
        {/* <h2>{props.fourQuotePicture}</h2> */}
        {/* <h2>{props.fourQuoteImage}</h2> */}
        {renderAst(props.four)}
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall">
        <h2>{props.fiveTitle}</h2>
        <h2>{props.fiveQuoteName}</h2>
        <h2>{props.fiveQuoteTitle}</h2>
        <h2>{props.fiveQuoteCompany}</h2>
        <h2>{props.fiveQuoteContent}</h2>
        <h2>{props.fiveQuoteLeft.toString()}</h2>
        {/* <h2>{props.fiveQuoteImage}</h2> */}
        {renderAst(props.five)}
      </CenterContent>
      {props.sixQuotes &&
          props.sixQuotes.map((quote, i) => {
            return (
              <CenterContent className="topPaddingLarge bottomPaddingSmall" key={i}>
                <h2>{quote.name}</h2>
                <h2>{quote.title}</h2>
                <h2>{quote.company}</h2>
                <h2>{quote.content}</h2>
                {/* <h2>{quote.image}</h2> */}
              </CenterContent>
            );
          })}
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        <LargeQuote name={props.sevenQuoteName} title={props.sevenQuoteTitle} company={props.sevenQuoteCompany} image={props.sevenQuoteImage} quote={renderAst(props.seven)}/>
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall">
        <h2>{props.eightTitle}</h2>
        <h2>{props.eightQuoteName}</h2>
        <h2>{props.eightQuoteTitle}</h2>
        <h2>{props.eightQuoteCompany}</h2>
        <h2>{props.eightQuoteContent}</h2>
        <h2>{props.eightQuoteLeft.toString()}</h2>
        {/* <h2>{props.eightQuoteImage}</h2> */}
        {renderAst(props.eight)}
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        <h2>What can we do for you?</h2>
        <p>“If this story resonates with you, get in contact and let’s explore the opportunities the Komodo team can create for your team.”</p>
        <SeeMoreButton title="START A CONVERSATION →" link="/contact" />
      </CenterContent>
    </Layout>
  );
};
