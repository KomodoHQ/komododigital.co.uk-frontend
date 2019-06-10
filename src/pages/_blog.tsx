/**
 * This is a template for an individual blog post. As this page is dynamically
 * used to create pages via the "createPages" function in `gatsby-node.js`, we
 * prefix the filename with an _ (underscore) so that a HTML page is not generated
 * for it.
 */
import React from 'react';
import { graphql } from 'gatsby';
import CleanSourceURL from '../utils/clean-source-url';
import { siteMeta, komodoLogo } from '../utils/site-queries';
import Blog from '../templates/blog';
import { findNode } from '../utils/nodes';

export default (props) => {
  const source_url = props.data.allWordpressPost.edges[0].node.featured_media
    ? props.data.allWordpressPost.edges[0].node.featured_media.source_url
    : null;
  let imageSource = '';

  if (source_url) {
    imageSource = CleanSourceURL(source_url);
  }

  const insightsIntro = findNode('index/insights', props);
  const insights = props.data.insights.edges.map((edge) => {
    const data = {
      node: {
        imageSource: CleanSourceURL(edge.node.featured_media.source_url),
        ...edge.node,
      },
    };
    return data;
  });

  const html = CleanSourceURL(props.data.allWordpressPost.edges[0].node.content);

  const hocProps = {
    html,
    imageSource,
    insights,
    insightsIntro: (insightsIntro) ? insightsIntro.htmlAst : '',
    ...props,
  };

  return <Blog {...hocProps} />;
};

export const blogQuery = graphql`
  query blogQuery($slug: String) {
    ...siteMeta
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
    insights: allWordpressPost(limit: 3, filter: { slug: { ne: $slug } }) {
      edges {
        node {
          status
          slug
          title
          date
          featured_media {
            source_url
          }
        }
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index/" } }) {
      edges {
        node {
          htmlAst
          fileAbsolutePath
        }
      }
    }
    ...komodoLogo
  }
`;
