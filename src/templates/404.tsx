import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => (
  <Layout data={props.data}>
    <h1>#404 Page Not Found</h1>
    <div>{renderAst(props.htmlAst)}</div>
  </Layout>
);
