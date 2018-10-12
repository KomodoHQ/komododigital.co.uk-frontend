import React from 'react';
import { graphql } from 'gatsby';
import CaseStudies from '../templates/case-studies';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  // Basename is the top level, should have sections
  // Use sections to pull out sub content in order
  const caseStudies = findNodes('group', props, 'case-studies');
  const contactsIntro = findNode('contacts', props);

  const hocProps = {
    caseStudies,
    contactsIntro: contactsIntro.htmlAst,
    ...props,
  };

  return <CaseStudies {...hocProps} />;
};

export const caseStudiesQuery = graphql`
  query caseStudiesQuery {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/case-studies|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            group
          }
          fileAbsolutePath
        }
      }
    }
  }
`;
