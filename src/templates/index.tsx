import React from 'react';
import rehypeReact from 'rehype-react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  return (
    <Layout data={props.data}>
      <span>Hello World!</span>
      <div>{renderAst(props.htmlAst)}</div>
      <Link to={'blog-list'}>Blog</Link>
    </Layout>
  );
};
