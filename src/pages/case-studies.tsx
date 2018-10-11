import React from 'react';
import { graphql } from 'gatsby';
import CaseStudies from '../templates/case-studies';
import path from 'path';

const findNodes = (keyToFind, props, valueToFind = null) => {
  if (typeof valueToFind === 'string') {
    return props.data.allMarkdownRemark.edges.filter(
      (edge) => edge.node.frontmatter[keyToFind] === valueToFind,
    ).map(edge => {
      return {
        ...edge.node,
        ...edge.node.frontmatter,
      };
    });
  } else {
    return props.data.allMarkdownRemark.edges.filter(
      (edge) => path.basename(edge.node.fileAbsolutePath) === keyToFind,
    );
  }
};

const findNode = (keyToFind, props) => {
  const elements = findNodes(keyToFind, props);
  return elements[0].node;
};

export default (props) => {
  // Basename is the top level, should have sections
  // Use sections to pull out sub content in order
  const caseStudies = findNodes('group', props, 'CaseStudies');
  const contactsIntro = findNode('contacts.md', props);

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
