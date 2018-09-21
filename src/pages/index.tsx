import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

export default (props) => <Layout data={props.data}><span>Hello World!</span></Layout>;

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
  }
`;