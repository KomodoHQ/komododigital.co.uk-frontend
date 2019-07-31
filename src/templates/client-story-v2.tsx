import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import Metrics from '../components/metrics';
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
      <CenterContent className="topPaddingLarge bottomPaddingSmall">
        <h2>{props.oneTitle}</h2>
        {renderAst(props.one)}
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall">
        <h2>{props.threeTitle}</h2>
        {renderAst(props.three)}
      </CenterContent>
      <CenterContent className="topPaddingLarge bottomPaddingSmall">
        <h2>What can we do for you?</h2>
        "If this story resonates with you, get in contact and let’s explore the opportunities the Komodo team can create for your team."
        <SeeMoreButton title="START A CONVERSATION →" link="/contact" />
      </CenterContent>
    </Layout>
  );
};
