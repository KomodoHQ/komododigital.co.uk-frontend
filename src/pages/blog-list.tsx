import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import BlogSummaryView from '../components/blogsummaryview';
import CleanSourceURL from '../utils/clean-source-url';

export default (props) => {
  const html = props.data.allWordpressPost.edges.map((edge) => {
    const imageSource = CleanSourceURL(edge.node.featured_media.source_url);
    const data = {
      imageSource,
      ...edge.node,
    };
    const slug = `blog/${edge.node.slug}`;

    return <Link to={slug}><BlogSummaryView data={data} key={edge.slug} /></Link>;
  });

  return (
    <Layout data={props.data}>
      <div>{html}</div>
    </Layout>
  );
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
