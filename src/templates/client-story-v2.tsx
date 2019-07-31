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
    </Layout>
  );
};
