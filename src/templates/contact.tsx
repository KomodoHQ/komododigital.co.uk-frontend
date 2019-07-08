import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import CenterContent from '../components/centercontent';
import ContactJobs from '../components/contactjobs';
import VCard from '../components/vcard';
import ContactSection from '../components/contactsection';
import Img from 'gatsby-image';
import { PageMeta } from '../components/seo/types';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

/**
 * Note, the interfaces below will eventually exist in their own
 * components, but for now are fine here.
 */

interface ContactPageProps {
  contactsIntro: any;
  career: any;
  data?: any;
  pageMeta?: PageMeta;
}

export default (props: ContactPageProps) => {
  return (
    <Layout data={props.data} pageMeta={props.pageMeta} inverted={true} background="#EAEAEA">
      <ContactSection className="topPaddingLarge">
        {renderAst(props.contactsIntro)}
        <VCard person="Armin" avatars={props.data} />
        <VCard person="Phoebe" avatars={props.data} />
      </ContactSection>
      <CenterContent background="#fff">
        <Img fluid={props.data.icon_career.childImageSharp.fluid} />
        {renderAst(props.career)}
        <ContactJobs />
      </CenterContent>
    </Layout>
  );
};
