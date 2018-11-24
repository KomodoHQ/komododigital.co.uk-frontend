import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import QuadGrid from '../components/quadgrid';
import GridItem from '../components/griditem';
import Services from '../components/services';
import PortfolioGrid from '../components/portfoliogrid';
import StandardItem from '../components/standarditem';
import ContentSection from '../components/contentsection';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';

import images from "../utils/images";

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
      <ContentSection subtitle={props.subtitle} title={props.title} invert background="#000000" verticalPadding={200}>{renderAst(props.intro)}</ContentSection>
      <ContentSection title="Approach" paddingBottom={0}>
        {renderAst(props.approachIntro)}
      </ContentSection>
      <QuadGrid>
        {props.services.map((service) => {
          return (
            <GridItem key={service.title} title={service.title} image={images[`images/approach/${service.title}.png`]}>
              {renderAst(service.htmlAst)}
            </GridItem>
          );
        })}
      </QuadGrid>
      <ContentSection title="Services" paddingBottom={0}>
        {renderAst(props.servicesIntro)}
      </ContentSection>
      <Services>
        <ul>
          <li>Discovery Workshops</li>
          <li>Technical Audits</li>
          <li>User Research</li>
          <li>Concept Design</li>
          <li>Project Roadmapping</li>
          <li>Usability testing and research</li>
          <li>Design Research</li>
          <li>Visual Design</li>
        </ul>
        <ul>
          <li>Interaction Design</li>
          <li>Prototype Development</li>
          <li>Testing</li>
          <li>User-centered development</li>
          <li>Agile Development</li>
          <li>TDD/BDD</li>
          <li>Mobile App Development</li>
          <li>Web App Development</li>
        </ul>
        <ul>
          <li>Native iOS app development</li>
          <li>Native Android app development</li>
          <li>Infrastructure and Devops</li>
          <li>Real time application monitoring</li>
          <li>Information architecture</li>
          <li>W3C Compliance</li>
          <li>Ongoing Strategy</li>
          <li>Innovation development</li>
        </ul>
      </Services>
      <ContentSection title="Standards" paddingTop={180} paddingBottom={0}>
        {renderAst(props.standardsIntro)}
      </ContentSection>
      <PortfolioGrid title="We Design With">
        <StandardItem imgsrc={require("../images/standards/Sketch.png")} link="https://www.sketchapp.com/" />
        <StandardItem imgsrc={require("../images/standards/Abstract.png")} link="https://www.goabstract.com/" />
        <StandardItem imgsrc={require("../images/standards/InVision.png")} link="https://www.invisionapp.com/" />
        <StandardItem imgsrc={require("../images/standards/AdobeCC.png")} link="https://www.adobe.com/uk/creativecloud.html" />
      </PortfolioGrid>
      <PortfolioGrid title="We Develop With">
        <StandardItem imgsrc={require("../images/standards/PHP.png")} link="http://www.php.net/" />
        <StandardItem imgsrc={require("../images/standards/HTML5.png")} link="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" />
        <StandardItem imgsrc={require("../images/standards/Node.png")} link="https://nodejs.org/en/" />
        <StandardItem imgsrc={require("../images/standards/React.png")} link="https://reactjs.org/" />
        <StandardItem imgsrc={require("../images/standards/Angular.png")} link="https://angularjs.org/" />
        <StandardItem imgsrc={require("../images/standards/Swift.png")} link="https://developer.apple.com/swift/" />
        <StandardItem imgsrc={require("../images/standards/Java.png")} link="https://www.java.com/en/" />
        <StandardItem imgsrc={require("../images/standards/Xamarin.png")} link="https://visualstudio.microsoft.com/xamarin/" />
      </PortfolioGrid>
      <PortfolioGrid title="We Test With">
        <StandardItem imgsrc={require("../images/standards/Codeception.png")} link="https://codeception.com/" />
        <StandardItem imgsrc={require("../images/standards/Chai.png")} link="https://www.chaijs.com/" />
        <StandardItem imgsrc={require("../images/standards/Selenium.png")} link="https://www.seleniumhq.org/" />
        <StandardItem imgsrc={require("../images/standards/Jest.png")} link="https://jestjs.io/" />
      </PortfolioGrid>
      <PortfolioGrid title="We Deploy With">
        <StandardItem imgsrc={require("../images/standards/Apple.png")} link="https://www.apple.com/uk/" />
        <StandardItem imgsrc={require("../images/standards/Android.png")} link="https://www.android.com/" />
        <StandardItem imgsrc={require("../images/standards/AWS.png")} link="https://aws.amazon.com/" />
        <StandardItem imgsrc={require("../images/standards/Azure.png")} link="https://azure.microsoft.com/en-gb/" />
      </PortfolioGrid>
      <PortfolioGrid title="We Are Certified By">
        <StandardItem imgsrc={require("../images/standards/CyberEssentials.png")} link="https://www.cyberessentials.ncsc.gov.uk/" />
        <StandardItem imgsrc={require("../images/standards/ISTQB.png")} link="https://www.istqb.org/" />
        <StandardItem>NPPV 2</StandardItem>
      </PortfolioGrid>
      <ContentSection title="Contact Us" paddingTop={180} paddingBottom={0} background="#FFFFFF">
        {renderAst(props.contactsIntro)}
      </ContentSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};
