import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import VCard from '../components/vcard';
import CaseStudy from '../components/casestudy';
import PortfolioGrid from '../components/portfoliogrid';
import StandardItem from '../components/standarditem';
import ContentSection from '../components/contentsection';
import BlogGrid from '../components/bloggrid';
import BlogPost from '../components/blogpost';
import SeeMoreButton from '../components/seemorebutton';
import ContactSection from '../components/contactsection';
import TitleText from '../components/titletext';
import TripleSection from '../components/triplesection';
import TripleFeature from '../components/triplefeature';
import Testimonial from '../components/testimonial';

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
  image: any;
  aboutUsIntro: any;
  approachIntro: any;
  caseStudiesIntro: any;
  clientPortfoliosIntro: any;
  insightsIntro: any;
  contactsIntro: any;
  data?: any;
}

export default (props: IndexPageProps) => {
  return (
    <Layout data={props.data}>
      <TitleText
        title={props.title}
        subtitle={props.subtitle}
        invert
        background="#000000"
        className="topPaddingLarge bottomPaddingLarge"
        backgroundImage={props.image}
      >
        {renderAst(props.intro)}
      </TitleText>
      <ContentSection
        title="What We Bring To Your Team"
        className="topPaddingLarge bottomPaddingSmall"
        background="#ffffff"
      >
        {renderAst(props.aboutUsIntro)}
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
      <SeeMoreButton title="See More Work" link={'/case-studies'} />
      <Testimonial
        name="Ross Cooney"
        jobtitle="Chief Technical Officer"
        company="ISG"
        background="#000"
      >
        We’ve worked with Komodo, on and off, for ten years, I can’t think of a better way of giving
        a client reference than that.
      </Testimonial>
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
      <ContentSection title="Client Portfolio" className="topPaddingMedium">
        {renderAst(props.clientPortfoliosIntro)}
      </ContentSection>
      <PortfolioGrid className="bottomPaddingLarge">
        <StandardItem imgsrc={props.data.client_itv} title="ITV" link="/About" />
        <StandardItem
          imgsrc={props.data.client_northumbriapolice}
          title="Northumbria Police"
          link="/About"
        />
        <StandardItem imgsrc={props.data.client_streetstream} title="Streetstream" link="/About" />
        <StandardItem imgsrc={props.data.client_onward} title="Onward" link="/About" />
        <StandardItem imgsrc={props.data.client_orchard} title="Orchard" link="/About" />
        <StandardItem imgsrc={props.data.client_gichd} title="GICHD" link="/About" />
        <StandardItem
          imgsrc={props.data.client_northumbriauni}
          title="Northumbria University"
          link="/About"
        />
        <StandardItem
          imgsrc={props.data.client_newcastleuni}
          title="Newcastle University"
          link="/About"
        />
        <StandardItem imgsrc={props.data.client_elanders} title="eLanders" link="/About" />
        <StandardItem imgsrc={props.data.client_cop} title="College of Policing" link="/About" />
        <StandardItem imgsrc={props.data.client_legrand} title="LeGrand" link="/About" />
        <StandardItem imgsrc={props.data.client_spacegroup} title="LeGrand" link="/About" />
        <StandardItem imgsrc={props.data.client_iamproperty} title="LeGrand" link="/About" />
        <StandardItem imgsrc={props.data.client_theo} title="LeGrand" link="/About" />
        <StandardItem imgsrc={props.data.client_citizens} title="LeGrand" link="/About" />
        <StandardItem imgsrc={props.data.client_xenith} title="LeGrand" link="/About" />
      </PortfolioGrid>
      <ContactSection className="topPaddingLarge">
        {renderAst(props.contactsIntro)}
        <VCard person="Armin" avatar={props.data.avatar} />
        <VCard person="Phoebe" avatar={props.data.avatar} />
      </ContactSection>
    </Layout>
  );
};
