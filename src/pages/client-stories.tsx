import React from 'react';
import { graphql } from 'gatsby';
import CaseStudies from '../templates/client-stories';
import { siteMeta, komodoLogo, clientLogos, icons, avatars } from '../utils/site-queries';
import { findNodes, findNode } from '../utils/nodes';
import { pageMetaFromFrontmatter } from '../utils/page-meta';

export default (props) => {
  const caseStudies = findNodes('group', props, 'client-stories');
  const contactsIntro = findNode('client-stories/contact_us', props);
  const caseStudiesIntro = findNode('client-stories/index', props);

  const hocProps = {
    caseStudies,
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
    caseStudiesIntro: (caseStudiesIntro) ? caseStudiesIntro.htmlAst : '',
    pageMeta: pageMetaFromFrontmatter(caseStudiesIntro),
    ...props,
  };

  return <CaseStudies {...hocProps} />;
};

export const caseStudiesQuery = graphql`
  query caseStudiesQuery {
    ...siteMeta
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/client-stories|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            excerpt
            csimage {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            group
            ...pageMeta
          }
          fileAbsolutePath
        }
      }
    }
    ...komodoLogo
    ...avatars
  }
`;
