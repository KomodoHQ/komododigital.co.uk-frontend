import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default props => (
  <Layout data={props.data}>
    <h1>#404 Page Not Found</h1>
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
  }
`;
