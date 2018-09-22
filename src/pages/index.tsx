import React from 'react';
import rehypeReact from 'rehype-react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  return (
    <Layout data={props.data}>
      <span>Hello World!</span>
      <div>{renderAst(props.data.allMarkdownRemark.edges[0].node.htmlAst)}</div>
      <Link to={"blog-list"}>Blog</Link>
    </Layout>
  );
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
