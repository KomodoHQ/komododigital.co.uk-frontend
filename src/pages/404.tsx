import React from 'react';
import { graphql } from 'gatsby';
import FourOhFour from '../templates/404';

export default (props) => {
  const hocProps = {
    htmlAst: props.data.allMarkdownRemark.edges[0].node.htmlAst,
    ...props,
  };

  return <FourOhFour {...hocProps} />;
};

export const fourOhFourQuery = graphql`
  query fourOhFourQuery {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "404" } } }) {
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
