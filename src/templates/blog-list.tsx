import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import BlogGrid from '../components/bloggrid';
import BlogPost from '../components/blogpost';

export default (props) => {
  return (
    <Layout data={props.data}>
      <BlogGrid>
        {props.posts.map((post) => {
          return (
            <BlogPost key={ post.node.slug } slug={ post.node.slug } title={ post.node.title } date={ post.node.date } image={ post.node.imageSource } />
          );
          })}
      </BlogGrid>
    </Layout>
  );
};
