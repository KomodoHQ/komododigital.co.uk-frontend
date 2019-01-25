import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import VCard from '../components/vcard';
import CaseStudy from '../components/casestudy';
import QuadGrid from '../components/quadgrid';
import PortfolioGrid from '../components/portfoliogrid';
import GridItem from '../components/griditem';
import StandardItem from '../components/standarditem';
import ContentSection from '../components/contentsection';
import ContentImage from '../components/contentimage';
import BlogGrid from '../components/bloggrid';
import BlogPost from '../components/blogpost';
import SeeMoreButton from '../components/seemorebutton';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';

import images from '../utils/images';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

/**
 * Note, the interfaces below will eventually exist in their own
 * components, but for now are fine here.
 */
interface Insight {
  node: any;
}

interface Service {
  title: string;
  image: any;
  htmlAst: any;
}

interface CaseStudy {
  title: string;
  subtitle: string;
  link: string;
  htmlAst: any;
  csimage: any;
}

interface IndexPageProps {
  services: Service[];
  caseStudies: CaseStudy[];
  insights: Insight[];
  subtitle: string;
  title: string;
  intro: any;
  aboutUsIntro: any;
  approachIntro: any;
  caseStudiesIntro: any;
  clientPortfoliosIntro: any;
  insightsIntro: any;
  contactsIntro: any;
  data?: any;
}

export default class HomePage extends React.Component<IndexPageProps> {
  render() {
    const props = this.props;

    return (
      <Layout data={props.data}>
        <ContentSection
          title={props.title}
          subtitle={props.subtitle}
          invert
          background="#000000"
          className="topPaddingLarge bottomPaddingLarge"
        >
          {renderAst(props.intro)}
        </ContentSection>
        <ContentSection title="About Us" className="topPaddingLarge bottomPaddingsmall">
          {renderAst(props.aboutUsIntro)}
        </ContentSection>
        <ContentImage>
          <object type="image/svg+xml" data={require('../content/images/illustration@1.5x.svg')} />
        </ContentImage>
        <ContentSection title="Approach" className="topPaddingLarge bottomPaddingSmall">
          {renderAst(props.approachIntro)}
        </ContentSection>
        <QuadGrid>
          {props.services.map((service) => {
            return (
              <GridItem
                key={service.title}
                title={service.title}
                image={images[`images/approach/${service.title}@1.5x.svg`]}
              >
                {renderAst(service.htmlAst)}
              </GridItem>
            );
          })}
        </QuadGrid>
        <ContentSection title="Case Studies" className="topPaddingLarge bottomPaddingSmall">
          {renderAst(props.caseStudiesIntro)}
        </ContentSection>
        {props.caseStudies.map((study) => {
          return (
            <CaseStudy
              key={study.title}
              subtitle={study.subtitle}
              title={study.title}
              link={study.link}
              image={study.csimage}
            >
              {renderAst(study.htmlAst)}
            </CaseStudy>
          );
        })}
        <SeeMoreButton title="See More Work" />
        <ContentSection title="Client Portfolio" className="topPaddingMedium">
          {renderAst(props.clientPortfoliosIntro)}
        </ContentSection>
        <PortfolioGrid>
          <StandardItem imgsrc={props.data.client_cop} title="College of Policing" link="/About" />
          <StandardItem
            imgsrc={props.data.client_digitalbarriers}
            title="Digital Barriers"
            link="/About"
          />
          <StandardItem imgsrc={props.data.client_elanders} title="eLanders" link="/About" />
          <StandardItem imgsrc={props.data.client_gichd} title="GICHD" link="/About" />
          <StandardItem imgsrc={props.data.client_htl} title="HTL" link="/About" />
          <StandardItem imgsrc={props.data.client_isg} title="ISG" link="/About" />
          <StandardItem imgsrc={props.data.client_itv} title="ITV" link="/About" />
          <StandardItem imgsrc={props.data.client_legrand} title="LeGrand" link="/About" />
          <StandardItem imgsrc={props.data.client_spacegroup} title="Space Group" link="/About" />
          <StandardItem
            imgsrc={props.data.client_newcastleuni}
            title="Newcastle University"
            link="/About"
          />
          <StandardItem
            imgsrc={props.data.client_northumbriapolice}
            title="Northumbria Police"
            link="/About"
          />
          <StandardItem
            imgsrc={props.data.client_northumbriauni}
            title="Northumbria University"
            link="/About"
          />
          <StandardItem imgsrc={props.data.client_onward} title="Onward" link="/About" />
          <StandardItem imgsrc={props.data.client_orchard} title="Orchard" link="/About" />
          <StandardItem
            imgsrc={props.data.client_streetstream}
            title="Streetstream"
            link="/About"
          />
          <StandardItem imgsrc={props.data.client_thingco} title="ThingCo" link="/About" />
        </PortfolioGrid>
        <ContentSection title="Insights" className="topPaddingMedium">
          {renderAst(props.insightsIntro)}
        </ContentSection>
        <BlogGrid>
          {props.insights.map((insight) => {
            return (
              <BlogPost
                key={insight.node.title}
                slug={insight.node.slug}
                title={insight.node.title}
                image={insight.node.imageSource}
              />
            );
          })}
        </BlogGrid>
        <SeeMoreButton title="See More Insights" link={'/blog-list'} />
        <ContentSection title="Contact Us" background="#FFFFFF" className="topPaddingMedium">
          {renderAst(props.contactsIntro)}
        </ContentSection>
        <ContactSection>
          <VCard person="Armin" avatar={props.data.avatar} />
          <VCard person="Phoebe" avatar={props.data.avatar} />
          <ContactForm />
        </ContactSection>
      </Layout>
    );
  }
}
