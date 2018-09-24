import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import BlogSummaryView from '../components/blogsummaryview';

export default (props) => {
  const html = props.posts.map((post) => {
    const slug = `blog/${post.node.slug}`;

    return (
      <Link to={slug} key={slug}>
        <BlogSummaryView data={{ ...post.node }} />
      </Link>
    );
  });

  return (
    <Layout data={props.data}>
      <div>{html}</div>
    </Layout>
  );
};
