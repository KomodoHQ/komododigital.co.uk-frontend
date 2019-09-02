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
import TitleVideo from '../components/titlevideo';
import TripleSection from '../components/triplesection';
import TripleFeature from '../components/triplefeature';
import Testimonial from '../components/testimonial';
import { PageMeta } from '../components/seo/types';
import sanitizeHtml from 'sanitize-html';

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
  caseStudiesRandom: CaseStudy[];
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
  testimonial: any;
  pageMeta: PageMeta;
}

export default (props: IndexPageProps) => {
  return (
    <Layout data={props.data} pageMeta={props.pageMeta}>
      <TitleVideo
        title={props.title}
        subtitle={props.subtitle}
        invert
        background="#000000"
        className="topPaddingLarge bottomPaddingLarge"
        backgroundImage={props.image}
      >
        {renderAst(props.intro)}
      </TitleVideo>
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
      <ContentSection title="Client Stories" className="topPaddingLarge bottomPaddingSmall">
        {renderAst(props.caseStudiesIntro)}
      </ContentSection>
      {props.caseStudiesRandom.map((study) => {
        return (
          <CaseStudy
            key={study.title}
            subtitle={study.subtitle}
            title={study.title}
            link={study.link}
            image={study.csimage}
          >
            <div>
              <p>{study.excerpt}</p>
            </div>
          </CaseStudy>
        );
      })}
      <SeeMoreButton title="See More Work" link={'/client-stories'} />
      <Testimonial
        name={props.testimonial.name}
        jobtitle={props.testimonial.jobtitle}
        company={props.testimonial.company}
        background="#000"
      >
        {props.testimonial.testimonial}
      </Testimonial>
      <ContentSection title="Insights" className="topPaddingMedium">
        {renderAst(props.insightsIntro)}
      </ContentSection>
      <BlogGrid>
        {props.insights.map((insight) => {
          // Strip HTML tags so they are not included in the word count
          const content = sanitizeHtml(insight.node.content, { allowedTags: [] });
          // Get an approximate word count
          const contentLength = content.replace('\n', ' ').split(' ').length;
          // Average reading speed is 200 words per minute
          const readingTime = Math.ceil(contentLength / 200);

          return (
            <BlogPost
              key={insight.node.title}
              slug={insight.node.slug}
              title={insight.node.title}
              image={insight.node.imageSource}
              readingtime={readingTime}
            />
          );
        })}
      </BlogGrid>
      <SeeMoreButton title="See More Insights" link={'/insights'} />
      <ContentSection title="Client Portfolio" className="topPaddingMedium">
        {renderAst(props.clientPortfoliosIntro)}
      </ContentSection>
      <PortfolioGrid className="bottomPaddingLarge">
        <StandardItem imgsrc={props.data.client_itv} title="ITV" link="https://www.itv.com/" />
        <StandardItem
          imgsrc={props.data.client_northumbriapolice}
          title="Northumbria Police"
          link="https://www.northumbria.police.uk/"
        />
        <StandardItem imgsrc={props.data.client_streetstream} title="Streetstream" link="https://www.streetstream.co.uk/" />
        <StandardItem imgsrc={props.data.client_onward} title="Onward" link="https://www.onward.co.uk/" />
        <StandardItem imgsrc={props.data.client_orchard} title="Orchard" link="https://www.orchard-systems.co.uk/" />
        <StandardItem imgsrc={props.data.client_gichd} title="GICHD" link="https://www.gichd.org/" />
        <StandardItem
          imgsrc={props.data.client_northumbriauni}
          title="Northumbria University"
          link="https://www.northumbria.ac.uk/"
        />
        <StandardItem
          imgsrc={props.data.client_newcastleuni}
          title="Newcastle University"
          link="https://www.ncl.ac.uk/"
        />
        <StandardItem imgsrc={props.data.client_elanders} title="elanders" link="https://www.elanders.com/uk/" />
        <StandardItem imgsrc={props.data.client_cop} title="College of Policing" link="https://www.college.police.uk/" />
        <StandardItem imgsrc={props.data.client_legrand} title="Legrand" link="https://www.legrand.co.uk/" />
        <StandardItem imgsrc={props.data.client_spacegroup} title="Space Group" link="https://spacegroup.co.uk/" />
        <StandardItem imgsrc={props.data.client_iamproperty} title="Iamproperty" link="https://www.iamproperty.com/" />
        <StandardItem imgsrc={props.data.client_theo} title="Theo" link="https://drivetheo.com/" />
        <StandardItem imgsrc={props.data.client_citizens} title="Citizens Advice" link="https://www.citizensadvice.org.uk/" />
        <StandardItem imgsrc={props.data.client_xenith} title="Xenith" link="https://www.xenith.co.uk/" />
      </PortfolioGrid>
      <ContactSection className="topPaddingLarge" background="#fff">
        {renderAst(props.contactsIntro)}
        <VCard person="Armin" avatars={props.data} />
        <VCard person="Phoebe" avatars={props.data} />
      </ContactSection>
    </Layout>
  );
};
