import React from 'react';
import { graphql } from 'gatsby';
import Index from '../templates/index';

export default (props) => {
  const hocProps = {
    htmlAst: props.data.allMarkdownRemark.edges[0].node.htmlAst,
    ...props,
  };

  return <Index {...hocProps} />;
};

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "Home Page" } } }) {
      edges {
        node {
          timeToRead
          htmlAst
          frontmatter {
            title
          }
          excerpt
          wordCount {
            paragraphs
            sentences
            words
          }
        }
      }
    }
  }
`;
