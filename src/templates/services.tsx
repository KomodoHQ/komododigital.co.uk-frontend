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
import { PageMeta } from '../components/seo/types';

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
  pageMeta?: PageMeta;
}

export default (props: ServicePageProps) => {
  return (
    <Layout data={props.data} pageMeta={props.pageMeta}>
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
        <TripleFeature
          imgsrc={props.data.icon_consultancy}
          title="Consultancy"
          alt="Consultancy Sketch"
        >
          <p>
            Providing expert advice that helps solve bigger problems, avoid wasted time and redefine
            constraints.
          </p>
        </TripleFeature>
        <TripleFeature imgsrc={props.data.icon_design} title="Design" alt="Design Sketch">
          <p>
            Producing great digital experiences that add value and turns product users into product
            advocates.
          </p>
        </TripleFeature>
        <TripleFeature
          imgsrc={props.data.icon_development}
          title="Development"
          alt="Development Sketch"
        >
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
          alt="Sketch Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_abstract}
          title="Go Abstract"
          link="https://www.goabstract.com/"
          alt="Go Abstract Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_invision}
          title="Invision"
          link="https://www.invisionapp.com/"
          alt="Invision Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_adobecc}
          title="Adobe CC"
          link="https://www.adobe.com/uk/creativecloud.html"
          alt="Adobe CC Logo"
        />
      </PortfolioGrid>
      <PortfolioGrid title="We Develop In">
        <StandardItem
          imgsrc={props.data.standard_php}
          title="PHP"
          link="http://www.php.net/"
          alt="PHP Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_html5}
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
          alt="HTML5 Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_node}
          title="NodeJS"
          link="https://nodejs.org/en/"
          alt="NodeJS Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_react}
          title="React"
          link="https://reactjs.org/"
          alt="React Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_angular}
          title="Angular"
          link="https://angularjs.org/"
          alt="Angular Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_swift}
          title="Swift"
          link="https://developer.apple.com/swift/"
          alt="Swift Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_java}
          title="Java"
          link="https://www.java.com/en/"
          alt="Java Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_xamarin}
          title="Xamarin"
          link="https://visualstudio.microsoft.com/xamarin/"
          alt="Xamarin Logo"
        />
      </PortfolioGrid>
      <PortfolioGrid title="We Test With">
        <StandardItem
          imgsrc={props.data.standard_codeception}
          title="Codeception"
          link="https://codeception.com/"
          alt="Codeception Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_chai}
          title="Chai"
          link="https://www.chaijs.com/"
          alt="Chai Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_selenium}
          title="Selenium"
          link="https://www.seleniumhq.org/"
          alt="Selenium Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_jest}
          title="Jest"
          link="https://jestjs.io/"
          alt="Jest Logo"
        />
      </PortfolioGrid>
      <PortfolioGrid title="We Deploy To">
        <StandardItem
          imgsrc={props.data.standard_apple}
          title="Apple"
          link="https://www.apple.com/uk/"
          alt="Apple Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_android}
          title="Android"
          link="https://www.android.com/"
          alt="Android Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_aws}
          title="AWS"
          link="https://aws.amazon.com/"
          alt="AWS Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_azure}
          title="Azure"
          link="https://azure.microsoft.com/en-gb/"
          alt="Azure Logo"
        />
      </PortfolioGrid>
      <PortfolioGrid title="Certified By" className={`bottomPaddingLarge`}>
        <StandardItem
          imgsrc={props.data.standard_cyberessentials}
          title="Cyber Essentials"
          link="https://www.cyberessentials.ncsc.gov.uk/"
          alt="Cyber Essentials Logo"
        />
        <StandardItem
          imgsrc={props.data.standard_istqb}
          title="ISTQB"
          link="https://www.istqb.org/"
          alt="ISTQB Logo"
        />
        <StandardItem>NPPV 2</StandardItem>
        <StandardItem
          imgsrc={props.data.standard_crown}
          title="Crown Commercial Service Supplier"
          link="https://www.digitalmarketplace.service.gov.uk/"
          alt="Crown Commercial Service Supplier Logo"
        />
      </PortfolioGrid>
      <ContactSection className={'topPaddingLarge'} background="#fff">
        {renderAst(props.contactsIntro)}
        <VCard person="Ian" avatars={props.data} />
        <VCard person="Armin" avatars={props.data} />
      </ContactSection>
    </Layout>
  );
};
