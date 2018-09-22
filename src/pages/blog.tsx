import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default (props) => {
  let html = props.data.allWordpressPost.edges[0].node.content;

  html = html.replace(/(\/content\/uploads\/)/g, 'https://blog.komododigital.co.uk$1');

  let imageSource = props.data.allWordpressPost.edges[0].node.featured_media.source_url;

  imageSource = imageSource.replace(
    /(\/content\/uploads\/)/g,
    'https://blog.komododigital.co.uk$1',
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
  query blogQuery {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allWordpressPost(limit: 1) {
      edges {
        node {
          status
          slug
          title
          content
          featured_media {
            source_url
          }
        }
      }
    }
  }
`;
