import React from 'react';
import { graphql } from 'gatsby';
import CaseStudies from '../templates/case-studies';
import { siteMeta, komodoLogo, clientLogos, icons, avatars } from '../utils/site-queries';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  const caseStudies = findNodes('group', props, 'case-studies');
  const contactsIntro = findNode('contacts', props);
  const caseStudiesIntro = findNode('case-studies/index', props);

  const hocProps = {
    caseStudies,
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
    caseStudiesIntro: (caseStudiesIntro) ? caseStudiesIntro.htmlAst : '',
    ...props,
  };

  return <CaseStudies {...hocProps} />;
};

export const caseStudiesQuery = graphql`
  query caseStudiesQuery {
    ...siteMeta
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/case-studies|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            csimage {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            group
          }
          fileAbsolutePath
        }
      }
    }
    ...komodoLogo
    ...avatars
  }
`;
