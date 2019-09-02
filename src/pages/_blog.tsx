/**
 * This is a template for an individual blog post. As this page is dynamically
 * used to create pages via the "createPages" function in `gatsby-node.js`, we
 * prefix the filename with an _ (underscore) so that a HTML page is not generated
 * for it.
 */
import React from 'react';
import { graphql } from 'gatsby';
import CleanSourceURL from '../utils/clean-source-url';
import Placeholder from '../assets/images/placeholder.png';
import Blog from '../templates/blog';
import { findNode } from '../utils/nodes';

export default (props) => {
  const post = props.data.allWordpressPost.edges[0].node;

  const source_url = post.featured_media ? post.featured_media.source_url : null;
  let imageSource = '';

  if (source_url) {
    imageSource = CleanSourceURL(source_url);
  }

  const insightsIntro = findNode('index/insights', props);
  const insights = props.data.insights.edges.map((edge) => {
    const media = edge.node.featured_media;
    return {
      node: {
        imageSource: media === null ? Placeholder : CleanSourceURL(media.source_url),
        ...edge.node,
      },
    };
  });

  const html = CleanSourceURL(post.content);

  const hocProps = {
    html,
    imageSource,
    insights,
    insightsIntro: (insightsIntro) ? insightsIntro.htmlAst : '',
    title: post.title,
    pageMeta: {
      title: post.yoast.title || post.title,
      description: post.yoast.metadesc || '',
    },
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
          yoast {
            title
            metadesc
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
          content
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
