import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import Services from '../components/services';
import PortfolioGrid from '../components/portfoliogrid';
import StandardItem from '../components/standarditem';
import ContentSection from '../components/contentsection';
import ContactSection from '../components/contactsection';
import VCard from '../components/vcard';
import TitleText from '../components/titletext';
import TripleSection from '../components/triplesection';
import TripleFeature from '../components/triplefeature';

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

interface ServicePageProps {
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

export default (props: ServicePageProps) => {
  return (
    <Layout data={props.data}>
      <TitleText
        title={props.title}
        subtitle={props.subtitle}
        invert
        background="#000000"
        className="topPaddingLarge bottomPaddingLarge"
        backgroundImage={props.image}
        showShowreel={false}
      >
        {renderAst(props.intro)}
      </TitleText>
      <ContentSection
        title="Core Services"
        className="topPaddingLarge bottomPaddingSmall"
        background="#ffffff"
      >
        {renderAst(props.servicesIntro)}
      </ContentSection>
      <TripleSection background="#ffffff" className="bottomPaddingLarge">
        <TripleFeature imgsrc={props.data.icon_consultancy} title="Consultancy">
          <p>
            Providing expert advice that helps solve bigger problems, avoid wasted time and redefine
            constraints.
          </p>
        </TripleFeature>
        <TripleFeature imgsrc={props.data.icon_design} title="Design">
          <p>
            Producing great digital experiences that add value and turns product users into product
            advocates.
          </p>
        </TripleFeature>
        <TripleFeature imgsrc={props.data.icon_development} title="Development">
          <p>
            Delivering intelligent, scalable and robust solutions built with future needs in mind to
            maximise return on investment.
          </p>
        </TripleFeature>
      </TripleSection>
      <ContentSection title="Wheelhouse" className="bottomPaddingSmall topPaddingLarge">
        {renderAst(props.wheelhouseIntro)}
      </ContentSection>
      <Services>
        <ul>
          <li>Discovery Workshops</li>
          <li>Technical Audits</li>
          <li>Product Strategy</li>
        </ul>
        <ul>
          <li>Rapid Prototyping</li>
          <li>User Experience Design</li>
          <li>User Interface Design</li>
        </ul>
        <ul>
          <li>Mobile Development</li>
          <li>Web Development</li>
          <li>Research &amp; Development</li>
        </ul>
      </Services>
      <ContentSection title="Toolset" className="topPaddingLarge bottomPaddingSmall">
        {renderAst(props.standardsIntro)}
      </ContentSection>
      <PortfolioGrid title="We Design With">
        <StandardItem
          imgsrc={props.data.standard_sketch}
          title="Sketch"
          link="https://www.sketchapp.com/"
        />
        <StandardItem imgsrc={props.data.standard_abstract} link="https://www.goabstract.com/" />
        <StandardItem imgsrc={props.data.standard_invision} link="https://www.invisionapp.com/" />
        <StandardItem
          imgsrc={props.data.standard_adobecc}
          link="https://www.adobe.com/uk/creativecloud.html"
        />
      </PortfolioGrid>
      <PortfolioGrid title="We Develop In">
        <StandardItem imgsrc={props.data.standard_php} link="http://www.php.net/" />
        <StandardItem
          imgsrc={props.data.standard_html5}
          link="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        />
        <StandardItem imgsrc={props.data.standard_node} link="https://nodejs.org/en/" />
        <StandardItem imgsrc={props.data.standard_react} link="https://reactjs.org/" />
        <StandardItem imgsrc={props.data.standard_angular} link="https://angularjs.org/" />
        <StandardItem
          imgsrc={props.data.standard_swift}
          link="https://developer.apple.com/swift/"
        />
        <StandardItem imgsrc={props.data.standard_java} link="https://www.java.com/en/" />
        <StandardItem
          imgsrc={props.data.standard_xamarin}
          link="https://visualstudio.microsoft.com/xamarin/"
        />
      </PortfolioGrid>
      <PortfolioGrid title="We Test With">
        <StandardItem imgsrc={props.data.standard_codeception} link="https://codeception.com/" />
        <StandardItem imgsrc={props.data.standard_chai} link="https://www.chaijs.com/" />
        <StandardItem imgsrc={props.data.standard_selenium} link="https://www.seleniumhq.org/" />
        <StandardItem imgsrc={props.data.standard_jest} link="https://jestjs.io/" />
      </PortfolioGrid>
      <PortfolioGrid title="We Deploy To">
        <StandardItem imgsrc={props.data.standard_apple} link="https://www.apple.com/uk/" />
        <StandardItem imgsrc={props.data.standard_android} link="https://www.android.com/" />
        <StandardItem imgsrc={props.data.standard_aws} link="https://aws.amazon.com/" />
        <StandardItem
          imgsrc={props.data.standard_azure}
          link="https://azure.microsoft.com/en-gb/"
        />
      </PortfolioGrid>
      <PortfolioGrid title="Certified By" className={`bottomPaddingLarge`}>
        <StandardItem
          imgsrc={props.data.standard_cyberessentials}
          link="https://www.cyberessentials.ncsc.gov.uk/"
        />
        <StandardItem imgsrc={props.data.standard_istqb} link="https://www.istqb.org/" />
        <StandardItem>NPPV 2</StandardItem>
        <StandardItem imgsrc={props.data.standard_crown} link="https://www.digitalmarketplace.service.gov.uk/" />
      </PortfolioGrid>
      <ContactSection className={'topPaddingLarge'} background="#fff">
        {renderAst(props.contactsIntro)}
        <VCard person="Ian" avatars={props.data} />
        <VCard person="Armin" avatars={props.data} />
      </ContactSection>
    </Layout>
  );
};
