import React from 'react';
import { graphql } from 'gatsby';
import { siteMeta, komodoLogo } from '../utils/site-queries';
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
    ...siteMeta
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
    ...komodoLogo
  }
`;
