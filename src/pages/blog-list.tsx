import React from 'react';
import { graphql } from 'gatsby';
import BlogList from '../templates/blog-list';
import CleanSourceURL from '../utils/clean-source-url';

export default (props) => {
  const posts = props.data.allWordpressPost.edges.map((edge) => {
    const data = {
      node: {
        imageSource: CleanSourceURL(edge.node.featured_media.source_url),
        ...edge.node,
      },
    };

    return data;
  });

  return <BlogList posts={posts} {...props} />;
};

export const blogListQuery = graphql`
  query blogListQuery {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allWordpressPost(limit: 20) {
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
  }
`;
