import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import TwoColumn from '../components/twocolumn';
import ContactSection from '../components/contactsection';
import TitleText from '../components/titletext';
import VCard from '../components/vcard';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

/**
 * Note, the interfaces below will eventually exist in their own
 * components, but for now are fine here.
 */
interface Service {
  title: string;
  htmlAst: any;
}

interface AboutPageProps {
  services: Service[];
  subtitle: string;
  title: string;
  intro: any;
  approachIntro: any;
  servicesIntro: any;
  standardsIntro: any;
  contactsIntro: any;
  data?: any;
}

export default (props: AboutPageProps) => {
  return (
    <Layout data={props.data}>
      <TitleText
        subtitle={props.subtitle}
        title={props.title}
        invert
        background="#000000"
        className="topPaddingLarge bottomPaddingLarge"
        showShowreel={false}
        backgroundImage={props.image}
      >
        {renderAst(props.intro)}
      </TitleText>
      <TwoColumn
        title={props.valuesIntro}
        className="topPaddingLarge bottomPaddingSmall"
        background="#ffffff"
      >
        {renderAst(props.values)}
      </TwoColumn>
      <TwoColumn
        title={props.cultureIntro}
        className="topPaddingLarge bottomPaddingSmall"
        background="#ffffff"
      >
        {renderAst(props.culture)}
      </TwoColumn>
      <TwoColumn
        title={props.purposeIntro}
        className="topPaddingLarge bottomPaddingSmall"
        background="#ffffff"
        hr={false}
      >
        {renderAst(props.purpose)}
      </TwoColumn>
      <ContactSection className="topPaddingLarge">
        {renderAst(props.contactsIntro)}
        <VCard person="Armin" avatars={props.data} />
        <VCard person="Phoebe" avatars={props.data} />
      </ContactSection>
    </Layout>
  );
};
