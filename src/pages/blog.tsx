import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import CleanSourceURL from '../utils/clean-source-url';

export default (props) => {
  const imageSource = CleanSourceURL(
    props.data.allWordpressPost.edges[0].node.featured_media.source_url,
  );
  const html = CleanSourceURL(
    props.data.allWordpressPost.edges[0].node.content,
  );

  return (
    <Layout data={props.data}>
      <img src={imageSource} />

      <h1>{props.data.allWordpressPost.edges[0].node.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Layout>
  );
};

export const blogQuery = graphql`
  query blogQuery($slug: String) {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allWordpressPost(limit: 1, filter: { slug: { eq: $slug } }) {
      edges {
        node {
          status
          slug
          title
          date
          content
          featured_media {
            source_url
          }
        }
      }
    }
  }
`;
