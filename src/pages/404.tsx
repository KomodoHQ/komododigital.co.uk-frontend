import React from 'react';
import rehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default props => (
  <Layout data={props.data}>
    <h1>#404 Page Not Found</h1>
    <div>{renderAst(props.data.allMarkdownRemark.edges[0].node.htmlAst)}</div>
  </Layout>
);

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
